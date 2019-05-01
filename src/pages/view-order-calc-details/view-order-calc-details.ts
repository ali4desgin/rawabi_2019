import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewOrderCalcDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-order-calc-details',
  templateUrl: 'view-order-calc-details.html',
})
export class ViewOrderCalcDetailsPage {


  duration = 0;
  price= 0;
  cost= 0;
  total= 0;
  month_paying = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewWillEnter(){
    this.getdetail();
  }
  
  ionViewDidLoad() {

    console.log('ionViewDidLoad ViewOrderCalcDetailsPage');
  }



  getdetail(){
    this.duration = this.navParams.get("duration");
    this.price = this.navParams.get("price");
    this.total = this.navParams.get("total");
    this.month_paying = this.navParams.get("month_paying");
    if(this.price<=5000){
      this.cost = 100;
    }else{
      this.cost = 200;
    }
    
    //this.navParams.get("cost");
  }



  makeOrder(){

    
  }
}
