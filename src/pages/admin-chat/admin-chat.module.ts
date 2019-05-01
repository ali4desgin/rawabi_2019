import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminChatPage } from './admin-chat';

@NgModule({
  declarations: [
    AdminChatPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminChatPage),
  ],
})
export class AdminChatPageModule {}
