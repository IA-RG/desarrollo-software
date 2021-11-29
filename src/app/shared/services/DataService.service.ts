import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Tesis } from '../classes/Tesis';
import { VersionDeArchivo } from '../classes/VersionDeArchivo';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private db: AngularFirestore,private http:HttpClient) {}

  ////////////////////////////////////Profesores//////////////////////////////////////

  getHistorial(id:string)
  {
    return this.http.get(`http://localhost:3000/profesor/tesis/${id}`);
  }
  ////////////////////////////////////FIN Profesores//////////////////////////////////

  getProfesor()
  {
    return this.http.get("http://localhost:3000/profesor");
  }

  buscarProfesor(profe2:string)
  {
    const term = profe2.trim();

  const options = term ? { params: new HttpParams().set('profe', term) } : {};
    return this.http.get(`http://localhost:3000/profesor/${profe2}`,options);
  }

  buscarTesis(formData: any) {
    const data=JSON.stringify(formData);
    let headers = new HttpHeaders({
      'Content-Type':'application/json;charset=utf-8'
    });
    return this.http.get(`http://localhost:3000/busqueda/${data}`,{observe:'response',headers});
  }

  // buscarTesis(formData: any): Tesis[] {
  //   const resultado: Tesis[] = [];
  //   if (formData.autores)
  //     this.db
  //       .collection('tesis', (ref) =>
  //         ref.where('autores', 'array-contains-any', [`${formData.consulta}`])
  //       )
  //       .get()
  //       .toPromise()
  //       .then((snapshot) => {
  //         snapshot.docs.forEach((doc) => {
  //           const tesis = this.toTesis(doc.data());
  //           if (!resultado.includes(tesis)) {
  //             resultado.push(tesis);
  //           }
  //         });
  //         console.log(resultado);
  //       });
  //   if (formData.carrera)
  //     this.db
  //       .collection('tesis', (ref) =>
  //         ref.where('carrera', 'array-contains-any', [`${formData.consulta}`])
  //       )
  //       .get()
  //       .toPromise()
  //       .then((snapshot) => {
  //         snapshot.docs.forEach((doc) => {
  //           const tesis = this.toTesis(doc.data());
  //           if (!resultado.includes(tesis)) {
  //             resultado.push(tesis);
  //           }
  //         });
  //         console.log(resultado);
  //       });
  //   if (formData.directores)
  //     if (formData.grado)
  //       if (formData.palabrasClave)
  //         if (formData.resumen)
  //           if (formData.sinodales)
  //             if (formData.titulo)
  //               if (formData.year && ) {
  //               }
  //   return resultado;
  // }

  toTesis(doc: any) {
    const versiones: VersionDeArchivo[] = [];
    doc.versiones?.forEach((version: any) => {
      versiones.push(
        new VersionDeArchivo(version.marcaDeTiempo, version.enlaceATesis)
      );
    });
    const numeroDeTT=`TT${doc.id}`
    return new Tesis(
      doc.numeroDeTT,
      doc.titulo,
      doc.autores,
      doc.directores,
      doc.sinodales,
      doc.enlaceATesis,
      // versiones,
      doc.palabrasClave,
      doc.year,
      doc.carrera,
      doc.grado,
      doc.resumen
    );
  }
  guardarTesis(info : any){
    console.log(info);
    //peticion post
    //const term = info.trim();
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    //const options = term ? { params: new HttpParams().set('info', term) } : {};
    //return this.http.post(`http://localhost:3000/tesis/${info}`, options );
    this.http.post(`http://localhost:3000/tesis/`,info, {headers: headers} ).subscribe(data=>{
      console.log(data);
    });
  }
}
