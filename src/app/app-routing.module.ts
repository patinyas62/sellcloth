import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'regis',
    loadChildren: () => import('./regis/regis.module').then( m => m.RegisPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then( m => m.ShopPageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'basket',
    loadChildren: () => import('./basket/basket.module').then( m => m.BasketPageModule)
  },
  {
    path: 'payall',
    loadChildren: () => import('./payall/payall.module').then( m => m.PayallPageModule)
  },
  {
    path: 'mypro',
    loadChildren: () => import('./mypro/mypro.module').then( m => m.MyproPageModule)
  },
  {
    path: 'myproduct',
    loadChildren: () => import('./myproduct/myproduct.module').then( m => m.MyproductPageModule)
  },
  {
    path: 'pushpro',
    loadChildren: () => import('./pushpro/pushpro.module').then( m => m.PushproPageModule)
  },
  {
    path: 'chats',
    loadChildren: () => import('./chats/chats.module').then( m => m.ChatsPageModule)
  },
  {
    path: 'chatroom',
    loadChildren: () => import('./chatroom/chatroom.module').then( m => m.ChatroomPageModule)
  },
  {
    path: 'section',
    loadChildren: () => import('./section/section.module').then( m => m.SectionPageModule)
  },
  {
    path: 'getsend',
    loadChildren: () => import('./getsend/getsend.module').then( m => m.GetsendPageModule)
  },
  {
    path: 'get',
    loadChildren: () => import('./get/get.module').then( m => m.GetPageModule)
  },
  {
    path: 'cancel',
    loadChildren: () => import('./cancel/cancel.module').then( m => m.CancelPageModule)
  },
  {
    path: 'send',
    loadChildren: () => import('./send/send.module').then( m => m.SendPageModule)
  },
  {
    path: 'address',
    loadChildren: () => import('./address/address.module').then( m => m.AddressPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then( m => m.AddPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
