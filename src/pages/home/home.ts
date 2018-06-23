import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

// import { PICTOS } from "../../data/dataHome.pictos";
import { Picto } from "../../interfaces/picto.inteface";
import { PaginaPage, AboutPage, ConfigPage } from "../../pages/index.pages";

import { AlmacenService } from "../../providers/almacen/almacen";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
//  pictos:Picto[] = [];
  muestra_botones:boolean = false;
  acerca_de:any = AboutPage;

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public _almacen: AlmacenService ) {
  }

  irAPagina ( picto : Picto ){
      this.navCtrl.push (PaginaPage, {"picto":picto})
  }

  cambiarPicto (index:number){
    console.log (index);
  }
  borrarPicto( index:number){
    console.log (index);
    this._almacen.pictos.splice(index,1);
    this._almacen.guardar_storage();

//    this.pictos.splice(index,1);
//    PICTOS.splice(index,1);
//    this.pictos = PICTOS.splice(0);

  }

/*  saltar_intro(){
    this._almacen.intro.mostar_intro=false;

    this.navCtrl.setRoot (HomePage);
}*/

}
