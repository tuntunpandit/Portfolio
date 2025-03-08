import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    UserComponent,
  ],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
