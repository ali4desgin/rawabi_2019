import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NeworderPage } from './neworder';

@NgModule({
  declarations: [
    NeworderPage,
  ],
  imports: [
    IonicPageModule.forChild(NeworderPage),
  ],
})
export class NeworderPageModule {}
