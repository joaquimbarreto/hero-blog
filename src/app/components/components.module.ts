import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { MatListModule } from '@angular/material/list';
import { PostsComponent } from './posts/posts.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { PostComponent } from './post/post.component';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatToolbarModule,
    RouterModule,
    MatIconModule,
  ],
  declarations: [
    HeaderComponent,
    HeroImageComponent,
    PostsComponent,
    PostComponent,
  ],
  exports: [HeaderComponent, HeroImageComponent, PostsComponent, PostComponent],
})
export class ComponentsModule {}
