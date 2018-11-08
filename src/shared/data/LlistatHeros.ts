import {Hero} from "./Hero";

export class LlistaHeros {

  private heros: Hero[] = null;

  constructor() {
    this.heros = new Array();
  }

  addHero(hero: Hero): void {
    hero.index = this.setIndexNewHero();
    this.heros.push(hero);
  }

  private setIndexNewHero(): string {
    return Math.random().toString(36).substr(2);
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

  deleteHero(index: string): void {
    const pos = this.heros.findIndex(function(x) {
      return x.index == index
    });

    if (pos != -1) {
      this.heros.splice(pos, 1);
    }

    console.log(this.heros);
  }
}
