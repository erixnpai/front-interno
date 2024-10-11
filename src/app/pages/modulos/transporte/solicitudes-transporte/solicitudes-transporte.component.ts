import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SolicitudesService } from '../../../../Services/Transporte/Solicitudes-servs/solicitudes-service.service';
import { io, Socket } from 'socket.io-client';

@Component({
  selector: 'app-solicitudes-transporte',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './solicitudes-transporte.component.html',
  styleUrl: './solicitudes-transporte.component.css'
})
export default class SolicitudesTransporteComponent {


  socket!: Socket;


  constructor(private readonly solicitudesService: SolicitudesService) {
    this.getAlllSolicitudesEjecucion()
    this.connectSocket();

  }


  async getAlllSolicitudesEjecucion() {

    const data = await this.solicitudesService.allSolicitudesEjecucion(1).toPromise();

    console.log(data);

  }




  async connectSocket() {
    this.socket = io('http://localhost:4221/transportews');
    this.socket.on('connect', () => {
      console.log('Conectado al servidor');  
    });


    this.socket.on('new-solicitud', () => {
      console.log('Desconectado del servidor');
    });
  }
}
