import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import { CommonProvider } from "../../providers/common/common";





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forget',
  templateUrl: 'forget.html',
})
export class ForgetPage {
  resposeData : any;
  isorder : boolean;
  loadingtext : any;
  news: any[];
  userData = {"email":""};
  //userData = {"phone":"0911111111111111", "password":"mugmugmug"};

  constructor(public navCtrl: NavController, public authService: AuthServiceProvider, private toastCtrl:ToastController,public common: CommonProvider) {
  }

  ionViewDidLoad() {
 
   

  }



  ionViewWillEnter(){
   
  } 

  forget(){
   if(this.userData.email ){
    let data="";
   
    let body = new FormData();

  
    body.append('email', this.userData.email);

    this.common.presentLoading();
    this.authService.postData(body, "user/forget").then((result) =>{
    this.resposeData = result;
    this.common.closeLoading();

   
  
  

   
    if(this.resposeData.response){
    
      this.common.presentToast("تم ارسال كلمة المرور الي بريدك الالكتروني الرجاء تحت منه");


    }
    else{
      this.common.presentToast("خطأ في رقم الهاتف أو كلمة المرور");

    }
    


    }, (err) => {
      //Connection failed message
           console.log(err);
      this.common.closeLoading();
    });
   }
   else{
    this.presentToast("Give username and password");
   }
  
  }







 
  




  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

 


}
