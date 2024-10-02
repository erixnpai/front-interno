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

  constructor(private  usuarioService: UsuariosService,) {
    

    this.getPersonaEncargado();
  }


  async getPersonaEncargado() {
    // console.log('SolicitarTransporteComponent');

    const data = await this.usuarioService.get_EncargadoService().toPromise();
    console.log(data);
    
  }

}
