import { Injectable } from '@angular/core';
import { Topic } from './topic.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  private topics: Topic[] = [];
  private topicsUpdated = new Subject<Topic[]>();

  getTopics(){
    return [...this.topics];
  }

  getTopicUpdateListener() {
    return this.topicsUpdated.asObservable();
  }
  
  addTopic(name: string, firstPost: any){
    const topic: Topic = {name: name, posts: [firstPost]};
    this.topics.push(topic);
    this.topicsUpdated.next([...this.topics]);
    console.log(this.topics);
  }

}
