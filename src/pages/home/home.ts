import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

// import { PICTOS } from "../../data/dataHome.pictos";
import { Picto } from "../../interfaces/picto.inteface";
import { Pagina01Page, Pagina02Page, Pagina03Page, Pagina04Page, Pagina05Page, Pagina06Page, AboutPage, ConfigPage } from "../../pages/index.pages";

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
     switch(picto.posicion) {
        case "01": {
          this.navCtrl.push (Pagina01Page, {"picto":picto});
          break;
        }
        case "02": {
          this.navCtrl.push (Pagina02Page, {"picto":picto});
          break;
        }
        case "03": {
          this.navCtrl.push (Pagina03Page, {"picto":picto});
          break;
        }
        case "04": {
          this.navCtrl.push (Pagina04Page, {"picto":picto});
          break;
        }
        case "05": {
          this.navCtrl.push (Pagina05Page, {"picto":picto});
          break;
        }
        case "06": {
          this.navCtrl.push (Pagina06Page, {"picto":picto});
          break;
        }
      }
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

  mostar_modal(){
      let modal = this.modalCtrl.create(ConfigPage);
      modal.present();
  }

  saltar_intro(){
//    this._almacen.intro.mostar_intro=false;

    this.navCtrl.setRoot (HomePage);
  }

}
