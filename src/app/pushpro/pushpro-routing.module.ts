import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PushproPage } from './pushpro.page';

const routes: Routes = [
  {
    path: '',
    component: PushproPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PushproPageRoutingModule {}
