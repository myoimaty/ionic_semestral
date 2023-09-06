import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-asis-docente',
  templateUrl: './asis-docente.page.html',
  styleUrls: ['./asis-docente.page.scss'],
})
export class AsisDocentePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  QR() {
    this.router.navigate(['gen-qr'])
  }

}
