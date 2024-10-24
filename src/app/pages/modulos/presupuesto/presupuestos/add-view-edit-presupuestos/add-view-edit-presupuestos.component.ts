import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogContent, MatDialogActions, MatDialogClose, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PresupuestoServices } from '../../../../../Services/Presupuesto-servs/Presupuesto.service';

@Component({
  selector: 'app-add-view-edit-presupuestos',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, MatDialogContent, 
    MatDialogActions, MatDialogClose],
  templateUrl: './add-view-edit-presupuestos.component.html',
  styleUrl: './add-view-edit-presupuestos.component.css'
})
export class AddViewEditPresupuestosComponent {
  formulario: FormGroup<any>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private srvPresupuesto: PresupuestoServices,
  private dialogoRef: MatDialogRef<AddViewEditPresupuestosComponent>
) {
    this.formulario = new FormGroup({
      NoReferencia: new FormControl('', [Validators.required]),
      ConceptoNombre: new FormControl('', [Validators.required]),
      AnioAplicado: new FormControl('', [Validators.required]),
      MontoAsignadoOrigen: new FormControl('', [Validators.required]),
      MontoEjecutado: new FormControl('', [Validators.required]),
      PorcentajeUsado: new FormControl('', [Validators.required]),
      EstadoPresupuesto: new FormControl('', [Validators.required]),
    })
  }
  cerraDialogo() {
    this.dialogoRef.close();
  }
  async cargarEstadoPresupuesto() {
    // code here
  }
}
