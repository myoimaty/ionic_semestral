import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.page.html',
  styleUrls: ['./crear-usuario.page.scss'],
})
export class CrearUsuarioPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController : AlertController) { 

    this.formularioRegistro = this.fb.group({
      'nombre' : new FormControl("",Validators.required),
      'password' : new FormControl("",Validators.required),
      'confirmapassword' : new FormControl("",Validators.required) 
    });
  }

  ngOnInit() {
  }
  
  async guardar(){
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Debes llenar todos los campos',
        buttons: ['aceptar']
      });

      
      await alert.present();
      return;
    }
    var usuario = {
      nombre: f.nombre,
      password: f.password,
    }
    localStorage.setItem('usuario',JSON.stringify(usuario));
  }

}
