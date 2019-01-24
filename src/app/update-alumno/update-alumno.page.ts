import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnoProviderService } from '../providers/alumno-provider.service';
import { Alumno } from '../models/Alumno';

@Component({
  selector: 'app-update-alumno',
  templateUrl: './update-alumno.page.html',
  styleUrls: ['./update-alumno.page.scss'],
})
export class UpdateAlumnoPage implements OnInit {

private alumno: Alumno;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alumnoProvider: AlumnoProviderService
  ) { }

  ngOnInit() {
    console.log("he entrado");
    let id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.alumnoProvider.get(id).subscribe(alumno => {
      this.alumno = alumno
      console.log(alumno.id);
    });
  }

  onSubmit() {
    this.alumnoProvider.put(this.alumno.id, this.alumno).subscribe(alumno => {
      this.router.navigate(['home']);
    });
}

}
