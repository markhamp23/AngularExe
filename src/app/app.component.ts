import {Component, OnInit} from '@angular/core';
import {Entrada} from "../shared/data/Entrada";
import {LlistatEntrades} from "../shared/data/LlistatEntrades";
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {Hero} from "../shared/data/Hero";

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

  list: LlistatEntrades = new LlistatEntrades();

  fg: FormGroup = new FormGroup({
    nomObra: new FormControl([Validators.pattern('/^[a-z]{0,10}$/')]),
    data: new FormControl([Validators.pattern('^(\\d{2}).\\d{2}.(\\d{4})$')]),
    preu: new FormControl([Validators.pattern('/^[1-500]$/')]),
    numLocalitats: new FormControl([Validators.pattern('/^[1-500]$/')]),
    index: new FormControl()
  });

  constructor() {
    this.fg.patchValue({
      nomObra: "",
      data: '',
      preu: '',
      numLocalitats: ''
    })
  }

  recuperarDades(event) {
    if (this.fg.valid) {
      this.teError = false;
      this.success = true;

      let valors: any = this.fg.value;

      this.list.addEntrada(valors);
      this.fg.reset();
      // console.log("Contingut llista");
      // console.log(this.list.getEntradesAll());

    } else {
      this.teError = true;
    }

    return false;
  }

  delete(index) {

    this.list.doDeleteOne(index);
  }

  borrarDades(index) {

    this.list.doDeleteAll();
  }

  posicio1(index) {

    //this.list.doMove1();
    return null;
  }


  posicio2(index) {

    //this.list.doMove2();
    return null;
  }




  update(list: Entrada) {
    event.preventDefault();

    //this.fg.controls['id'].setValue(list.id);
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
    }

    //return false;
  }





}







