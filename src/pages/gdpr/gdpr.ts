import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the GdprPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gdpr',
  templateUrl: 'gdpr.html',
})
export class GDPRPage {

  constructor(public navCtrl: NavController,
                public viewCtrl: ViewController,
                public navParams: NavParams) {
  }

  cerrar(){
      this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GDPRPage');
  }

}
