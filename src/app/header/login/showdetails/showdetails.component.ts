import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../post.model';
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

  posts: Post[] = [{
    id: "fadf12421l",
    title: "sample",
    content: "sample",
  },];
  private postsSub: Subscription = new Subscription;


  constructor(public postsService: postsService) {

  }
  ngOnInit() {
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener().
      subscribe((postsData: Post[]) => {
        this.posts = postsData;
      });
    console.log("this is the posts from showDetails component " + this.posts);
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}

