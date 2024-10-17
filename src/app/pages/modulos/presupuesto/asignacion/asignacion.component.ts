import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { PresupuestoServices } from '../../../../Services/Presupuesto-servs/Presupuesto.service';
import { AddViewEditAsignacionComponent } from './add-view-edit-asignacion/add-view-edit-asignacion.component';

@Component({
  selector: 'app-asignacion',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatIconModule],
  templateUrl: './asignacion.component.html',
  styleUrl: './asignacion.component.css'
})
export default class AsignacionComponent {


  asignacion_presupuesto: any;

  constructor(public dialog: MatDialog,
  private srvAsignacion: PresupuestoServices,
  ) {
    this.cargarAsignacionPresupuestos()
   }

  async cargarAsignacionPresupuestos() {
    this.asignacion_presupuesto = await this.srvAsignacion.get_PresupuestoMaestro(0).toPromise();                               
    console.log("Datos de Asignacion Presupuestaria ", this.asignacion_presupuesto[0]);
  }

  AbrirDialogo(type: number, elementoId: number) {
    let dialogref;
    switch (type) {
      case 1:
        dialogref = this.dialog.open(AddViewEditAsignacionComponent, {
          height: '300px',
          minWidth: '600px',
        });
        break;
      case 2:
        dialogref = this.dialog.open(AddViewEditAsignacionComponent, {
          height: '300px',
          minWidth: '600px',
        });
        break;
        case 3:
          dialogref = this.dialog.open(AddViewEditAsignacionComponent, {
            height: '300px',
            minWidth: '600px',
          });
          break;
      default:
        dialogref = this.dialog.open(AddViewEditAsignacionComponent)
        break;
    }  
  }



}
