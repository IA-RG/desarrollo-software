import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tesis';

  constructor(private db:AngularFirestore){

  }

  async getPersona()
  {
    const ref=this.db.doc("usuarios/XD");
    await ref.set({nombre:"alan"});
    const snapshot= ref.get().toPromise().then((snapshot)=>{
      const yo:any=snapshot.data();
    console.log(yo);
    });
    
  
  }
}
