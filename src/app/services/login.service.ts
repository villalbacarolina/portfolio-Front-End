import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'environments/environments.prod';
import { loginRequest } from '../model/loginRequest';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<User> = new BehaviorSubject<User>({id:0,email:''});
  
  constructor (private http: HttpClient){}

  login(credentials: loginRequest):Observable<User>{
    return this.http.get<User>('./assets/data/data.json').pipe(
      tap((UserData: User) =>{
        this.currentUserData.next(UserData);
        this.currentUserLoginOn.next(true);
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error:HttpErrorResponse){
    if(error.status===0)
      console.error("Se ha producido un error", error.error);
    else
      console.error("Backend retornó el código de estado", error.status, error.error);
    return throwError(()=> new Error("Algo falló. Por favor intente nuevamente"))
  }

  get userData(): Observable<User>{
    return this.currentUserData.asObservable();
  }

  get userLoginOn(): Observable<boolean>{
    return this.currentUserLoginOn.asObservable();
  }

  /*
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
  */
}
