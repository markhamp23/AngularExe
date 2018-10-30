import {Hero} from "./Hero";

export class LlistaHeros {

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
