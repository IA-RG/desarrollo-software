import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Pregunta } from '../shared/classes/Pregunta';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css'],
})
export class PreguntaComponent implements OnInit {
  @Input() pregunta!: Pregunta<string | boolean>;
  @Input() controladorDeFormulario!: FormGroup;
  @Output() emisorDeArchivos = new EventEmitter<File>();
  private _checkbox:boolean=false;

  constructor() {
    
  }

  ngOnInit(): void {
    this._checkbox=this.pregunta.controlType==="checkbox"? false: true;
  }

  emitirArchivo(event: any) {
    const archivo = event.target.files[0];
    this.emisorDeArchivos.emit(archivo);
  }

  
  public get checkbox() : boolean {
    return this._checkbox;
  }

  
  
}
