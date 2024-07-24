import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrl: './view-all.component.scss'
})
export class ViewAllComponent {

  allPosts: any;

  constructor(private postService: PostService,
    private snackBar: MatSnackBar) {}

    ngOnInit(){
      this.getAllPosts();
    }

    getAllPosts(){
      this.postService.getAllPosts().subscribe( response => {
        console.log(response);
        this.allPosts = response
      }, error=> {
        this.snackBar.open("Something went wrong!!!", "Ok")
      }

      )
    }

}
