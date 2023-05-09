import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environments.prod';
import { HardSkill } from '../model/hard-skill';

@Injectable({
  providedIn: 'root'
})

export class HardSkillService {
  
  url:string = environment.apiURL;
  
  @Output() output: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient){}

  public getData(): Observable<HardSkill[]>{
    return this.http.get<HardSkill[]>(this.url + "hard-skills");
  }

  postData(data : any){
    return this.http.post<any>(this.url + "hard-skill/agregar", data)
    .pipe(map( (res:any)=>{
      return res;
    }))
  }

  putData(data:any, id:number){ 
    return this.http.put<any>(this.url + "hard-skill/editar/"+id, data)
    .pipe(map( (res:any)=>{
      return res;
    }))
  }

  
  deleteData(id:number){ 
    return this.http.delete<any>(this.url + 'hard-skill/eliminar/'+id)
    .pipe(map( (res:any)=>{
      return res;
    }))
  }

}