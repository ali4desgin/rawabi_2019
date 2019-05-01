import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CalcPage } from './../pages/calc/calc';
import { OffersPage } from '../pages/offers/offers';
import { Events } from 'ionic-angular';
import { NewOrdersPage } from '../pages/new-orders/new-orders';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Storage } from '@ionic/storage';

// import { OneSignal } from '@ionic-native/onesignal';
import { AdminsListPage } from '../pages/admins-list/admins-list';
import { OSNotificationPayload } from '@ionic-native/onesignal';
import { isCordovaAvailable } from '../common/is-cordova-available';
import { oneSignalAppId, sender_id } from '../config';
import { ChatPage } from '../pages/chat/chat';
import { Tabs2Page } from '../pages/tabs2/tabs2';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;





 
  data: any;

  rootPage: any;

  userinfo = {
   "user":"Thank you ",
   "firstletter":"T",
   "loggedin":false,
   "isAdmin":''

    };


  pages: Array<{title: string, component: any}>;

  constructor(private oneSignal: OneSignal,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public events: Events,private storage: Storage) {
      //public alertCtrl: AlertController
      //,private oneSignal: OneSignalOriginal
    this.initializeApp();

    this.initPushNotification();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'تسجيل الخروج', component: HomePage }
    ];


    events.subscribe('user:updatemenu', ( time) => {
      
      this.data = JSON.parse(localStorage.getItem("userData"));

      this.storage.get('userData').then((val) => {
    
        let data  =JSON.parse(val);


        if(data) {
         
        this.userinfo.user=this.data.user.username;
        this.userinfo.isAdmin=this.data.user.isAdmin;
        this.userinfo.firstletter=this.data.user.username.charAt(0).toUpperCase();
        this.userinfo.loggedin=true
      }else{
        
      }
  
       
  
  
        });

     
    
        
     
    });
    
  }

 


  initPushNotification() {
    // if (isCordovaAvailable()){
    //   this.oneSignal.startInit("888337340832", "79a2ecf1-3b2f-4163-a7f1-1974becf74e5");
    //   this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
    //   this.oneSignal.handleNotificationReceived().subscribe(data => this.onPushReceived(data.payload));
    //   this.oneSignal.handleNotificationOpened().subscribe(data => this.onPushOpened(data.notification.payload));
    //   this.oneSignal.endInit();
    // }
  } 


  private onPushReceived(payload: OSNotificationPayload) {
    alert('Push recevied:' + payload.body);
  }
  
  private onPushOpened(payload: OSNotificationPayload) {
    alert('Push opened: ' + payload.body);
  }


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.




       this.storage.get('userData').then((val) => {
    
        let data  =JSON.parse(val);


        if(data) {
          this.userinfo.isAdmin=data.user.isAdmin;
          this.userinfo.user=data.user.username;
          this.userinfo.firstletter=data.user.username.charAt(0).toUpperCase();
          this.userinfo.loggedin=true
          this.rootPage = Tabs2Page; // user can user this.nav.setRoot(TutorialPage);
      }else{
          this.rootPage = TabsPage; // user can user this.nav.setRoot(LoginPage);
      }
  
       
  
  
        });
    
    
        
      
      this.splashScreen.hide();


      var that = this;
    

      var getPlayerIdCallback = function (response){
       
        localStorage.setItem('id', JSON.stringify(response.userId));
       
      }
      var notificationOpenedCallback = function(jsonData) {

       const type=jsonData.notification.payload.additionalData.type;

       if(type=="new_chat_message"){
        
        that.nav.push(ChatPage, {
          item:jsonData.notification.payload.additionalData.order_id,
         
         });
       }

       else{
        that.nav.push(NewOrdersPage);
       }
      
      };

        window["plugins"].OneSignal.getIds(getPlayerIdCallback);
      window["plugins"].OneSignal
      .startInit("2f630ee1-fc20-4704-baf8-8eef885e4c5f", "888337340832")
      .handleNotificationOpened(notificationOpenedCallback)
      .endInit();

     this.statusBar.overlaysWebView(false);

// set status bar to white
    this.statusBar.backgroundColorByHexString('#000000');
  
     
   
      this.platform.setDir("rtl",true);

    });
  }

  logout(){
    //Api Token Logout 
    
  
   

      this.storage.clear()
      this.userinfo.user="تم تسجيل الخروج"
      this.userinfo.loggedin=false
      this.userinfo.firstletter="R"

    this.nav.setRoot(TabsPage);
}




myorders(){
  this.nav.setRoot(Tabs2Page);
}


viewNewOrders(){
  this.nav.push(NewOrdersPage);
}



ViewAdminsList(){
  
  this.nav.push(AdminsListPage,{
    isRedirect:false
  });
}


createOrder(){
  
  //this.nav.push(TabsPage , {tab:"offers"});
 this.nav.push(OffersPage);
}

calc(){
  this.nav.push(CalcPage);
}

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
