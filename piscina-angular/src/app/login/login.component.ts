import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ApiService } from '../ApiService';
import { Persona, RespuestaValidar } from "../interfaces";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  dni: string = '';

  constructor(private api:ApiService, private router:Router) {

  }

  ngOnInit(): void {
  }

  validar(form:NgForm): void{
    let Per:Persona = <Persona>{
      dni:form.value.dni,
      contrasena:form.value.contrasena
    }
    this.api.validarLogin(Per).subscribe(data=>{
      if (data.acceso){
        alert("Usuario verificado");
      }
      else {
        alert("Usuario inválido");
      }
    })
  }
  redireccionar():void{
    this.router.navigate(['registro'])

  }


}
