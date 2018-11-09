import {Component, OnInit} from '@angular/core';
import {Hero} from "../shared/data/Hero";
import {LlistaHeros} from "../shared/data/LlistatHeros";
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {Error} from "tslint/lib/error";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  idFictici = 0;

  teError: boolean = false;
  success: boolean = false;
  missatgeSuccess: string = "S'han enviat les dades correctament";
  misstatgeErrorForm: string = "Falten dades per completar el tràmit";

  list: LlistaHeros = new LlistaHeros();

  formulari: any = {
    nom: ["Batman", [Validators.pattern(/^([a-zA-Z0-9_-]){1,20}$/)]],
    forca: 54,
    poder: 1,
    velocitat: 1,
    any: 2018,
    index: null
  };

  fg: FormGroup = null;

  constructor(private fb: FormBuilder) {
    this.fg = this.fb.group(this.formulari);
  }

  recuperarDades(event) {
    if (this.fg.valid) {
      this.teError = false;
      this.success = true;

      let valors: any = this.fg.value;

      let hero = new Hero(this.idFictici, valors["nom"],valors["forca"],valors["poder"],valors["velocitat"],valors["any"]);
      this.list.addHero(hero);
      this.fg.reset();

    }else{
      this.teError = true;
    }

    return false;
  }

  delete(hero: Hero) {
    this.list.deleteHero(hero.index);
  }

  update(hero: Hero) {
    this.fg.controls['nom'].setValue(hero.nom);
    this.fg.controls['forca'].setValue(hero.forca);
    this.fg.controls['poder'].setValue(hero.poder);
    this.fg.controls['velocitat'].setValue(hero.velocitat);
    this.fg.controls['any'].setValue(hero.any);
    this.fg.controls['index'].setValue(hero.index);

  }

  modificarDades(event) {
    console.log(this.fg);

    if (this.fg.valid) {

      let hero: any = this.fg.value;

      this.fg.reset();
      this.list.updatehero(hero);
    }

    return false;
  }

}





