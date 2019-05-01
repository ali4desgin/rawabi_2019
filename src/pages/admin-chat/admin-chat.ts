import { SignupPage } from './../signup/signup';
import { CommonProvider } from './../../providers/common/common';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Content } from 'ionic-angular';

/**
 * Generated class for the AdminChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-chat',
  templateUrl: 'admin-chat.html',
})
export class AdminChatPage {

  chatThemeArray = {
    "default":{
      "chat_background":"#00b894",
      "chat_color":"#00b894",
      "chat_my_message_color":"#488aff",
      "chat_my_message_backgroundColor":"#ffffff",
      "chat_other_message_color":"#488aff",
      "chat_other_message_backgroundColor":"#488aff",
      "chat_send_btn_message_color":"",
      "chat_whatsapp_btn_color":"#52e43c",
      "chat_message_text_field_color":"",
      "chat_message_text_field_background_color":"",
      "chat_change_colors_btn":"",
      "chat_send_image_btn_color":"",
      "chat_created_at_color":""
    },
    "green":{
      "chat_color":"#00b894",
      "chat_my_message_color":"#dfe6e9",
      "chat_my_message_backgroundColor":"#00b894",
      "chat_other_message_color":"#00b894",
      "chat_other_message_backgroundColor":"#dfe6e9",
      "chat_send_btn_message_color":"#00b894",
      "chat_whatsapp_btn_color":"#00b894",
      "chat_message_text_field_color":"#dfe6e9",
      "chat_message_text_field_background_color":"#00b894",
      "chat_change_colors_btn":"#00b894",
      "chat_send_image_btn_color":"#00b894",
      "chat_created_at_color":"#ff7675"
    },


    "red":{
      "chat_color":"#00b894",
      "chat_my_message_color":"#ffffff",
      "chat_my_message_backgroundColor":"#ff7675",
      "chat_other_message_color":"#ff7675",
      "chat_other_message_backgroundColor":"#ffffff",
      "chat_send_btn_message_color":"#ff7675",
      "chat_whatsapp_btn_color":"#ff7675",
      "chat_message_text_field_color":"#ff7675",
      "chat_message_text_field_background_color":"",
      "chat_change_colors_btn":"#00b894",
      "chat_send_image_btn_color":"#00b894",
      "chat_created_at_color":"#ff7675"
    },


    "black":{
      "chat_color":"#00b894",
      "chat_my_message_color":"#ffffff",
      "chat_my_message_backgroundColor":"#2d3436",
      "chat_other_message_color":"##2d3436",
      "chat_other_message_backgroundColor":"#ffffff",
      "chat_send_btn_message_color":"#2d3436",
      "chat_whatsapp_btn_color":"#00b894",
      "chat_message_text_field_color":"#2d3436",
      "chat_message_text_field_background_color":"",
      "chat_change_colors_btn":"#2d3436",
      "chat_send_image_btn_color":"#2d3436",
      "chat_created_at_color":"#2d3436"
    }


  };


  currrentTheme : any = {
    "chat_background":"",
    "chat_color":"",
    "chat_my_message_color":"",
    "chat_my_message_backgroundColor":"",
    "chat_other_message_color":"",
    "chat_other_message_backgroundColor":"",
    "chat_send_btn_message_color":"",
    "chat_whatsapp_btn_color":"",
    "chat_message_text_field_color":"",
    "chat_message_text_field_background_color":"",
    "chat_change_colors_btn":"",
    "chat_send_image_btn_color":"",
    "chat_created_at_color":""
  }


  @ViewChild(Content) content: Content;


  resposeData : any;
  admin : any;
  editorMsg : any;
  phone : any;
  messages: any[];
   currentAdmin : any;
  isimage:boolean;
  public base64Image: string;



  
  constructor(private socialSharing: SocialSharing,public navCtrl: NavController, public authService: AuthServiceProvider, private toastCtrl:ToastController,public common: CommonProvider
    ,public navParams: NavParams,private camera: Camera) { 

      this.currrentTheme = this.chatThemeArray.default;

      this.currentAdmin = JSON.parse(localStorage.getItem("userData"));



      this.currrentTheme = this.chatThemeArray.black;

      this.isimage=false

       
    

      this.admin=this.navParams.get("admin")





     }






  goToBottom(){
    
    let dimensions = this.content.getContentDimensions();
   // console.log("hight console.log(dimensions.scrollHeight);"+ dimensions.scrollHeight);
    this.content.scrollTo(0, 10000000,100);
  //
 }

 ionViewWillUnload(){
  this.goToBottom();
 }


  
  ionViewDidEnter() {
    let dimensions = this.content.getContentDimensions();
    this.content.scrollTo(0,10000000,100);
  }



  ionViewDidLoad() {
    this.getchat();
    //this.goToBottom();
  }

  
  // ionViewDidEnter(){
  //   this.content.scrollToBottom(300);//300ms animation speed
  // }



    openwhats(){
  

      console.log(this.phone)
      this.socialSharing.shareViaWhatsAppToReceiver(this.phone,"hello there im ").then(() => {
        // Sharing via email is possible
      }).catch(() => {
        // Sharing via email is not possible
      });
  
     }

  

  getchat(){
  
    const data = JSON.parse(localStorage.getItem("userData"));



    let body =  "adminchats/list?admin1_id=" + data.user.id + "&admin2_id=" + this.navParams.get("admin").id;
    this.common.presentLoading();
    this.authService.getData(body).then((result) =>{
    this.resposeData = result;
    this.messages=this.resposeData.data;
    this.common.closeLoading();
    this.phone=this.resposeData.whatsapp

    this.goToBottom();
  

   
    
    


    }, (err) => {
      //Connection failed message
           console.log(err);
      this.common.closeLoading();
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


  ionViewWillEnter(){
    this.goToBottom();
  }


  opengallery(){




      const options: CameraOptions = {
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        targetWidth: 450,
        targetHeight: 450,
        saveToPhotoAlbum: false,
        sourceType:0
      }
  
      this.camera.getPicture(options).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        this.base64Image=base64Image
  
        this.isimage=true
  
  
        console.log(imageData)
       }, (err) => {
        // Handle error
       });
  
    

  }



  sendMsg(){


    const data = JSON.parse(localStorage.getItem("userData"));
     

      if(this.editorMsg!="" ){
       let body = new FormData();
       body.append('message', this.editorMsg);

       if(this.isimage){
        body.append('isImage', "yes");
        body.append('image',this.base64Image. split(',')[1]);
        this.isimage=false;

       }
       else {
        body.append('isImage', "no");
     

       }
      
       body.append('order_id', data.user.id);
      body.append('admin1_id', data.user.id);
      body.append('admin2_id', this.navParams.get("admin").id);


       this.common.presentLoading();
       this.authService.postData(body, "adminchats/send_message").then((result) =>{
       this.resposeData = result;
       this.common.closeLoading();
   
   
           this.getchat();
           
   
     
       
   
   
       }, (err) => {
         //Connection failed message
              console.log(err);
         this.common.closeLoading();
       });
     
     
     


    this.editorMsg="";

    

  }
  }


}
