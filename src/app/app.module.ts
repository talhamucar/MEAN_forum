import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostlistComponent } from './posts/postlist/postlist.component';
import { PostcreateComponent } from './posts/postcreate/postcreate.component';
import { TopiccreateComponent } from './topics/topiccreate/topiccreate.component';
import { TopiclistComponent } from './topics/topiclist/topiclist.component';
import { FooterComponent } from './footer/footer.component';
import { TopicService } from './topics/topic.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostlistComponent,
    PostcreateComponent,
    TopiccreateComponent,
    TopiclistComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [TopicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
