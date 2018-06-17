import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'; //helps query our data from database service use this  
import {HttpService} from './http.service';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent
  ],
  imports: [              // all the modules goes in imports
    BrowserModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [HttpService],  //all services goes in providers
  bootstrap: [AppComponent]
})
export class AppModule { }
