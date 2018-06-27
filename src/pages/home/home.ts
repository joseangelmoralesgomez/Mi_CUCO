import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { PaginaPage, AboutPage, ConfigPage } from "../../pages/index.pages";
import { Picto } from "../../interfaces/picto.inteface";
import { AlmacenService } from "../../providers/almacen/almacen";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
//  pictos:Picto[] = [];
  muestra_botones:boolean = false;
  acerca_de:any = AboutPage;
  configuracion:any = ConfigPage;

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public _almacen: AlmacenService ) {
  }

  irAPagina ( picto : Picto ){
      this.navCtrl.push (PaginaPage, {"picto":picto})
  }

/*  saltar_intro(){
    this._almacen.intro.mostar_intro=false;

    this.navCtrl.setRoot (HomePage);
}*/

}
