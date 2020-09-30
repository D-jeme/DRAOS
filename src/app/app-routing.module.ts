import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainpageComponent } from './components/mainpage/mainpage.component';
import { RegistracijaComponent } from './components/registracija/registracija.component';
import {PreviewArticleComponent} from './components/previewArticle/previewArticle.component';
import { MainpictureComponent } from './components/mainpicture/mainpicture.component';


const routes: Routes = [
{ path:'all', component: MainpageComponent },
{ path:'', component: RegistracijaComponent},
{path:'previewArticle',component:PreviewArticleComponent},
{ path:'previewArticle/:id', component: PreviewArticleComponent },
{ path:'mainpicture', component: MainpictureComponent },
{ path: '**', pathMatch: 'full', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
