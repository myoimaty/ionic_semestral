import { Injectable } from '@angular/core';
import { Login } from '../pages/login/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login: Login[] = [
    {
      id:'1',
      usuario: 'john.doe@duocuc.cl',
      password: '123',
      confirmarPassword: '123',
    },
    {
      id:'2',
      usuario: 'xd@duocuc.cl',
      password: '123',
      confirmarPassword: '123',
    }
  ]

  constructor() { }

  //METODOS CUSTOM
  //METODO QUE AGREGA UN USUARIO
  addUsuario(usuario: string, password: string, confirmarPassword: string) {
    this.login.push({
      usuario, password, confirmarPassword, id: this.login.length + 1 + ""
    })
  }
}
