import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { AddViewEditAperturaComponent } from './add-view-edit-apertura/add-view-edit-apertura.component';

@Component({
  selector: 'app-apertura-presupuesto',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatIconModule],
  templateUrl: './apertura-presupuesto.component.html',
  styleUrl: './apertura-presupuesto.component.css'
})
export default class AperturaPresupuestoComponent {

  constructor(public dialog: MatDialog){}

  AbrirDialogo(type: number, elementoId: number) {
    let dialogref;
    switch (type) {
      case 1:
        dialogref = this.dialog.open(AddViewEditAperturaComponent, {
          height: 'auto',
          minWidth: 'auto',
        });
        break;
      case 2:
        dialogref = this.dialog.open(AddViewEditAperturaComponent, {
          height: '300px',
            minWidth: '600px',
        });
        break;
      default:
        dialogref = this.dialog.open(AddViewEditAperturaComponent)
        break;
    }  
  }
}
