import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  home() {
    this.router.navigate(['home'])
  }

  registrar() {
    this.router.navigate(['crear-usuario'])
  }

  restaurar() {
    this.router.navigate(['rest-contrasena'])
  }

}
