import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {NewPageComponent} from './pages/new-page/new-page.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {RecordItemComponent} from './components/record-item/record-item.component';
import {RecordsComponent} from "./components/records/records.component";
import { CommentsPageComponent } from './pages/comments-page/comments-page.component';
import { AskPageComponent } from './pages/ask-page/ask-page.component';
import { ShowPageComponent } from './pages/show-page/show-page.component';
import { CommentComponent } from './components/comment/comment.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { ItemPageComponent } from './pages/item-page/item-page.component';
import { PageCommentComponent } from './components/page-comment/page-comment.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainPageComponent,
    NewPageComponent,
    RecordItemComponent,
    RecordsComponent,
    CommentsPageComponent,
    AskPageComponent,
    ShowPageComponent,
    CommentComponent,
    SafeHtmlPipe,
    ItemPageComponent,
    PageCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide:LocationStrategy, useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
