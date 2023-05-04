import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AboutMeService {

  @Output() output: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient){}

  getData(): Observable<any> {
    return this.http.get('http://localhost:3000/posts')
  }

  putData(data:any, id:number){ 
    return this.http.put<any>('http://localhost:3000/posts/'+id, data)
    .pipe(map( (res:any)=>{
      return res;
    }))
  }
  
}