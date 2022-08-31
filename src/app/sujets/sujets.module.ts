import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SujetsPageRoutingModule } from './sujets-routing.module';

import { SujetsPage } from './sujets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SujetsPageRoutingModule
  ],
  declarations: [SujetsPage]
})
export class SujetsPageModule {}
