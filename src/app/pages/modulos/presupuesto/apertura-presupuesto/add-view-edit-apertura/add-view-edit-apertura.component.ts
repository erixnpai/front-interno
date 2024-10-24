import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogContent, MatDialogActions, MatDialogClose, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PresupuestoServices } from '../../../../../Services/Presupuesto-servs/Presupuesto.service';

@Component({
  selector: 'app-add-view-edit-apertura',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, MatDialogContent, 
    MatDialogActions, MatDialogClose],
  templateUrl: './add-view-edit-apertura.component.html',
  styleUrl: './add-view-edit-apertura.component.css'
})
export class AddViewEditAperturaComponent {
  formulario: FormGroup<any>;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private srvPresupuesto: PresupuestoServices,
  private dialogoRef: MatDialogRef<AddViewEditAperturaComponent>
  ){
    this.formulario = new FormGroup({
      NumeroRuc: new FormControl('', [Validators.required]),
      TechoPresupustario: new FormControl('', [Validators.required]),
      AnioPresupuestado: new FormControl('', [Validators.required]),
      EstadoPresupuesto: new FormControl('', [Validators.required]),
    })
  }
  cerraDialogo() {
    this.dialogoRef.close();
  }
}
