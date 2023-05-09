import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environments.prod';
import { SoftSkill } from '../model/soft-skill';

@Injectable({
  providedIn: 'root'
})

export class SoftSkillService {
  url:string = environment.apiURL;
  
  @Output() output: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient){}

  public getData(): Observable<SoftSkill[]>{
    return this.http.get<SoftSkill[]>(this.url + "soft-skills");
  }

  postData(data : any){
    return this.http.post<any>(this.url + "soft-skill/agregar", data)
    .pipe(map( (res:any)=>{
      return res;
    }))
  }

  putData(data:any, id:number){ 
    return this.http.put<any>(this.url + "soft-skill/editar/"+id, data)
    .pipe(map( (res:any)=>{
      return res;
    }))
  }

  
  deleteData(id:number){ 
    return this.http.delete<any>(this.url + 'soft-skill/eliminar/'+id)
    .pipe(map( (res:any)=>{
      return res;
    }))
  }
  
}