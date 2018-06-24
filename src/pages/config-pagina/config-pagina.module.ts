import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfigPaginaPage } from './config-pagina';

@NgModule({
  declarations: [
    ConfigPaginaPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfigPaginaPage),
  ],
})
export class ConfigPaginaPageModule {}
