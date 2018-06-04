import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Pagina04Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina04',
  templateUrl: 'pagina04.html',
})
export class Pagina04Page {
  picto:any ={};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.picto = this.navParams.get("picto");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina01Page');
  }
}
