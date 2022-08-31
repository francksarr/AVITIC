import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SujetsPage } from './sujets.page';

const routes: Routes = [
  {
    path: '',
    component: SujetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SujetsPageRoutingModule {}
