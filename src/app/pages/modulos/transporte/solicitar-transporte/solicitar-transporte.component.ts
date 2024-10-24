import { Component, signal } from '@angular/core';
import { UsuariosService } from '../../../../Services/Transporte/Usuarios-servs/usuarios.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SolicitudesService } from '../../../../Services/Transporte/Solicitudes-servs/solicitudes-service.service';
import { CommonModule } from '@angular/common';
import { Jwt_decoder } from '../../../../utils/Jwt';
import { SweetAlert } from '../../../../utils/SweetAlert';
import { utilClass } from '../../../../utils/util-class';
import { io, Socket } from 'socket.io-client';
import { toast } from 'ngx-sonner';





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
  jwtSolicitanteObj = signal<any>(null);


  //Estado de la solicitud

  solicitud_activa_nombre = signal("Prueba");
  solicitud_activa = signal(false);
  color_solicitud = signal(1);
  status_solicitud = signal(0);
  observacion_activa = signal(false);



  dialogRef: any;

  formSolicitarTransporte!: FormGroup;

  constructor(private usuarioService: UsuariosService, private transporteService: SolicitudesService) {


    this.getPersonaEncargado();

    const dataJwt: any = Jwt_decoder.decodifcar_jwt('t1');
    this.jwtSolicitanteObj.set(dataJwt.payload);

    // console.log(this.jwtSolicitanteObj());



    this.formSolicitarTransporte = new FormGroup({
      //Datos del encargado
      encargadoTransporte: new FormControl("", [Validators.required]),
      cargoEncargado: new FormControl("", [Validators.required]),
      Id_encargado: new FormControl("", [Validators.required]),
      //Datos de la persona que solicita el transporte
      nombreSolicitante: new FormControl(this.jwtSolicitanteObj()?.Usser ?? "", [Validators.required]),
      cargoSolicitante: new FormControl(this.jwtSolicitanteObj()?.Usser ?? "", [Validators.required]),
      Id_usuario: new FormControl(this.jwtSolicitanteObj()?.Id_Usuario ?? "", [Validators.required]),

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

    const response = await this.transporteService.findSolicitudUsuario(this.jwtSolicitanteObj()?.Id_Usuario).toPromise();

    this.formSolicitarTransporte.get('encargadoTransporte')?.disable();
    this.formSolicitarTransporte.get('cargoEncargado')?.disable();

    this.formSolicitarTransporte.get('nombreSolicitante')?.disable();
    this.formSolicitarTransporte.get('cargoSolicitante')?.disable();

    // console.log(response);
    console.log(response.data);
    if (response.data != "0") {

      response.data.Fecha_solicitud = response.data.Fecha_solicitud.split('T')[0];

      this.solicitud_activa.set(true);

      this.solicitud_activa_nombre.set(response.data.Id_estatus_nombre);
      this.color_solicitud.set(response.data.Id_estatus);
      this.status_solicitud.set(response.data.Id_estatus);



      this.formSolicitarTransporte.patchValue(response.data);

      this.formSolicitarTransporte.addControl('Id', new FormControl(response.data.Id, [Validators.required]));




      // console.log(this.status_solicitud());


      if (response.data.Id_estatus == 1 || response.data.Id_estatus == 2) {
        this.formSolicitarTransporte.disable();
      }

      if (response.data.Observacion != null) {

        this.observacion_activa.set(true);
        this.formSolicitarTransporte.addControl('Observacion', new FormControl(response.data.Observacion, [Validators.required]));

        this.formSolicitarTransporte.get('Observacion')?.disable();

      }



    }



  }


  async connectSocket() {
    this.socket = io('http://localhost:4221/transportews', {
      auth: {
        token: sessionStorage.getItem('t1')
      }
    });

    this.socket.on('connect', () => {
      console.log('Conectado al servidor');
    });


    this.socket.on("update-solicitud", (dataResponse: any) => {
      // console.log("data recibida para la actualizacion de la solicitud", data);
      const sound = new Audio('assets/sounds/notify.mp3');

      if (dataResponse.data.Id_estatus == 3) {
        toast.warning('Solicitud rechazada');
      }
      if (dataResponse.data.Id_estatus == 2) {
        toast.success('Solicitud aceptada');

      }

      sound.play()

      this.getSolicitudPersona();

    });


  }



  async sendSolicitudTransporte() {
   
    if (!this.formSolicitarTransporte.valid) {

      // SweetAlert.showerror("Todos los campos son obligatorios");

      toast.error('Todos los campos son obligatorios', { style: { backgroundColor: 'yellow' } });
      return;
    }


    if (this.solicitud_activa()) {
      const idSolicitud = this.formSolicitarTransporte.get('Id')?.value;
      // return
      const data = await this.transporteService.updateSolicitud(idSolicitud, this.formSolicitarTransporte.value).toPromise();


      console.log(data);

      if (data.status == 1) {
        toast.success('Solicitud actualizada con exito');

        this.getSolicitudPersona()
        return
      }
      return
    }

    // return
    const data = await this.transporteService.addSolicitud(this.formSolicitarTransporte.value).toPromise();


    console.log(data);

    if (data.status == 1) {
      toast.success('Solicitud enviada con exito');

      this.getSolicitudPersona()
    }
    return

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
