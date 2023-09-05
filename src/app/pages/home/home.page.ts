import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private toastController: ToastController, private router: Router) { }

  ngOnInit() {
  }

  asistencia() {
    this.router.navigate(['asistencias'])
  }
}
