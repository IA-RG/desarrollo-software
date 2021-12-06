import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Formulario } from '../shared/classes/Formulario';
import { Pregunta } from '../shared/classes/Pregunta';
import { Registrador } from '../shared/classes/Registrador';
import { DataService } from '../shared/services/DataService.service';


@Component({
  selector: 'app-registrador-propuestas',
  templateUrl: './registrador-propuestas.component.html',
  styleUrls: ['./registrador-propuestas.component.css']
})
export class RegistradorPropuestasComponent implements OnInit {
  private _formulario: Formulario;
  private _protocolo: Registrador[] = [];

  private _tituloProto: string = "";
  private _integrantes: string[] = [];
  private _directores: string[] = [];
  private _sinodales: string[] = [];
  private _nArchivo: string = "";
  private _pClave: string[] = [];
  private _year: number = 0;
  private _carrera: string = "";
  private _grado: string = "";
  private _resumen: string = "";
  private tamArchivo: any = 0;
  private _tipoArchivo: any = "";
  private file: any = "";
  progress: number[] = [];
  mensajes: string[] = [];
  mostrar = false;
  val: number = 0;
  private _result: any;
  enlace: string[] = [];
  constructor(private dataService: DataService, private store: FirebaseApp, private _store: AngularFireStorage) {
    const formulario: Pregunta<string | number | boolean>[] = [
      new Pregunta<string>({
        key: 'tituloProtocolo',
        label: 'Titulo del protocolo de tesis',
        type: 'text',
        required: true,
        controlType: 'text',
        order: 0,
      }),
      new Pregunta<string>({
        key: 'Integrante1Nombre',
        label: 'Nombre del primer integrante',
        type: 'text',
        required: true,
        controlType: 'text',
        order: 1,
      }),
      new Pregunta<string>({
        key: 'Integrnate1ApPat',
        label: 'Apellido paterno del primer integrante',
        type: 'text',
        required: true,
        controlType: 'text',
        order: 2,
      }),
      new Pregunta<string>({
        key: 'Integrante1ApMat',
        label: 'Apellido materno del primer integrante',
        type: 'text',
        required: true,
        controlType: 'text',
        order: 3,
      }),//Segundo integrante 
      new Pregunta<string>({
        key: 'Integrante2Nombre',
        label: 'Nombre del segundo integrante',
        type: 'text',
        required: false,
        controlType: 'text',
        order: 4,
      }),
      new Pregunta<string>({
        key: 'Integrnate2ApPat',
        label: 'Apellido paterno del segundo integrante',
        type: 'text',
        required: false,
        controlType: 'text',
        order: 5,
      }),
      new Pregunta<string>({
        key: 'Integrant2ApMat',
        label: 'Apellido materno del segundo integrante',
        type: 'text',
        required: false,
        controlType: 'text',
        order: 6,
      }),//Tercer integrante
      new Pregunta<string>({
        key: 'Integrante3Nombre',
        label: 'Nombre del tecrer integrante',
        type: 'text',
        required: false,
        controlType: 'text',
        order: 7,
      }),
      new Pregunta<string>({
        key: 'Integrnate3ApPat',
        label: 'Apellido paterno del tercer integrante',
        type: 'text',
        required: false,
        controlType: 'text',
        order: 8,
      }),
      new Pregunta<string>({
        key: 'Integrant3ApMat',
        label: 'Apellido materno del tercer integrante',
        type: 'text',
        required: false,
        controlType: 'text',
        order: 9,
      }),//Inicio de los directores
      new Pregunta<string>({
        key: 'Director1Nombre',
        label: 'Mombre del primer director',
        type: 'text',
        required: true,
        controlType: 'text',
        order: 10,
      }),
      new Pregunta<string>({
        key: 'Director1ApPat',
        label: 'Apellido paterno del primer director',
        type: 'text',
        required: true,
        controlType: 'text',
        order: 11,
      }),
      new Pregunta<string>({
        key: 'Director1ApMat',
        label: 'Apellido materno del primer director',
        type: 'text',
        required: true,
        controlType: 'text',
        order: 12,
      }),//Segundo director
      new Pregunta<string>({
        key: 'Director2Nombre',
        label: 'Mombre del segundo director',
        type: 'text',
        required: false,
        controlType: 'text',
        order: 13,
      }),
      new Pregunta<string>({
        key: 'Director2ApPat',
        label: 'Apellido paterno del segundo director',
        type: 'text',
        required: false,
        controlType: 'text',
        order: 14,
      }),
      new Pregunta<string>({
        key: 'Director2ApMat',
        label: 'Apellido materno del segundo director',
        type: 'text',
        required: false,
        controlType: 'text',
        order: 15,
      }),//Primer Sinodal
      new Pregunta<string>({
        key: 'Sinodal1Nombre',
        label: 'Nombre del primer sinodal',
        type: 'text',
        required: true,
        controlType: 'text',
        order: 16,
      }),
      new Pregunta<string>({
        key: 'Sinodal1ApPat',
        label: 'Apellido paterno del primer sinodal',
        type: 'text',
        required: true,
        controlType: 'text',
        order: 17,
      }),
      new Pregunta<string>({
        key: 'Sinodal1ApMat',
        label: 'Apellido materno del primer sinodal',
        type: 'text',
        required: true,
        controlType: 'text',
        order: 18,
      }),
      new Pregunta<string>({
        key: 'Sinodal2Nombre',
        label: 'Nombre del segundo sinodal',
        type: 'text',
        required: false,
        controlType: 'text',
        order: 19,
      }),
      new Pregunta<string>({
        key: 'Sinodal2ApPat',
        label: 'Apellido paterno del segundo sinodal',
        type: 'text',
        required: false,
        controlType: 'text',
        order: 20,
      }),
      new Pregunta<string>({
        key: 'Sinodal2ApMat',
        label: 'Apellido materno del segundo sinodal',
        type: 'text',
        required: false,
        controlType: 'text',
        order: 21,
      }),
      new Pregunta<string>({
        key: 'Sinodal3Nombre',
        label: 'Nombre del tercer sinodal',
        type: 'text',
        required: false,
        controlType: 'text',
        order: 22,
      }),
      new Pregunta<string>({
        key: 'Sinodal3ApPat',
        label: 'Apellido paterno del tercer sinodal',
        type: 'text',
        required: false,
        controlType: 'text',
        order: 23,
      }),
      new Pregunta<string>({
        key: 'Sinodal3ApMat',
        label: 'Apellido materno del tercer sinodal',
        type: 'text',
        required: false,
        controlType: 'text',
        order: 24,
      }),//Archivo del protocolo
      new Pregunta<string>({
        key: 'archivoProtocolo',
        label: 'Archivo de tu protocolo, asegurate de que sea PDF',
        type: 'file',
        required: true,
        controlType: 'file',
        order: 25,
      }),//Palabras clave
      new Pregunta<string>({
        key: 'palabrasClaveProtocolo',
        label: 'Palabras clave que representan a tu protocolo, separelas por comas (,)',
        type: 'text',
        required: true,
        controlType: 'text',
        order: 26,
      }),
      new Pregunta<number>({
        key: 'yearProtocolo',
        value: 2021,
        label: 'Año del protocolo',
        type: 'number',
        required: true,
        controlType: 'number',
        order: 27,
        minimo: 1993,
        maximo: 2025,
        step: 1,
      }), //Carrera
      new Pregunta<string>({
        key: 'carreraProtocolo',
        label: 'Carrera',
        type: 'text',
        required: true,
        controlType: 'text',
        order: 28,
      }), //Grado
      new Pregunta<string>({
        key: 'gradoProtocolo',
        label: 'Grado a obtener',
        type: 'text',
        required: true,
        controlType: 'text',
        order: 29,
      }),
      new Pregunta<string>({
        key: 'resumenProtocolo',
        label: 'Resumen del protocolo de tesis',
        type: 'text',
        required: true,
        controlType: 'text',
        order: 30
      })
    ];
    this._formulario = new Formulario(formulario, 'Registro de protocolos');
    this._formulario.obtenerGrupo();

  }

