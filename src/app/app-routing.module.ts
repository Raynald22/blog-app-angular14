import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
    path: "home", component: MainComponent,
    data: { pageTitle: 'Home' },
  },
  {
    path: "createPost", component: CreatePostComponent,
    data: { pageTitle: 'Create Post' },
  },
  {
    path: "home/cardDetail", component: CardDetailComponent,
  },
  {
    path: "home/cardDetail/:id", component: CardDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
