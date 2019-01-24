import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditarAlumnoPage } from './editar-alumno.page';
import { HttpModule } from '@angular/http';
import { AlumnoProviderService } from '../providers/alumno-provider.service';

const routes: Routes = [
  {
    path: '',
    component: EditarAlumnoPage
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
  declarations: [EditarAlumnoPage],
  providers: [AlumnoProviderService]
})
export class EditarAlumnoPageModule {}