  ngOnInit(): void {
  }

  capturarDatos(datos: { formData: Object, file: File | null }) {
    console.log(datos);
    var arr = [];
    let nombre: string[] = [];
    let cadena = "";
    let pC: string;
    //Obtenemos la información que retorne el formulario
    arr = Object.values(datos.formData);
    this._tituloProto = arr[0];
    if (arr[1] != '' && arr[2] != '' && arr[3] != '') {//Primer integrante
      nombre.push(arr[1]);
      nombre.push(arr[2]);
      nombre.push(arr[3]);
      cadena = nombre.join(',');
      this._integrantes.push(cadena);
    }
    nombre = [];
    cadena = "";
    if (arr[4] != '' && arr[5] != '' && arr[6] != '') {//Segundo integrante
      nombre.push(arr[4]);
      nombre.push(arr[5]);
      nombre.push(arr[6]);
      cadena = nombre.join(',');
      this._integrantes.push(cadena);
    }
    nombre = [];
    cadena = "";
    if (arr[7] != '' && arr[8] != '' && arr[9] != '') {//Tercer integrante
      nombre.push(arr[7]);
      nombre.push(arr[8]);
      nombre.push(arr[9]);
      cadena = nombre.join(',');
      this._integrantes.push(cadena);
    }
    nombre = [];
    cadena = "";
    //Directores
    if (arr[10] != '' && arr[11] != '' && arr[12] != '') {//Primer director
      nombre.push(arr[10]);
      nombre.push(arr[11]);
      nombre.push(arr[12]);
      cadena = nombre.join(',');
      this._directores.push(cadena);
    }
    nombre = [];
    cadena = "";
    if (arr[13] != '' && arr[14] != '' && arr[15] != '') {//Segundo director
      nombre.push(arr[13]);
      nombre.push(arr[14]);
      nombre.push(arr[15]);
      cadena = nombre.join(',');
      this._directores.push(cadena);
    }
    nombre = [];
    cadena = "";
    //Sinodales
    if (arr[16] != '' && arr[17] != '' && arr[18] != '') {//Primer sindoal
      nombre.push(arr[16]);
      nombre.push(arr[17]);
      nombre.push(arr[18]);
      cadena = nombre.join(',');
      this._sinodales.push(cadena);
    }
    nombre = [];
    cadena = "";
    if (arr[19] != '' && arr[20] != '' && arr[21] != '') {//Segundo sindoal
      nombre.push(arr[19]);
      nombre.push(arr[20]);
      nombre.push(arr[21]);
      cadena = nombre.join(',');
      this._sinodales.push(cadena);
    }
    nombre = [];
    cadena = "";
    if (arr[22] != '' && arr[23] != '' && arr[24] != '') {//Tercer sindoal
      nombre.push(arr[22]);
      nombre.push(arr[23]);
      nombre.push(arr[24]);
      cadena = nombre.join(',');
      this._sinodales.push(cadena);
    }
    nombre = [];
    cadena = "";

    this._nArchivo = arr[25];
    pC = arr[26];
    this._pClave = pC.split(',');
    this._year = arr[27];
    this._carrera = arr[28];
    this._grado = arr[29];
    this._resumen = arr[30];
    this.tamArchivo = datos.file?.size;
    this._tipoArchivo = datos.file?.type;
    this.file = datos.file;

    arr = [];
    nombre = [];
    cadena = "";

    this.limpiaMensajes();
    this.validaDatos();
  }

