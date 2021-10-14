import { Component, OnInit } from '@angular/core';
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
  //variables de los datos del formulario
  private _numeroT : string = "";
  private _tituloT : string = "";
  private _integrantes : string[] = [];
  private _directores : string[] = [];
  private _sinodales : string[] = [];
  private _nArchivo : string = "";
  private _pClave : string[] = [];
  private _year : number = 0;
  private _carrera : string = "";
  private _grado : string = "";
  private _resumen : string = "";
  private tamArchivo : any = 0;
  constructor() {
    const formulario: Pregunta<string | number | boolean>[]=[
      new Pregunta<string>({
        key: 'nummT',
        label: 'Número de tesis',
        type: 'text',
        required: true,
        controlType: 'text',
        order: 0,
      }),
      new Pregunta<string>({
        key : 'tituloT',
        label : 'Título de tu tesis',
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
        label : 'Nombre de los directores de la tesis, separelos por comas (,)',
        type : 'text',
        required : true,
        controlType : 'text',
        order : 3,
      }),
      new Pregunta<string>({
        key : 'sinodales',
        label : 'Nombre de los sinodales asignados a la tesis, separelos por comas (,)',
        type : 'text',
        required : true,
        controlType : 'text',
        order : 4,
      }),
      new Pregunta<string>({
        key : 'archivoFinal',
        label : 'Archivo de tu tesis, asegurate de que sea PDF',
        type : 'file',
        required : true,
        controlType : 'file',
        order : 5,
      }),
      //versiones anteriores, queda en espera
      new Pregunta<string>({
        key : 'palabrasClave',
        label : 'Palabras clave que representan tu tesis, separelas por comas (,)',
        type : 'text',
        required : true,
        controlType : 'text',
        //7 dado las versiones anteriores
        order : 6,
      }),
      new Pregunta<number>({
        key : 'year',
        value : 2021,
        label : 'Año de tu tesis',
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
        label : 'Resumen de su tesis',
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
    //console.log(datos);
    var arr = [];
    let cadInteg : string;
    let direct : string;
    let sinodalesS : string;
    let pC : string;

    //Obtenemos la información que este en el formulario
    arr = Object.values(datos.formData);
    console.log(arr);
    //Ahora lo asignamos a las variables
    this._numeroT = arr[0];
    this._tituloT = arr[1];
    cadInteg = arr[2];
    this._integrantes = cadInteg.split(',');
    direct = arr[3];
    this._directores = direct.split(',');
    sinodalesS = arr[4];
    this._sinodales = sinodalesS.split(',');
    this._nArchivo = arr[5];
    pC = arr[6];
    this._pClave = pC.split(',');
    this._year = arr[7];
    this._carrera = arr[8];
    this._grado = arr[9];
    this._resumen = arr[10];
    this.tamArchivo = datos.file?.size;
    this.mostrarInformacion();
  }
  public get formulario():Formulario{
    return this._formulario;
  }
  public mostrarInformacion():void{
    console.log("Información de la tesis registrada: ");
    console.log("\nNumero: "+this._numeroT);
    console.log("\ntitulo: "+this._tituloT);
    console.log("\nintegrantes: ");
    for(let i in this._integrantes){
      console.log(this._integrantes[i]+"\n");
    }
    console.log("directores: \n");
    for(let i in this._directores){
      console.log(this._directores[i]+"\n");
    }
    console.log("sinodales: \n");
    for(let i in this._sinodales){
      console.log(this._sinodales[i]+"\n");
    }
    console.log("Nombre del archivo: "+this._nArchivo+" \n");
    console.log("Palabras clave: \n");
    for(let i in this._pClave){
      console.log(this._pClave[i]+" \n");
    }
    console.log("Año: "+this._year+" \n");
    console.log("Carrera: "+this._carrera+"\n");
    console.log("Grado: "+this._grado+"\n");
    console.log("Resumen: "+this._resumen+"\n");

  }
}

