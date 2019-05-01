import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminsListPage } from './admins-list';

@NgModule({
  declarations: [
    AdminsListPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminsListPage),
  ],
})
export class AdminsListPageModule {}
