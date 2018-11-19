import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { AboutComponent } from './about/about.component';
import { GenericService } from 'app/services/generic.service';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    AddBookComponent,
    UpdateBookComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: "", component: BookComponent},
      {path: "book", component: AddBookComponent},
      {path: "updateBook/:id", component: UpdateBookComponent},
      {path: "about", component: AboutComponent}
    ])
  ],
  providers: [GenericService],
  bootstrap: [AppComponent]
})
export class AppModule { }
