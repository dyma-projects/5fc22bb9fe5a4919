import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  nom:string;
  public myColor = "color: red";

  /**
   * exemple
   */
  public ouvrir() {
    alert('Bonjour Dyma !!');
  }

  constructor() {
    this.nom = 'Exercice 1';
    setTimeout(() => {
      this.myColor = "color: blue";
    }, 5000);
   }

  ngOnInit(): void {
  }

}
