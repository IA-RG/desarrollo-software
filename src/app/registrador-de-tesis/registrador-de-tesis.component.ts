import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Formulario } from '../shared/classes/Formulario';
import { Pregunta } from '../shared/classes/Pregunta';
import { Registrador } from '../shared/classes/Registrador';
import { DataService } from '../shared/services/DataService.service';

@Component({
  selector: 'app-registrador-de-tesis',
  templateUrl: './registrador-de-tesis.component.html',
  styleUrls: ['./registrador-de-tesis.component.css']
})
export class RegistradorDeTesisComponent implements OnInit {
  private _formulario: Formulario;
  private _nuevaTesis: Registrador[] = [];
  //variables de los datos del formulario
  private _numeroT: string = "";
  private _tituloT: string = "";
  private _integrantes: string[] = [];
  private _directores: string[] = [];
  private _sinodales: string[] = [];
  private _nArchivo: any = "";
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
  enlace: string[] = [];
  constructor(private dataService: DataService, private store: FirebaseApp, private _store: AngularFireStorage) {
    const formulario: Pregunta<string | number | boolean>[] = [
      new Pregunta<string>({
        key: 'nummT',
        label: 'Número de tesis',
        type: 'text',
        required: true,
        controlType: 'text',
        order: 0,
      }),
      new Pregunta<string>({
        key: 'tituloT',
        label: 'Título de tu tesis',
        type: 'text',
        required: true,
        controlType: 'text',
        order: 1,
      }),
      new Pregunta<string>({
        key: 'integrantes',
        label: 'Nombre de integrantes, separelos por comas (,)',
        type: 'text',
        required: true,
        controlType: 'text',
        order: 2,
      }),
      new Pregunta<string>({
        key: 'directores',
        label: 'Nombre de los directores de la tesis, separelos por comas (,)',
        type: 'text',
        required: true,
        controlType: 'text',
        order: 3,
      }),
      new Pregunta<string>({
        key: 'sinodales',
        label: 'Nombre de los sinodales asignados a la tesis, separelos por comas (,)',
        type: 'text',
        required: true,
        controlType: 'text',
        order: 4,
      }),
      new Pregunta<string>({
        key: 'archivoFinal',
        label: 'Archivo de tu tesis, asegurate de que sea PDF',
        type: 'file',
        required: true,
        controlType: 'file',
        order: 5,
      }),
      //versiones anteriores, queda en espera
      new Pregunta<string>({
        key: 'palabrasClave',
        label: 'Palabras clave que representan tu tesis, separelas por comas (,)',
        type: 'text',
        required: true,
        controlType: 'text',
        //7 dado las versiones anteriores
        order: 6,
      }),
      new Pregunta<number>({
        key: 'year',
        value: 2021,
        label: 'Año de tu tesis',
        type: 'number',
        required: true,
        controlType: 'number',
        order: 7,
        minimo: 1993,
        maximo: 2025,
        step: 1,
      }),
      new Pregunta<string>({
        key: 'carrera',
        label: 'Carrera',
        type: 'text',
        required: true,
        controlType: 'text',
        order: 8
      }),
      new Pregunta<string>({
        key: 'grado',
        label: 'Grado a obtener',
        type: 'text',
        required: true,
        controlType: 'text',
        order: 9,
      }),
      new Pregunta<string>({
        key: 'resumen',
        label: 'Resumen de su tesis',
        type: 'text',
        required: true,
        controlType: 'text',
        order: 10,
      })
    ];
    this._formulario = new Formulario(formulario, 'Registro de tesis');
    this._formulario.obtenerGrupo();
  }

