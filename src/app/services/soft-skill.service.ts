import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoftSkillService {

  @Output() output: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient){}

  //routernavegate para datos, el id (?)

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
