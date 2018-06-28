import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PaginaPage, AddpictoPage, AboutPage, ConfigPage, HomePage, TabsPage, ConfigHomePage, ConfigPaginaPage, ChangepictoPage } from "../pages/index.pages";

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
    AddpictoPage,
    PaginaPage,
    ConfigHomePage,
    ConfigPaginaPage,
    ChangepictoPage
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
    ChangepictoPage
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
