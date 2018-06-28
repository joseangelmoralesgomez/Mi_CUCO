import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, reorderArray } from 'ionic-angular';

import { ChangepictoPage } from "../../pages/index.pages";
import { Picto } from "../../interfaces/picto.inteface";
import { AlmacenService } from "../../providers/almacen/almacen";


@IonicPage()
@Component({
  selector: 'page-config-home',
  templateUrl: 'config-home.html',
})
export class ConfigHomePage {
  pictoPagina:any ={};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public _almacen: AlmacenService ) {
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

  editarPicto ( picto : Picto ){
      this.navCtrl.push (ChangepictoPage, {"picto":picto})
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigHomePage');
  }

}
