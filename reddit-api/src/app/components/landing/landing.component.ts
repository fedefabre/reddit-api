import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { PostList } from 'src/app/models/post-list';
import { OriginalPostObj } from 'src/app/models/original-post-obj';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less']
})
export class LandingComponent implements OnInit {
  postList: PostList;

  constructor(private coreService: CoreService) { }

  ngOnInit() {
    this.coreService.getTopPost().subscribe( (response: OriginalPostObj) => {
      this.postList = new PostList(response);
    })
  }

}
