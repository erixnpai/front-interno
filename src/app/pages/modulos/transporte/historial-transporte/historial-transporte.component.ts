import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ViewHistorialTrasnporteComponent } from './view-historial-trasnporte/view-historial-trasnporte.component';


@Component({
  selector: 'app-historial-transporte',
  standalone: true,
  imports: [MatIconModule, FormsModule, CommonModule, ReactiveFormsModule, MatButtonModule ],
  templateUrl: './historial-transporte.component.html',
  styleUrl: './historial-transporte.component.css'
})
export default class HistorialTransporteComponent {
  
  readonly dialog = inject(MatDialog);

  openDialog() {
    
    this.dialog.open(ViewHistorialTrasnporteComponent, {
      height: 'auto',
      minWidth: '900px',
    });
   

  }
  
}
