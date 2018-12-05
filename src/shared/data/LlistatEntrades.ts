
import {Entrada} from "./Entrada";
import {Hero} from "./Hero";
import {forEach} from "@angular/router/src/utils/collection";
//import {Hero} from "./Hero";

export class LlistatEntrades {

  private list: Entrada[];
  private lastSave: Date;
  private lastUpdate: Date;
  private lastDelete: Date;

  constructor() {
    this.list = new Array();
  }

  addEntrada(entrada: Entrada): void {
    entrada.index = this.setIndexNewEntrada();
    this.list.push(entrada);
  }

  private setIndexNewEntrada(): string {
    return Math.random().toString(36).substr(2);
  }

  getLlistatToString(): string {

    const arrayAux = [];

    this.list.forEach((entrada) => {
      if (entrada != null) arrayAux.push(entrada.toString());
    });

    return "[" + arrayAux.join(",") + "]";
  }

  getSize(): number
  {
    return this.list.length;
  }

  isLlistatEmpty(): boolean {
    return this.list.length == 0;
  }

  getEntradesAll(): Entrada[] {
    return this.list
  }

  setEntradesAll(list: Entrada[]) {
    return this.list = list;
  }

  getEntradaOne(index: string): Entrada {
    const pos = this.list.findIndex(function(x) {
      return x.index == index
    });

    if (pos != -1) {
      return this.list[pos];
    }

    return null;
  }

  doSave(entrada: Entrada): void {

    this.list.push(entrada);

  }

  doUpdateOrSave(entrada: Entrada): void {

    if(entrada.id != null)
    {
      this.doUpdateOne(entrada);
    }else{
      this.doSave(entrada);
    }
  }

  doUpdateOne(entrada: Entrada): void {

    const pos = this.list.findIndex(function (x) {
      return x.index == entrada.index
    });

    if (pos != -1) {
      let oneEntradaArray: Entrada = this.list[pos];

      oneEntradaArray. nomObra = entrada.nomObra;
      oneEntradaArray.data = entrada.data;
      oneEntradaArray.preu = entrada.preu;
      oneEntradaArray.numLocalitats = entrada.numLocalitats;

      //(this.list);

    }
  }

  doDeleteAll(): void {

    //1 forma
    this.list = [];

    //2n forma
    //while(this.list.length != 0) {
    //  this.list.splice(0, 1);
    //}

    //3n forma
    //const llistaAux: Entrada[] = this.clone(this.list);
    //llistaAux.forEach((entrada) =>
    //{
    //  this.doDeleteOne(entrada.index);
    //});

    /*
      this.list.forEach((entrada,index) =>
      {
        if (entrada != null) this.list.splice(0, 1);
      });
    */
  }

  doDeleteOne(index: string): void {
    const pos = this.list.findIndex(function(x) {
      return x.index == index
    });

    if (pos != -1) {
      this.list.splice(pos, 1);
    }

    console.log(this.list);
  }

  toEquals(entrada: Entrada[]): boolean {







    return true;

    // if ( !(this.isEntrada(entrada1) && this.isEntrada(entrada2)) ) {
    //   return false;
    // }
    //
    //
    // return entrada1.toEquals(entrada2);



    /* else if ( this.isPrimitive(entrada1) || this.isPrimitive(entrada2) ) {

      return false;
    }else {

      var firstKeys = Object.keys( entrada1 );
      var secondKeys = Object.keys( entrada2);

      if ( firstKeys.length !== secondKeys.length ) {
        return false;
      }else {
        for ( var prop in entrada1 ) {

          if ( entrada2[prop] === undefined ) {
            return false;
          } else if (!this.toEquals(entrada1[prop], entrada2[prop])) {
            return false;
          }
        }
      }
    }*/
  }

  // Helper function to determine whether a JavaScript value is a primitive type

  isEntrada = function ( value ) {
    return (value instanceof Entrada)
  }

  clone(llistat: Entrada[]): Entrada[] {
    const llistaClonada: Entrada[] = [];

    llistat.forEach((entrada) => {
      const entradaClonada: Entrada = new Entrada(<number>entrada.id, entrada.nomObra, entrada.data, entrada.preu, entrada.numLocalitats);
      entradaClonada.index = entrada.index;
      llistaClonada.push(entradaClonada);
    });

    return llistaClonada;
  }

  ////////setters i getters////////

  getList(): Entrada[] {
    return this.list;
  }

  setList(list: Entrada[]): void {
    this.list = list;
  }

  getListpos(): Entrada[] {
    return this.list;
  }

  setListpos(list: Entrada[]): void {
    this.list = list;
  }

  getLastSave(): Date{
    return this.lastSave;
  }

  setLastSave(lastSave: Date): void {
    this.lastSave = lastSave;
  }

  getLastUpdate(): Date{
    return this.lastUpdate;
  }

  setLasUpdate(lastUpdate: Date): void {
    this.lastUpdate = lastUpdate;
  }

  getLastDelete(): Date{
    return this.lastDelete;
  }

  setLastDelete(lastDelete: Date): void {
    this.lastDelete = lastDelete;
  }

  toString(): string {

    let llistat = "{" + this.lastSave+ " , " + this.lastUpdate + " , " + this.lastDelete +"}";
    llistat += "[";
    this.list.forEach((entrada) => {
      llistat += entrada.toString();
    });
    llistat += "]";
    return llistat;

  }
}
