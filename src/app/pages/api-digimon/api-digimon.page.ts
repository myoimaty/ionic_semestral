import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-api-digimon',
  templateUrl: './api-digimon.page.html',
  styleUrls: ['./api-digimon.page.scss'],
})
export class APIDigimonPage implements OnInit {

  digimones: any[] = [];
  personajes: any[] = [];

  paginaActual = 0;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

    this.cargarData();

    /*
    this.httpClient.get<any>("https://rickandmortyapi.com/api/character").subscribe(resultado => {
      this.personajes = resultado.results;
      console.log(this.personajes);
    });
    */
  }

  cargarData() {
    const url = `https://www.digi-api.com/api/v1/digimon?page=${this.paginaActual}`
    
    this.httpClient.get<any>(url).subscribe(resultado => {
      //console.(resultado);
      //console.log(resultado.content);
      //this.digimones = this.digimones.concat(resultado.content);
      this.digimones = resultado.content;
      console.log(this.digimones);
    });
    this.mensaje();
  }

  cargarMasData() {
    this.paginaActual++;
    const url = `https://www.digi-api.com/api/v1/digimon?page=${this.paginaActual}`
    this.httpClient.get<any>(url).subscribe(resultado => {
      this.digimones = this.digimones.concat(resultado.content);
    });
    this.mensajeToast('Carga exitosa!');
  }

  cargarSiguientePagina() {
    this.paginaActual++;
    this.cargarData();
  }

  cargarAnteriorPagina() {
    this.paginaActual--;
    this.cargarData();
  }

  mensajeToast(mensaje: String) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: mensaje
    })
  }

  mensaje() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      heightAuto: false,
      footer: '<a href="">Why do I have this issue?</a>'
    })
  }

}
