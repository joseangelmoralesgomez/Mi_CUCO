import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { AlmacenService } from "../../providers/almacen/almacen";

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-introduccion',
  templateUrl: 'introduccion.html',
})
export class IntroduccionPage {
  slides:any[] = [
    {
      title: "Bienvenido a...!!!",
      description: "<h2>Mi CUCO </h2><b>Mi Cuaderno de Comunicación.</b><br /><br /> La App de las personas no verbales.",
      image: "assets/pictos/bienvenida01.png",
    },
    {
      title: "¿Qué es Mi CUCO?",
      description: "<b>Mi CUCO</b> facilita la comunicación a personas no verbales.<br /> Mi CUCO satisface las necesidades de una persona con un alto grado de Discapacidad Intelectual. Utiliza los fundamentos de los <b>Sistemas Aumentativos de comunicación (SAAC)</b>, y los pictogramas como medio de comunicación",
      image: "assets/pictos/bienvenida02.png",
    },
    {
      title: "Los Pictos son tus FOTOS!!!",
      description: "Fácil de usar, sencilla de configurar.<br /> Además de utilizar los pictogramas de SAAC, puedes tomar una foto y emplearla en tu tablero de comunicación.",
      image: "assets/pictos/bienvenida03.png",
    }
  ];

  constructor(public navCtrl: NavController,
              public _almacen: AlmacenService ) {
  }

  saltar_tutorial(){
    this._almacen.bienvenida=false;
    console.log(this._almacen.bienvenida);
    this._almacen.guardarStorage();
    this.navCtrl.setRoot( HomePage );
  };

}
