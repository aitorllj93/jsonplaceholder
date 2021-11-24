import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '@jsonplaceholder/api-codegen';
import { FormControl, FormGroup } from '@ng-stack/forms';
import { PostEntity } from '../../models/post.entity';

@Component({
  selector: 'jsonplaceholder-edit-post',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <input type="text" formControlName="title" />
      <textarea formControlName="body"></textarea>
      <button type="submit">Create Post</button>
    </form>
  `,
})
export class EditPostComponent implements OnInit {
  form = new FormGroup<Partial<PostEntity>>({
    title: new FormControl(''),
    body: new FormControl(''),
  });

  post?: PostEntity;

  constructor(
    private postService: PostService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      this.post = data.post;
      this.form.reset({
        title: this.post?.title,
        body: this.post?.body,
      });
    });
  }

  onSubmit() {
    this.postService
      .updatePost({
        postId: this.post?.id,
        body: this.form.value as PostEntity,
      })
      .subscribe(() => this.router.navigate(['/posts']));
  }
}
