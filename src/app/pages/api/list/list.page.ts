import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnosService } from 'src/app/services/api/alumnos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  listaAlumnos: any = [];

  constructor(private router: Router,
    private alumnosApi: AlumnosService) { }

  ngOnInit() {
    this.alumnosApi.listJAlumnos().subscribe((resp) => {
      //console.log(resp)
      this.listaAlumnos = resp
    })
  }

  addAlumno() {
    this.router.navigate(['/apiadd']);
  }

}
