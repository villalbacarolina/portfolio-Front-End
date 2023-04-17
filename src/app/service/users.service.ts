//imagen, tabla, servicio
//conecta back con front y operaciones
//modal reactivo
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class usersService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{ /* nos va a suscribir a los eventos el observable */
    return this.http.get("./assets/data/data.json"); /*puede devolver request html*/ //cambiar link por api link
  }

  //put,delete,post
}
