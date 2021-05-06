import { ComponentsModule } from './../../components/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarServicoPageRoutingModule } from './cadastrar-servico-routing.module';

import { CadastrarServicoPage } from './cadastrar-servico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    ReactiveFormsModule,
    CadastrarServicoPageRoutingModule
  ],
  declarations: [CadastrarServicoPage]
})
export class CadastrarServicoPageModule {}
