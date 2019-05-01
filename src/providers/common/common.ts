import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
/*
  Generated class for the Common provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CommonProvider {
  public loader: any;
  constructor(public loadingCtrl: LoadingController,private toastCtrl: ToastController) {
    console.log('Hello Common Provider');
  }


  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
  presentLoading(){
   this.loader = this.loadingCtrl.create({content: "Please wait ..."})
  this.loader.present();
  }

  closeLoading(){
  this.loader.dismiss();
  }

}
