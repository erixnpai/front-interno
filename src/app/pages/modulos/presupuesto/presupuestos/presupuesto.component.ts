import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddViewEditPresupuestosComponent } from './add-view-edit-presupuestos/add-view-edit-presupuestos.component';
import { PresupuestoServices } from '../../../../Services/Presupuesto-servs/Presupuesto.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-presupuesto',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatIconModule],
  templateUrl: './presupuesto.component.html',
  styleUrl: './presupuesto.component.css'
})
export default class PresupuestoComponent {
  presupuestos: any;

  constructor(public dialog: MatDialog,
  private srvPresupuesto: PresupuestoServices,
  ) {
    this.cargarPresupuestos()
   }

  async cargarPresupuestos() {
    this.presupuestos = await this.srvPresupuesto.get_PresupuestoMaestro(0).toPromise();
    console.log("Datos del presupuestos", this.presupuestos[0]);
  }

  AbrirDialogo(type: number, elementoId: number) {
    let dialogref;
    switch (type) {
      case 1:
        dialogref = this.dialog.open(AddViewEditPresupuestosComponent, {
          height: 'auto',
          minWidth: 'auto',
        });
        break;
      case 2:
        dialogref = this.dialog.open(AddViewEditPresupuestosComponent, {
          height: '300px',
            minWidth: '600px',
        });
        break;
      default:
        dialogref = this.dialog.open(AddViewEditPresupuestosComponent)
        break;
    }  
  }
}
