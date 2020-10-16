import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostlistComponent } from './posts/postlist/postlist.component';
import { PostcreateComponent } from './posts/postcreate/postcreate.component';
import { TopiccreateComponent } from './topics/topiccreate/topiccreate.component';
import { TopiclistComponent } from './topics/topiclist/topiclist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostlistComponent,
    PostcreateComponent,
    TopiccreateComponent,
    TopiclistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
