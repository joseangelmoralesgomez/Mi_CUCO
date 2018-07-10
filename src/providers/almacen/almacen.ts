import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { PICTOS } from "../../data/dataHome.pictos";
import { Picto } from "../../interfaces/picto.inteface"

import { Platform } from "ionic-angular";

@Injectable()
export class AlmacenService {
    pictos:Picto[] = [];
    contador: number = 20;
    bienvenida =true;

    constructor( private paltform:Platform,
                 private storage:Storage) {
        console.log('Hola Servicio de Almacén')
    }

    cargarStorage(){
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
                                if (pictos){
                                    this.pictos=pictos;
                                    resolve();
                                }else{
                                    this.pictos = PICTOS.splice(0);
                                }
                            })
                        this.storage.get("contador")
                            .then( contador=>{
                                if (contador){
                                    this.contador=contador;
                                    resolve();
                                }
                            })
                        this.storage.get("bienvenida")
                            .then( bienvenida=>{
                                if (bienvenida){
                                    this.bienvenida=bienvenida;
                                    resolve();
                                }
                            })
                    })

            }else{
                // Estamos en el navegador
                if ( localStorage.getItem("pictos") ){
                    this.pictos = JSON.parse( localStorage.getItem("pictos") );
                    this.contador = JSON.parse( localStorage.getItem("contador") );
                    this.bienvenida = JSON.parse( localStorage.getItem("bienvenida") )
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


    guardarStorage(){
        if ( this.paltform.is("cordova") ){
            // Estamos en un smartphone
            this.storage.ready()
                .then(()=>{
                    this.storage.set("pictos", this.pictos)
                    this.storage.set("contador", this.contador)
                    this.storage.set("bienvenida", this.bienvenida)
                });
            console.log("Fin de guardarStorage", this.storage, " Valor del contador", this.contador)
        }else{
            // Estamos en el un navegador
            localStorage.setItem("pictos", JSON.stringify(this.pictos));
            localStorage.setItem("contador", JSON.stringify(this.contador));
            localStorage.setItem("bienvenida", JSON.stringify(this.bienvenida));
            console.log("Fin de guardarStorage", localStorage)
        }
    }
}
