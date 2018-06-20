import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ConfigPage } from '../pages/config/config';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Pagina01Page, Pagina02Page, Pagina03Page, Pagina04Page, Pagina05Page, Pagina06Page } from "../pages/index.pages";

// Plugins
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';

// Servicios
import { AlmacenService } from '../providers/almacen/almacen';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ConfigPage,
    HomePage,
    TabsPage,
    Pagina01Page,
    Pagina02Page,
    Pagina03Page,
    Pagina04Page,
    Pagina05Page,
    Pagina06Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ConfigPage,
    HomePage,
    TabsPage,
    Pagina01Page,
    Pagina02Page,
    Pagina03Page,
    Pagina04Page,
    Pagina05Page,
    Pagina06Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    ImagePicker,
    FileChooser,
    FilePath,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AlmacenService
  ]
})
export class AppModule {}
