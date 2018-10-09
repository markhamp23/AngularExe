import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
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



  // PORTA
  // 1.- Crea una classe Porta, aquesta ha de tenir els atributs de ample, alt, color i oberta (true si oberta i
  // false si tancada). A aquesta porta hem de crear els mètodes de Obrir, Tancar i mostrar estat (mostra
  // tots els atributs).
  // 2.- Instanciar una porta, obrir-la i mostrar el seu estat.
  // 3.- Crear els mètodes necessaris per a poder inicialitzar cadascuna de les variables i per a que ens
  // retorne el valor de cada variable.


  ngOnInit(): void {
    let porta1: Porta = new Porta();
    porta1.ample = 200;
    porta1.oberta = false;
    console.log("Inicial", porta1.estat());
    porta1.obrir();
    console.log("Final", porta1.estat());
    porta1.tancar();
    console.log("Final", porta1.estat());
  }

}

export class Porta {
  private _ample: number;
  private _alt: number;
  private _color: string;
  private _oberta: boolean;


  constructor() {}

  obrir(): void {
    this._oberta = true;
  }

  tancar(): void {
    this._oberta = false;
  }

  estat(): string {
    return "ample: " + this.ample + " oberta: " + this.oberta;
  }

  get ample(): number {
    return this._ample;
  }

  set ample(value: number) {
    this._ample = value;
  }

  get alt(): number {
    return this._alt;
  }

  set alt(value: number) {
    this._alt = value;
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }

  get oberta(): boolean {
    return this._oberta;
  }

  set oberta(value: boolean) {
    this._oberta = value;
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
