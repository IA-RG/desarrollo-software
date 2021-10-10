import { Observable, Subject } from 'rxjs';
import { VersionDeArchivo } from './VersionDeArchivo';

export class Tesis {
  private _numeroDeTT: string;
  private _titulo: string;
  private _autores: string[];
  private _directores: string[];
  private _sinodales: string[];
  private _enlaceATesis: string;
  private _versiones: VersionDeArchivo[];
  private _palabrasClave: string[];
  private _year: number;
  private _carrera: string;
  private _grado: string;
  private _resumen: string;
  private _mostrarContenido: boolean;
  private _mostrarContenido$: Subject<boolean>;

  constructor(
    numeroDeTT: string,
    titulo: string,
    autores: string[],
    directores: string[],
    sinodales: string[],
    enlaceATesis: string,
    versiones: VersionDeArchivo[],
    palabrasClave: string[],
    year: number,
    carrera: string,
    grado: string,
    resumen: string
  ) {
    this._mostrarContenido=false;
    this._mostrarContenido$=new Subject<boolean>();
    this._mostrarContenido$.subscribe((v)=>{this._mostrarContenido=v});
    this._numeroDeTT = numeroDeTT;
    this._titulo = titulo;
    this._autores = autores;
    this._directores = directores;
    this._sinodales = sinodales;
    this._enlaceATesis = enlaceATesis;
    this._versiones = versiones;
    this._palabrasClave = palabrasClave;
    this._year = year;
    this._carrera = carrera;
    this._grado = grado;
    this._resumen = resumen;
  }

  public actualizarMostrarContenido(mostrar:boolean)
  {
    this._mostrarContenido$.next(mostrar);
  }

  public get resumen(): string {
    return this._resumen;
  }

  public get grado(): string {
    return this._grado;
  }

  public get carrera(): string {
    return this._carrera;
  }

  public get year(): number {
    return this._year;
  }

  public get palabrasClave(): string[] {
    return this._palabrasClave;
  }

  public get versiones(): VersionDeArchivo[] {
    return this._versiones;
  }

  public get enlaceATesis(): string {
    return this._enlaceATesis;
  }

  public get sinodales(): string[] {
    return this._sinodales;
  }

  public get directores(): string[] {
    return this._directores;
  }

  public get autores(): string[] {
    return this._autores;
  }

  public get titulo(): string {
    return this._titulo;
  }

  public get numeroDeTT(): string {
    return this._numeroDeTT;
  }
  public get mostrarContenido(): boolean {
    return this._mostrarContenido;
  }

  public get mostrarContenido$(): Observable<boolean> {
    return this._mostrarContenido$.asObservable();
  }
}
