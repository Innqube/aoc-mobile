import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/*
  Generated class for the Keynotes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-keynotes',
  templateUrl: 'keynotes.html'
})
export class KeynotesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad KeynotesPage');
  }

}