  public get formulario(): Formulario {
    return this._formulario;
  }

  public limpiaMensajes(){
      this.mensajes = [];
      this.enlace = [];
  }
  public validaDatos():void{
    var regexPalabras = new RegExp('^\S+$');
    if(this._tituloProto.length < 10 || this._tituloProto.length > 300){
      this.mensajes.push("El número de la longitud del titulo no es aceptado, debe entrar en el siguiente intervalo: de 10 hasta 300 caracteres, usted ingreso: "+this._tituloProto.length+" .");
    }
    if(this._integrantes.length < 1 || this._integrantes.length > 3){
      this.mensajes.push("El número de integrantes no es correcto, debe de estar registrados minimo 1 hasta 3 integrantes por protocolo.");
    }
    if(this._directores.length < 1 || this._directores.length > 2){
      this.mensajes.push("El número de directores no es correcto, debe de estar registrados minimo un director hasta 2 directores por protocolo.");
    }
    if(this._sinodales.length < 1 || this._sinodales.length > 3){
      this.mensajes.push("El número de sinodales no es correcto, debe de estar registrados minimo 1 hasta 3 sinodales por protocolo.");
    }
    //Palabras clave - terminar
    if (this.tamArchivo < 300000 || this.tamArchivo > 6000000){
      var tam = ['Byte', 'KB', 'MB'];
      if (this.tamArchivo == 0) {
        this.mensajes.push("El tamaño del archivo no es aceptado de 600 KB hasta 3000 KB, el que agregaste tiene este tamaño: " + this.tamArchivo + " Byte");
      } else {
        let tamano: number = parseInt(this.tamArchivo);
        let i = Math.floor(Math.log(tamano) / Math.log(1024));
        this.mensajes.push("El tamaño del archivo no es aceptado de 600 KB hasta 3000 KB, el que agregaste tiene este tamaño: " + Math.round(tamano / Math.pow(1024, i)) + " " + tam[i]);
      }
    }
    if(this._resumen.length < 50 || this._resumen.length > 400){
      this.mensajes.push("La longitud del resumen del protocolo no corresponde con la cantidad maxima y minima del mismo, la cual es de 50 hasta 400 caracteres.");;
    }
    if(this._carrera.length < 10 || this._carrera.length > 200){
      this.mensajes.push("la longitud de la carrera no es aceptada, dado que no entra en el rango de 10 hasta 200 caracteres.");
    }
    if(this._grado.length < 10 || this._grado.length > 50){
      this.mensajes.push("La longitud del grado no es aceptado, dado que no entra en el rango de 10 hasta 50 caracteres.");
    }

    if(this.mensajes.length != 0){
      window.scrollTo(0,0);
      console.error("Errores: \n"+this.mensajes);
      this.mostrar = true;
      this.val = 1;
      //this.resetVariables();
    }else{
      this.mostrar = false;
      this.val = 2;
      this.subidaArchivo();
      const elemento = <HTMLElement>document.getElementById("form");
      elemento.style.display = 'none';
      window.setTimeout(() => {
        const contenedor = <HTMLElement>document.getElementById("contenedor_carga");
        const spinner = <HTMLElement>document.getElementById("carga");
        spinner.style.display = 'none';
        const mostrarControles = <HTMLElement>document.getElementById("controles");
        mostrarControles.style.display = 'flex';
      }, 4000);
    }
  }

