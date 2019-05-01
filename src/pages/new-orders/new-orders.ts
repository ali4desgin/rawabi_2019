import { ChatPage } from './../chat/chat';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { CommonProvider } from './../../providers/common/common';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the NewOrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-orders',
  templateUrl: 'new-orders.html',
})
export class NewOrdersPage {

  resposeData : any;
  isorder : boolean;
  loadingtext : any;
  orders: any[];


  constructor(public navCtrl: NavController, public authService: AuthServiceProvider, private toastCtrl:ToastController,public common: CommonProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getorders();
    console.log('ionViewDidLoad NewOrdersPage');
  }




  getorders(){
 
    this.common.presentLoading();


    this.authService.getData( "orders/new").then((result) =>{
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
  
  



   viewDeatil(item){
    this.common.presentLoading();

    const data = JSON.parse(localStorage.getItem("userData"));

     

    let user_id = data.user.id==null?"":data.user.id;
          
    this.authService.getData( "orders/add_admin?order_id=" + item.id + "&admin_id=" + user_id ).then((result) =>{
        console.log(result);
        this.openchat(item);
        this.common.closeLoading();
    });
    ///this.common.closeLoading();

    
    //this.navCtrl.push(HomePage);

    // this.navCtrl.push(ViewOrderPage,{
    //   data: item
    // });

    
    //   ev.stopPropagation()

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

    //this.navCtrl.setRoot(SignupPage);

  }


}
