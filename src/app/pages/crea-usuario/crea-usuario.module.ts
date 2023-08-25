import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreaUsuarioPageRoutingModule } from './crea-usuario-routing.module';

import { CreaUsuarioPage } from './crea-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreaUsuarioPageRoutingModule
  ],
  declarations: [CreaUsuarioPage]
})
export class CreaUsuarioPageModule {}
