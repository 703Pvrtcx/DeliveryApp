import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemCartPage } from './item-cart.page';

const routes: Routes = [
  {
    path: '',
    component: ItemCartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemCartPageRoutingModule {}
