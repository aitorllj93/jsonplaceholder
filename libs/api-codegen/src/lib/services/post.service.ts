/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JSONPlaceholderApiBaseService } from '../json-placeholder-api-base-service';
import { JSONPlaceholderApiConfiguration } from '../json-placeholder-api-configuration';
import { JSONPlaceholderApiRequestBuilder } from '../json-placeholder-api-request-builder';
import { JSONPlaceholderApiStrictHttpResponse } from '../json-placeholder-api-strict-http-response';
import { Comment } from '../models/comment';
import { Post } from '../models/post';
import { User } from '../models/user';

/**
 * Everything about posts
 */
@Injectable({
  providedIn: 'root',
})
export class PostService extends JSONPlaceholderApiBaseService {
  constructor(config: JSONPlaceholderApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /**
   * Path part for operation getPosts
   */
  static readonly GetPostsPath = '/posts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPosts()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPosts$Response(params?: {}): Observable<
    JSONPlaceholderApiStrictHttpResponse<Array<Post>>
  > {
    const rb = new JSONPlaceholderApiRequestBuilder(
      this.rootUrl,
      PostService.GetPostsPath,
      'get'
    );
    if (params) {
    }

    return this.http
      .request(
        rb.build({
          responseType: 'json',
          accept: 'application/json',
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as JSONPlaceholderApiStrictHttpResponse<Array<Post>>;
        })
      );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getPosts$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPosts(params?: {}): Observable<Array<Post>> {
    return this.getPosts$Response(params).pipe(
      map(
        (r: JSONPlaceholderApiStrictHttpResponse<Array<Post>>) =>
          r.body as Array<Post>
      )
    );
  }

  /**
   * Path part for operation addPost
   */
  static readonly AddPostPath = '/posts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  addPost$Response(params: {
    /**
     * Post object that needs to be added to the store
     */
    body: Post;
  }): Observable<JSONPlaceholderApiStrictHttpResponse<void>> {
    const rb = new JSONPlaceholderApiRequestBuilder(
      this.rootUrl,
      PostService.AddPostPath,
      'post'
    );
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http
      .request(
        rb.build({
          responseType: 'text',
          accept: '*/*',
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return (r as HttpResponse<any>).clone({
            body: undefined,
          }) as JSONPlaceholderApiStrictHttpResponse<void>;
        })
      );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  addPost(params: {
    /**
     * Post object that needs to be added to the store
     */
    body: Post;
  }): Observable<void> {
    return this.addPost$Response(params).pipe(
      map((r: JSONPlaceholderApiStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getPostById
   */
  static readonly GetPostByIdPath = '/posts/{postId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPostById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPostById$Response(params: {
    /**
     * ID of post to return
     */
    postId: any;
  }): Observable<JSONPlaceholderApiStrictHttpResponse<Post>> {
    const rb = new JSONPlaceholderApiRequestBuilder(
      this.rootUrl,
      PostService.GetPostByIdPath,
      'get'
    );
    if (params) {
      rb.path('postId', params.postId, {});
    }

    return this.http
      .request(
        rb.build({
          responseType: 'json',
          accept: 'application/json',
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as JSONPlaceholderApiStrictHttpResponse<Post>;
        })
      );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getPostById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPostById(params: {
    /**
     * ID of post to return
     */
    postId: any;
  }): Observable<Post> {
    return this.getPostById$Response(params).pipe(
      map((r: JSONPlaceholderApiStrictHttpResponse<Post>) => r.body as Post)
    );
  }

  /**
   * Path part for operation updatePost
   */
  static readonly UpdatePostPath = '/posts/{postId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatePost()` instead.
   *
   * This method doesn't expect any request body.
   */
  updatePost$Response(params: {
    /**
     * ID of post to update
     */
    postId: any;

    /**
     * Post object that needs to be added to the store
     */
    body: Post;
  }): Observable<JSONPlaceholderApiStrictHttpResponse<void>> {
    const rb = new JSONPlaceholderApiRequestBuilder(
      this.rootUrl,
      PostService.UpdatePostPath,
      'put'
    );
    if (params) {
      rb.path('postId', params.postId, {});
      rb.body(params.body, 'application/json');
    }

    return this.http
      .request(
        rb.build({
          responseType: 'text',
          accept: '*/*',
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return (r as HttpResponse<any>).clone({
            body: undefined,
          }) as JSONPlaceholderApiStrictHttpResponse<void>;
        })
      );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updatePost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updatePost(params: {
    /**
     * ID of post to update
     */
    postId: any;

    /**
     * Post object that needs to be added to the store
     */
    body: Post;
  }): Observable<void> {
    return this.updatePost$Response(params).pipe(
      map((r: JSONPlaceholderApiStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getCommentsByPost
   */
  static readonly GetCommentsByPostPath = '/post/{postId}/comments';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCommentsByPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommentsByPost$Response(params: {
    /**
     * ID of post
     */
    postId: any;
  }): Observable<JSONPlaceholderApiStrictHttpResponse<Array<Comment>>> {
    const rb = new JSONPlaceholderApiRequestBuilder(
      this.rootUrl,
      PostService.GetCommentsByPostPath,
      'get'
    );
    if (params) {
      rb.path('postId', params.postId, {});
    }

    return this.http
      .request(
        rb.build({
          responseType: 'json',
          accept: 'application/json',
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as JSONPlaceholderApiStrictHttpResponse<Array<Comment>>;
        })
      );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCommentsByPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommentsByPost(params: {
    /**
     * ID of post
     */
    postId: any;
  }): Observable<Array<Comment>> {
    return this.getCommentsByPost$Response(params).pipe(
      map(
        (r: JSONPlaceholderApiStrictHttpResponse<Array<Comment>>) =>
          r.body as Array<Comment>
      )
    );
  }

  /**
   * Path part for operation getUserById
   */
  static readonly GetUserByIdPath = '/users/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserById$Response(params: {
    /**
     * ID of user to return
     */
    userId: any;
  }): Observable<JSONPlaceholderApiStrictHttpResponse<User>> {
    const rb = new JSONPlaceholderApiRequestBuilder(
      this.rootUrl,
      PostService.GetUserByIdPath,
      'get'
    );
    if (params) {
      rb.path('userId', params.userId, {});
    }

    return this.http
      .request(
        rb.build({
          responseType: 'json',
          accept: 'application/json',
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as JSONPlaceholderApiStrictHttpResponse<User>;
        })
      );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserById(params: {
    /**
     * ID of user to return
     */
    userId: any;
  }): Observable<User> {
    return this.getUserById$Response(params).pipe(
      map((r: JSONPlaceholderApiStrictHttpResponse<User>) => r.body as User)
    );
  }
}
