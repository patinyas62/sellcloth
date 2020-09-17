import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PushproPageRoutingModule } from './pushpro-routing.module';

import { PushproPage } from './pushpro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PushproPageRoutingModule
  ],
  declarations: [PushproPage]
})
export class PushproPageModule {}
