import { ViewOrderCalcDetailsPage } from './../view-order-calc-details/view-order-calc-details';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the CalcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calc',
  templateUrl: 'calc.html',
})
export class CalcPage {

  
  price = 0;
  numbers=  [6,9,12,16,20];
  duration = 0;

  constructor( private toastCtrl:ToastController,public navCtrl: NavController, public navParams: NavParams) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalcPage');
  }


  makeCalc(){
    let cost ;
    if(this.price<=0){
      this.presentToast("يجب ان لا يتم ترك قيمة البضاعة خالية");
    }else{
        let cost = Number(this.calcuate());
        let total =  Number(cost) + Number(this.price);
        let month = Number(total)  / Number(this.duration) ;
        this.navCtrl.push(ViewOrderCalcDetailsPage,{
          duration: this.duration,
          price: this.price,
          cost: cost,
          total: total,
          month_paying: Math.round(month)
        });
        //this.presentToast(cost);
    }

  }


  calcuate(){
    if(this.duration==6){
      return (this.price * 30 ) / 100;
    }else if(this.duration==9){
      return (this.price * 40 ) / 100;
    }else if(this.duration==12){
      return (this.price * 50 ) / 100;
    }else if(this.duration==16){
      return (this.price * 60 ) / 100;
    }else{
      return (this.price * 65 ) / 100;
    }




    // if(this.duration==6){
    //   return (this.price * 40 ) / 100;
    // }else if(this.duration>8 && this.duration<=11){
    //   return (this.price * 50 ) / 100;
    // }else if(this.duration>8 && this.duration<=11){
    //   return (this.price * 50 ) / 100;
    // }else if(this.duration>8 && this.duration<=11){
    //   return (this.price * 50 ) / 100;
    // }else if(this.duration>8 && this.duration<=11){
    //   return (this.price * 50 ) / 100;
    // }else{
    //   return (this.price * 60 ) / 100;
    // }


    //return (this.price * 4 ) / 100;
    // if(this.duration==3){
    //   return (this.price * 40 ) / 100;
    // }else if(this.duration==6){
    //   return (this.price * 45 ) / 100;
    // }else{
    //   return (this.price * 50 ) / 100;
    // }
  }


  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
