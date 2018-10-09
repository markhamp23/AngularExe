import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercici hola';

  heros: string[] = ["Superman", "Batman", "Spiderman", "Ironman", "Hulk", "Magneto"];

  herosObject: Hero[] = [];

  recuperat: boolean = false;

  constructor() {
    //console.log(this.heros.toString());
    this.herosObject.push(new Hero("Superman", 10, "Velocitat", 5000, 1930));
    this.herosObject.push(new Hero("Batman", 10, "Velocitat", 5000, 1930));
    this.herosObject.push(new Hero("Spiderman", 10, "Velocitat", 5000, 1930));
    this.herosObject.push(new Hero("Ironman", 10, "Velocitat", 5000, 1930));
    this.herosObject.push(new Hero("Hulk", 1000, "Força", 50, 1970));
    this.herosObject.push(new Hero("Magneto", 10, "Velocitat", 5000, 1930));
  }

  recuperarDades(event) {
    this.recuperat = !this.recuperat;
  }


}

export class Hero {
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
}
