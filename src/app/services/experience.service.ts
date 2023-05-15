import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Experience } from '../model/experience';
import { environment } from 'environments/environments.prod';

@Injectable({
  providedIn: 'root'
})

export class ExperienceService {

  url:string = environment.apiURL;
  
  @Output() output: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient){}

  public getData(): Observable<Experience[]>{
    return this.http.get<Experience[]>(this.url + "experiencias");
  }

  postData(data : any){
    return this.http.post<any>(this.url + "experiencia/agregar", data)
    .pipe(map( (res:any)=>{
      return res;
    }))
  }

  // putData(data:any, id:number){ 
  //   return this.http.put<any>(this.url + "experiencia/editar/"+id, data)
  //   .pipe(map( (res:any)=>{
  //     return res;
  //   }))
  // }

  putData(data:any){ 
    return this.http.put<any>(this.url + "experiencia/editar", data)
    .pipe(map( (res:any)=>{
      return res;
    }))
  }

  
  deleteData(id:number){ 
    return this.http.delete<any>(this.url + 'experiencia/eliminar/'+id)
    .pipe(map( (res:any)=>{
      return res;
    }))
  }
  
/*
  @Output() output: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient){}

  getData(): Observable<any> {
    return this.http.get('http://localhost:3000/posts')
  }

  postData(data : any){
    return this.http.post<any>('http://localhost:3000/posts', data)
    .pipe(map( (res:any)=>{
      return res;
    }))
  }

  putData(data:any, id:number){ 
    return this.http.put<any>('http://localhost:3000/posts/'+id, data)
    .pipe(map( (res:any)=>{
      return res;
    }))
  }

  deleteData(id:number){ 
    return this.http.delete<any>('http://localhost:3000/posts/'+id)
    .pipe(map( (res:any)=>{
      return res;
    }))
  }*/
}