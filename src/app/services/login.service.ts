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


  /*INTENTO 2 DE LOGIN*/
  
  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<User> = new BehaviorSubject<User>({id:0,email:''});
  url:string = environment.apiURL;
  
  constructor (private http: HttpClient){}

  login(credentials: loginRequest):Observable<User>{
    return this.http.get<User>('../../assets/data/data.json').pipe(
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
  


  /*INTENTO 1 DE LOGIN*/
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

  login():Observable<any>{
    //console.log("Datos entraron el servicio "+data)
    return this.http.get<any>('././assets/data/data.json')
         .pipe(
            tap(
                res=>{
                  console.log(res)
                  console.log(res.email==data.email)
                } 
            )
          )
          
  }*/
}
