import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, reorderArray, ModalController } from 'ionic-angular';

import { AddpictoPage } from "../../pages/index.pages";
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
              public modalCtrl: ModalController,
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

  borrarPicto( picto:Picto){
    console.log("Picto a borrar del storage: ",picto.posicion)
    this._almacen.pictos.splice(picto.posicion, 1);
    this._almacen.guardar_storage();
  }

  mostar_modal(){
    let modal = this.modalCtrl.create(AddpictoPage);
    modal.present();
  }

  irAddPicto ( indexPagina ){
    console.log ("Desde Config Pagina - Página en la que añadir el picto:", indexPagina);
    this.navCtrl.push (AddpictoPage, {indexPagina})
  }

  cambiarPicto (index:number){
    console.log (index);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPaginaPage');
    console.log('Picto Home: ', this.pictoPagina.pagina, '  Posicón: ',this.pictoPagina.posicion);
  }

}
