import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendrierChairePageRoutingModule } from './calendrier-chaire-routing.module';

import { CalendrierChairePage } from './calendrier-chaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendrierChairePageRoutingModule
  ],
  declarations: [CalendrierChairePage]
})
export class CalendrierChairePageModule {}
