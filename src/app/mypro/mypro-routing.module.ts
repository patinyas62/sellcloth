import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyproPage } from './mypro.page';

const routes: Routes = [
  {
    path: '',
    component: MyproPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyproPageRoutingModule {}
