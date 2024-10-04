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
    /*   */

    if (!this.loginForm.valid) {

      SweetAlert.showerror("Todos los campos son obligatorios")
      return;
    }


    try {
      const formLoginData = this.loginForm.value;
      const resp = await this.srv_login.loginUser(formLoginData).toPromise();
      /*     console.log(resp.status); */

      console.log(resp);


      if (resp.acceso == false) {
        SweetAlert.showerror2(resp.message)
        return;
      }

      if (!resp.status) {
        SweetAlert.showerror(resp.message)
        return;
      }

      if (resp.auth) {

        const user: any = Jwt_decoder.verificar_jwt(resp.t1);
        // Verificar si hay un payload en el token
        // console.log(user);


        if (!user || !user.Usser) {
          SweetAlert.showerror('Usuario o contraseña incorrectos');
          return;
        }

        const sessionEndTime = Date.now() + 86400000;
        sessionStorage.setItem('sessionEndTime', sessionEndTime.toString());
        sessionStorage.setItem("t1", resp.t1);
        this.router.navigate(['/rally/']);
        return;
      }
    } catch (error) {
      SweetAlert.showerror(resp.message)
      return;

    }



  }

  // clickModulos() {
  //   this.router.navigate(['/modulos']);
  // }
}
