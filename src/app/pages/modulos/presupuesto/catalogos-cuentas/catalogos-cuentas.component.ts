import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PresupuestoServices } from '../../../../Services/Presupuesto-servs/Presupuesto.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AddViewEditCatcuentasComponent } from './add-view-edit-catcuentas/add-view-edit-catcuentas.component';

@Component({
  selector: 'app-catalogos-cuentas',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatIconModule],
  templateUrl: './catalogos-cuentas.component.html',
  styleUrl: './catalogos-cuentas.component.css'
})
export default class CatalogosCuentasComponent {

  catalogos_ctas: any;

  constructor(public dialog: MatDialog,
    private srvAsignacion: PresupuestoServices,
  ) {
    this.cargarCatalogos_Ctas()
  }

  async cargarCatalogos_Ctas() {
    this.catalogos_ctas = await this.srvAsignacion.get_CatCuentasPorDominio(0).toPromise();
    console.log("Datos de Catalogos Ctas por Dominios ", this.catalogos_ctas[0]);
  }

  AbrirDialogo(type: number, elementoId: number) {
    let dialogref;
    switch (type) {
      case 1:
        dialogref = this.dialog.open(AddViewEditCatcuentasComponent, {
          height: '300px',
          minWidth: '600px',
        });
        break;
      case 2:
        dialogref = this.dialog.open(AddViewEditCatcuentasComponent, {
          height: '300px',
          minWidth: '600px',
        });
        break;
      case 3:
        dialogref = this.dialog.open(AddViewEditCatcuentasComponent, {
          height: '300px',
          minWidth: '600px',
        });
        break;
      default:
        dialogref = this.dialog.open(AddViewEditCatcuentasComponent)
        break;
    }

  }

}
