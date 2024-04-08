import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetHeroe1Page } from './det-heroe1.page';

const routes: Routes = [
  {
    path: '',
    component: DetHeroe1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetHeroe1PageRoutingModule {}
