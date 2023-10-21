import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { APIDigimonPage } from './api-digimon.page';

const routes: Routes = [
  {
    path: '',
    component: APIDigimonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class APIDigimonPageRoutingModule {}
