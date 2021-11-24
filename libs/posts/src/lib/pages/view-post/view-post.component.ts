import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostEntity } from '../../models/post.entity';

@Component({
  selector: 'jsonplaceholder-view-post',
  template: `
    <ng-container *ngIf="post">
      <h4>{{ post.title }}</h4>
      <span>{{ post.author?.username }}</span>
      <p>{{ post.body }}</p>
      <a [routerLink]="['/posts', post.id, 'edit']"
        ><button type="button">Edit this post</button></a
      >

      <h5>Comments</h5>

      <ng-container *ngFor="let comment of post.comments">
        <h6>{{ comment.name }}</h6>
        <p>{{ comment.body }}</p>
      </ng-container>
    </ng-container>
  `,
})
export class ViewPostComponent implements OnInit {
  post?: PostEntity;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      this.post = data.post;
    });
  }
}
