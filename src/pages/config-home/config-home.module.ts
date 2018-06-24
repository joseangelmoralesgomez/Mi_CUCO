import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfigHomePage } from './config-home';

@NgModule({
  declarations: [
    ConfigHomePage,
  ],
  imports: [
    IonicPageModule.forChild(ConfigHomePage),
  ],
})
export class ConfigHomePageModule {}
