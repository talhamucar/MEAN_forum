import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  topicName: string;
  private postSubs: Subscription;

  constructor(public postService: PostService) { }

  ngOnInit(): void {
    this.posts= this.postService.getPosts(0); //Must create a mechanism to get the index value
    this.postSubs = this.postService.getPostsUpdateListener().subscribe((posts: Post[]) => {this.posts = posts});
    this.topicName = this.postService.getTopicName(0); //Must create a mechanism to get the index value
  }

  ngOnDestroy(): void {
    this.postSubs.unsubscribe();
  }

}
