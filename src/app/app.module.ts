import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {
  HelloComponent,
  PageNotFoundComponent,
  HiComponent,
} from './hello.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    HelloComponent,
    PageNotFoundComponent,
    HiComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
