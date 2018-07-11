import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GDPRPage } from './gdpr';

@NgModule({
  declarations: [
    GDPRPage,
  ],
  imports: [
    IonicPageModule.forChild(GDPRPage),
  ],
})
export class GDPRPageModule {}
