import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class GeneralModuleModule { }
