import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, } from '@angular/material/dialog';
@Component({
  selector: 'app-view-historial-trasnporte',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, MatDialogContent, MatDialogActions, MatDialogClose ],
  templateUrl: './view-historial-trasnporte.component.html',
  styleUrl: './view-historial-trasnporte.component.css'
})
export class ViewHistorialTrasnporteComponent {
  dialogRef: any;
  cerraDialogo() {
    this.dialogRef.close(ViewHistorialTrasnporteComponent);
   }
}
