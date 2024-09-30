import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";


@Component({
  selector: 'app-transporte-layout',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './transporte-layout.component.html',
  styleUrl: './transporte-layout.component.css'
})
export default class TransporteLayoutComponent {

}
