import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'

@Injectable(
    {
        providedIn: 'root'
})

export class FirestoreService{
    lstDep =  new Array()
    private productsCollection: AngularFirestoreCollection;

    constructor(private afs: AngularFirestore){
        this.productsCollection =afs.collection('Dep');
    }

    getFire()
    {
        return this.productsCollection.valueChanges();
    }

}