  public subidaArchivo(){
    const file = this.file;
    const storage = this.store.storage();
    const ref = storage.ref('pdf/protocolos/'+file.name);
    const fileRef = this._store.ref('pdf/protocolos/'+this.file.name);
    const task = this._store.upload('pdf/protocolos/'+file.name, file);
    task.snapshotChanges().pipe(finalize(async()=>{
      this.enlace.push(
        await fileRef.getDownloadURL().toPromise().catch((error)=>{console.error(error);}).catch((error)=>{console.error(error);})
      );
      let cadena  = this.enlace[1];
      this._nArchivo = cadena;
      this.enviaDatosBase();
      this.limpiaMensajes();
      this.resetVariables();
    })).subscribe();
  }

  public enviaDatosBase(){
    const infoForm={
      'titulo' : this._tituloProto,
      'autores' : this._integrantes,
      'directores' : this._directores,
      'sinodales' : this._sinodales,
      'enlace' : this.enlace,
      'palabrasClave' : this._pClave.join(','),
      'year' : this._year,
      'carrera' : this._carrera,
      'grado' : this._grado,
      'resumen' : this._resumen
    };
    console.log(infoForm);
    this.dataService.guardarProtocolo(infoForm);
  }
  public resetVariables(){
    this._tituloProto = "";
    this._integrantes = [];
    this._directores = [];
    this._sinodales = [];
    this._pClave = [];
    this._year = 0;
    this._carrera = "";
    this._grado = "";
    this._resumen = "";
  }

}

