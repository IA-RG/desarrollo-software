import { Component, OnInit } from '@angular/core';
import { Registrador } from '../shared/classes/Registrador';

@Component({
  selector: 'app-registrador-de-tesis',
  templateUrl: './registrador-de-tesis.component.html',
  styleUrls: ['./registrador-de-tesis.component.css']
})
export class RegistradorDeTesisComponent extends Registrador implements OnInit  {

  constructor() {
    super();
   }

  ngOnInit(): void {
  }

}
