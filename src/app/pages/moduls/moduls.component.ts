import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moduls',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './moduls.component.html',
  styleUrl: './moduls.component.css'
})
export default class ModulsComponent {

  //Injectar el Router
 private readonly router=  inject(Router);

  moveToModul(){
this.router.navigate(['/Transporte']);
  }
}
