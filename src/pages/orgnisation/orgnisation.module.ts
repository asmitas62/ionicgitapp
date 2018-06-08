import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrgnisationPage } from './orgnisation';

@NgModule({
  declarations: [
    OrgnisationPage,
  ],
  imports: [
    IonicPageModule.forChild(OrgnisationPage),
  ],
})
export class OrgnisationPageModule {}
