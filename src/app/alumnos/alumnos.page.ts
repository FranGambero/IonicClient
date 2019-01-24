import { Component, OnInit } from '@angular/core';
import { AlumnoProviderService } from '../providers/alumno-provider.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {

  constructor(private alumnoProvider: AlumnoProviderService) { }

  ngOnInit() {
  }

}
