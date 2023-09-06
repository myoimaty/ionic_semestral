import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.page.html',
  styleUrls: ['./crear-usuario.page.scss'],
})
export class CrearUsuarioPage implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private toastController: ToastController) {}

  ngOnInit() {
  }
  
  //METODO QUE MUESTRA MENSAJE EN PANTALLA
  async mensajeToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom',
    })
    toast.present()
  }
  
  addUsuario(usuario: any, password: any, confirmarPassword: any) {
    const usuarioValue = usuario.value;
    const passwordValue = password.value;
    const confirmarPasswordValue = confirmarPassword.value;

    if (!usuarioValue || !passwordValue || !confirmarPasswordValue) {
      this.mensajeToast('Por favor, complete todos los campos obligatorios.');
      return; // Evita continuar si falta algún campo
    }
    this.loginService.addUsuario(usuario.value, password.value, confirmarPassword.value);
    this.mensajeToast("Usuario Creado");
    //this.router.navigate(['/login']);
  }
}
