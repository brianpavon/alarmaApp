import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  activado : boolean = false;
  constructor(private auth : AuthService) {}

  onoff(){
    if(this.activado){
      this.verificarClave();
    }else{
      this.activarAlarma();
    }    
  }

  cerrarSesion(){
    this.activado = false;
    this.auth.logout();
  }

  async verificarClave(){
    const { value: clave } = await Swal.fire({
      title: 'Ingrese su clave',
      input: 'password',      
      inputPlaceholder: 'Ingrese su clave',
      confirmButtonText: "Confirmar",
      confirmButtonColor: '#428C81',
      background: '#000000',
      color: '#FFFFFF',
      heightAuto:false
    })
    
    if(clave !== this.auth.claveActual){
      console.log('logica error');      
    }else{
      console.log('clave correcta');
    }
        
    this.activado = false;
  }

  activarAlarma(){
    console.log("activar");
    this.activado = true;
  }

}
