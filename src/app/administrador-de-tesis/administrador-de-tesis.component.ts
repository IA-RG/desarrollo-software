import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrador-de-tesis',
  template:`<div class="container">
    <div class="row mt-2">
        <div class="col">
            <h1 class="d-flex justify-content-center">Administrador de tesis</h1>

            <form>
                <div class="form-group">
                    <label for="nombre">Nombre del administrador</label>
                    <input type="text" class="form-control" id="nombre" aria-describedby="nombreHelp" placeholder="Ingresa nombre">
                </div>
                <div class="form-group">
                    <label for="edad">Titulo de la tesis</label>
                    <input type="text" class="form-control" id="edad" aria-describedby="edadHelp" placeholder="Ingresa titulo de tesis">
                </div>
                <div class="form-group">
                    <label for="email">Correo</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Ingresa email">
                </div>
                <div class="form-group">
                    <label for="Tesis">Tesis</label>
                    <input type="file" class="form-control" id="Tesis" aria-describedby="tesisHelp" placeholder="Ingresa tesis">
                </div>
                <div class="d-flex justify-content-between mb-3">
                    <button type="submit" class="btn btn-primary" id="btnSubir">Subir</button>

                </div>
                
                <!--
                <h2 class="d-flex justify-content-center">Buscar tesis</h2>
                <div class="form-group">
                    <label for="Tesis">Buscar tesis</label>
                    <input type="text" class="form-control" id="Tesis" aria-describedby="tesisHelp" placeholder="Ingresa palabaras clave">
                </div>

                <div class="d-flex justify-content-between mb-3">

                    <button type="submit" class="btn btn-success" id="btnResultado">Buscar</button>
                </div>-->

            </form>
        </div>
    </div>
    <app-buscador></app-buscador>`,
  //templateUrl: './administrador-de-tesis.component.html',
  styleUrls: ['./administrador-de-tesis.component.css']
})
export class AdministradorDeTesisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
