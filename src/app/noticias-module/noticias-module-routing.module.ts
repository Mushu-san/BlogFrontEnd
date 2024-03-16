import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { DetailNewsComponent } from './detail-news/detail-news.component';
import { CategoriesComponent } from './categories/categories.component';
import { AuthorizationGuard } from '../general-module/Security/Guards/authorization.guard';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'detail/:id',
    component: DetailNewsComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: ':id',
    component: NewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticiasModuleRoutingModule { }
