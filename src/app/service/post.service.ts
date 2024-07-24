import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseURL: string = "";

  constructor(private http: HttpClient) {
    this.baseURL = environment.BASIC_URL;
  }

  createNewPost(data: any): Observable<any>{
    return this.http.post(this.baseURL+`api/v1/posts`,data);
  }

  getAllPosts(): Observable<any>{
    return this.http.get(this.baseURL+`api/v1/posts`);
  }

  getPostById(postId: number): Observable<any>{
    return this.http.get(this.baseURL+`api/v1/posts/${postId}`);
  }
  /** likes (curtidas) */
  likePost(postId: number): Observable<any>{
    return this.http.put(this.baseURL+`api/v1/posts/${postId}/like`,{});
  }
  /* Search Post */
  searchByName(name: string): Observable<any>{
    return this.http.get(this.baseURL+`api/v1/posts/search/${name}`);
  }

}

