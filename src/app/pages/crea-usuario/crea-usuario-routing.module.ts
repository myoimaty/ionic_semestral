import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreaUsuarioPage } from './crea-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: CreaUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreaUsuarioPageRoutingModule {}
