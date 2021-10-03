import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject } from 'rxjs';
import { faAndroid } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tesis';
  faAndroid=faAndroid;

  private _nombre:string;
  private _nombre$:Subject<string>;
  activar:boolean;
  activar$:Subject<boolean>;

  constructor(private db:AngularFirestore) { 
    this._nombre="";
    this._nombre$=new Subject<string>();
    this.nombre$.subscribe((nom)=>this._nombre=nom);
    this.getPersona();
    this.activar=false;
    this.activar$=new Subject<boolean>();
    this.activar$.asObservable().subscribe((act)=>this.activar=act);
  }

  
  public get nombre$(){
    return this._nombre$.asObservable();
  }
  

  
  public get nombre() : string {
    return this._nombre;
  }
  async getPersona()
  { 
    const userRef=this.db.doc("usuarios/71z5I7SkReqhjdpuJaMN");
    const snapshot=await userRef.get().toPromise().then((snapshot)=>{
      const data:any=snapshot.data();
    
    this._nombre$.next(data.nombre);
    setTimeout(()=>{
      this.activar$.next(true);
    },3000);
    
    });
    
  }
}
