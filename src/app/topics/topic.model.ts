import { Post } from '../posts/post.model';
export interface Topic {
    name: string;
    posts: Post[];
}