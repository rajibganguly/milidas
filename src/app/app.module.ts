import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { BooksComponent } from './books/books.component';
import { AwardsComponent } from './awards/awards.component';
import { RecipeComponent } from './recipe/recipe.component';
import { VideosComponent } from './videos/videos.component';
import { PopupComponent } from './popup/popup.component';
import { AuthorService } from './author.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    MenuComponent,
    GallaryComponent,
    ContactComponent,
    BooksComponent,
    AwardsComponent,
    RecipeComponent,
    VideosComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ AuthorService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
