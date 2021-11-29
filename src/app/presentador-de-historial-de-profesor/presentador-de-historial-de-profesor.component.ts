import { Component, OnInit } from '@angular/core';
import { Formulario } from '../shared/classes/Formulario';
import { Pregunta } from '../shared/classes/Pregunta';
import { Tesis } from '../shared/classes/Tesis';
import { DataService } from '../shared/services/DataService.service';
import {lowerCase, camelCase} from 'lodash-es';

@Component({
  selector: 'app-presentador-de-historial-de-profesor',
  templateUrl: './presentador-de-historial-de-profesor.component.html',
  styleUrls: ['./presentador-de-historial-de-profesor.component.css'],
})
export class PresentadorDeHistorialDeProfesorComponent implements OnInit {
  private _resultado: Tesis[] = [];
  private _director: Tesis[] = [];
  private _sinodal: Tesis[] = [];
  private _formulario: Formulario;
  private _autores: {nombre:string,index:number}[]=[];
  private _directores: {nombre:string,index:number}[]=[];
  private _sinodales: {nombre:string,index:number}[]=[];
  private _palabrasClave :{palabra:string, index:number}[]=[];
  

  constructor(private dataService: DataService) {
    const formularioBusqueda: Pregunta<string>[] = [
      new Pregunta<string>({
        key: 'consulta',
        label: 'Palabra o frase',
        type: 'text',
        required: true,
        controlType: 'text',
      }),
      new Pregunta<string>({
        key: 'filtro',
        label: 'Buscar por:',
        required: true,
        controlType:'dropdown',
        options: [
          { value: 'Año', key: 'year' },
          { value: 'Titulo', key: 'titulo' },
          { value: 'Autores', key: 'autores' },
          { value: 'Directores', key: 'directores' },
          { value: 'Sinodales', key: 'sinodales' },
          { value: 'Palabras clave', key: 'palabrasClave' },
          { value: 'Carrera', key: 'carrera' },
          { value: 'Grado', key: 'grado' },
        ],
      }),
    ];
    this._formulario=new Formulario(formularioBusqueda,'Buscar')
    dataService
      .getHistorial('1')
      .toPromise()
      .then((res: any) => {
        console.log(res);
        const i=0;
        res.director.forEach((tesis: any) => {
          this._director.push(dataService.toTesis(tesis));
        });
        res.sinodal.forEach((tesis: any) => {
          this._sinodal.push(dataService.toTesis(tesis));
        });
      });
  }

  buscar(datos: { formData: any; file: File | null })
  {
    console.log(datos.formData);
    const consulta= lowerCase(datos.formData.consulta);
    const filtro:string= datos.formData.filtro;
    this._resultado=[];
    console.log(filtro);
    
    this._director.forEach((tesis)=>{
      if(filtro=="autores" || filtro=="directores" || filtro=="sinodales" || filtro=="palabrasClave")
      {
        tesis[filtro].forEach((cadena)=>{
          if(lowerCase(cadena).includes(consulta))
            this._resultado.push(tesis);
        });
      }
      else if(filtro!='year')
      {
        if(lowerCase(tesis[filtro]).includes(consulta))
          this._resultado.push(tesis);
      }
      else
      {
        if(tesis[filtro].toString().includes(consulta))
          this._resultado.push(tesis);
      }

    });
  }

  ngOnInit(): void {}

  public get resultado(): Tesis[] {
    return this._resultado;
  }

  public get sinodal(): Tesis[] {
    return this._sinodal;
  }

  public get director(): Tesis[] {
    return this._director;
  }
  
  public get formulario() : Formulario {
    return this._formulario;
  }
  
}

