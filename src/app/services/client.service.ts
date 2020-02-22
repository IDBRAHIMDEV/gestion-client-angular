import { Client } from './../models/client';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private afs: AngularFirestore) { }

  _getAll() {
    return this.afs.collection('clients').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Client;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  save(data: Client) {
    return this.afs.collection('clients').add(data);
  }

  delete(id: string) {
    return this.afs.collection('clients').doc(id).delete();
  }

  getOne(id: string) {
    return this.afs.collection('clients').doc(id).valueChanges()
  }

  update(data: Client) {
    return this.afs.collection('clients').doc(data.id).update(data);
  }
}
