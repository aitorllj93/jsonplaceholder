import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@ng-stack/forms';
import { PostEntity } from '../../models/post.entity';

@Component({
  selector: 'jsonplaceholder-list-posts',
  template: `
    <form [formGroup]="searchInputForm" (ngSubmit)="onSubmit()">
      <input type="text" formControlName="queryString" />
      <button type="submit">Search</button>
    </form>
    <a [routerLink]="['/posts', 'new']"
      ><button type="button">New Post</button></a
    >
    <ul>
      <li *ngFor="let post of filteredPosts">
        <a [routerLink]="['/posts', post.id]"
          >{{ post.author?.username }}: {{ post.title }}</a
        >
      </li>
    </ul>
  `,
})
export class ListPostsComponent implements OnInit {
  searchInputForm = new FormGroup({
    queryString: new FormControl(''),
  });

  posts: PostEntity[] = [];

  filteredPosts: PostEntity[] = [];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      console.log(data);
      this.posts = data.posts;
      this.filteredPosts = this.posts.filter((post) =>
        post.author?.username?.includes(this.searchInputForm.value.queryString)
      );
    });
  }

  onSubmit() {
    this.filteredPosts = this.posts.filter((post) =>
      post.author?.username?.includes(this.searchInputForm.value.queryString)
    );
  }
}
