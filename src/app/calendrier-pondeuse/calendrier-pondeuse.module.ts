import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendrierPondeusePageRoutingModule } from './calendrier-pondeuse-routing.module';

import { CalendrierPondeusePage } from './calendrier-pondeuse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendrierPondeusePageRoutingModule
  ],
  declarations: [CalendrierPondeusePage]
})
export class CalendrierPondeusePageModule {}
