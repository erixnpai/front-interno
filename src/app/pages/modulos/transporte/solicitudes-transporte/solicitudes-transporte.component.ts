import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SolicitudesService } from '../../../../Services/Transporte/Solicitudes-servs/solicitudes-service.service';
import { io, Socket } from 'socket.io-client';
import { Jwt_decoder } from '../../../../utils/Jwt';
import { JwtPayload } from 'jwt-decode';
import { toast } from 'ngx-sonner';
import { MatDialog } from '@angular/material/dialog';
import { RechazarSolicitudComponent } from './rechazar-solicitud/rechazar-solicitud.component';

@Component({
  selector: 'app-solicitudes-transporte',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './solicitudes-transporte.component.html',
  styleUrl: './solicitudes-transporte.component.css'
})
export default class SolicitudesTransporteComponent {


  socket!: Socket;

  jwtDatosPersona = signal<any>(null);


  solicitudesList = signal<any>([]);


  constructor(private readonly solicitudesService: SolicitudesService, private readonly dialog: MatDialog) {
    this.getAlllSolicitudesEjecucion()
    this.connectSocket();

    const dataJwt: any = Jwt_decoder.decodifcar_jwt("t1");

    console.log(dataJwt);


    this.jwtDatosPersona.set(dataJwt.payload);


  }


  async getAlllSolicitudesEjecucion() {

    const data = await this.solicitudesService.allSolicitudesEjecucion(0).toPromise();

    if (data.data == 0) {
      data.data = [];
    }
    this.solicitudesList.set(data.data);

    console.log(this.solicitudesList());


  }

  async changeStatusSolicitud(status: number) {
    let data = await this.solicitudesService.updateStatusSolicitud(0).toPromise();


    if (data.data == 0) {
      data.data = [];
    }

    console.log(data.data);
    this.solicitudesList.set(data.data);

  }


  rechazarSolicitud(Id: any) {

    const dialogRef = this.dialog.open(RechazarSolicitudComponent, {
      width: '500px',

    });

  }









  async connectSocket() {
    this.socket = io('http://localhost:4221/transportews', {
      query: {
        token: sessionStorage.getItem('t1')
      }
    });


    this.socket.on('connect', () => {
      console.log('Conectado al servidor');
    });


    this.socket.on('new-solicitud', (data: any) => {
      console.log('conectado al servidor');

      const sound = new Audio('assets/sounds/notify.mp3');

      sound.play()
      console.log(data);

      toast.info('Nueva solicitud de transporte')

      this.getAlllSolicitudesEjecucion()
    });
  }
}
