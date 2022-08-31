import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendrierChairePage } from './calendrier-chaire.page';

const routes: Routes = [
  {
    path: '',
    component: CalendrierChairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendrierChairePageRoutingModule {}
