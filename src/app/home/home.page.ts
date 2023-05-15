import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  activado : boolean = false;
  constructor(private auth : AuthService) {}

  onoff(){    
    this.activado = this.activado ? false : true;
  }

  cerrarSesion(){
    this.activado = false;
    this.auth.logout();
  }

}
