import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formulariologin : FormGroup;


  constructor(private router:Router,
     public fb: FormBuilder,
     public alertController: AlertController) { 
    this.formulariologin = this.fb.group({
      'nombre' : new FormControl("",Validators.required),
      'password' : new FormControl("",Validators.required)
    });
  }

  ngOnInit() {
  }
  async ingresar(){

    var f = this.formulariologin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.nombre == f.nombre && usuario.password == f.password){
      console.log('Ingresado')
    }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'los datos ingresados no son correctos',
        buttons: ['aceptar']
      });
      await alert.present();
    }
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
