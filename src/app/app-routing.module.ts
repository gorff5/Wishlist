import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WishlistListComponent } from './wishlist-list/wishlist-list.component';
import { WishlistAddComponent } from './wishlist-add/wishlist-add.component';

const routes: Routes = [
  {
    path: '',
    component: WishlistListComponent
  },
  {
    path: 'add/new',
    component: WishlistAddComponent
  },
  {
    path: 'edit/:id',
    component: WishlistAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routableComponents = [
  WishlistAddComponent,
  WishlistListComponent
]