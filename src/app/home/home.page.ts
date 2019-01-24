import { Component } from '@angular/core';
import { AlumnoProviderService } from '../providers/alumno-provider.service';
import { Alumno } from '../models/Alumno';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private alumno: Alumno;
  private alumnos: Alumno[];

  constructor(
    private alumnoProvider: AlumnoProviderService,
    private router: Router) { }

  ngOnInit() {
    this.alumnoProvider.findAll().subscribe(alumnos =>{
        this.alumnos = alumnos;
    })
  }

  onClickAdd(){
      this.router.navigate(['/add-alumno']);
  }

  updateAlumno(id:number){
      this.router.navigate([`update-alumno/${id}`]);
  }

  deleteAlumno(alumno:Alumno){
    this.alumnoProvider.delete(alumno.id).subscribe(result => {
      console.log("Alumno borrado con exito");
        this.router.navigate(['home']);
    });
  }
}
