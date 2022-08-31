import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileUtilisateurPageRoutingModule } from './profile-utilisateur-routing.module';

import { ProfileUtilisateurPage } from './profile-utilisateur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileUtilisateurPageRoutingModule
  ],
  declarations: [ProfileUtilisateurPage]
})
export class ProfileUtilisateurPageModule {}
