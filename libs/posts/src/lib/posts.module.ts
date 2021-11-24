import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { EditPostComponent } from './pages/edit-post/edit-post.component';
import { ListPostsComponent } from './pages/list-posts/list-posts.component';
import { ViewPostComponent } from './pages/view-post/view-post.component';
import { PostsRoutingModule } from './posts-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    PostsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ListPostsComponent,
    ViewPostComponent,
    CreatePostComponent,
    EditPostComponent,
  ],
})
export class PostsModule {}
