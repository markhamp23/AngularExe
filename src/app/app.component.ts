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

  teError: boolean = false;
  success: boolean = false;
  missatgeSuccess: string = "S'han enviat les dades correctament";
  misstatgeErrorForm: string = "Falten dades per completar el tràmit";

  list: LlistaHeros = new LlistaHeros();

  formulari: any = {
    id: 0,
    nom: ["Batman", [Validators.pattern(/^([a-zA-Z0-9_-]){1,20}$/)]],
    forca: 54,
    poder: 1,
    velocitat: 1,
    any: 2018
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

      let hero = new Hero(this.list.size(),valors["nom"],valors["forca"],valors["poder"],valors["velocitat"],valors["any"]);
      //let hero = new Hero(valors.nom,valors.forca,valors.poder,valors.velocitat,valors.any);
      this.list.addHero(hero);

      // console.log(this.list.getLlistatHeros());
      // console.log(this.list.size());

    }else{
      this.teError = true;
    }

    return false;
  }

  delete(id) {

    this.list.deleteHero(id);
    console.log(this.list.getLlistatToString());
    //dfgfd
  }

}





