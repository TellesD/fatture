import { ComponentsModule } from './../../components/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaturamentoPageRoutingModule } from './faturamento-routing.module';

import { FaturamentoPage } from './faturamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    ReactiveFormsModule,
    FaturamentoPageRoutingModule
  ],
  declarations: [FaturamentoPage]
})
export class FaturamentoPageModule {}
