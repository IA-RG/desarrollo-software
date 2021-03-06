import { Component, OnInit } from '@angular/core';
import { Formulario } from '../shared/classes/Formulario';
import { Pregunta } from '../shared/classes/Pregunta';
import { PreguntaCheckBox } from '../shared/classes/PreguntaDeFiltro';
import { Tesis } from '../shared/classes/Tesis';
import { VersionDeArchivo } from '../shared/classes/VersionDeArchivo';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../shared/services/DataService.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent implements OnInit {
  private _resultado: Tesis[] = [];
  private _filtros: string[] = [];
  private _consulta: string = '';
  private _formulario: Formulario;
  private _faChevronDown = faChevronDown;
  private _faChevronUp = faChevronUp;
  private _error: string = '';
  private _huboError: boolean = false;
  private _busquedaIniciada: boolean = false;
  profesores: any;

  constructor(private dataService: DataService) {
    const formulario: Pregunta<string | boolean>[] = [
      new Pregunta<string>({
        key: 'consulta',
        label: 'Palabra o frase',
        type: 'text',
        required: true,
        controlType: 'text',
        order: 0,
      }),
      new PreguntaCheckBox({
        value: true,
        key: 'autores',
        controlType: 'checkbox',
        label: 'Autores',
        order: 1,
        type: 'checkbox',
      }),
      new PreguntaCheckBox({
        value: true,
        key: 'titulo',
        controlType: 'checkbox',
        label: 'Titulo',
        order: 2,
        type: 'checkbox',
      }),
      new PreguntaCheckBox({
        value: true,
        key: 'directores',
        controlType: 'checkbox',
        label: 'Directores',
        order: 3,
        type: 'checkbox',
      }),
      new PreguntaCheckBox({
        value: true,
        key: 'sinodales',
        controlType: 'checkbox',
        label: 'Sinodales',
        order: 4,
        type: 'checkbox',
      }),
      new PreguntaCheckBox({
        value: true,
        key: 'palabrasClave',
        controlType: 'checkbox',
        label: 'Palabras clave',
        order: 5,
        type: 'checkbox',
      }),
      new PreguntaCheckBox({
        value: true,
        key: 'year',
        controlType: 'checkbox',
        label: 'A??o',
        order: 6,
        type: 'checkbox',
      }),
      new PreguntaCheckBox({
        value: true,
        key: 'carrera',
        controlType: 'checkbox',
        label: 'Carrera',
        order: 7,
        type: 'checkbox',
      }),
      new PreguntaCheckBox({
        value: true,
        key: 'grado',
        controlType: 'checkbox',
        label: 'Grado',
        order: 8,
        type: 'checkbox',
      }),
      new PreguntaCheckBox({
        value: true,
        key: 'resumen',
        controlType: 'checkbox',
        label: 'Resumen',
        order: 9,
        type: 'checkbox',
      }),
    ];
    this._formulario = new Formulario(formulario, 'B??squeda de tesis');
    this._formulario.obtenerGrupo();
  }

  ngOnInit(): void {}

  mostrarContenido(tesis: Tesis, mostrar: boolean) {
    tesis.actualizarMostrarContenido(mostrar);
  }

  capturarDatos(datos: { formData: any; file: File | null }) {
    console.log(datos);

    if (!!datos.formData.consulta.match(/^[\w\s\u00E0-\u00FC\u00f1\u00d1]+$/)) {
      this._busquedaIniciada = true;
      this.dataService
        .buscarTesis(datos.formData)
        .toPromise()
        .then((res: any) => {
          this._busquedaIniciada = false;
          this._huboError = false;

          this._resultado = [];
          res.body.tesis.forEach((tesis: any) => {
            this._resultado.push(this.dataService.toTesis(tesis));
          });
        })
        .catch((err) => {
          this._busquedaIniciada = false;
          
          switch (err.status) {
            case 404:
              this._resultado = [];
              this._error =
                'No se encontr?? ninguna tesis con la consulta introducida';
              this._huboError = true;
              break;
            case 503:
              this._resultado = [];
              this._error =
                'Servicio no disponible, intente nuevamente m??s tarde';
              this._huboError = true;
              break;
            default:
              this._error = 'Error inesperado';
              this._huboError = true;
              break;
          }
        });
    } else {
      this._error = 'Solo se permiten caracteres alfan??mericos';
      this._huboError = true;
    }
  }

  public get huboError(): boolean {
    return this._huboError;
  }

  public get error(): string {
    return this._error;
  }

  public get faChevronUp() {
    return this._faChevronUp;
  }

  public get faChevronDown() {
    return this._faChevronDown;
  }

  public get busquedaIniciada(): boolean {
    return this._busquedaIniciada;
  }

  public get formulario(): Formulario {
    return this._formulario;
  }

  public get consulta(): string {
    return this._consulta;
  }

  public get filtros(): string[] {
    return this._filtros;
  }

  public get resultado(): Tesis[] {
    return this._resultado;
  }

  // this.dataService.getProfesor().subscribe((profes)=>{this.profesores=profes;
  // console.log(this.profesores);
  // });
  // this._resultado = [
  //   new Tesis(
  //     'TT212',
  //     'Sistema de tr??mites',
  //     ['alan', 'pedro', 'Sinah??'],
  //     ['juan'],
  //     ['casandra'],
  //     'a',
  //     [new VersionDeArchivo('hoy', 'a')],
  //     ['tramites', 'sistema'],
  //     2021,
  //     'sistemas',
  //     'licenciatura',
  //     'resumen'
  //   ),
  //   new Tesis(
  //     'TT212',
  //     'Sistema de mapas',
  //     ['alan', 'pedro', 'Sinah??'],
  //     ['juan'],
  //     ['casandra'],
  //     'a',
  //     [new VersionDeArchivo('hoy', 'a')],
  //     ['tramites', 'sistema'],
  //     2021,
  //     'sistemas',
  //     'licenciatura',
  //     'resumen'
  //   ),
  // ];
}
