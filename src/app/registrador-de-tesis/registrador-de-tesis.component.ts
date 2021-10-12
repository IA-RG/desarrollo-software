import { Component, OnInit } from '@angular/core';
import { text } from '@fortawesome/fontawesome-svg-core';
import { min } from 'lodash';
import { Formulario } from '../shared/classes/Formulario';
import { Pregunta } from '../shared/classes/Pregunta';
//import { PreguntaNumber } from '../shared/classes/PreguntaNumber';
import { Registrador } from '../shared/classes/Registrador';

@Component({
  selector: 'app-registrador-de-tesis',
  templateUrl: './registrador-de-tesis.component.html',
  styleUrls: ['./registrador-de-tesis.component.css']
})
export class RegistradorDeTesisComponent implements OnInit  {
  private _formulario: Formulario;
  private _nuevaTesis : Registrador[] = [];
  constructor() {
    const formulario: Pregunta<string | number | boolean>[]=[
      new Pregunta<string>({
        key: 'nummTT',
        label: 'Número de TT',
        type: 'text',
        required: true,
        controlType: 'text',
        order: 0,
      }),
      new Pregunta<string>({
        key : 'tituloTT',
        label : 'Título de tu TT',
        type : 'text',
        required : true,
        controlType : 'text',
        order : 1,
      }),
      new Pregunta<string>({
        key : 'integrantes',
        label : 'Nombre de integrantes, separelos por comas (,)',
        type : 'text',
        required : true,
        controlType : 'text',
        order : 2,
      }),
      new Pregunta<string>({
        key : 'directores',
        label : 'Nombre de los directores del TT, separelos por comas (,)',
        type : 'text',
        required : true,
        controlType : 'text',
        order : 3,
      }),
      new Pregunta<string>({
        key : 'sinodales',
        label : 'Nombre de los sinodales asignados al TT, separelos por comas (,)',
        type : 'text',
        required : true,
        controlType : 'text',
        order : 4,
      }),
      new Pregunta<string>({
        key : 'archivoFinal',
        label : 'Archivo de tu TT, asegurate de que sea PDF',
        type : 'file',
        required : true,
        controlType : 'file',
        order : 5,
      }),
      //versiones anteriores, queda en espera
      new Pregunta<string>({
        key : 'palabrasClave',
        label : 'Palabras clave que representan al TT, separelas por comas (,)',
        type : 'text',
        required : true,
        controlType : 'text',
        //7 dado las versiones anteriores
        order : 6,
      }),
      new Pregunta<number>({
        key : 'year',
        value : 2021,
        label : 'Año de tu TT',
        type : 'number',
        required : true,
        controlType : 'number',
        order : 7,
        minimo : 1993,
        maximo : 2025,
        step : 1,
      }),
      new Pregunta<string>({
        key : 'carrera',
        label : 'Carrera',
        type : 'text',
        required : true,
        controlType : 'text',
        order : 8
      }),
      new Pregunta<string> ({
        key : 'grado',
        label : 'Grado a obtener',
        type : 'text',
        required : true,
        controlType : 'text',
        order : 9,
      }),
      new Pregunta<string>({
        key : 'resumen',
        label : 'Resumen de su TT',
        type : 'text',
        required : true,
        controlType : 'text',
        order : 10,
      })
    ];
    this._formulario = new Formulario(formulario, 'Registro de tesis');
    this._formulario.obtenerGrupo();
   }

  ngOnInit(): void {  }
  capturarDatos(datos : {formData: Object; file: File | null}){
    console.log(datos);
  }
  public get formulario():Formulario{
    return this._formulario;
  }
  
}
