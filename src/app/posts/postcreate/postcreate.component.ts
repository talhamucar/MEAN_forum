import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PostService } from '../post.service';

@Component({
  selector: 'app-postcreate',
  templateUrl: './postcreate.component.html',
  styleUrls: ['./postcreate.component.css']
})
export class PostcreateComponent implements OnInit {
  constructor(public postService: PostService) { }

  onAddPost(form: NgForm) {
    if (form.invalid){
      return;
    }
    this.postService.addPost(form.value.topic, form.value.post);
    form.resetForm();
  }
  
  
  ngOnInit(): void {
  }

}
