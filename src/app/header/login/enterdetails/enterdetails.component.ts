import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { postsService } from '../post.service';

@Component({
  selector: 'app-enterdetails',
  templateUrl: './enterdetails.component.html',
  styleUrls: ['./enterdetails.component.css']
})
export class EnterdetailsComponent {
  enterTitle='';
  enterContent=''; 

  constructor(public postsService : postsService){}

  onAddpost(form: NgForm) {
   
    this.postsService.addPost(form.value.title,
      form.value.content);
      form.resetForm();
  }
}

