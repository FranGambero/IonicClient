import { Component, OnInit } from '@angular/core';
import { Alumno } from '../models/Alumno';
import { Router, ActivatedRoute } from '@angular/router';
import { AlumnoProviderService } from '../providers/alumno-provider.service';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.page.html',
  styleUrls: ['./editar-alumno.page.scss'],
})
export class EditarAlumnoPage implements OnInit {

  private alumno: Alumno;

  constructor(
    private router:Router,
    private activatedRoute: ActivatedRoute,
    private alumnoProvider: AlumnoProviderService
  ) { }

  ngOnInit() {
    let id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.alumnoProvider.get(id).subscribe(alumno =>{
       this.alumno = alumno});
  }

}
