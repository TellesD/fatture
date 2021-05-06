import { ComponentsModule } from './../../components/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarGrupoPageRoutingModule } from './cadastrar-grupo-routing.module';

import { CadastrarGrupoPage } from './cadastrar-grupo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    CadastrarGrupoPageRoutingModule
  ],
  declarations: [CadastrarGrupoPage]
})
export class CadastrarGrupoPageModule {}
