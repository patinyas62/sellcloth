import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetsendPage } from './getsend.page';

const routes: Routes = [
  {
    path: '',
    component: GetsendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetsendPageRoutingModule {}
