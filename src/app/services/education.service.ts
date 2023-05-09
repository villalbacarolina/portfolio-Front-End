import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Education } from '../model/education';
import { environment } from 'environments/environments.prod';

@Injectable({
  providedIn: 'root'
})

export class EducationService {

  url:string = environment.apiURL;
  
  @Output() output: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient){}

  public getData(): Observable<Education[]>{
    return this.http.get<Education[]>(this.url + "estudios");
  }

  postData(data : any){
    return this.http.post<any>(this.url + "estudio/agregar", data)
    .pipe(map( (res:any)=>{
      return res;
    }))
  }

  putData(data:any, id:number){ 
    return this.http.put<any>(this.url + "estudio/editar/"+id, data)
    .pipe(map( (res:any)=>{
      return res;
    }))
  }

  
  deleteData(id:number){ 
    return this.http.delete<any>(this.url + 'estudio/eliminar/'+id)
    .pipe(map( (res:any)=>{
      return res;
    }))
  }

/*
  deleteData(education: Education):Observable<Education>{
    const url = `http://localhost:8080/estudio/eliminar/${education.id}`
    return this.http.delete<Education>(url);
  }
  */

}
  /*
  // despues haces todo igual en los otros
  url='localhost:8080/education/'

  constructor(private httpClient: HttpClient) { }

  public getData(): Observable<Education[]>{
    return this.httpClient.get<Education[]>(this.url + 'lista');
  }

  public userEducation(id: number): Observable<Education>{
    return this.httpClient.get<Education>(this.url + `detalles/${id}`); 
  }

  public postData(education: Education): Observable<any>{
    return this.httpClient.post<any>(this.url + 'agregar', education);
  }

  public editEducation(education: Education): Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', education);
  }
  
  // public edit(education: Education, id: number): Observable<any>{
  //   return this.httpClient.put<any>(this.url + 'editar/${id}', education);
  // }

  public deleteEducation(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `eliminar/${id}`);
  }
  */
