import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewOrderCalcDetailsPage } from './view-order-calc-details';

@NgModule({
  declarations: [
    ViewOrderCalcDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewOrderCalcDetailsPage),
  ],
})
export class ViewOrderCalcDetailsPageModule {}
