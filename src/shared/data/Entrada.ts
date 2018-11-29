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

export class Entrada extends Base {
  private _nomObra: string;
  private _data: Date;
  private _preu: number;
  private _numLocalitats: string;

  constructor(id: number, nomObra: string, data: Date, preu: number, numLocalitats: string) {
    super();

    this._nomObra = nomObra;
    this._data = data;
    this._preu = preu;
    this._numLocalitats = numLocalitats;
  }

  get nomObra(): string {
    return this._nomObra;
  }

  set nomObra(value: string) {
    this._nomObra = value;
  }

  get data(): Date {
    return this._data;
  }

  set data(value: Date) {
    this._data = value;
  }

  get preu(): number {
    return this._preu;
  }

  set preu(value: number) {
    this._preu = value;
  }

  get numLocalitats(): string {
    return this._numLocalitats;
  }

  set numLocalitats(value: string) {
    this._numLocalitats = value;
  }

  toString(): string {

    return "{" + this._nomObra + " , " + this._data + " , "

      + this._preu + " , " + this._numLocalitats + "}";

  }

  mappingToHTTP(): any {
    return {
      "id": this.id,
      "nomObra": this._nomObra,
      "data": this._data,
      "preu": this._preu,
      "numLocalitats": this._numLocalitats
    }

  }
}
