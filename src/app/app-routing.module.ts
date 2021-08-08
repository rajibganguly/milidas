import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AwardsComponent } from './awards/awards.component';
import { BooksComponent } from './books/books.component';
import { ContactComponent } from './contact/contact.component';
import { GallaryComponent } from './gallary/gallary.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { RecipeComponent } from './recipe/recipe.component';
import { VideosComponent } from './videos/videos.component';


const routes: Routes = [
  {
    path: '', component: MainComponent
  },
  {
    path: 'menu', component: MenuComponent
  },
  {
    path: 'videos', component: VideosComponent
  },
  {
    path: 'awards', component: AwardsComponent
  },
  {
    path: 'books', component: BooksComponent
  },
  {
    path: 'gallary', component: GallaryComponent
  },
  {
    path: 'recipe', component: RecipeComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
