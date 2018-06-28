import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';

import { Picto } from "../../interfaces/picto.inteface";
import { AlmacenService } from "../../providers/almacen/almacen";

@IonicPage()
@Component({
  selector: 'page-changepicto',
  templateUrl: 'changepicto.html',
})

export class ChangepictoPage {
  titulo: string = "";
  imgPreview: string = "";
  imgURI: string = "";
  posicion: number;
  pagina: number;
  pictoCambiar:any ={};
  i: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              private camera: Camera,
              private imagePicker: ImagePicker,
              private fileChooser: FileChooser,
              private filePath: FilePath,
              public _almacen: AlmacenService )  {
    let picto = this.navParams.get("picto");
    this.pictoCambiar = picto;
    this.titulo = this.pictoCambiar.nombre;
    this.imgURI = this.pictoCambiar.img;
    this.posicion = this.pictoCambiar.posicion;
    this.pagina = this.pictoCambiar.pagina;
    console.log ("Picto a editar:", this.titulo, this.imgURI, this.posicion, this.pagina);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddpictoPage');
    console.log("Nombre del picto a cambiar: ",this.pictoCambiar.nombre)
  }

  cerrar(){
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

  borrarPicto( picto:Picto){
    console.log("Entramos en borrar picto, el que hay que borrar es el : ",picto.posicion)
    this.i= this._almacen.pictos.indexOf(picto);
    console.log("Posición del picto a borrar ",this.i);
    this._almacen.pictos.splice(this.i, 1);
    this._almacen.guardar_storage();
  }


  guardar_picto( ){
      let picto = {
          img: this.imgURI,
          nombre: this.titulo,
          posicion: this.pictoCambiar.posicion,
          pagina: this.pictoCambiar.pagina
      }
      console.log("Posición: ",picto.posicion);
      console.log("Página en el picto: ",picto.pagina, "Página que hemos recogido",this.pagina);
      console.log ("guardando picto:", picto.img, picto.nombre, picto.posicion, picto.pagina);

      this.i= this._almacen.pictos.indexOf(this.pictoCambiar);
      console.log("Dómde debería escribirse ",this.i);
      this._almacen.pictos.splice(this.i, 1, picto);
      this._almacen.guardar_storage();
      console.log ("guardado en el almacén", this._almacen);
      this.cerrar()
  }

}
