import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatTabChangeEvent, MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { toast } from 'ngx-sonner';
import { SolicitudesService } from '../../../../../Services/Transporte/Solicitudes-servs/solicitudes-service.service';

@Component({
  selector: 'app-rechazar-solicitud',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, MatTabsModule],
  templateUrl: './rechazar-solicitud.component.html',
  styleUrl: './rechazar-solicitud.component.css'
})
export class RechazarSolicitudComponent {

  formObservacion!: FormGroup;

  constructor(private readonly solicitudService: SolicitudesService) { 

    this.formObservacion = new FormGroup({
      observacion: new FormControl('', [Validators.required])
    });
  }



 async rechazarSolicitud() {

    if(this.formObservacion.invalid) {
      toast.error('Por favor, ingrese una observación');
      return;
    }


    try {
      const data = this.solicitudService.updateStatusSolicitud(0).toPromise();
    } catch (error) {
      
    }
    toast.success('Solicitud rechazada con éxito');
  }


}
