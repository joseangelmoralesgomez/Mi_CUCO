import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { PICTOS } from "../../data/dataHome.pictos";
import { Picto } from "../../interfaces/picto.inteface"

import { Platform } from "ionic-angular";

@Injectable()
export class AlmacenService {
    pictos:Picto[] = [];

    constructor( private paltform:Platform,
                 private storage:Storage) {
        console.log('Hola Servicio de Almacén')
    }

    cargar_storage(){
        console.log('Inicio Cargar Storage')
        let lapromesa = new Promise ( (resolve, reject)=>{
            if ( this.paltform.is("cordova") ){
                // Estamos en un smartphone
                console.log('Inicializando Storage')
                this.storage.ready()
                    .then(()=>{
                        console.log('Storage Listo')
                        this.storage.get("pictos")
                            .then( pictos=>{
                                if (this.pictos){
                                    this.pictos=pictos;
                                    resolve();
                                }else{
                                    this.pictos = PICTOS.splice(0);
                                }
                            })
                    })

            }else{
                // Estamos en el navegador
                if ( localStorage.getItem("pictos") ){
                    this.pictos = JSON.parse( localStorage.getItem("pictos") )
                }else{
                    this.pictos = PICTOS.splice(0);
                };
                resolve();
            }
            console.log('Fin Cargar Storage sólo queda devolver la promesa')
        });
        console.log("Devolviendo lapromesa", localStorage);
        return lapromesa;
    }


    guardar_storage(){
        if ( this.paltform.is("cordova") ){
            // Estamos en un smartphone
            this.storage.ready()
                .then(()=>{
                    this.storage.set("pictos", this.pictos)
                });
            console.log("Fin de guardar_storage", this.storage)
        }else{
            // Estamos en el un navegador
            localStorage.setItem("pictos", JSON.stringify(this.pictos));
            console.log("Fin de guardar_storage", localStorage)
        }
    }
}
