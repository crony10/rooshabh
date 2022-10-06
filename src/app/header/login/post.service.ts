import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
 
import { post } from "./post.model"
import { Message } from "@angular/compiler/src/i18n/i18n_ast";
import { stringify } from "querystring";
import { isNull } from "@angular/compiler/src/output/output_ast";

@Injectable({providedIn: 'root'})
export class postsService{
    private posts: post[] = [];
    private postUpdated = new Subject<post[]>();

    constructor(private http: HttpClient) {}
    

    getPosts(){
        this.http.get<{message: string,posts: post }>('http://localhost:3000/post')
        .subscribe((postData) => {
            this.posts = postData.posts;
            this.postUpdated.next([...this.posts]);
        });
    }

    getPostUpdateListener(){
        return this.postUpdated.asObservable();
    }

    addPost (title: string, content: string){
        const post: post ={id: null, title: title , content: content}
        this.posts.push(post); 
        this.postUpdated.next([...this.posts]);
    }
}