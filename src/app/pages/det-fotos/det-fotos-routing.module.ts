import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetFotosPage } from './det-fotos.page';

const routes: Routes = [
  {
    path: '',
    component: DetFotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetFotosPageRoutingModule {}
