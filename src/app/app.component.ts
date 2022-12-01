import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Fire } from 'src/services/fire';
import { FirestoreService } from 'src/services/firestore.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PruebaAngular';
  lstDep= new Array()
  Fire: any

  constructor(private firestoreService: FirestoreService) {
      
    }
    ngOnInit(): void {
      this.loadFire()
  
    }

    loadFire()
    {
      this.Fire = this.firestoreService.getFire()
      console.log(this.lstDep)
    }


}
