import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAlumno } from 'src/app/interfaces/ialumno';
import { IAlumnos } from 'src/app/interfaces/ialumnos';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  apiURL = "https://jsonserver007-jjka.onrender.com"

  constructor(private httpClient: HttpClient) { }

  listJAlumnos(): Observable<IAlumnos> {
    return this.httpClient.get<IAlumnos>(`${this.apiURL}/alumnos`);
  }

  addAlumno(alumno: IAlumno) : Observable<IAlumno> {
    return this.httpClient.post<IAlumnos>(`${this.apiURL}/alumnos`, alumno);
  }

  getAlumno(id: Number): Observable<IAlumnos> {
    return this.httpClient.get<IAlumnos>(`${this.apiURL}/alumnos/?id=${id}`);

  }

  updateAlumno(alumno: any) : Observable<IAlumnos> {
    return this.httpClient.put<IAlumnos>(`${this.apiURL}/alumnos/${alumno.id}`, alumno);
  }

  deleteAlumno(alumno: any) : Observable<IAlumnos> {
    return this.httpClient.delete<IAlumnos>(`${this.apiURL}/alumnos/${alumno.id}`);
  }

}
