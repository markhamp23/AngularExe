import {Component, OnInit} from '@angular/core';
import {Hero} from "../shared/data/Hero";
import {LlistaHeros} from "../shared/data/LlistatHeros";
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {Error} from "tslint/lib/error";
import {HeroService} from "../shared/service/HeroService.service";
import {isArray} from "util";
import {Observable} from "rxjs/internal/Observable";
import {forkJoin} from "rxjs/internal/observable/forkJoin";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  idFictici = 0;

  teError: boolean = false;
  success: boolean = false;
  missatgeSuccess: string = "S'han enviat les dades correctament";
  misstatgeErrorForm: string = "Falten dades per completar el tràmit";

  list: LlistaHeros = new LlistaHeros();

  formulari: any = {
    nom: [null, [Validators.pattern(/^([a-zA-Z0-9_-]){1,20}$/)]],
    forca: 0,
    poder: null,
    velocitat: 0,
    any: null,
    id: null,
    index: null
  };

  fg: FormGroup = null;

  constructor(private fb: FormBuilder, private heroService: HeroService) {
    this.fg = this.fb.group(this.formulari);
  }

  ngOnInit() {
    this.heroService.getListHero().subscribe(
      (data: any[]) => {

        this.list.setLlistat([]);

        if(isArray(data)) {
          data.forEach((valors) => {
            let hero = new Hero(valors["id"], valors["nom"],valors["forca"],valors["poder"],valors["velocitat"],valors["any"]);
           this.list.addHero(hero);
          });
        }

    }, (error) =>{

    });
  }

  recuperarDades(event) {
    if (this.fg.valid) {
      this.teError = false;
      this.success = true;

      let valors: any = this.fg.value;

      let hero = new Hero(null, valors["nom"],valors["forca"],valors["poder"],valors["velocitat"],valors["any"]);

      let promise: Observable<any> = this.heroService.postListHero(hero.mappingToHTTP());
      promise.subscribe((success) => {
        console.log("FET");
        this.list.addHero(hero);
        this.fg.reset();
      }, (error) => {
        console.log("ERROR");
      });

    }else{
      this.teError = true;
    }

    return false;
  }

  delete(event, hero: Hero) {
    event.preventDefault();
    //this.list.deleteHero(hero.index);

    let promise: Observable<any> = this.heroService.deleteListHero(hero.id);
    promise.subscribe((success) => {
      console.log("FET");
      this.list.deleteHero(hero.index);
      this.fg.reset();
    }, (error) => {
      console.log("ERROR");
    });

  }

  update(event, hero: Hero) {
    event.preventDefault();

    this.fg.controls['nom'].setValue(hero.nom);
    this.fg.controls['forca'].setValue(hero.forca);
    this.fg.controls['poder'].setValue(hero.poder);
    this.fg.controls['velocitat'].setValue(hero.velocitat);
    this.fg.controls['any'].setValue(hero.any);
    this.fg.controls['index'].setValue(hero.index);
    this.fg.controls['id'].setValue(hero.id);

  }

  modificarDades(event) {
    event.preventDefault();
    console.log(this.fg.value);

    if (this.fg.valid) {

      let hero: any = this.fg.value;

      let promise: Observable<any> = this.heroService.modificarListHero(hero.id, hero);
      promise.subscribe((success) => {
        console.log("FET");
        this.list.updatehero(hero);
        this.fg.reset();
      }, (error) => {
        console.log("ERROR");
      });
    }
    return false;
  }


  eliminartot(event) {

    let llistatDePromeses: Observable<any>[] = [];

      this.heroService.getListHero().subscribe(
        (data: any[]) => {

          if(isArray(data)) {
            data.forEach((hero) =>{
              llistatDePromeses.push(this.heroService.deleteListHero(hero.id));
            });
          }

          forkJoin(llistatDePromeses).subscribe((data)=>{
            console.log("DATA", data);
            this.ngOnInit();
          }, (error)=>{
            console.log("ERROR");
            this.ngOnInit();
          });

        }, (error) =>{

        });
    }

  cercar(event) {
    event.preventDefault();

    if (this.fg.valid) {

      let hero: Hero = this.fg.value;

      let promise: Observable<any> = this.heroService.cercaListHero(hero);
      promise.subscribe((success: any[]) => {
        this.list.setLlistat([]);

        for (let i = 0; i < success.length; i++) {
          this.list.addHero(success[i]);
        }

      }, (error) => {
        console.log("ERROR");
      });
    }
    return false;
  }
}



//ngOnInit

