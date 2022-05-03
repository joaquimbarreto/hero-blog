import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { MatListModule } from '@angular/material/list';
import { PostsComponent } from './posts/posts.component';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatToolbarModule
  ],
  declarations: [HeaderComponent, HeroImageComponent, PostsComponent],
  exports: [HeaderComponent, HeroImageComponent, PostsComponent]
})
export class ComponentsModule { }
