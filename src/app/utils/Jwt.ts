import { JwtPayload, jwtDecode } from 'jwt-decode';
interface JwtOptions {
  algorithm: string;
  header?: true;
  modulos?: any;
}

export class Jwt_decoder {
  // algoritmo de encriptacion
 

  // obtener el token de la sessionStorage
  private static obtenerToken_sessionStorage(tokenKey: string): string | null {
    return sessionStorage.getItem(tokenKey);
  }

//   decodificar el token especificado
  static decodifcar_jwt(tokenKey: string): JwtPayload | null {
    const token = this.obtenerToken_sessionStorage(tokenKey);

    if (!token) {
      // console.log(`Token no encontrado`);
      return null;
    }

    try {
      const decoded = jwtDecode<JwtPayload>(token);
      return decoded;
    } catch (error) {
      console.error(`Error al decodificar ${tokenKey}:`, error);
      return null;
    }
  }

  static verificar_jwt(tokenKey: string) : JwtPayload | null{
    try {
      const decoded = jwtDecode<JwtPayload>(tokenKey);
      return decoded;
    } catch (error) {
      // console.error(`Error al decodificar ${tokenKey}:`, error);
      return null;
    }
  }
}