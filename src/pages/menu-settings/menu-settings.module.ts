import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuSettingsPage } from './menu-settings';

@NgModule({
  declarations: [
    MenuSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuSettingsPage),
    ComponentsModule
  ], 
  exports: [
    MenuSettingsPage
  ]
})
export class MenuSettingsPageModule {}
