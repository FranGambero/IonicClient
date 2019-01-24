import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UpdateAlumnoPage } from './update-alumno.page';
import { HttpModule } from '@angular/http';
import { AlumnoProviderService } from '../providers/alumno-provider.service';

const routes: Routes = [
  {
    path: '',
    component: UpdateAlumnoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UpdateAlumnoPage],
  providers: [AlumnoProviderService]
})
export class UpdateAlumnoPageModule {}
