import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PaginaPage, AddpictoPage, AboutPage, ConfigPage, HomePage, TabsPage, ConfigHomePage, ConfigPaginaPage, ChangepictoPage, Introduccion, GDPRPage } from "../pages/index.pages";

// Plugins
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';
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
    AddpictoPage,
    PaginaPage,
    ConfigHomePage,
    ConfigPaginaPage,
    ChangepictoPage,
    Introduccion,
    GDPRPage
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
    AddpictoPage,
    PaginaPage,
    ConfigHomePage,
    ConfigPaginaPage,
    ChangepictoPage,
    Introduccion,
    GDPRPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    FileChooser,
    FilePath,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AlmacenService
  ]
})
export class AppModule {}
