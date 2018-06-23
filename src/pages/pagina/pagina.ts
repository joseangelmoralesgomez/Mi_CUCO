import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { Picto } from "../../interfaces/picto.inteface"
import { ConfigPage, AddpictoPage } from "../../pages/index.pages";
import { AlmacenService } from "../../providers/almacen/almacen";

@IonicPage()
@Component({
  selector: 'page-pagina',
  templateUrl: 'pagina.html',
})

export class PaginaPage {
  pictoHome:any ={};

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public navParams: NavParams,
              public _almacen: AlmacenService) {
    this.pictoHome = this.navParams.get("picto");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaginaPage');
    console.log("Página de pictoHome: ",this.pictoHome.pagina, " Posición de pictoHome: ", this.pictoHome.posicion)
  }

  mostar_modal(){
      let modal = this.modalCtrl.create(AddpictoPage);
      modal.present();
  }

}
