import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { PostService } from '@jsonplaceholder/api-codegen';
import { forkJoin, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { PostEntity } from '../models/post.entity';

@Injectable({ providedIn: 'root' })
export class PostsResolver implements Resolve<PostEntity[]> {
  constructor(private postService: PostService) {}

  resolve(): Observable<PostEntity[]> | Promise<PostEntity[]> | PostEntity[] {
    return this.postService.getPosts().pipe(
      switchMap((posts) => {
        const authorIds = [...new Set(posts.map((post) => post.userId))].filter(
          (id) => id
        ) as number[];

        return forkJoin([
          forkJoin(
            posts.map((post) =>
              this.postService
                .getCommentsByPost({ postId: post.id })
                .pipe(map((comments) => ({ ...post, comments })))
            )
          ),
          forkJoin(
            authorIds.map((userId) => this.postService.getUserById({ userId }))
          ),
        ]).pipe(
          map(([posts, authors]) =>
            posts.map((post) => ({
              ...post,
              author: authors.find((author) => author.id === post.userId),
            }))
          )
        );
      })
    );
  }
}
