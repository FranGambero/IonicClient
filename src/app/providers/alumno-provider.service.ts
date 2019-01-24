import { Injectable } from '@angular/core';
import{Http, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import { Alumno } from '../models/Alumno';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AlumnoProviderService {

private url: string = 'http://127.0.0.1:8000/alumnoapp/Alumnos/';

  constructor(private http:Http) {  }

  private obtainHeaders() {
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT,DELETE');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json;charset=utf-8');

    return headers;
}

  findAll() :Observable<Alumno[]>{
    return this.http.get(this.url).pipe(map(response => { return response.json() }));
  }

  post(alumno:Alumno): Observable<Alumno>{
    return this.http.post(this.url, alumno).pipe(map(response => { return response.json() }));
  }

  delete(id:number): Observable<Alumno>{
    let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
    return this.http.delete(this.url + id).pipe(map(response => { return response.json() }));
  }

  get(id:number): Observable<Alumno>{
    let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
    return this.http.get(this.url + id).pipe(map(response => { return response.json() }));
  }

  put(id:number, alumno:Alumno): Observable<Alumno>{
    let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
    return this.http.put(this.url + id, alumno).pipe(map(response => { return response.json() }));
  }
}
