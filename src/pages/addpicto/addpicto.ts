import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              private camera: Camera,
              private imagePicker: ImagePicker,
              private fileChooser: FileChooser,
              private filePath: FilePath,
              public _almacen: AlmacenService )  {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddpictoPage');
  }
  cerrar_modal(){
      this.viewCtrl.dismiss();
  }

  mostrar_camara(){
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




  seleccionar_imagen_camara(){
      const options: CameraOptions = {
        quality: 50,
        destinationType: this.camera.DestinationType.NATIVE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      }

      this.camera.getPicture(options).then((imageData) => {
       // imageData is either a base64 encoded string or a file URI
       // If it's base64:
      this.imgPreview = 'data:image/jpeg;base64,' + imageData;
      this.imgURI = imageData;
      console.log("la imageData:", imageData);
      console.log("la imgURI:", this.imgURI);
      }, (err) => {
       // Handle error
       console.log("Error en cámara", JSON.stringify(err));
      });
  }


  seleccionar_imagen_galeria(){
      let options: ImagePickerOptions ={
          quality: 50,
          outputType: 0,
          maximumImagesCount: 1
      }
      this.imagePicker.getPictures(options).then((results) => {
        for (var i = 0; i < results.length; i++) {
            console.log('Image URI: ' + results[i]);
            this.imgURI = results[i];
            console.log("la imgURI:" + this.imgURI);
        }
      }, (err) => {
          console.log("Error en selección de imágenes", JSON.stringify(err));
      });
  }

  seleccionar_fichero(){
      this.fileChooser.open().then((imageData) => {
      alert('uri'+JSON.stringify(imageData));
      // get file path
      		this.filePath.resolveNativePath(imageData)
      		.then(file => {
      			alert('file'+JSON.stringify(file));
       			this.imgURI = file;
      		})
      		.catch(err => console.log(err));
      	})
      	.catch(e => alert('uri'+JSON.stringify(e)));
  }



  guardar_picto( ){
      let picto = {
          img: this.imgURI,
          nombre: this.titulo
      }
      console.log ("guardando picto:", picto.img, picto.nombre);

      this._almacen.pictos.splice(this._almacen.pictos.length, 0,picto);
      this._almacen.guardar_storage();
      console.log ("guardado en el almacén", this._almacen);
      this.cerrar_modal()
  }
}
