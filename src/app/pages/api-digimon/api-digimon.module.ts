import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { APIDigimonPageRoutingModule } from './api-digimon-routing.module';

import { APIDigimonPage } from './api-digimon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    APIDigimonPageRoutingModule
  ],
  declarations: [APIDigimonPage]
})
export class APIDigimonPageModule {}
