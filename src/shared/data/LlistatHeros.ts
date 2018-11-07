import {Hero} from "./Hero";

export class LlistaHeros {

  private heros: Hero[] = null;

  constructor() {
    this.heros = new Array();
  }

  addHero(hero: Hero): void {
    this.heros.push(hero);
  }

  getLlistatToString(): string {

    const arrayAux = [];

    this.heros.forEach((hero) => {
      if (hero != null) arrayAux.push(hero.toString());
    });

    return "[" + arrayAux.join(",") + "]";
  }

  size(): number {
    return this.heros.length;
  }

  getLlistat(): Hero[] {
    return this.heros;
  }

  deleteHero(posicio: number): void {
    //console.log(posicio);
     for(let i = 0; i < this.heros.length; i++) {
       const hero: Hero = this.heros[i];
       if (i == posicio) this.heros[i] = null;
       this.getLlistatToString();
     }
  }
}
