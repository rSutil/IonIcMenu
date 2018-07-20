import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Menu } from '../../../node_modules/ionic-angular/umd/components/app/menu-interface';

/**
 * Generated class for the MenuSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-settings',
  templateUrl: 'menu-settings.html',
})
export class MenuSettingsPage {

  constructor(
    public menuCtrl: MenuController,
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuSettingsPage');
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false,'Menu3');

    this.menuCtrl
      .enable(true, 'Menu2')
      .open();
     /* 
     console.log('ionViewDidEnter MenuSettingsPage');
     this.MenuCtrl.toggle("Menu3");
     */
  } 

  toggleMenu1Enable(): void {
    let isEnabled: boolean = this.menuCtrl.isEnabled('Menu1');
    this.menuCtrl.enable(!isEnabled, 'Menu1');
  }

  menuConfigs(): void {
    //console.log(this.MenuCtrl.getMenus());
    let menu: Menu[]= this.menuCtrl.getMenus();


    menu.forEach((currentMenu: Menu, index: number, array: Menu[]) => {
      currentMenu.enable(false);
    });

    this.menuCtrl.get('Menu3')
      .enable(true)
      .open()
      .then(((opened: boolean) => {
        console.log('Menu3 Aberto?', opened);
      }))

  }

}
