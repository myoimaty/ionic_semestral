import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'home', icon: 'home' },
    { title: 'API Digimon', url:'api-digimon', icon: 'person-circle' },
    { title: 'API', url:'apihome', icon: 'person-circle' },
    { title: 'Cerrar Sesión', url: 'login', icon: 'log-out' },
  ];

  public appApi = [
    { title: 'Home', url: 'apihome', icon: 'home' },
    { title: 'List', url:'apilist', icon: 'person-circle' },
    { title: 'Add', url:'apiadd', icon: 'person-circle' },
    { title: 'Delete', url:'apidelete', icon: 'person-circle' },
    { title: 'Detail', url:'apidetail', icon: 'person-circle' },
    { title: 'Update', url:'apiupdate', icon: 'person-circle' },
    { title: 'Cerrar Sesión', url: 'login', icon: 'log-out' },
  ];
  constructor(
    private router: Router,
    private menuController: MenuController
  ) {}

  mostrarMenu() {
    return this.router.url !== '/login';  // NO SE VA A MOSTRAR EN EL LOGIN
  }

  mostrarMenuApi() {
    const aux = ['apihome','apiadd','apilist','apidelete','apiupdate','apidetail',]
    return aux.includes(this.router.url.substring(1));  // ELIMINAMOS EL "/"
    //return this.router.url == '/apihome';
  }

}
