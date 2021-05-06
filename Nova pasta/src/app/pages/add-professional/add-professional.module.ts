import { ComponentsModule } from './../../components/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddProfessionalPageRoutingModule } from './add-professional-routing.module';

import { AddProfessionalPage } from './add-professional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    AddProfessionalPageRoutingModule
  ],
  declarations: [AddProfessionalPage]
})
export class AddProfessionalPageModule {}
