// sweet-alert.util.ts
import Swal, { SweetAlertResult } from 'sweetalert2';

export class SweetAlert {
  static fire(arg0: { title: string; text: string; icon: string; showCancelButton: boolean; confirmButtonText: string; cancelButtonText: string; }) {
    throw new Error('Method not implemented.');
  }
  static showconfirm(arg0: { title: string; text: string; icon: string; showCancelButton: boolean; confirmButtonText: string; cancelButtonText: string; }) {
    throw new Error('Method not implemented.');
  }
  static showSuccess(arg0: string) {
    throw new Error('Method not implemented.');
  }
  static async showalerta(
    icon: 'success' | 'error' | 'warning' | 'info' | 'question',
    title: string
  ) {
    await Swal.fire({
      icon: icon,
      title: title,
      toast: true,
      position: 'bottom-end',
      iconColor: 'white',
      customClass: {
        popup: 'colored-toast',
      },
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
  }
  static async showerror(title: string) {
    await Swal.fire({
      icon: 'error',
      title: title,
      toast: true,
      color: 'red',
      position: 'bottom-end',
      iconColor: 'red',
      background: 'rgb(231, 184, 184)',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
  }
  static async warning(title: string) {
    await Swal.fire({
      icon: 'warning',
      title: title,
      toast: true,
      color: 'red',
      position: 'bottom-end',
      iconColor: 'red',
      background: 'rgb(231, 184, 184)',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
  }

  static async showsusses(title: string) {
    await Swal.fire({
      icon: 'success',
      title: title,
      toast: true,
      color: 'green',
      position: 'bottom-end',
      iconColor: 'green',
      background: 'rgb(207, 252, 212  )',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
  }
  static async showmodify(title: string) {
    await Swal.fire({
      icon: 'info',
      title: title,
      toast: true,
      color: 'blue',
      position: 'bottom-end',
      iconColor: 'blue',
      background: 'rgb(2162, 247, 255)',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
  }

  static async showsinfo(title: string) {
    await Swal.fire({
      icon: 'info',
      title: title,
      color: 'black',
      width: 500,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
    });
  }
  static async showsusses2(title: string) {
    await Swal.fire({
      icon: 'success',
      title: title,
      color: 'green',
      iconColor: 'green',
      background: 'rgb(207, 252, 212  )',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
  }
  static async showerror2(title: string) {
    await Swal.fire({
      /* icon: 'error', */
      imageUrl: "https://www.nicaraguainnova.gob.ni/wp-content/uploads/2024/08/hand-no.gif",
      imageWidth: 200,
      text: title,
      /* color: 'red', */
      iconColor: 'red',
      /* background: 'rgb(231, 184, 184)', */
      /* showConfirmButton: true, */
      showConfirmButton: false,
      confirmButtonText: "Ok",
      timer: 3000,
      timerProgressBar: true,
    });
  }

  static async showAlertTextTitle( icon: 'success' | 'error' | 'warning' | 'info' | 'question', text: string, title: string, timer: number) {
    await Swal.fire({
      icon: icon,
      title: title,
      text: text,
      /* color: 'red', */
      iconColor: 'red',
      /* background: 'rgb(231, 184, 184)', */
      /* showConfirmButton: true, */
      showConfirmButton: false,
      allowOutsideClick: false,
      timer: timer,
      timerProgressBar: true,
    });
  }
  static async showsalertmod(icon: 'success' | 'error' | 'warning' | 'info' | 'question', title: string): Promise<SweetAlertResult> {
   return Swal.fire({
            icon: icon,
            title: title,
            color: 'black',
            width: 500,
            showConfirmButton: true,
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar',
            
        });
  }
  static async showsalertmodyfy(icon: 'success' | 'error' | 'warning' | 'info' | 'question', title: string): Promise<SweetAlertResult> {
   return Swal.fire({
            icon: icon,
            title: title,
            color: 'black',
            width: 500,
            showConfirmButton: true,
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar',
            allowOutsideClick: false

        });
  }
}