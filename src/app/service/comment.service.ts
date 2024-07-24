import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseURL: string = "";

  constructor(private http: HttpClient) {
      this.baseURL = environment.BASIC_URL;
  }

  createComment(postId: number, postedBy: string, content: string): Observable<any>{
    const params = {
      postId: postId,
      postedBy: postedBy,
    }
    return this.http.post<any>(this.baseURL+`api/v1/comments/create`,content,{params});
  }

  getAllCommentsByPost(postId: number): Observable<any>{
    return this.http.get(this.baseURL+`api/v1/comments/${postId}`);
  }
}
