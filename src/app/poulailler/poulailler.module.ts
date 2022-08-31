import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoulaillerPageRoutingModule } from './poulailler-routing.module';

import { PoulaillerPage } from './poulailler.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoulaillerPageRoutingModule
  ],
  declarations: [PoulaillerPage]
})
export class PoulaillerPageModule {}
