import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrl: './search-by-name.component.scss'
})
export class SearchByNameComponent {

  result: any =[];
  name: any ="";
  constructor(private postService: PostService,
    private MatSnackBar: MatSnackBar){}

    searchByName(){
      this.postService.searchByName(this.name).subscribe(response=>{
        this.result = response;
        console.log(this.result);

      }, error=>{

        this.MatSnackBar.open("Something Went Wrong !!!","OK");

      })
    }



}
