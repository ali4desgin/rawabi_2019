import { Component } from '@angular/core';
import { IonicPage, NavController ,ToastController } from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import { SignupPage } from '../signup/signup';


import { CommonProvider } from "../../providers/common/common";
import { ChatPage } from '../chat/chat';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-offer',
  templateUrl: 'offer.html',
})
export class OfferPage
{
  resposeData : any;
  isorder : boolean;
  loadingtext : any;
  orders: any[];
  userData = {"phone":"0911111111111111", "password":"mugmugmug"};

  constructor(public navCtrl: NavController, public authService: AuthServiceProvider, private toastCtrl:ToastController,public common: CommonProvider) {


    this.isorder=false;
    this.loadingtext="جاري تحميل العروض";
  }

  ionViewDidLoad() {



      this.getorders();
      
    
  
  }

  getorders(){
 
    this.common.presentLoading();

    
      
     


   

    
    
   let  body =  "offers" ;


    this.authService.getData( body).then((result) =>{
    this.resposeData = result;
    this.orders=this.resposeData.data;
      
    if(this.orders.length!=0){
        this.isorder=true
    
    } 
   if(this.orders.length==0){
        this.loadingtext="لا توجد عروض";

    }
    console.log(this.orders)
    this.common.closeLoading();


  
  

   
    


    }, (err) => {
      //Connection failed message
           console.log(err);
      this.common.closeLoading();
    });
   }
  
  

   
   openchat(item){

    this.navCtrl.push(ChatPage, {
      item:item,
     
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
