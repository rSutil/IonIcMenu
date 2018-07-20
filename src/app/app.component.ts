import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements AfterViewInit {
  @ViewChild(Nav) nav : Nav;
  pages: {title: string, component: any}[];
  rootPage:any = HomePage;

  constructor(
    public menuCtrl: MenuController,
    platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    this.pages = [
      {title: 'Home Page', component: HomePage},
      {title: 'About Page', component: AboutPage}
  ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngAfterViewInit() {
    this.menuCtrl.open('Menu1');
  }

  openPage(page: {title: string, component: any}): void {
    this.nav.setRoot(page.component);
  }

  onOpen(): void {
    console.log("Menu Opened");
  }

  onClose(): void {
    console.log("Menu Closed");
  }

  onDrag(): void {
    console.log("Menu Dragged");
  }



}

