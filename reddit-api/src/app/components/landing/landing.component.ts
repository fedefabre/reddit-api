import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { PostList } from 'src/app/models/post-list';
import { OriginalPostObj } from 'src/app/models/original-post-obj';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less']
})
export class LandingComponent implements OnInit {
  postList: PostList;
  postDetailed: Post = null;
  loaded = false;

  constructor(private coreService: CoreService) { }

  ngOnInit() {
    this.coreService.getTopPost().subscribe( (response: OriginalPostObj) => {
      this.postList = new PostList(response);
      this.loaded = true;
    })
  }

  public openInDetail(post: Post){
    post.open();
    this.postDetailed = post;
  }

  public dismissAll(){
    this.postList.dismissAll();
  }

}
