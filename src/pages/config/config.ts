import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


import { Picto } from "../../interfaces/picto.inteface";
import { AboutPage, ConfigHomePage, ConfigPaginaPage, GDPRPage } from "../../pages/index.pages";

import { AlmacenService } from "../../providers/almacen/almacen";

@IonicPage()
@Component({
    selector: 'page-config',
    templateUrl: 'config.html',
})
export class ConfigPage {
    titulo: string = "";
    imgPreview: string = "";
    imgURI: string = "";
    acerca_de:any = AboutPage;
    gdpr:any = GDPRPage;
    configHome:any = ConfigHomePage;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public viewCtrl: ViewController,
                public _almacen: AlmacenService ) {
    }

    cerrar(){
        this.viewCtrl.dismiss();
    }

    irAConfigurarPagina ( picto : Picto ){
        this.navCtrl.push (ConfigPaginaPage, {"picto":picto})
    }


}
