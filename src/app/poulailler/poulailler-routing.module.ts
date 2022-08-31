import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoulaillerPage } from './poulailler.page';

const routes: Routes = [
  {
    path: '',
    component: PoulaillerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoulaillerPageRoutingModule {}
