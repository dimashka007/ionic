import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroesProvider {

  ROOT_URL: string = 'https://api.opendota.com';

  constructor(public http: Http) {
    console.log('Hello HeroesProvider Provider');
  }

  get() {
    return this.http
    .get(`${this.ROOT_URL}/api/heroStats`)
    .map(res => res.json());
  }
}
