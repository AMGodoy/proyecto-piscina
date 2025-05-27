import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  dni: string = '';
  nombres: string='';
  apellidos: string='';
  celular: string='';
  clave: string='';
  claveRepeticion: string='';

  constructor() { }

  ngOnInit(): void {
  }
  registrar(): void{
    console.log(this.dni);
    console.log(this.nombres);
    console.log(this.apellidos);
    console.log(this.celular);
    console.log(this.clave);
    console.log(this.claveRepeticion);
  }

}
