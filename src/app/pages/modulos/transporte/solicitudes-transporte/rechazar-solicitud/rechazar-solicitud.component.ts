import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatTabChangeEvent, MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { toast } from 'ngx-sonner';
import { SolicitudesService } from '../../../../../Services/Transporte/Solicitudes-servs/solicitudes-service.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-rechazar-solicitud',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, MatTabsModule],
  templateUrl: './rechazar-solicitud.component.html',
  styleUrl: './rechazar-solicitud.component.css'
})
export class RechazarSolicitudComponent {

  formObservacion!: FormGroup;
  idSolicitud!: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<RechazarSolicitudComponent>,
    private readonly solicitudService: SolicitudesService
  ) {


    this.formObservacion = new FormGroup({
      Observacion: new FormControl('', [Validators.required]),
      Id_estatus: new FormControl(3)
    });
    this.idSolicitud = data.Id;

  }



  async rechazarSolicitud() {

    if (this.formObservacion.invalid) {
      toast.error('Por favor, ingrese una observación');
      return;
    }
    try {
      const data = await this.solicitudService.updateSolicitud(this.idSolicitud, this.formObservacion.value).toPromise();
      if (data.data) {
        console.log(data);
        toast.success('Solicitud rechazada con éxito');
        this.dialogRef.close({ update: true});

      }

    } catch (error: any) {
      toast.error(error.message);
    }

  }


}
