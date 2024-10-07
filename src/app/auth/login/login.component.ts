import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { SweetAlert } from '../../utils/SweetAlert';
import { LoginService } from '../../Services/Login/Login-servs/login.service';
import { Jwt_decoder } from '../../utils/Jwt';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  loginForm!: FormGroup;


  constructor(private router: Router, private srv_login: LoginService) {
    console.log('LoginComponent');

    this.loginForm = new FormGroup({
      Usser: new FormControl("", Validators.required),
      Password: new FormControl("", Validators.required),

    })
  }




  async login() {
    // Verificar si el formulario es inválido
    if (!this.loginForm.valid) {
      SweetAlert.showerror("Todos los campos son obligatorios");
      return;
    }
  
    try {
      const formLoginData = this.loginForm.value;
      const resp = await this.srv_login.loginUser(formLoginData).toPromise();
  
      console.log(resp);
  
      // Verificar si el acceso fue denegado
      if (!resp.acceso) {
        SweetAlert.showerror(resp.message || "Acceso denegado");
        return;
      }
  
      // Verificar si la respuesta tiene un status negativo
      if (!resp.status) {
        SweetAlert.showerror(resp.message || "Error en la autenticación");
        return;
      }
  
      // Si la autenticación es exitosa
      if (resp.auth) {
        const user: any = Jwt_decoder.verificar_jwt(resp.t1);
  
        // Verificar si el token decodificado contiene el usuario
        if (!user || !user.Usser) {
          SweetAlert.showerror("Usuario o contraseña incorrectos");
          return;
        }
  
        // Guardar la sesión por 24 horas
        const sessionEndTime = Date.now() + 86400000; // 24 horas en milisegundos
        sessionStorage.setItem('sessionEndTime', sessionEndTime.toString());
        sessionStorage.setItem("t1", resp.t1);
  
        // Redirigir al usuario a la página de inicio
        this.router.navigate(['/rally/']);
      }
    } catch (error: any) {
      // Manejo del error general
      SweetAlert.showerror(error.message || "Error en el servidor. Intente nuevamente.");
    }
  }
  

  // clickModulos() {
  //   this.router.navigate(['/modulos']);
  // }
}
