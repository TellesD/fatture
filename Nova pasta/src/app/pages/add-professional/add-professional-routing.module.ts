import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProfessionalPage } from './add-professional.page';

const routes: Routes = [
  {
    path: '',
    component: AddProfessionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddProfessionalPageRoutingModule {}
