import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, Subject, pipe } from 'rxjs';
import { Pregunta } from '../shared/classes/Pregunta';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { camelCase } from 'lodash-es';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { Formulario } from '../shared/classes/Formulario';
import { SolicitudDeBusqueda } from '../shared/classes/SolicitudDeBusqueda';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [],
})
export class FormularioComponent implements OnInit {
  @Input() formulario: Formulario = new Formulario([], '');
  @Input() accionDeBoton: string = 'Enviar';
  @Output() emisorDeDatos = new EventEmitter<{
    formData: object;
    file: File | null;
  }>();

  private _faCheckCircle = faCheckCircle;
  private _archivo: File | null = null;
  constructor(private storage: AngularFireStorage) {}

  ngOnInit(): void {}

  emitirDatos() {
    const data = {
      formData: this.formulario.getDatosDelFormulario(),
      file: this._archivo,
    };
    this.emisorDeDatos.emit(data);
  }

  capturarArchivo(archivo: File) {
    this._archivo = archivo;
  }

  public get faCheckCircle() {
    return this._faCheckCircle;
  }
}
