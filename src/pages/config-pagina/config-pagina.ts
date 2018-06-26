import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, reorderArray } from 'ionic-angular';

import { Picto } from "../../interfaces/picto.inteface";

import { AlmacenService } from "../../providers/almacen/almacen";

@IonicPage()
@Component({
  selector: 'page-config-pagina',
  templateUrl: 'config-pagina.html',
})
export class ConfigPaginaPage {
      pictoPagina:any ={};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public _almacen: AlmacenService) {
    this.pictoPagina = this.navParams.get("picto")
  }

  cerrar_modal(){
      this.viewCtrl.dismiss();
  }

  reordenar( indice ){
    console.log(indice)
    this._almacen.pictos = reorderArray (this._almacen.pictos, indice);
    this._almacen.guardar_storage();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPaginaPage');
    console.log('Picto Home: ', this.pictoPagina.pagina, '  Posicón: ',this.pictoPagina.posicion);
  }

}
