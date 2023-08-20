import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgbdNavVertical } from './path-to-your-navbar/nav-vertical.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // NgbdNavVertical
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,

    // NgbNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
