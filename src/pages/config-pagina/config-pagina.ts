import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, reorderArray, ModalController } from 'ionic-angular';

import { AddpictoPage, ChangepictoPage } from "../../pages/index.pages";
import { Picto } from "../../interfaces/picto.inteface";
import { AlmacenService } from "../../providers/almacen/almacen";

@IonicPage()
@Component({
  selector: 'page-config-pagina',
  templateUrl: 'config-pagina.html',
})
export class ConfigPaginaPage {
      pictoPagina:any ={};
      pictoBorrar:any ={};
      i:number =0;
      pictoABorrar:number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public modalCtrl: ModalController,
              public _almacen: AlmacenService) {
    this.pictoPagina = this.navParams.get("picto")
  }

  cerrar(){
      this.viewCtrl.dismiss();
  }

  reordenar( indice ){
    console.log(indice)
    this._almacen.pictos = reorderArray (this._almacen.pictos, indice);
    this._almacen.guardar_storage();
  }

  borrarPicto( picto:Picto){
    console.log("Entramos en borrar picto, el que hay que borrar es el : ",picto.id)
    this.i= this._almacen.pictos.indexOf(picto);
    this._almacen.pictos.splice(this.i, 1);
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

  editarPicto ( picto : Picto ){
      this.navCtrl.push (ChangepictoPage, {"picto":picto})
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPaginaPage');
    console.log('Picto Home: ', this.pictoPagina.pagina, '  Posicón: ',this.pictoPagina.id);
  }

}
