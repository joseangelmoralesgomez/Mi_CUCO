import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { AlmacenService } from "../../providers/almacen/almacen";

import { HomePage, GDPRPage } from "../../pages/index.pages";


@Component({
  selector: 'page-introduccion',
  templateUrl: 'introduccion.html',
})
export class Introduccion {
  gdpr:any = GDPRPage;
  slides:any[] = [
    {
      titulo: "Bienvenid@ al manual de",
      descripcion: "<h2>Mi CUCO </h2><b>Mi Cuaderno de Comunicación.</b><br /><br /> La App de las personas no verbales. En la que puedes configurar los tableros de comunicación, según tus necesidades, personalizando los pictos como los títulos.<br />El tablero pincipal cuenta con 6 categorías, y en cada categoría podemos añadir tantos pictos como estimemos oportunos.",
      img: "assets/pictos/bienvenida01.png",
    },
    {
      titulo: "Configurar Mi cuco",
      descripcion: "Podemos configurar Mi CUCO accediendo desde la rueda dentada. <br /> En esa página se puede configurar cada uno de los Tableros de Sección, como el Tablero Principal.<br /> En el tablero Principal se puede reordenar los pictos o editar uno de los existentes y actualizar el título y cambiar el picto, por una imagen. <br /> En los Tableros de Sección, además podemos borrar un pictogrma o añadir uno nuevo.",
      img: "assets/pictos/bienvenida02.png",
    },
    {
      titulo: "Reordenar, Editar, Borrar, Añadir",
      descripcion: "<b>Reordena:</b> Pulsa en el icono y desplaza el picto a la nueva ubicación. <br /> <b>Edita:</b> Desplaza el icono hacia la izquierda y tendrás acceso a la opción, donde podrás cambiar el título y el pictograma<br /> <b>Borra:</b> En el tablero de sección desplaza el icono hacia la izquierda y pulsando sobre la opción se borra el picto.<br /> <b>Añade:</b> En el Tablero de Sección pulsa sobre el botón y podrás añadir un nuevo picto a ese tablero.",
      img: "assets/pictos/bienvenida03.png",
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
