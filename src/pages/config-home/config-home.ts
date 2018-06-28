import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, reorderArray } from 'ionic-angular';

import { AlmacenService } from "../../providers/almacen/almacen";


@IonicPage()
@Component({
  selector: 'page-config-home',
  templateUrl: 'config-home.html',
})
export class ConfigHomePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public _almacen: AlmacenService ) {
  }

  cerrar_modal(){
      this.viewCtrl.dismiss();
  }

  reordenar( indice ){
    console.log(indice)
    this._almacen.pictos = reorderArray (this._almacen.pictos, indice);
    this._almacen.guardar_storage();
  }

  cambiarPicto (index:number){
    console.log (index);
  }

  irAddPicto ( indexPagina ){
    console.log ("Desde Config Pagina - Página en la que añadir el picto:", indexPagina);
    this.navCtrl.push (AddpictoPage, {indexPagina})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigHomePage');
  }

}
