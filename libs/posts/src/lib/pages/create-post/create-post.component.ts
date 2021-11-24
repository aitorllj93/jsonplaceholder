import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '@jsonplaceholder/api-codegen';
import { FormControl, FormGroup } from '@ng-stack/forms';
import { PostEntity } from '../../models/post.entity';

@Component({
  selector: 'jsonplaceholder-create-post',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <input type="text" formControlName="title" />
      <textarea formControlName="body"></textarea>
      <button type="submit">Create Post</button>
    </form>
  `,
})
export class CreatePostComponent {
  form = new FormGroup<Partial<PostEntity>>({
    title: new FormControl(''),
    body: new FormControl(''),
  });

  constructor(private postService: PostService, private router: Router) {}

  onSubmit() {
    this.postService
      .addPost({ body: this.form.value as PostEntity })
      .subscribe(() => this.router.navigate(['/posts']));
  }
}
