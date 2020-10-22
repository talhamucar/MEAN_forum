import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { TopicService } from '../topics/topic.service';
import { Post } from './post.model'
import { Topic } from '../topics/topic.model';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private topics: Topic[] = [];
  private topicName: string;
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();
 

  constructor(public topicService: TopicService) {}

  getTopics(){
    this.topics = this.topicService.getTopics();   
  }

  addPost(topicName: string, post: Post){
    let index;
    this.getTopics();
    for(let i=0; i<this.topics.length; i++){
      if(this.topics[i].name == topicName){
        index = i;
      }
    }
    this.topics[index].posts.push(post);
    console.log(this.topics);
  }

  getPosts(index: number){
    this.posts = this.topics[index].posts;
    return [...this.posts];
  }

  getTopicName(index: number){
    this.topicName = this.topics[index].name;
    return this.topicName;
  }

  getPostsUpdateListener(){
    return this.postsUpdated.asObservable();
  }

}
