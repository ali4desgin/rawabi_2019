import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";

import { CommonProvider } from "../../providers/common/common";



declare const google;



@IonicPage()
@Component({
  selector: 'page-about-us',
  templateUrl: 'about-us.html',
})
export class AboutUsPage {

  resposeData : any;
 
  info: any[];

  @ViewChild('map') mapElement: ElementRef;
  map: any;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, public authService: AuthServiceProvider,public common: CommonProvider
  ) { }

  ionViewDidLoad() {
                this.getinfo();
  }


  getinfo(){
 
   
    this.common.presentLoading();


    this.authService.getData( "info").then((result) =>{
    this.resposeData = result;
    this.info=this.resposeData.data;
      

    this.common.closeLoading();
 

    console.log(this.resposeData.data.lat)
    console.log(this.resposeData.data.longt)


    let lat = parseFloat(this.resposeData.data.lat);
    let lng = parseFloat(this.resposeData.data.longt);


    // start my map
    let posMaceio = { lat:lat, lng:lng }
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 8,
      center: posMaceio,
      mapTypeId: 'roadmap'
    });
    this.map.setCenter(posMaceio);

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
    
   



  
  

   
    


    }, (err) => {
      
      //Connection failed message
           console.log(err);
      this.common.closeLoading();
    });
   }
  
  




 


}