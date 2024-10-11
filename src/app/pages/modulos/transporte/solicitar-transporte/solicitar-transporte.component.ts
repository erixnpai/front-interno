import { Component, signal } from '@angular/core';
import { UsuariosService } from '../../../../Services/Transporte/Usuarios-servs/usuarios.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SolicitudesService } from '../../../../Services/Transporte/Solicitudes-servs/solicitudes-service.service';
import { CommonModule } from '@angular/common';
import { Jwt_decoder } from '../../../../utils/Jwt';
import { SweetAlert } from '../../../../utils/SweetAlert';
import { utilClass } from '../../../../utils/util-class';
import { io, Socket } from 'socket.io-client';





@Component({
  selector: 'app-solicitar-transporte',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule,],
  templateUrl: './solicitar-transporte.component.html',
  styleUrl: './solicitar-transporte.component.css'
})
export default class SolicitarTransporteComponent {

  //socket
  private socket!: Socket;


  //Datos del encargado
  encargadoObj = signal<any>(null);


  //Datos de la persona que solicita el transporte
  solicitanteObj = signal<any>(null);


  //Estado de la solicitud

  state_solicitud = signal("Prueba");
  solicitud_activa = signal(false);
  color_solicitud = signal(1);



  dialogRef: any;

  formSolicitarTransporte!: FormGroup;

  constructor(private usuarioService: UsuariosService, private transporteService: SolicitudesService) {


    this.getPersonaEncargado();

    const dataJwt: any = Jwt_decoder.decodifcar_jwt('t1');
    this.solicitanteObj.set(dataJwt.payload ?? null);

    // console.log(this.solicitanteObj());



    this.formSolicitarTransporte = new FormGroup({
      //Datos del encargado
      encargadoTransporte: new FormControl("", [Validators.required]),
      cargoEncargado: new FormControl("", [Validators.required]),
      Id_encargado: new FormControl("", [Validators.required]),
      //Datos de la persona que solicita el transporte
      nombreSolicitante: new FormControl(this.solicitanteObj()?.Usser ?? "", [Validators.required]),
      cargoSolicitante: new FormControl(this.solicitanteObj()?.Usser ?? "", [Validators.required]),
      Id_usuario: new FormControl(this.solicitanteObj()?.Id_Usuario ?? "", [Validators.required]),

      //datos de la solicitud transporte


      Cantidad_personas: new FormControl('', [Validators.required]),
      Lugar_salida: new FormControl('', [Validators.required]),
      Lugar_regreso: new FormControl('', [Validators.required]),
      // Observacion: new FormControl('', [Validators.required]),
      Fecha_solicitud: new FormControl('', [Validators.required]),
      Hora_salida: new FormControl('', [Validators.required]),
      Hora_regreso: new FormControl('', [Validators.required]),
      Destino: new FormControl('', [Validators.required]),
      Justificacion: new FormControl('', [Validators.required]),

    });


    this.getSolicitudPersona();

    this.connectSocket();





  }


  async getPersonaEncargado() {
    // console.log('SolicitarTransporteComponent');

    const data = await this.usuarioService.get_EncargadoService().toPromise();

    this.encargadoObj.set(data);

    // console.log(this.encargadoObj());

    this.formSolicitarTransporte.get('encargadoTransporte')?.setValue(this.encargadoObj()?.Nombre);
    this.formSolicitarTransporte.get('cargoEncargado')?.setValue(this.encargadoObj()?.Cargo);
    this.formSolicitarTransporte.get('Id_encargado')?.setValue(this.encargadoObj()?.Id);

    // console.log(data);

  }


  async getPersonaSolicitante() {
  }


  async getSolicitudPersona() {

    const response = await this.transporteService.findSolicitudUsuario(this.solicitanteObj()?.Id_Usuario).toPromise();

    // console.log(response);
    console.log(response.data);
    if (response.data != "0") {
      // this.state_solicitud.set(response);

      this.solicitud_activa.set(true);

      this.state_solicitud.set(response.data.Id_estatus_nombre);
      this.color_solicitud.set(response.data.Id_estatus);

      

    }





  }


  async connectSocket() {
    this.socket = io('http://localhost:4221/transportews');

    this.socket.on('connect', () => {
      console.log('Conectado al servidor');
    });

  }



  async sendSolicitudTransporte() {
    console.log(this.formSolicitarTransporte.value);

    if (!this.formSolicitarTransporte.valid) {

      SweetAlert.showerror("Todos los campos son obligatorios");
      return;
    }

    const data = await this.transporteService.addSolicitud(this.formSolicitarTransporte.value).toPromise();
    console.log(data);

    if (data) {
      this.socket.emit('solicitud', data);
    }


    // const data = await this.transporteService.post_SendSolicitud(this.formSolicitarTransporte.value).toPromise();
  }



  getStateClass() {
    switch (this.color_solicitud()) {
      case 1:
        return 'bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700';
      case 2:
        return 'bg-green-500 hover:bg-green-600 focus:bg-green-600 active:bg-green-700';
      case 3:
        return 'bg-red-500 hover:bg-red-600 focus:bg-red-600 active:bg-red-700';
      default:
        return 'bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700'; // Clase por defecto
    }
  }


}
