import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PICTOS02 } from "../../data/dataHome.pictos";
import { Picto } from "../../interfaces/picto.inteface"

@IonicPage()
@Component({
  selector: 'page-pagina02',
  templateUrl: 'pagina02.html',
})
export class Pagina02Page {
  pictoHome:any ={};
  pictos:Picto[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pictoHome = this.navParams.get("picto");
    switch(this.pictoHome.posicion) {
        case "02": {
              this.pictos = PICTOS02;
          break;
        }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina01Page');
  }

}
