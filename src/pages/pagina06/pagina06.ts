import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pagina06',
  templateUrl: 'pagina06.html',
})
export class Pagina06Page {
  picto:any ={};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.picto = this.navParams.get("picto");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina01Page');
  }

}
