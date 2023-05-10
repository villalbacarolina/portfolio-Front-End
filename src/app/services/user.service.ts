import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environments.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User | undefined;
  private login$=new BehaviorSubject<boolean>(false);
  private url:string = environment.apiURL;

  constructor(private http:HttpClient){ }

  getStatusLogin(){
    return this.login$.asObservable();
  }

  setStatusLogin(status:boolean){
    this.login$.next(status);
  }
    // ( sessionStorage.getItem("user_name")==null) ? this.EstadoLogin=true : this.EstadoLogin=false

  login(data:any):Observable<any>{
    console.log(data)
    this.user=new User(data.username,data.password)
      //  this.user.setEmail(dato.username);
      // this.user.setPassword(dato.password)      
      //http://localhost:8080
    return this.http.post<any>(this.url+'/login',this.user)
         .pipe(
            tap(
                res=>{
                  console.log(res)
                }
            )
          )
  }
}
