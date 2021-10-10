export class VersionDeArchivo {
  private _marcaDeTiempo:string;
  private _enlaceATesis:string;

  constructor(marcaDeTiempo:string,enlaceATesis:string)
  {
    this._enlaceATesis=enlaceATesis;
    this._marcaDeTiempo=marcaDeTiempo;
  }

  
  public get marcaDeTiempo() : string {
    return this._marcaDeTiempo;
  }
  
  
  public get enlaceATesis() : string {
    return this._enlaceATesis;
  }
  
}
