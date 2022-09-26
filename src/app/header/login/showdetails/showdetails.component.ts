import { Component,OnDestroy,OnInit} from '@angular/core';
import { post } from '../post.model';
import { Subscription } from 'rxjs';
import { postsService } from '../post.service';

@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrls: ['./showdetails.component.css']
})
export class ShowdetailsComponent implements OnInit, OnDestroy {
  // posts = [
  //   { title : "hello" , content: "this is email"},
  //   { title: "hii" , content: "this is second"}
  // ];

  posts: post[]= [];
  private postsSub: Subscription = new Subscription;
  

  constructor(public postsService: postsService) {

  }
  ngOnInit() {
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts: post[]) => {
      this.posts= posts;
    });
  }

  ngOnDestroy(){
      this.postsSub.unsubscribe();
  }
}

