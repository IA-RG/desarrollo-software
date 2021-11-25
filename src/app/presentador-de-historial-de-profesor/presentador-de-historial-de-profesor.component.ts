import { Component, OnInit } from '@angular/core';
import { Tesis } from '../shared/classes/Tesis';

@Component({
  selector: 'app-presentador-de-historial-de-profesor',
  templateUrl: './presentador-de-historial-de-profesor.component.html',
  styleUrls: ['./presentador-de-historial-de-profesor.component.css']
})
export class PresentadorDeHistorialDeProfesorComponent implements OnInit {
  private _tesis:Tesis[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  
  public get tesis() : Tesis[] {
    return this._tesis;
  }
  

}
