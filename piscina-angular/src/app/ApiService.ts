import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { Persona, RespuestaValidar } from "./interfaces";
import { retry, catchError } from "rxjs/operators";

@Injectable({ providedIn: 'root'})
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json;charset=utf-8'
      }
    )
  };

  errorHandl(error: any) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = 'Error code : ${error.status}\n Message: ${error.message} ';
    }

    console.log(errorMessage);
    return throwError(errorMessage);
  }

  constructor(private http: HttpClient) {

  }

  //Parametro una interfaz login
  //Devuelve una interfaz respuesta
  validarLogin(per : Persona): Observable<RespuestaValidar>
  {
    return this.http.post<RespuestaValidar>('http://127.0.0.1:8080/validar-persona',per,this.httpOptions).pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

}
