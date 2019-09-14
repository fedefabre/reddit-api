import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-row',
  templateUrl: './post-row.component.html',
  styleUrls: ['./post-row.component.less']
})
export class PostRowComponent implements OnInit {
  @Input() post: Post;

  constructor() { }

  ngOnInit() {
    debugger;
    console.log(this.post);
  }

}
