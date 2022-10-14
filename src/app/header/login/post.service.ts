import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from 'rxjs/operators';


import { Post } from "./post.model"
@Injectable({ providedIn: 'root' })
export class postsService {
    // private posts!: post[];
    posts: Post[] = [];
    private postUpdated = new Subject<Post[]>();

    constructor(private http: HttpClient) { }


    getPosts() {
        this.http.get<{ message: string, posts: Post[] }>('http://localhost:3000/api/posts')
            .subscribe(postData => {
                console.log("this is postData coming from server: "+ postData.posts);
                this.posts = postData.posts;
                // this.posts = postData.posts;
                this.postUpdated.next([...this.posts]);
            });


        // this.http.
        //     get<{ message: string, posts: any }>('http://localhost:3000/api/posts')
        //     .pipe(map((postData) => {
        //         return postData.posts.map((post: { id: any; title: any; content: any }) => {
        //             return {
        //                 id: post.id,
        //                 amount: post.title,
        //                 creator: post.content
        //             }
        //         });
        //     }))
        //     .subscribe((transfromedDonations) => {
        //         console.table("this is service your mapped/transformed data of donations is : " + transfromedDonations);
        //         this.posts = transfromedDonations;
        //         // console.log("aayi gyu: "+ donationData.donations  + " and the message is: " + donationData.message); 
        //         console.log("gotcha!!!");
        //         console.log(this.posts);
        //         this.postUpdated.next([...this.posts]);
        //     })
    }
    getPostUpdateListener() {
        return this.postUpdated.asObservable();
    }
    
    addPost(title: string, content: string) {
        // const post: post ={id: null, title: title , content: content}
        // this.posts.push(post); 
        // this.postUpdated.next([...this.posts]);
        console.log("adding post: ");
    
        // const post: post = { id: null, title: title, content: content };
        // this.http
        //     .post<{ message: string }>("http://localhost:3000/api/post", post)
        //     .subscribe(responseData => {
        //         console.log(responseData.message);
        //         this.posts.push(post);
        //         this.postUpdated.next([...this.posts]);
        //     });
    }
}



