import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendrierPondeusePage } from './calendrier-pondeuse.page';

const routes: Routes = [
  {
    path: '',
    component: CalendrierPondeusePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendrierPondeusePageRoutingModule {}
