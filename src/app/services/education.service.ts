import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../model/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  // despues haces todo igual en los otros
  url='localhost:8080/education/'

  constructor(private httpClient: HttpClient) { }

  public allEducations(): Observable<Education[]>{
    return this.httpClient.get<Education[]>(this.url + 'lista');
  }

  // public userEducations(id: number): Observable<Education[]>{
  //   return this.httpClient.get<Education[]>(this.url + `usuario/${id}/estudios`);
  // }

  public userEducation(id: number): Observable<Education>{
    return this.httpClient.get<Education>(this.url + `detalles/${id}`); 
  }

  public addEducation(education: Education): Observable<any>{
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

}
