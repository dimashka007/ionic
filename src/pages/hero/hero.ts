import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-hero',
  templateUrl: 'hero.html',
})
export class HeroPage {

  public hero: {} = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log(this.navParams.get('hero'))
    this.hero = this.navParams.get('hero');
  }

  loader() {
    return this.loadingCtrl.create({
      content: "Loading heroes..."
    });
  }

}
