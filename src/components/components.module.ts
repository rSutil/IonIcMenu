import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { CustomHeaderComponent } from './custom-header/custom-header.component';
import { CommonModule } from '../../node_modules/@angular/common';
@NgModule({
	declarations: [
		CustomHeaderComponent
	],
	imports: [
		CommonModule, IonicModule
	],
	exports: [
		CustomHeaderComponent
	]
})
export class ComponentsModule {}
