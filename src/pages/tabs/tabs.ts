import { NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { OffersPage } from '../offers/offers';
import { LoginPage } from '../login/login';
import { AboutUsPage } from './../about-us/about-us';
import { ContactUsPage } from './../contact-us/contact-us';




@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
 
  

  tab1Root :any;
  tab2Root = ContactUsPage;
  tab3Root = OffersPage;
  tab4Root = AboutUsPage;

  constructor(public param:NavParams) {
    

   
   

      this.tab1Root = LoginPage;

   
  
      // user and time are the same arguments passed in `events.publish(user, time)`
    
   

  }
}
