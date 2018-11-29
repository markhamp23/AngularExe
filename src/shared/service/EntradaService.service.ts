import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Entrada} from "../data/Entrada";
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class LlistatEntrades {

  constructor(private http: HttpClient) {}
}
