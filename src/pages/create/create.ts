import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import { SignupPage } from '../signup/signup';

import { HomePage } from '../home/home';
import { CommonProvider } from "../../providers/common/common";
import { Storage } from '@ionic/storage';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {

  userPostData = {
    name:"",
    service:"1",
    service_type:"",
    profit:"",
    job:"",
    jobLoc:"",
    bank:"",
    mobile:"",
    sallary:"",
    record:"",
    jobDes:"",
    writing:"",
    country:""

    };

    numbers: any[];

  resposeData : any;
  userData = {"phone":"0911111111111111", "password":"mugmugmug"};

  constructor(public navCtrl: NavController, public authService: AuthServiceProvider, private toastCtrl:ToastController,public common: CommonProvider,public navParams: NavParams,private storage: Storage) {

    const data = JSON.parse(localStorage.getItem("userData"));
     
    this.userPostData.name=data.user.username;
  
      this.numbers=Array(999).fill(0).map((e,i)=>i+1)
       

    if(navParams.get('item')=="sawa"){

      this.userPostData.service_type="تقسيط بطاقات سوا";
    }
    else if(navParams.get('item')=="jawal"){
      this.userPostData.service_type="تقسيط جوالات";

    }
    else if(navParams.get('item')=="cars"){
      this.userPostData.service_type="تقسيط سيارات";

    }
    else if(navParams.get('item')=="special"){
      this.userPostData.service_type=" عروض خاصة";

    }

    if(this.navParams.get('item')=="sawa"){

      this.userPostData.service="2";
    }
    else if(this.navParams.get('item')=="jawal"){
      this.userPostData.service="1";

    }
    else if(this.navParams.get('item')=="cars"){
      this.userPostData.service="3";

    }else if(this.navParams.get('item')=="special"){
      this.userPostData.service="4";

    }


    console.log(this.userPostData.service)

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

 

  submitorder(){
   if(this.userPostData.service_type ==""|| this.userPostData.profit==""|| this.userPostData.job==""
    || this.userPostData.jobLoc==""||this.userPostData.bank==""
    || this.userPostData.mobile==""|| this.userPostData.sallary==""|| this.userPostData.record==""
    || this.userPostData.jobDes==""|| this.userPostData.country==""){


      

      this.common.presentToast("قم بملأ جميع الحقول");
      return false;



   }




    let body = new FormData();

   
    
      let user_id = "";

     

    this.storage.get('userData').then((val) => {
    

      let data  =JSON.parse(val);


   

        user_id=data.user.id;

        body.append('service', this.userPostData.service);
        body.append('profit', this.userPostData.profit);
        body.append('job', this.userPostData.job);
        body.append('jobLoc', this.userPostData.jobLoc);
        body.append('bank', this.userPostData.bank);
        body.append('mobile', this.userPostData.mobile);
        body.append('sallary', this.userPostData.sallary);
        body.append('record', this.userPostData.record);
        body.append('jobDes', this.userPostData.jobDes);
        body.append('country', this.userPostData.country);
        body.append('writing', this.userPostData.writing);
        body.append('user_id', user_id);
     
        this.common.presentLoading();
        this.authService.postData(body, "orders/create").then((result) =>{
        this.resposeData = result;
        this.common.closeLoading();
    
    
      
      
    
    
        if(this.resposeData.response){
          this.common.presentToast("تم أنشاء الطلب بنجاح");
          this.navCtrl.setRoot(HomePage);
    
        }
        
    
         
    
    
    
    
        
      
        
    
    
        }, (err) => {
          //Connection failed message
               console.log(err);
          this.common.closeLoading();
        });
       
      
      
      
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
