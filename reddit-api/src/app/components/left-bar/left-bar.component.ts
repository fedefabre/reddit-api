import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.less']
})
export class LeftBarComponent implements OnInit {
  @Input() posts: Post[];

  constructor() { }

  ngOnInit() {
    console.log(this.posts);
  }

}
