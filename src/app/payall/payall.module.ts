import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayallPageRoutingModule } from './payall-routing.module';
import { IonicRatingModule } from 'ionic-rating';

import { PayallPage } from './payall.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayallPageRoutingModule,
    IonicRatingModule
  ],
  declarations: [PayallPage]
})
export class PayallPageModule {}
