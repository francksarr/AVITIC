import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileUtilisateurPage } from './profile-utilisateur.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileUtilisateurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileUtilisateurPageRoutingModule {}
