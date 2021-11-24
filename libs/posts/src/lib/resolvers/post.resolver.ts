import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { PostService } from '@jsonplaceholder/api-codegen';
import { forkJoin, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { PostEntity } from '../models/post.entity';

@Injectable({ providedIn: 'root' })
export class PostResolver implements Resolve<PostEntity> {
  constructor(private postService: PostService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<PostEntity> | Promise<PostEntity> | PostEntity {
    return this.postService
      .getPostById({ postId: route.paramMap.get('id') })
      .pipe(
        switchMap((post) => {
          return forkJoin([
            this.postService.getCommentsByPost({ postId: post.id }),
            this.postService.getUserById({ userId: post.userId }),
          ]).pipe(
            map(([comments, author]) => ({
              ...post,
              comments,
              author,
            }))
          );
        })
      );
  }
}
