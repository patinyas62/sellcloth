import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetsendPageRoutingModule } from './getsend-routing.module';

import { GetsendPage } from './getsend.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetsendPageRoutingModule
  ],
  declarations: [GetsendPage]
})
export class GetsendPageModule {}
