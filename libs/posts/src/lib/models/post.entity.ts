import { Comment, Post, User } from '@jsonplaceholder/api-codegen';

export interface PostEntity extends Post {
  author?: User;
  comments?: Comment[];
}

export interface PostUI {
  id: Post['id'];
  visible: boolean;
}
