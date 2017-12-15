import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { HeroPage } from '../hero/hero';
import { HeroesProvider } from './../../providers/heroes/heroes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ROOT_URL: string = 'https://api.opendota.com';
  heroes: any[] = [];

  constructor(public navCtrl: NavController, private loadingCtrl: LoadingController, private heroService: HeroesProvider) {

  }

  ionViewDidLoad() {
    this.fetchHeroes();
  }

  fetchHeroes() {
    let loader = this.loader();
    loader.present();
    return this.heroService.get()
    .subscribe((data) => {
      data.forEach((hero) => {
        console.log(hero)
        this.heroes.push({
          localized_name: hero.localized_name,
          imageUrl: `${this.ROOT_URL}${hero.img}`,
          roles: hero.roles,
          base_str: hero.base_str,
          base_agi: hero.base_agi,
          base_int: hero.base_int,
          str_gain: hero.str_gain,
          agi_gain: hero.agi_gain,
          int_gain: hero.int_gain,
          move_speed: hero.move_speed,
          turn_rate: hero.turn_rate,
          attack_range: hero.attack_range,
          projectile_speed: hero.projectile_speed,
          attack_rate: hero.attack_rate,
          magic_resistance: hero.base_mr,
          legs: hero.legs
        })
      })
    }, (error) => {
      console.log(error);
    }, () => {
      loader.dismiss();
    })
  }

  filterHeroes() {
   
  }

  viewHero(hero) {
    this.navCtrl.push(HeroPage, { hero });
  }

  loader() {
    return this.loadingCtrl.create({
      content: "Loading heroes..."
    });
  }

}
