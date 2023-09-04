import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-rest-contrasena',
  templateUrl: './rest-contrasena.page.html',
  styleUrls: ['./rest-contrasena.page.scss'],
})
export class RestContrasenaPage implements OnInit {

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  async mensajeToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom',
    })
    toast.present()
  }

  mensaje(){
    this.mensajeToast("correo enviado");
  }

}
