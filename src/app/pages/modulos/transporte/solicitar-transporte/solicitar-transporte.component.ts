import { Component } from '@angular/core';
import { UsuariosService } from '../../../../Services/Usuarios-servs/usuarios.service';



@Component({
  selector: 'app-solicitar-transporte',
  standalone: true,
  imports: [],
  templateUrl: './solicitar-transporte.component.html',
  styleUrl: './solicitar-transporte.component.css'
})
export default class SolicitarTransporteComponent {

  constructor(private readonly usuario_service: UsuariosService,) {
    

    this.getPersonaEncargado();
  }


  getPersonaEncargado() {
    console.log('SolicitarTransporteComponent');

    this.usuario_service
  }

}
