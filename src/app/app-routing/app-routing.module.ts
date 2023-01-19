import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "../pages/main-page/main-page.component";
import {NewPageComponent} from "../pages/new-page/new-page.component";
import {CommentsPageComponent} from "../pages/comments-page/comments-page.component";
import {AskPageComponent} from "../pages/ask-page/ask-page.component";
import {ShowPageComponent} from "../pages/show-page/show-page.component";
import {ItemPageComponent} from "../pages/item-page/item-page.component";

const routes: Routes = [
  {path:'', component:MainPageComponent},
  {path:'main', component:MainPageComponent},
  {path:'new', component:NewPageComponent},
  {path:'comments', component:CommentsPageComponent},
  {path:'ask', component:AskPageComponent},
  {path:'show', component:ShowPageComponent},
  {path:'item', component:ItemPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
