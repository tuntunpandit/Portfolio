import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/User/hero/hero.component';
import { AboutComponent } from './components/User/about/about.component';
import { ProjectsComponent } from './components/User/projects/projects.component';
import { ContactComponent } from './components/User/contact/contact.component';
import { NavbarComponent } from './components/User/navbar/navbar.component';
import { FooterComponent } from './components/User/footer/footer.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgxTypedJsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
