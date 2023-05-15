import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environments.prod';
import { AboutMe } from '../model/about-me';

@Injectable({
  providedIn: 'root'
})

export class AboutMeService {

  url:string = environment.apiURL;
  
  @Output() output: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient){}

  public getData(): Observable<AboutMe[]>{
    return this.http.get<AboutMe[]>(this.url + "acerca-de-mi");
  }

  postData(data : any){
    return this.http.post<any>(this.url + "acerca-de-mi/agregar", data)
    .pipe(map( (res:any)=>{
      return res;
    }))
  }

  putData(data:any){ 
    return this.http.put<any>(this.url + "acerca-de-mi/editar/", data)
    .pipe(map( (res:any)=>{
      return res;
    }))
  }

  /*
  deleteData(id:number){ 
    return this.http.delete<any>(this.url + 'acerca-de-mi/eliminar/'+id)
    .pipe(map( (res:any)=>{
      return res;
    }))
  }
  */

  
}