import { MenuSettingsPage } from '../menu-settings/menu-settings';
import { AboutPage } from '../about/about';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onAbout(): void {
    this.navCtrl.push(AboutPage);
  }

  onSettings(): void {
    this.navCtrl.push(MenuSettingsPage);
  }  
}
