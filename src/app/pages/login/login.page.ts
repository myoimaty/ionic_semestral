import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { ToastController } from '@ionic/angular';
=======
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service'; // Importa AuthService desde la ubicación correcta
>>>>>>> 20ccc6bcf04948e7a2d97dd1051fd02a843f275f

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioLogin: FormGroup;

<<<<<<< HEAD
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
=======
  constructor(
    private router: Router,
    private alertController: AlertController,
    public fb: FormBuilder,
    private authService: AuthService // Inyecta AuthService aquí
  ) {
    this.formularioLogin = this.fb.group({
      nombre: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}

  async ingresar() {
    const { nombre, password } = this.formularioLogin.value;

    const storedUser = JSON.parse(localStorage.getItem('usuario') || '{}');

    if (storedUser.nombre === nombre && storedUser.password === password) {
      console.log('Ingresado');
      this.router.navigate(['home']);
    } else {
      const alert = await this.alertController.create({
        header: 'Datos Incorrectos',
        message: 'Los datos que ingresaste son incorrectos',
        buttons: ['Aceptar'],
      });

      await alert.present();
>>>>>>> 20ccc6bcf04948e7a2d97dd1051fd02a843f275f
    }
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
