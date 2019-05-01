import { AdminsListPage } from './../pages/admins-list/admins-list';
import { AdminChatPage } from './../pages/admin-chat/admin-chat';
import { ViewOrderCalcDetailsPage } from './../pages/view-order-calc-details/view-order-calc-details';
import { NewOrdersPage } from './../pages/new-orders/new-orders';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { NeworderPage } from '../pages/neworder/neworder';
import { ViewOrderPage } from './../pages/view-order/view-order';
import { CalcPage } from './../pages/calc/calc';
import { ContactUsPage } from './../pages/contact-us/contact-us';
import { Tabs2Page } from '../pages/tabs2/tabs2';
import { ForgetPage } from '../pages/forget/forget';


import { AboutUsPage } from './../pages/about-us/about-us';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { OffersPage } from '../pages/offers/offers';
import { OfferPage } from '../pages/offer/offer';
import { CreatePage } from '../pages/create/create';
import { SignupPage } from '../pages/signup/signup';
import { ChatPage } from '../pages/chat/chat';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from "@angular/http";
import { SocialSharing } from '@ionic-native/social-sharing';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { CommonProvider } from "../providers/common/common";
import { IonTextAvatar } from 'ionic-text-avatar';
import {  OneSignal } from '@ionic-native/onesignal/ngx';

import { IonicStorageModule } from '@ionic/storage';



@NgModule({
  declarations: [
    MyApp,
    IonTextAvatar,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    OffersPage,
    OfferPage,
    TabsPage,
    CreatePage,
    ChatPage,
    ViewOrderPage,
    CalcPage,
    ContactUsPage,
    AboutUsPage,
    NewOrdersPage,
    ViewOrderCalcDetailsPage,
    NeworderPage,
    AdminChatPage,
    AdminsListPage,
    Tabs2Page,
    ForgetPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
     IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    OffersPage,
    TabsPage,
    CreatePage,
    OfferPage,
    ChatPage,
    ViewOrderPage,
    CalcPage,
    ContactUsPage,
    AboutUsPage,
    NewOrdersPage,
    ViewOrderCalcDetailsPage,
    NeworderPage,
    AdminChatPage,
    AdminsListPage,
    Tabs2Page,
    ForgetPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CommonProvider,
    SocialSharing,
    AuthServiceProvider,
    Camera,
    OneSignal,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
