import { VersionDeArchivo } from "./VersionDeArchivo";

export class Registrador {
    //Datos que se solicitan al usuario
    private _numTT: string;
    private _titulo: string;
    private _integrantes: string[];
    private _directores: string[];
    private _sinodales: string[];
    //enlace
    private _archivoFinal: string;
    private _palabrasClave: string[];
    private _year: number;
    private _carrera: string;
    private _grado: string;
    private _resumen: string;

    constructor(
        numeroTT: string,
        titulo: string,
        integrantes: string[],
        directores: string[],
        sinodales: string[],
        archivo: string,
        palabrasClave: string[],
        year: number,
        carrera: string,
        grado: string,
        resumen: string
    ) {
        this._numTT = numeroTT;
        this._titulo = titulo;
        this._integrantes = integrantes;
        this._directores = directores;
        this._sinodales = sinodales;
        this._archivoFinal = archivo;
        this._palabrasClave = palabrasClave;
        this._year = year;
        this._carrera = carrera;
        this._grado = grado;
        this._resumen = resumen;
    }
    public get numeroTT(): string {
        return this._numTT;
    }
    public get titulo(): string {
        return this._titulo;
    }
    public get integrantes(): string[] {
        return this._integrantes;
    }
    public get directores(): string[] {
        return this._directores;
    }
    public get sinodales(): string[] {
        return this._sinodales;
    }
    public get archivoFinal(): string {
        return this._archivoFinal;
    }
    public get palabrasClave(): string[] {
        return this._palabrasClave;
    }
    public get year(): number {
        return this._year;
    }
    public get carrera(): string {
        return this._carrera;
    }
    public get grado(): string {
        return this._grado;
    }
    public get resumen(): string {
        return this._grado;
    }
}
