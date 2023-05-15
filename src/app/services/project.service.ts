import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environments.prod';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  url:string = environment.apiURL;
  
  @Output() output: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient){}

  public getData(): Observable<Project[]>{
    return this.http.get<Project[]>(this.url + "proyectos");
  }

  postData(data : any){
    return this.http.post<any>(this.url + "proyecto/agregar", data)
    .pipe(map( (res:any)=>{
      return res;
    }))
  }

  putData(data:any){ 
    return this.http.put<any>(this.url + "proyecto/editar", data)
    .pipe(map( (res:any)=>{
      return res;
    }))
  }

  
  deleteData(id:number){ 
    return this.http.delete<any>(this.url + 'proyecto/eliminar/'+id)
    .pipe(map( (res:any)=>{
      return res;
    }))
  }
  
}