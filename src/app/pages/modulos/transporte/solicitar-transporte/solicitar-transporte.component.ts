import { Component, signal } from '@angular/core';
import { UsuariosService } from '../../../../Services/Transporte/Usuarios-servs/usuarios.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SolicitudesService } from '../../../../Services/Transporte/Solicitudes-servs/solicitudes-service.service';
import { CommonModule } from '@angular/common';
import { Jwt_decoder } from '../../../../utils/Jwt';
import { SweetAlert } from '../../../../utils/SweetAlert';
import { utilClass } from '../../../../utils/util-class';





@Component({
  selector: 'app-solicitar-transporte',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ],
  templateUrl: './solicitar-transporte.component.html',
  styleUrl: './solicitar-transporte.component.css'
})
export default class SolicitarTransporteComponent {


  //Datos del encargado
  encargadoObj = signal<any>(null);


  //Datos de la persona que solicita el transporte
  solicitanteObj = signal<any>(null);
  dialogRef: any;

  formSolicitarTransporte!: FormGroup;

  constructor(private usuarioService: UsuariosService, private transporteService: SolicitudesService) {


    this.getPersonaEncargado();

    const dataJwt: any = Jwt_decoder.decodifcar_jwt('t1');
    this.solicitanteObj.set(dataJwt.payload ?? null);

    // console.log(this.encargadoObj());



    this.formSolicitarTransporte = new FormGroup({
      //Datos del encargado
      encargadoTransporte: new FormControl("", [Validators.required]),
      cargoEncargado: new FormControl("", [Validators.required]),
      Id_encargado: new FormControl("", [Validators.required]),
      //Datos de la persona que solicita el transporte
      nombreSolicitante: new FormControl(this.solicitanteObj()?.Usser ?? "", [Validators.required]),
      cargoSolicitante: new FormControl(this.solicitanteObj()?.Usser ?? "", [Validators.required]),
      Id_usuario: new FormControl("", [Validators.required]),

      //datos de la solicitud transporte
   
      
      Cantidad_personas: new FormControl('', [Validators.required]),
      Lugar_salida: new FormControl('', [Validators.required]),
      Lugar_regreso: new FormControl('', [Validators.required]),
      Observacion: new FormControl('', [Validators.required]),
      Fecha_solicitud: new FormControl('', [Validators.required]),
      Hora_salida: new FormControl('', [Validators.required]),
      Hora_regreso: new FormControl('', [Validators.required]),
      Destino: new FormControl('', [Validators.required]),
      Justificacion: new FormControl('', [Validators.required]),

    });





  }


  async getPersonaEncargado() {
    // console.log('SolicitarTransporteComponent');

    const data = await this.usuarioService.get_EncargadoService().toPromise();

    this.encargadoObj.set(data);

    console.log(this.encargadoObj());

    this.formSolicitarTransporte.get('encargadoTransporte')?.setValue(this.encargadoObj()?.Nombre);
    this.formSolicitarTransporte.get('cargoEncargado')?.setValue(this.encargadoObj()?.Cargo);
    this.formSolicitarTransporte.get('Id_encargado')?.setValue(this.encargadoObj()?.Id);

    // console.log(data);

  }


  async setPersonaSolicitante() {
  }



  async sendSolicitudTransporte() {
    console.log(this.formSolicitarTransporte.value);

    if (!this.formSolicitarTransporte.valid) {

      SweetAlert.showerror("Todos los campos son obligatorios");
      return;
    }

    const data = await this.transporteService.addSolicitud(this.formSolicitarTransporte.value).toPromise();
    console.log(data);


    // const data = await this.transporteService.post_SendSolicitud(this.formSolicitarTransporte.value).toPromise();
  }


}
