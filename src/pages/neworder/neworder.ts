import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NeworderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-neworder',
  templateUrl: 'neworder.html',
})
export class NeworderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.navParams.get("item")

    alert(this.navParams.get("item"));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NeworderPage');
  }

}
