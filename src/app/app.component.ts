import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from "../pages/index.pages";
import { AlmacenService } from '../providers/almacen/almacen'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
//  rootPage:any = HomePage;
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
             private _almacen:AlmacenService) {
    platform.ready().then(() => {
        this._almacen.cargarStorage().
          then( ()=>{
/*            if (this._almacen.bienvenida) {
              this.rootPage = "Introduccion";
            }else{
              this.rootPage = HomePage;
            } */
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
          splashScreen.hide();
          })


    });
  }
}
