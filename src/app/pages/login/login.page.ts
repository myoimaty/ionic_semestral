import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  myForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private toastController: ToastController) {
    this.myForm = this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  async home() {
    if (this.myForm.valid) {
      // Realizar la navegación a la página "home"
      this.router.navigate(['home']);
    } else {
      // Mostrar un Toast de error
      const toast = await this.toastController.create({
        message: 'Por favor, complete todos los campos correctamente.',
        duration: 3000, // Duración del Toast en milisegundos
        position: 'top', // Posición del Toast
      });
      toast.present();
    }
  }

  registrar() {
    this.router.navigate(['crear-usuario'])
  }

  restaurar() {
    this.router.navigate(['rest-contrasena'])
  }
  docentes() {
    this.router.navigate(['login-docentes'])
  }

}
