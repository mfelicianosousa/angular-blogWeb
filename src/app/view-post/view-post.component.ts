import { Component } from '@angular/core';
import { PostService } from '../service/post.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from '../service/comment.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.scss'
})
export class ViewPostComponent {

  postId: number = this.activatedRoute.snapshot.params['id'];
  postData: any;
  commentsData:any;

  commentForm!: FormGroup;


  constructor(private postService: PostService,
    private commentService: CommentService,
    private activatedRoute: ActivatedRoute,
    private matSnackBar: MatSnackBar,
    private fb: FormBuilder){ }

  ngOnInit(){
    console.log(this.postId);
    this.getPostById();
    this.commentForm = this.fb.group({
      postedBy: [null, Validators.required],
      content: [null, Validators.required]
    })
  }

  publishComment(){
    const postedBy = this.commentForm.get('postedBy')?.value;
    const content = this.commentForm.get('content')?.value;

    this.commentService.createComment(this.postId, postedBy, content).subscribe(
      response =>{
         this.matSnackBar.open("Comment Published Successfully","Ok");
         this.getCommentsByPost();

      }, error => { this.matSnackBar.open("Something Went Wrong","Ok")}
    )

  }

  getCommentsByPost(){
     this.commentService.getAllCommentsByPost(this.postId).subscribe(response=>{
        this.commentsData = response;

     }, error => {
      this.matSnackBar.open("Something Went Wrong","Ok")
     });

  }


  getPostById(){
    this.postService.getPostById(this.postId).subscribe(
      response => {
         this.postData = response;
         //console.log(this.postData);
         this.getCommentsByPost();
      }, error=>{
        this.matSnackBar.open("Something Went Wrong !!!","Ok");
      }
    )
  }

  /* Curtir o post */
  likePost(){
    this.postService.likePost(this.postId).subscribe((response)=>{
      this.matSnackBar.open("Post linked Successfully","Ok");
      this.getPostById();

    }, (error)=>{
      this.matSnackBar.open("Something Went Wrong !!!","Ok");
    });
  };

}
