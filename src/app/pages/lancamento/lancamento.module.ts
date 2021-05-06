import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LancamentoPageRoutingModule } from './lancamento-routing.module';

import { LancamentoPage } from './lancamento.page';
import { ComponentsModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    ReactiveFormsModule,
    LancamentoPageRoutingModule
  ],
  declarations: [LancamentoPage]
})
export class lancamentoPageModule { }
