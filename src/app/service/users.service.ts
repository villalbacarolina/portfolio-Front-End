//conecta back con front y operaciones
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class usersService {

  constructor(private http: HttpClient){}

  getData(): Observable<any> {
    return this.http.get('./assets/data/data.json')
  }

  postData(data : any){
    return this.http.post<any>('http://localhost:3000/', data)
    .pipe(map( (res:any)=>{
      return res;
    }))
  }

  /*actualiza*/
  putData(data:any, id:number){ 
    return this.http.put<any>('http://localhost:3000/'+id, data)
    .pipe(map( (res:any)=>{
      return res;
    }))
  }

  deleteData(id:number){ 
    return this.http.delete<any>('http://localhost:3000/'+id)
    .pipe(map( (res:any)=>{
      return res;
    }))
  }
}