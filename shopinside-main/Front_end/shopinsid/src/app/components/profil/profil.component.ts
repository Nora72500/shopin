import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent {
  constructor(private router: Router)
  { }
/*Fonction qui renvoie vers une autre page */
redirectToPage(pageName : string) {
  /*Ce qu'il faut écrire dans pageName se trouve dans les paths de app-routing.module*/
  this.router.navigate([`${pageName}`]);
}
}
 


   