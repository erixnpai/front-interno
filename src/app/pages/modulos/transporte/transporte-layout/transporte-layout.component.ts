import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from "@angular/material/icon";
import { RouterOutlet, RouterLink } from '@angular/router';


@Component({
  selector: 'app-transporte-layout',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule, MatIconModule, RouterLink],
  templateUrl: './transporte-layout.component.html',
  styleUrl: './transporte-layout.component.css'
})
export default class TransporteLayoutComponent {

}
