import { Component, OnInit } from '@angular/core';
import { Alumno } from '../models/Alumno';
import { Router } from '@angular/router';
import { AlumnoProviderService } from '../providers/alumno-provider.service';

@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.page.html',
  styleUrls: ['./add-alumno.page.scss'],
})
export class AddAlumnoPage implements OnInit {

  private alumno: Alumno;
  
  constructor(
    private router: Router,
    private alumnoProvider: AlumnoProviderService) {
      this.alumno = new Alumno();
     }

  ngOnInit() {
  }

  onSubmit() {
    this.alumnoProvider.post(this.alumno).subscribe(alumno => {
      this.router.navigate(['home']);
    })
}

}
