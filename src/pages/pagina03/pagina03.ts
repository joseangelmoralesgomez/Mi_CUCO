import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Pagina03Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina03',
  templateUrl: 'pagina03.html',
})
export class Pagina03Page {
  picto:any ={};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.picto = this.navParams.get("picto");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina01Page');
  }

}
