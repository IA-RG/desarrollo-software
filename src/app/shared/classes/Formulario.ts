import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pregunta } from './Pregunta';
import { PreguntaCheckBox } from './PreguntaDeFiltro';

export class Formulario {
  private _controladorDeFormulario: FormGroup;
  private _formulario: Pregunta<string | boolean>[];
  private _titulo: string;
  private _grupoDeCheckbox: Pregunta<string | boolean>[]=[];

  constructor(formulario: Pregunta<string | boolean>[], titulo: string) {
    this._formulario = formulario;
    this._controladorDeFormulario =
      this.asociarFormularioAControlador(formulario);
    this._titulo = titulo;
    
  }

  public obtenerGrupo()
  {
    
    this._formulario.forEach((pregunta)=>{
      console.log(pregunta);
      if(pregunta.controlType=="checkbox")
      {
        this._grupoDeCheckbox.push(pregunta); 
      }
    });
    const contieneCheckbox= (pregunta:Pregunta<string| boolean>)=>pregunta.controlType ==="checkbox";
    while(this._formulario.some(contieneCheckbox))
    {
      this._formulario.forEach((pregunta)=>{
        if(pregunta.controlType=="checkbox")
      { 
        const index=this._formulario.indexOf(pregunta);
        this._formulario.splice(index,1);
      }
      });
    }
    
  }

  private asociarFormularioAControlador(
    formulario: Pregunta<string | boolean>[]
  ): FormGroup {
    const group: any = {};

    formulario.forEach((pregunta) => {
      group[pregunta.key] = pregunta.required
        ? new FormControl(pregunta.value || '', Validators.required)
        : new FormControl(pregunta.value || '');
    });
    return new FormGroup(group);
  }

  public getDatosDelFormulario(): object {
    return this._controladorDeFormulario.getRawValue();
  }

  public get grupoDeCheckbox() : Pregunta<string | boolean>[] {
    return this._grupoDeCheckbox;
  }
  public get titulo(): string {
    return this._titulo;
  }

  public get formulario(): Pregunta<string | boolean>[] {
    return this._formulario;
  }

  public get controladorDeFormulario(): FormGroup {
    return this._controladorDeFormulario;
  }
}
