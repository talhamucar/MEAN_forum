import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TopicService } from '../topic.service';

@Component({
  selector: 'app-topiccreate',
  templateUrl: './topiccreate.component.html',
  styleUrls: ['./topiccreate.component.css']
})
export class TopiccreateComponent implements OnInit {

  constructor(public topicService: TopicService) { }

  onAddTopic(form: NgForm) {
    

  }

  ngOnInit(): void {
  }

}
