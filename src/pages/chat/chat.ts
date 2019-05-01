import { AdminsListPage } from './../admins-list/admins-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import { SignupPage } from '../signup/signup';
import { SocialSharing } from '@ionic-native/social-sharing';
import { CommonProvider } from "../../providers/common/common";
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';
// import { Dialogs } from '@ionic-native/dialogs/ngx';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
  
})
export class ChatPage  {


  chatThemeArray = {
    "default":{
      "chat_background":"#00b894",
      "chat_color":"#00b894",
      "chat_my_message_color":"#488aff",
      "chat_my_message_backgroundColor":"#ffffff",
      "chat_other_message_color":"#ffffff",
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
  items : any;
  editorMsg : any;
  phone : any;
  messages: any[];
  haswhatsapp : boolean;
  orderId:any;
  isimage:boolean;
  public base64Image: string;

  constructor(private socialSharing: SocialSharing,public navCtrl: NavController, public authService: AuthServiceProvider, private toastCtrl:ToastController,public common: CommonProvider
  ,public navParams: NavParams,private camera: Camera) {

      this.currrentTheme = this.chatThemeArray.default;

       this.haswhatsapp=true
       this.isimage=false

       const data = JSON.parse(localStorage.getItem("userData"));
     

       if(data.user.isAdmin=="yes"){
   
               this.haswhatsapp=false
   
       }
    this.items=this.navParams.get("item")
    this.orderId = this.navParams.get("item")
    console.log(this.items);
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



  redirectOrder(item){

    this.navCtrl.push(AdminsListPage,{
      data: item,
      isRedirect:true
    });
    
  }

    openwhats(){
  

      console.log(this.phone)
      this.socialSharing.shareViaWhatsAppToReceiver(this.phone,"hello there im ").then(() => {
        // Sharing via email is possible
      }).catch(() => {
        // Sharing via email is not possible
      });
  
     }

  

  getchat(){
  
 


    let body =  "chats/list?order_id=" +this.navParams.get("item") ;
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
     

          if(data.user.isAdmin=="yes"){
            this.haswhatsapp=false
          }
        
                  //
                if(this.editorMsg==""){
                  this.editorMsg="تقسيط المملكة"; 
                }
            if(this.editorMsg!=""){
                let body = new FormData();
                // let order_id = this.navParams.get("item");
                body.append('order_id',this.orderId);

                if(this.editorMsg==""){
                  body.append('message', "تقسيط المملكة");
                }else{
                  body.append('message', this.editorMsg);
                }


                

                if(this.isimage){
                body.append('isImage', "yes");
                body.append('image',this.base64Image. split(',')[1]);
                this.isimage=false;

            }
            else {
            body.append('isImage', "no");
          

            }


            
          
            body.append('isAdmin', data.user.isAdmin);

            this.common.presentLoading();
            this.authService.postData(body, "chats/send_message").then((result) =>{
            this.resposeData = result;
            console.log( this.resposeData);
            // console.log(this.orderId);
            this.common.closeLoading();
        
        
            this.getchat();
                
        
          
            
        
        
            }, (err) => {
              //Connection failed message
                  console.log(err);
              this.common.closeLoading();
            });
          
          
          


        this.editorMsg="";

        

      }else{

          this.presentToast("يجب ادخال رسالة او اختيار صورة");

      }


  }
  }
