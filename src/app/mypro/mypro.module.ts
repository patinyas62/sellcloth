import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyproPageRoutingModule } from './mypro-routing.module';

import { MyproPage } from './mypro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyproPageRoutingModule
  ],
  declarations: [MyproPage]
})
export class MyproPageModule {}
