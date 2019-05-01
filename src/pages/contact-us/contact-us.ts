import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import { SignupPage } from '../signup/signup';

import { HomePage } from '../home/home';
import { CommonProvider } from "../../providers/common/common";
import { TabsPage } from '../tabs/tabs';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUsPage {
  resposeData : any;
 
  info:  Object = {};





  constructor(public navCtrl: NavController, public authService: AuthServiceProvider, private toastCtrl:ToastController,public common: CommonProvider,public events: Events,private storage: Storage) {
  }

  ionViewDidLoad() {
    this.getinfo();
   
  }



  

 




  getinfo(){
 
   
    this.common.presentLoading();


    this.authService.getData( "info").then((result) =>{
    this.resposeData = result;
    this.info=this.resposeData.data;
      

    this.common.closeLoading();
 






  
  

   
    


    }, (err) => {
      
      //Connection failed message
           console.log(err);
      this.common.closeLoading();
    });
   }
  
  




  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

 


}
