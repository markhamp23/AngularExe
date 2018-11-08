abstract class Base {
  private _id: Number;
  private _index: string;

  get id(): Number {
    return this._id;
  }

  set id(value: Number) {
    this._id = value;
  }

  get index(): string {
    return this._index;
  }

  set index(value: string) {
    this._index = value;
  }
}

export class Hero extends Base {
  private _nom: string;
  private _forca: number;
  private _poder: string;
  private _velocitat: number;
  private _any: number;

  constructor(id: Number, nom: string, forca: number, poder: string, velocitat: number, any: number) {
    super();

    this.id = id;
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
    return "{" + this.id + "," + this.nom + ", " + this.forca + " , " + this.poder + " , " + this.velocitat + ", " + this.any+"}";
  }
}

