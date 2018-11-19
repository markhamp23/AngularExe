import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {Error} from "tslint/lib/error";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  /*
  Camps entrades:
    - id - number
    - index - string

    - nom obra - string
    - data i hora espectacle - date
    - preu - double
    - número localitat - string "F16B4"
   */

  formulari: any = {
  };

  fg: FormGroup = null;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {

  }

}
