import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class EducationService {

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
  }
}
  /*
  // despues haces todo igual en los otros
  url='localhost:8080/education/'

  constructor(private httpClient: HttpClient) { }

  public allEducations(): Observable<Education[]>{
    return this.httpClient.get<Education[]>(this.url + 'lista');
  }

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
  */
