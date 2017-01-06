import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/*
  Generated class for the Programa page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-programa',
  templateUrl: 'programa.html'
})
export class ProgramaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramaPage');
  }

}
