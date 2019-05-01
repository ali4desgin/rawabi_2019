import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-order',
  templateUrl: 'view-order.html',
})
export class ViewOrderPage {

  item : any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item=this.navParams.get("data");
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewOrderPage');
  }

}
