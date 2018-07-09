import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';

import { AlmacenService } from "../../providers/almacen/almacen";


@IonicPage()
@Component({
  selector: 'page-addpicto',
  templateUrl: 'addpicto.html',
})

export class AddpictoPage {
  titulo: string = "";
  imgPreview: string = "";
  imgURI: string = "";
  pag: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              private camera: Camera,
              private fileChooser: FileChooser,
              private filePath: FilePath,
              public _almacen: AlmacenService )  {
    let pagina = this.navParams.get("indexPagina");
    console.log("en el constructor de addpicto el valor de página: n", pagina);
    this.pag = pagina
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddpictoPage');
    console.log("Página de pictoPagina: ",this.pag)
  }

  cerrar(){
      this.viewCtrl.dismiss();
  }

  mostrarCamara(){
      const options: CameraOptions = {
        quality: 50,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        saveToPhotoAlbum: true
      }

      this.camera.getPicture(options).then((imageData) => {
       // imageData is either a base64 encoded string or a file URI
       // If it's base64:
      this.imgPreview = 'data:image/jpeg;base64,' + imageData;
      this.imgURI = imageData;
      console.log("la imageData:" + imageData);
      console.log("la imgURI:" + this.imgURI);
      }, (err) => {
       // Handle error
       console.log("Error en cámara", JSON.stringify(err));
      });
  }

  seleccionarFichero(){
      this.fileChooser.open().then((imageData) => {
      //alert('uri'+JSON.stringify(imageData));
      // get file path
      		this.filePath.resolveNativePath(imageData)
      		.then(file => {
      			//alert('file'+JSON.stringify(file));
       			this.imgURI = file;
      		})
      		.catch(err => console.log(err));
      	})
      	.catch(e => console.log(e) /*alert('uri'+JSON.stringify(e))*/);
  }

  guardarPicto( ){
      let picto = {
          img: this.imgURI,
          nombre: this.titulo,
          id: this._almacen.contador++,
          pagina: this.pag
      }
      console.log("Posición: ",picto.id);
      console.log("Página en el picto: ",picto.pagina, "Página que hemos recogido",this.pag);
      console.log ("guardando picto:", picto.img, picto.nombre, picto.id, picto.pagina);

      this._almacen.pictos.splice(this._almacen.pictos.length, 0,picto);
      this._almacen.guardarStorage();
      console.log ("guardado en el almacén", this._almacen, "y elcontador es: ", this._almacen.contador);
      this.cerrar()
  }

  avisoGuardarPicto(){
    alert("Seleccione una imagen para añadir un nuevo Picto");
  }

}
