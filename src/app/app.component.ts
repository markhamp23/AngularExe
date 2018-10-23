import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  llistatHeros = new LlistaHeros();

  constructor() {
  }

  recuperarDades(event) {
    event.preventDefault();
    // // console.log(event);
    // // //TODO: completar el formulari amb les dades Hero
    // // //TODO: recuperar les dades del formulari
    // // //TODO: afegir les dades d'un hero a una llista d'hero => Hero[]
    // // //TODO: Override ToString Hero
    // // //debugger;

    //Recuperar dades del formulari
    console.log("NODES PARE", event.target.parentNode.children);
    var children = event.target.parentNode.children;

    var nom = children[0].children[1].value;
    var forca = children[2].children[1].value;
    var poderSuprem = children[4].children[1].value;
    var velocitat = children[6].children[1].value;
    var any = children[8].children[1].value;

    //Afegir les dades d'un hero
    let hero: Hero = new Hero( nom,forca,poderSuprem,velocitat,any);

    //Afegir un heroi a un llistat
    this.llistatHeros.addHero(hero);
    console.log(this.llistatHeros.getLlistatHeros().toString());

    // // let listHeros: Hero[];
    // // listHeros = [];

    // // listHeros.forEach((x) => {
    // //   console.log("HERO", x);
    // // });
    // //
    // // for (let i = 0; i < listHeros.length; i++) {
    // //   console.log(listHeros[i]);
    // // }

    // // //let listHeros: Hero[] = [];

    // let classe1: Classe;
    // classe1 = new Classe();
    // classe1.id = 1;
    // classe1.nom = "A1";
    //
    // let alumne1: Alumne = new Alumne("Pep", "Garcia", "454V", new Date);
    // let alumne2: Alumne = new Alumne("Maria", "Romera", "5444Q", new Date());
    //
    // classe1.addAlumne(alumne1);
    // classe1.addAlumne(alumne2);
    //
    // console.log(classe1.getLlistatAlumnes());

    return false;

    //debugger
  }
}

class Classe {
  id: number;
  nom: string;
  public alumnes: Alumne[] = null;

  constructor() {
    this.alumnes = new Array();
  }

  addAlumne(alumne: Alumne): void {
    this.alumnes.push(alumne);
  }

  getLlistatAlumnes(): string {
    let llistat = "[";
    this.alumnes.forEach((alumne) => {
      llistat += alumne.toString();
    });
    llistat += "]";
    return llistat;
  }
}

class Alumne {
  nom: string;
  cognoms: string;
  nif: string;
  data: Date;

  constructor(nom: string, cognoms: string, nif: string, data: Date) {
    this.nom = nom;
    this.cognoms = cognoms;
    this.nif = nif;
    this.data = data;
  }
}

class LlistaHeros {

  private heros: Hero[] = null;

  constructor() {
    this.heros = new Array();
  }

  addHero(hero: Hero): void {
    this.heros.push(hero);
  }

  getLlistatHeros(): string {
    let llistat = "[";
    this.heros.forEach((hero) => {
      llistat += hero.toString();
    });
    llistat += "]";
    return llistat;
  }

  getLlistat() {
    return this.heros;
  }

}

  class Hero {
  private _nom: string;
  private _forca: number;
  private _poder: string;
  private _velocitat: number;
  private _any: number;

  constructor(nom: string, forca: number, poder: string, velocitat: number, any: number) {
    this._nom = nom;
    this._forca = forca;
    this._poder = poder;
    this._velocitat = velocitat;
    this._any = any;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get forca(): number {
    return this._forca;
  }

  set forca(value: number) {
    this._forca = value;
  }

  get poder(): string {
    return this._poder;
  }

  set poder(value: string) {
    this._poder = value;
  }

  get velocitat(): number {
    return this._velocitat;
  }

  set velocitat(value: number) {
    this._velocitat = value;
  }

  get any(): number {
    return this._any;
  }

  set any(value: number) {
    this._any = value;
  }

  toString(): string {
    return "{" + this.nom + ", " + this.forca + " , " + this.poder + " , " + this.velocitat + ", " + this.any+"}";
  }

  }
