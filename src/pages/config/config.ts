import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';

import { Picto } from "../../interfaces/picto.inteface";
import { AlmacenService } from "../../providers/almacen/almacen";

@IonicPage()
@Component({
    selector: 'page-config',
    templateUrl: 'config.html',
})
export class ConfigPage {
    titulo: string;
    imgPreview: string;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public viewCtrl: ViewController,
                private camera: Camera,
                public _almacen: AlmacenService ) {
    }

        cerrar_modal(){
        this.viewCtrl.dismiss();
    }
    mostrar_camara(){
        const options: CameraOptions = {
          quality: 50,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE
        }

        this.camera.getPicture(options).then((imageData) => {
         // imageData is either a base64 encoded string or a file URI
         // If it's base64:
        this.imgPreview = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
         // Handle error
         console.log("Error en cámara", JSON.stringify(err));
        });
    }

    seleccionar_imagen_camara(){
        const options: CameraOptions = {
          quality: 50,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE,
          sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        }

        this.camera.getPicture(options).then((imageData) => {
         // imageData is either a base64 encoded string or a file URI
         // If it's base64:
        this.imgPreview = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
         // Handle error
         console.log("Error en cámara", JSON.stringify(err));
        });
        return this.imgPreview;
    }

    componer_picto(){
        
    }

    guardar_picto(index:number){
        console.log (index);
        this._almacen.pictos.splice(index,1);
        this._almacen.pictos.splice(
        this._almacen.pictos.indexOf(this._almacen.pictos), 0,this.imgPreview );
        this._almacen.guardar_storage();
    }

}
