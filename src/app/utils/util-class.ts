import { AbstractControl, FormGroup, ValidatorFn } from "@angular/forms";

export class utilClass {


    ///esta funcion sirve para convertir en mayusculas los textos ingresados
    static convertirAMayusculas(event: any, formGroup: FormGroup): void {
        const input = event.target;
        const name = input.getAttribute('formcontrolname');
        const control = formGroup.get(name); // Obtener el control directamente del FormGroup
        if (control) {
            // Aplica .trimLeft() para eliminar solo espacios al principio
            const inputValue = input.value.trimLeft().toUpperCase();
            control.setValue(inputValue, { emitEvent: false });
        }
    }
    
    static validarFormControls(formGroup: FormGroup, controlesAValidar: string[] = []): boolean {
        let valid = true;
        Object.keys(formGroup.controls).forEach(controlName => {
            if (!controlesAValidar.includes(controlName)) {
                return; // Saltar la validación si el control no está en la lista de controles a validar
            }
            const control = formGroup.get(controlName);
            if (!control?.valid) {
                valid = false;
                // Marcar el control como tocado si no es válido
                control?.markAsTouched({ onlySelf: true });
            }
        });
        return valid;
    }


    static EspaciosValidator(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            if ( control.value && control.value.toString().trim() == '') {
                return { 'soloEspacios': true }; // Devolver un error si el valor contiene solo espacios en blanco
            }
            return null; // El valor es válido
        };
    }


   static formatearCedula(event: any) {
    let cedula = event.target.value;
  
    // Elimina cualquier caracter que no sea número o letra
    cedula = cedula.replace(/[^0-9A-Za-z]/g, '');
  
    // Asegura que los primeros 12 caracteres sean números
    if (cedula.length > 13) {
      cedula = cedula.slice(0, 13).replace(/[^0-9]/g, '') + cedula.slice(13);
    } else {
      cedula = cedula.replace(/[^0-9]/g, '');
    }
  
    // Aplica el formato deseado
    if (cedula.length > 3) {
      cedula = cedula.slice(0, 3) + '-' + cedula.slice(3);
    }
    if (cedula.length > 10) {
      cedula = cedula.slice(0, 10) + '-' + cedula.slice(10);
    }
  
    // Verifica si el último carácter es una letra si la longitud total es 15
    if (cedula.length === 16 && !/[A-Za-z]/.test(cedula.slice(-1))) {
      cedula = cedula.slice(0, 14);
    }
  
    // Limita la longitud total a 15 caracteres
    if (cedula.length > 16) {
      cedula = cedula.slice(0, 16);
    }
  
    // Actualiza el valor del campo de cédula sin emitir un evento de cambio para evitar un bucle infinito
    event.target.value = cedula;

}

      static formatearTelefeno(event: any) {
        const input = event.target as HTMLInputElement;
    
        // Obtén el valor actual del campo
        let currentValue = input.value;
    
        // Reemplaza cualquier caracter no numérico con una cadena vacía
        let numericValue = currentValue.replace(/[^\d]/g, '');
    
        // Aplica el formato deseado: 0000-0000
        if (numericValue.length > 4) {
          numericValue = numericValue.slice(0, 4) + '-' + numericValue.slice(4, 8);
        }
    
        // Asegura que solo se permitan 8 dígitos en total
        if (numericValue.length > 9) {
          numericValue = numericValue.slice(0, 9);
        }
    
        // Actualiza el valor del campo sin emitir un evento de cambio para evitar un bucle infinito
        input.value = numericValue;
      }

      static formatearTelefono(formulario: FormGroup, controlName: string): void {
        const control: AbstractControl = formulario.controls[controlName];
        let telefono = control.value;
    
        // Elimina caracteres no numéricos
        telefono = telefono.replace(/[^0-9]/g, '');
    
        // Asegura que la longitud máxima sea de 8 dígitos
        if (telefono.length > 8) {
          telefono = telefono.slice(0, 8);
        }
    
        // Actualiza el valor del control sin emitir un evento de cambio
        control.setValue(telefono, { emitEvent: false });
    
        // Verifica si el teléfono está completo y tiene exactamente 8 dígitos
        if (telefono.length !== 8) {
          control.setErrors({ 'incorrect': true });
        } else {
          control.setErrors(null);
        }
      }

      static formatearCedula2(formulario: FormGroup, controlName: string): void {
        const control: AbstractControl = formulario.controls[controlName];
        let cedula = control.value;
    
        // Elimina cualquier carácter que no sea número o letra
        cedula = cedula.replace(/[^0-9A-Za-z]/g, '');
    
        // Asegura que los primeros 12 caracteres sean números
        if (cedula.length > 13) {
          cedula = cedula.slice(0, 13).replace(/[^0-9]/g, '') + cedula.slice(13);
        } else {
          cedula = cedula.replace(/[^0-9]/g, '');
        }
    
        // Aplica el formato deseado
        if (cedula.length > 3) {
          cedula = cedula.slice(0, 3) + '-' + cedula.slice(3);
        }
        if (cedula.length > 10) {
          cedula = cedula.slice(0, 10) + '-' + cedula.slice(10);
        }
    
        // Verifica si el último carácter es una letra si la longitud total es 15
        if (cedula.length === 16 && !/[A-Za-z]/.test(cedula.slice(-1))) {
          cedula = cedula.slice(0, 14);
        }
    
        // Limita la longitud total a 15 caracteres
        if (cedula.length > 16) {
          cedula = cedula.slice(0, 16);
        }
    
        // Actualiza el valor del control sin emitir un evento de cambio
        control.setValue(cedula, { emitEvent: false });
    
        // Verifica si la cédula está completa
        if (cedula.length !== 16) {
          control.setErrors({ 'incorrect': true });
        } else {
          control.setErrors(null);
        }
      }

}