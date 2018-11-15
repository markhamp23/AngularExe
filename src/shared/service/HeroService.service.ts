import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Hero} from "../data/Hero";
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class HeroService {

  constructor(private http: HttpClient) {

  }

  getListHero() {
    return this.http.get("http://localhost:4000/heros");
  }


  postListHero(data: Hero): Observable<any> {
    return this.http.post("http://localhost:4000/heros", data);
  }

  deleteListHero(id: Number): Observable<any> {
    return this.http.delete(`http://localhost:4000/heros/${id}`);
  }


  modificarListHero(id: Number, data: Hero): Observable<any> {
    return this.http.put(`http://localhost:4000/heros/${id}`,data);
  }

   //cercaListHero(nom: string, forca: number, velocitat: number,poder: string, any: number): Observable<any> {
    cercaListHero(hero: Hero): Observable<any> {


      let url_prova = (`http://localhost:4000/heros?`);
      let validate = [];

      if(url_prova) // if is not negative,undefined,null,empty value then...
      {
        validate.push(url_prova);
      }



      if(hero.nom) // if is not negative,undefined,null,empty value then...
      {
        //url_prova += "nom=${nom}";

        validate.push(`nom=${hero.nom}`);

      }

      if(hero.forca != null)
      {
        //url_prova += "&forca=${forca}";

        validate.push(`forca=${hero.forca}`);

      }

      if(hero.velocitat != null)
      {
        //url_prova += "&velocitat=${velocitat}";

        validate.push(`velocitat=${hero.velocitat}`);
      }

      if(hero.poder)
      {
        //url_prova += "&poder=${poder}";

        validate.push(`poder=${hero.poder}`);
      }

      if(hero.any)
      {
        //url_prova += "&any=${any}";

        validate.push(`any=${hero.any}`);
      }

      let a = validate.join(`&`);
      let b = a.substring(29,a.length);
      let c = (url_prova+b);

      //for(let i=1;i>=array.length;i++)
      //parametresURL.shift();

      console.log("PROVA", `${c}`);

      return this.http.get(c);

    //return this.http.get(`http://localhost:4000/heros?nom=${nom}&forca=${forca}&velocitat=${velocitat}&poder=${poder}&any=${any}`);
  }

}
