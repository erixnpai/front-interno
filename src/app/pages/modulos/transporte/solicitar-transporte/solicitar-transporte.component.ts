import { Component } from '@angular/core';
import { UsuariosService } from '../../../../Services/Usuarios-servs/usuarios-service.service';

@Component({
  selector: 'app-solicitar-transporte',
  standalone: true,
  imports: [],
  templateUrl: './solicitar-transporte.component.html',
  styleUrl: './solicitar-transporte.component.css'
})
export default class SolicitarTransporteComponent {

  constructor(private readonly usuario_service: UsuariosService){
    console.log('SolicitarTransporteComponent');
  }


  getPersonaEncargado(){

  }

}
