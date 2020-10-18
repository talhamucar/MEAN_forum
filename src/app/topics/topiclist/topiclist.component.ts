import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

import { Topic } from '../topic.model';
import { TopicService } from '../topic.service';


@Component({
  selector: 'app-topiclist',
  templateUrl: './topiclist.component.html',
  styleUrls: ['./topiclist.component.css']
})
export class TopiclistComponent implements OnInit, OnDestroy {

  constructor(public topicService: TopicService) { }
  topics: Topic[] = [];
  private topicSubs: Subscription; 


  ngOnInit(): void {
    this.topics = this.topicService.getTopics();
    this.topicSubs = this.topicService.getTopicUpdateListener().subscribe((topics: Topic[]) => {this.topics = topics;});
  }

  ngOnDestroy(): void {
    this.topicSubs.unsubscribe();
  }

}
