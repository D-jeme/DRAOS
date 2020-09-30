import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainpictureComponent } from './components/mainpicture/mainpicture.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { RegistracijaComponent } from './components/registracija/registracija.component';
import { PreviewArticleComponent } from './components/previewArticle/previewArticle.component';


@NgModule({
  declarations: [
    AppComponent,
    MainpictureComponent,
    MainpageComponent,
    RegistracijaComponent,
    PreviewArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
