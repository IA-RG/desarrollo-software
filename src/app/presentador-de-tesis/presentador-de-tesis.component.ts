import { Component, Input, OnInit } from '@angular/core';
import { Tesis } from '../shared/classes/Tesis';
import { VersionDeArchivo } from '../shared/classes/VersionDeArchivo';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Formulario } from '../shared/classes/Formulario';
import { Pregunta } from '../shared/classes/Pregunta';

@Component({
  selector: 'app-presentador-de-tesis',
  templateUrl: './presentador-de-tesis.component.html',
  styleUrls: ['./presentador-de-tesis.component.css']
})
export class PresentadorDeTesisComponent implements OnInit {
  private _faChevronDown = faChevronDown;
  private _faChevronUp = faChevronUp;
  @Input() tesisRecibidas:Tesis[]=[];
  private _formularioFiltro: Formulario;
  constructor() {
    const preguntaFiltro: Pregunta<string>[] = [
      new Pregunta<string>({
        key: 'filtro',
        label: 'Ordenar por:',
        options: [
          { value: 'año', key: 'año' },
          { value: 'nombre', key: 'nombre' },
        ],
      }),
    ];
    this._formularioFiltro = new Formulario(preguntaFiltro, '');
   }

  ngOnInit(): void {
  }
  
  public get formularioFiltro(): Formulario {
    return this._formularioFiltro;
  }
  
  mostrarContenido(tesis: Tesis, mostrar: boolean) {
    tesis.actualizarMostrarContenido(mostrar);
  }

  public get faChevronUp() {
    return this._faChevronUp;
  }

  public get faChevronDown() {
    return this._faChevronDown;
  }

  ordenar() {
    const filtrarPor =
      this._formularioFiltro.controladorDeFormulario.get('filtro')?.value;

    if (filtrarPor === 'año') {
      this.tesisRecibidas.sort((sol1, sol2) => {
        if (sol1.year > sol2.year) {
          return 1;
        }

        if (sol1.year < sol2.year) {
          return -1;
        }

        return 0;
      });
    } else if (filtrarPor === 'nombre') {
      this.tesisRecibidas.sort((sol1, sol2) => {
        if (sol1.titulo > sol2.titulo) {
          return 1;
        }

        if (sol1.titulo < sol2.titulo) {
          return -1;
        }

        return 0;
      });
    }
  }


}
