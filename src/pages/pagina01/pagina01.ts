import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PICTOS01 } from "../../data/dataHome.pictos";
import { Picto } from "../../interfaces/picto.inteface"

@IonicPage()
@Component({
  selector: 'page-pagina01',
  templateUrl: 'pagina01.html',
})
export class Pagina01Page {
  pictoHome:any ={};
  pictos:Picto[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pictoHome = this.navParams.get("picto");
    switch(this.pictoHome.posicion) {
        case "01": {
              this.pictos = PICTOS01;
          break;
        }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina01Page');
    console.log("pictos01")
  }

}
