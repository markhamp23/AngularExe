import {Component, OnInit} from '@angular/core';
import {Hero} from "../shared/data/Hero";
import {LlistaHeros} from "../shared/data/LlistatHeros";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  nom: string = "";
  forca: number = 0;
  poder: string = "";
  velocitat: number = 0;
  any: number = 0;

  llistat: LlistaHeros  = new LlistaHeros();

  constructor() {

  }

  recuperarDades(event) {

    const hero = new Hero(this.nom, this.forca, this.poder, this.velocitat, this.any);
    this.llistat.addHero(hero);

    console.log("UN HERO", hero.toString());
    console.log("LLISTAT", this.llistat.getLlistatHeros());

    return false;
  }

  ngOnInit(): void {
    let punt = new Punt(0,1);
    punt.setX(3);

    let punt2 = prova(10,20)
  }
}

function Punt(x, y) {
  this.x = x;
  this.y = y;
}

Punt.prototype.setX = function (x) {
  this.x = x;
};


function prova(x, y) {
  return {
    x: x,
    y: y,
    setX: function (x) {
      this.x = x;
    }
  };
}

