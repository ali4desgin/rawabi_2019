import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import { SignupPage } from '../signup/signup';
import { ViewOrderPage } from "../view-order/view-order";

import { CommonProvider } from "../../providers/common/common";
import { ChatPage } from '../chat/chat';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  resposeData : any;
  isorder : boolean;
  loadingtext : any;
  orders: any[];
  userData = {"phone":"0911111111111111", "password":"mugmugmug"};

  constructor(public navCtrl: NavController, public authService: AuthServiceProvider, private toastCtrl:ToastController,public common: CommonProvider, public navParams: NavParams,private storage: Storage) {

    if(this.navParams.get("reload")){
     // this.common.presentLoading();
        //window.location.reload();
     //   this.common.closeLoading();
    }//
    this.isorder=false;
    this.loadingtext="جاري تحميل العروض";
  }

  ionViewDidLoad() {


    // if(localStorage.getItem("userData")!=null){

    //   this.getorders();
      

    // }



  
  }


  ionViewWillEnter(){
    if(localStorage.getItem("userData")!=null){

      this.getorders();
      

    }
  
  }
  getorders(){
 
    this.common.presentLoading();

    let body="";

    
 
    let data ;
    let user_id="";
    if( this.storage.get('userData')!=null){



    
      this.storage.get('userData').then((val) => {
    
       data =JSON.parse(val);


   

          user_id = data.user.id


          console.log(data.user.isAdmin)

          if(data.user.isAdmin=="yes"){

            body =  "orders/admin?admin_id=" + user_id ;
          }
         else {
  
          body =  "orders?user_id=" + user_id ;
             
         }
  
     

         this.authService.getData( body).then((result) =>{
          this.resposeData = result;
          this.orders=this.resposeData.data;
            
          if(this.orders.length!=0){
              this.isorder=true
          
          } 
         if(this.orders.length==0){
              this.loadingtext="لا توجد عروض";
      
          }
   
          this.common.closeLoading();
      
      
      
      
      
      
        
        
      
         
          
      
      
          }, (err) => {
            //Connection failed message
                 console.log(err);
            this.common.closeLoading();
          });
       
  
  
        });



    
     

     
              
      
     

       

   

    }
    


    
   }
  
  



   viewDeatil(item,ev){
    this.navCtrl.push(ViewOrderPage,{
      data: item
    });

    
      ev.stopPropagation()

   }
   
   openchat(item){

    this.navCtrl.push(ChatPage, {
      item:item.id,
     
    });


   }


  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  openreg(){

    this.navCtrl.setRoot(SignupPage);

  }


}
