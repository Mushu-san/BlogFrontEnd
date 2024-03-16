import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticiasModuleRoutingModule } from './noticias-module-routing.module';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { DetailNewsComponent } from './detail-news/detail-news.component';
import { RelatedNewsComponent } from './news/related-news/related-news.component';
import { CategoriesComponent } from './categories/categories.component';


@NgModule({
  declarations: [
    HomeComponent,
    NewsComponent,
    DetailNewsComponent,
    RelatedNewsComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    NoticiasModuleRoutingModule,
    IonicModule
  ]
})
export class NoticiasModuleModule { }
