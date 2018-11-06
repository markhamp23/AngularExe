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
    llistat += '\n';
    this.heros.forEach((hero) => {
      llistat += hero.toString();
      llistat += '\n';
    });
    llistat += "]";
    return llistat;
  }

  size(): number {
    return this.heros.length;
  }

  getLlistat() {
    return this.heros;
  }

  deleteHero() {
    
  }
}
