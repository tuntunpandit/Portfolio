import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxTypedJsModule } from 'ngx-typed-js';
import { AdminComponent } from './components/Admin/admin.component';
@NgModule({
  declarations: [AppComponent, AdminComponent],
  imports: [BrowserModule, AppRoutingModule, NgxTypedJsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