  ngOnInit(): void { }
  capturarDatos(datos: { formData: Object; file: File | null }) {
    //console.log(datos);
    var arr = [];
    let cadInteg: string;
    let direct: string;
    let sinodalesS: string;
    let pC: string;

    //Obtenemos la información que este en el formulario
    arr = Object.values(datos.formData);
    //console.log(arr);
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
    this._tipoArchivo = datos.file?.type;
    this.file = datos.file;
    //console.log(this.file);
    //this.mostrarInformacion();
    this.limpiaMensajes();
    this.validaDatos();
  }
  public get formulario(): Formulario {
    return this._formulario;
  }
  public mostrarInformacion(): void {
    console.log("Información de la tesis registrada: ");
    console.log("\nNumero: " + this._numeroT);
    console.log("\ntitulo: " + this._tituloT);
    console.log("\nintegrantes: ");
    for (let i in this._integrantes) {
      console.log(this._integrantes[i] + "\n");
    }
    console.log("directores: \n");
    for (let i in this._directores) {
      console.log(this._directores[i] + "\n");
    }
    console.log("sinodales: \n");
    for (let i in this._sinodales) {
      console.log(this._sinodales[i] + "\n");
    }
    console.log("Nombre del archivo: " + this._nArchivo + " \n");
    console.log("Palabras clave: \n");
    for (let i in this._pClave) {
      console.log(this._pClave[i] + " \n");
    }
    console.log("Año: " + this._year + " \n");
    console.log("Carrera: " + this._carrera + "\n");
    console.log("Grado: " + this._grado + "\n");
    console.log("Resumen: " + this._resumen + "\n");
    console.log("tamaño del arhivo: " + this.tamArchivo);
    console.log("\nLong de los integrantes: " + this._integrantes.length);

  }
  public validaDatos(): void {
    //Comprobaremos si los datos proporcionados por el uusario en el formulario son correctos

    //Comprobamos el numero de la tesis
    if (this._numeroT.length < 5 || this._numeroT.startsWith(' ')) {
      //el numero de tesis no corresponde con los parametros marcados
      this.mensajes.push("El número de tesis no cuenta con la longitud minima de 5 caracteres.");
    }
    //comprobamos de que el titulo debe de ser mayor a 20 con la finalidad de obtener el titulo del trabajo completo
    if (this._tituloT.length < 20) {
      this.mensajes.push("El número de la longitud del titulo no corresponde con el minimo requerido de 20 caracteres.");
    }
    //debemos de considerar el caso de que sean los integrantes de uno hasta 4
    if (this._integrantes.length < 1 || this._integrantes.length > 4 || this._integrantes.length === 0) {
      this.mensajes.push("El número de integrantes no es correcto, dado que solo se acepta el siguiente rango de un caracter hasta 4 caracteres.");
    }
    //para los sinodales y directores serían el mismo, minimo es uno maximo 2 para los directires y 3 como maximo para los sinodales
    if (this._directores.length < 1 || this._directores.length > 4 || this._directores.length === 0) {
      this.mensajes.push("El número de directores no corresponde con el rango aceptado de un caracter hasta 2 caracteres.");

    }
    //para los sinodales
    if (this._sinodales.length < 1 || this._sinodales.length > 4 || this._sinodales.length === 0) {
      this.mensajes.push("El número de sinodales no corresponda al rango aceptado de hasta maximo 3 sinodales.");
    }

    if (this._pClave.length < 1 && this._pClave.length > 2) {
      this.mensajes.push("Las palabras clave no son aceptadas, dado que no hay o no estan bien definidas.");
    }
    if (this._tipoArchivo != "application/pdf") {
      this.mensajes.push("El tipo del archivo no es PDF.");
    }
    //rango del tamaño del archivo 
    if (this.tamArchivo < 300000 || this.tamArchivo > 3000000) {
      this.mensajes.push("El tamaño del archivo no es aceptado de 600 KB hasta 3000 KB.");
    }
    /*
    Estos datos son dados los que yo encontre a lo largo de diferentes tesis
    653824
    2755714
    de modo que podemos hacer un minimo de 300000 hasta 3000000
     */
    //Comprobamos que si no hay mensajes que mostrar pasamos a la siguiente fase
    if (this.mensajes.length != 0) {
      console.log("ERRORES:\n" + this.mensajes);
      this.mostrar = true;
      this.val = 1;
      console.log(this.mostrar);
    } else {
      console.log("TODA LA INFORMACIÓN ES CORRECTA :)");
      this.mostrar = false;
      this.val = 2;
      this.pruebaFIRE();
      window.scrollTo(0, 0);
      const elemento = <HTMLElement>document.getElementById("form");
      elemento.style.display = 'none';
      window.setTimeout(()=>{
        const contenedor = <HTMLElement>document.getElementById("contenedor_carga");
        const spinner = <HTMLElement>document.getElementById("carga");
        spinner.style.display = 'none';
        const mostrarControles = <HTMLElement>document.getElementById("controles");
        mostrarControles.style.display = 'flex';
      }, 4000);

      //antes debemos de almacenar el archivo
      //console.log("enlace",this._nArchivo)

    }
  }
  public limpiaMensajes(): void {
    this.mensajes = [];
    this.enlace = [];
  }
  public enviaDatosAbase(): void {
    const infoFormulario = {
      'numeroDeTT': this._numeroT,
      'titulo': this._tituloT,
      'autores1': this._integrantes.join(','),
      'directores': this._directores.join(','),
      'sinodales': this._sinodales.join(','),
      'enlace': this._nArchivo,
      'palabrasClave': this._pClave.join(','),
      'year': this._year,
      'carrera': this._carrera,
      'grado': this._grado,
      'resumen': this._resumen
    };
    this.dataService.guardarTesis(infoFormulario);
  }
  public pruebaFIRE() {
    const file = this.file;
    const storage = this.store.storage();
    const ref = storage.ref('pdf/' + file.name);
    const uplad = ref.put(file);
    let enlaceGuardado: string[] = [];
    let i = 0;
    const fileRef = this._store.ref("pdf/" + file.name);
    const task = this._store.upload("pdf/" + file.name, file);
    /*uplad.on('state-changed', function (snapshot) {
      console.log((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    }, function (error) { console.log(error) },  ()=> {
      uplad.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        //console.log("ENLACE: ", downloadURL);
        enlaceGuardado.push(downloadURL);
        console.log(enlaceGuardado[0])
      });
      
    });*
    /*this.enviaDatosAbase();
    this.limpiaMensajes();*/
    task.snapshotChanges().pipe(finalize(async () => {
      this.enlace.push(
        await fileRef.getDownloadURL().toPromise().catch((error) => {}).catch((error) => {})
      );
      //console.log(this.enlace);
      let cadena = this.enlace[i];
      this._nArchivo = cadena;
      this.enviaDatosAbase();
      this.limpiaMensajes();
      this.enviaDatosAbase();
    })).subscribe();


  }
}

/*
3cm14ingdesoft
lkMIO99.&#
 */

//Ejemplo de funcion para subir el archivo en firestore
/*
    uplad.on('state_changed', function (snapshot) {
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      //alert(progress);
    },
      function (error) {
        console.log(error);
      },
      function () {
        uplad.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          //console.log("ENLACE: ", downloadURL);
          enlaceGuardado.push (downloadURL);

          //onsole.log("ENLACE GUARDADO: "+enlaceGuardado);
        });
        //console.log(uplad.snapshot.ref.getDownloadURL());
      });*/