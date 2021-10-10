import { Component, OnInit } from '@angular/core';
import { Formulario } from '../shared/classes/Formulario';
import { Pregunta } from '../shared/classes/Pregunta';
import { PreguntaCheckBox } from '../shared/classes/PreguntaDeFiltro';
import { Tesis } from '../shared/classes/Tesis';
import { VersionDeArchivo } from '../shared/classes/VersionDeArchivo';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

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

  constructor() {
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
        label: 'Año',
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
    this._formulario = new Formulario(formulario, 'Búsqueda de tesis');
    this._formulario.obtenerGrupo();
    this._resultado = [
      new Tesis(
        'TT212',
        'Sistema de trámites',
        ['alan', 'pedro', 'Sinahí'],
        ['juan'],
        ['casandra'],
        'a',
        [new VersionDeArchivo('hoy', 'a')],
        ['tramites', 'sistema'],
        2021,
        'sistemas',
        'licenciatura',
        'resumen'
      ),
      new Tesis(
        'TT212',
        'Sistema de mapas',
        ['alan', 'pedro', 'Sinahí'],
        ['juan'],
        ['casandra'],
        'a',
        [new VersionDeArchivo('hoy', 'a')],
        ['tramites', 'sistema'],
        2021,
        'sistemas',
        'licenciatura',
        'resumen'
      ),
    ];
  }

  ngOnInit(): void {}

  mostrarContenido(tesis: Tesis, mostrar: boolean) {
    tesis.actualizarMostrarContenido(mostrar);
  }

  capturarDatos(datos: { formData: object; file: File | null }) {
    console.log(datos);
  }

  public get faChevronUp() {
    return this._faChevronUp;
  }

  public get faChevronDown() {
    return this._faChevronDown;
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
}
