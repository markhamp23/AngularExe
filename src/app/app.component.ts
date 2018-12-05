import {Component, OnInit} from '@angular/core';
import {Entrada} from "../shared/data/Entrada";
import {LlistatEntrades} from "../shared/data/LlistatEntrades";
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {Hero} from "../shared/data/Hero";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  llistaAux: Entrada[] = [null, null, null];
  sonIguals: boolean = false;
  teError: boolean = false;
  success: boolean = false;
  Posicio1: boolean = false;
  Posicio2: boolean = false;

  missatgeSuccess: string = "S'han enviat les dades correctament";
  misstatgeErrorForm: string = "Falten dades per completar el tràmit";

  missatgeIguals: string = "Són iguals";
  missatgeNoIguals: string = "No són iguals";

  list: LlistatEntrades = new LlistatEntrades();

  fg: FormGroup = new FormGroup({
    nomObra: new FormControl([Validators.pattern('/^[a-z]{0,10}$/')]),
    data: new FormControl([Validators.pattern('^(\\d{2}).\\d{2}.(\\d{4})$')]),
    preu: new FormControl([Validators.pattern('/^[1-500]$/')]),
    numLocalitats: new FormControl([Validators.pattern('/^[1-500]$/')]),
    index: new FormControl()
  });

  pos1: FormGroup = new FormGroup({
    nomObra: new FormControl(),
    index: new FormControl()
  });

  constructor() {
    this.fg.patchValue({
      nomObra: "La Cenicienta",
      data: '2018-03-21',
      preu: 25,
      numLocalitats: 100
    })
  }

  recuperarDades(event) {
    if (this.fg.valid) {
      this.teError = false;
      this.success = true;

      let valors: any = this.fg.value;

      const novaEntrada = new Entrada(
        null,
        valors.nomObra,
        valors.data,
        valors.preu,
        valors.numLocalitats
      );

      this.list.addEntrada(novaEntrada);

      this.fg.reset();
      this.success = false;
      this.teError = false;

    } else {
      this.teError = true;
    }

    return false;
  }

  delete(index) {

    this.list.doDeleteOne(index);
    this.fg.reset();
    this.success = false;
    this.teError = false;
  }

  borrarDades(index) {

    this.list.doDeleteAll();
    this.fg.reset();
    this.success = false;
    this.teError = false;
  }



  posicio(index, pos: number) {
    this.llistaAux[pos] = this.list.getEntradaOne(index);

    this.sonIguals = this.list.toEquals(this.llistaAux);
  }

  //observable: BehaviorSubject<any> = new BehaviorSubject(null);

  update(list: Entrada) {
    event.preventDefault();

    this.fg.controls['index'].setValue(list.index);
    this.fg.controls['nomObra'].setValue(list.nomObra);
    this.fg.controls['data'].setValue(list.data);
    this.fg.controls['preu'].setValue(list.preu);
    this.fg.controls['numLocalitats'].setValue(list.numLocalitats);
  }

  modificarDades(event) {
    console.log(this.fg);

    if (this.fg.valid) {

      let entrada: any = this.fg.value;
      this.list.doUpdateOne(entrada);

      this.fg.reset();
      this.success = false;
      this.teError = false;
    }

    //return false;
  }

}
