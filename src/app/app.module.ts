import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FromeventComponent } from './fromevent/fromevent.component';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  declarations: [AppComponent, FromeventComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
