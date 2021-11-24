import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { EditPostComponent } from './pages/edit-post/edit-post.component';
import { ListPostsComponent } from './pages/list-posts/list-posts.component';
import { ViewPostComponent } from './pages/view-post/view-post.component';
import { PostResolver } from './resolvers/post.resolver';
import { PostsResolver } from './resolvers/posts.resolver';

export const routes: Routes = [
  {
    path: '',
    component: ListPostsComponent,
    resolve: {
      posts: PostsResolver,
    },
  },
  {
    path: 'new',
    component: CreatePostComponent,
  },
  {
    path: ':id',
    component: ViewPostComponent,
    resolve: {
      post: PostResolver,
    },
  },
  {
    path: ':id/edit',
    component: EditPostComponent,
    resolve: {
      post: PostResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
