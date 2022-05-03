import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { MatListModule } from '@angular/material/list';
import { PostsComponent } from './posts/posts.component';


@NgModule({
  imports: [
    CommonModule,
    MatListModule
  ],
  declarations: [HeaderComponent, HeroImageComponent, PostsComponent],
  exports: [HeaderComponent, HeroImageComponent, PostsComponent]
})
export class ComponentsModule { }
