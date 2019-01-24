import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'alumnos', loadChildren: './alumnos/alumnos.module#AlumnosPageModule' },
  { path: 'add-alumno', loadChildren: './add-alumno/add-alumno.module#AddAlumnoPageModule' },
  { path: 'editar-alumno/:id', loadChildren: './editar-alumno/editar-alumno.module#EditarAlumnoPageModule' },
  { path: 'update-alumno/:id', loadChildren: './update-alumno/update-alumno.module#UpdateAlumnoPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
