import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosrandomService } from 'src/app/services/usuariosrandom.service';

/*
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service'; // Importa AuthService desde la ubicación correcta

*/

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // DECLARACIÓN
  loginForm: FormGroup  // PARA VALIDAR EL FORMULARIO
  user: any           // PARA CAPTURAR TODA LA INFO DEL USUARIORANDOM
  emailValue?: string // PARA CAPTURAR EL EMAIL DEL USUARIORANDOM
  passValue?: string  // PARA CAPTURAR LA PASS DEL USUARIORANDOM

  constructor(
    private router: Router,
    private usuariosrandom : UsuariosrandomService,
    private formBuilder: FormBuilder
  ) { 
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  ngOnInit() {
    this.usuariosrandom.getRandomUser().subscribe(
      (data) => {
        //console.log(data)
        this.user = data.results[0] // RELLENAMOS EL USUARIO
        this.emailValue = this.user.email
        this.passValue = this.user.login.password
      })
  }




  ingresar() {
    this.router.navigate(['home']);
  }

  registrar() {
    this.router.navigate(['crear-usuario']);
  }

  restaurar() {
    this.router.navigate(['rest-contrasena']);
  }

  docentes() {
    this.router.navigate(['login-docentes']);
  }


  
}
