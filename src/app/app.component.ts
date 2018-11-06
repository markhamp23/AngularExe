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

  //Afegir validadors: nom ==> longitud de 20 caràcters i requerit
  //força un number
  //poder només strings
  //velocitat només numbers
  //any longitud de 4 cràcters
  //les validacions posar mat-error
  //Recuperar dades i m'ho poses en un llistat d'Heros

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
    any: 2018
  };

  fg: FormGroup = null;

  // fg: FormGroup = new FormGroup({
  //   nom: new FormControl("", [Validators.pattern(/^([a-zA-Z0-9_-]){1,20}$/)]),
  //   forca: new FormControl(0, [Validators.pattern(/^([0-9_-]){1}$/)]),
  //   poder: new FormControl("", [Validators.pattern(/^[a-zA-Z]+$/)]),
  //   velocitat: new FormControl(0, [Validators.pattern(/^(0|[1-9][0-9]*)$/)]),
  //   any: new FormControl("", [Validators.pattern(/^([a-zA-Z0-9_-]){4}$/)]),
  // });

  constructor(private fb: FormBuilder) {
    this.fg = this.fb.group(this.formulari);
  }

  recuperarDades(event) {
    if (this.fg.valid) {
      this.teError = false;
      this.success = true;
      // console.log("VALORS FORM", this.fg.value);
      // console.log("VALOR", this.fg.controls["nom"].value);

      let valors: any = this.fg.value;

      let hero = new Hero(valors["nom"],valors["forca"],valors["poder"],valors["velocitat"],valors["any"]);
      //let hero = new Hero(valors.nom,valors.forca,valors.poder,valors.velocitat,valors.any);
      this.list.addHero(hero);

      //valors.nom
      //valors["nom"]

      //console.log("VALORS", valors["nom"]);
      console.log(this.list.getLlistatHeros());

      // let hero = new Hero(this.fg.controls['nom'].value, this.fg.controls['forca'].value, this.fg.controls['poder'].value, this.fg.controls['velocitat'].value, this.fg.controls['any'].value);
      //
      // this.list.addHero(hero);
      //
      // console.log("Contingut llista");
      // console.log(this.list.getLlistatHeros());

      // for (let i =0; i < 10; i++) {
      //   console.log(i);
      // }
      //



      // this.removeChildren();
      //
      // for(let i = 0; i < this.list.size(); i++) {
      //   const hero: Hero = this.list.getLlistat()[i];
      //   this.addElement(hero);
      // }







    }else{
      this.teError = true;
    }


    return false;
  }



  // createElementP(valor): any {
  //   const p = document.createElement("p");
  //   p.innerHTML = valor;
  //   p.className = "box-hero";
  //
  //   return p;
  // }
  //
  // addElement(hero: Hero) {
  //   const child = this.createElementP(hero.nom);
  //   document.getElementById("merda").appendChild(child);
  // }
  //
  // removeChildren() {
  //   document.getElementById("merda").innerHTML = "";
  // }


  delete() {
    console.log("detele");

    $scope.delete = function (person) {
      API.DeletePerson({ id: person.id }, function (success) {
        // I need some code here to pull the person from my scope.
      });
    };

  }

}





