import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarGrupoPage } from './cadastrar-grupo.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarGrupoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarGrupoPageRoutingModule {}
