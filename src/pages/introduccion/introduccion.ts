import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { AlmacenService } from "../../providers/almacen/almacen";

import { HomePage, GDPRPage } from "../../pages/index.pages";

@IonicPage()
@Component({
  selector: 'page-introduccion',
  templateUrl: 'introduccion.html',
})
export class Introduccion {
  gdpr:any = GDPRPage;
  slides:any[] = [
    {
      titulo: "Bienvenid@ al manual de",
      descripcion: "<h2>Mi CUCO </h2><b>Mi Cuaderno de Comunicación.</b><br /><br /> La App de las personas no verbales. Puedes configurar los tableros de comunicación, personalizando los pictos como los títulos.",
      img: "assets/pictos/bienvenida01.png",
    },
    {
      titulo: "Tableros de comunicación",
      descripcion: "<h2>Mi CUCO </h2><b>Cuenta con un tablero pincipal cuenta con 6 categorías, y en cada categoría podemos añadir tantos pictos como estimemos oportunos.",
      img: "assets/pictos/bienvenida01.png",
    },
    {
      titulo: "Configurar Mi cuco",
      descripcion: "Accedemos desde la rueda dentada. <br /> Configuramos cada Tableros de Sección, y el Principal.<br /> En el Principal se puede reordenar los pictos o editarlos. <br /> En los Tableros de Sección, además podemos borrar un pictogrma o añadir uno nuevo.",
      img: "assets/pictos/bienvenida02.png",
    },
    {
      titulo: "Reordenar, Editar",
      descripcion: "<b>Reordena:</b> Pulsa en el icono y desplaza el picto a la nueva ubicación. <br /> <b>Edita:</b> Desplaza el icono hacia la izquierda y tendrás acceso a la opción, donde podrás cambiar el título y el pictograma<br />",
      img: "assets/pictos/bienvenida03.png",
    },
    {
      titulo: "Borrar, Añadir",
      descripcion: "En el tablero de sección desplaza el icono hacia la izquierda y pulsando sobre la opción se borra el picto.<br /> <b>Añade:</b> En el Tablero de Sección pulsa sobre el botón y podrás añadir un nuevo picto a ese tablero.",
      img: "assets/pictos/bienvenida03.png",
    },
    {
      titulo: "Tus fotos son tus pictos",
      descripcion: "Editar o Añadir Pictos, eligiendo una imagen del album, o tomando una foto con la cámara. <br />La imagen es obligatoria, el título opcional.",
      img: "assets/pictos/bienvenida04.png",
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
