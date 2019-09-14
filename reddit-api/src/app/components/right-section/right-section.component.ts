import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-right-section',
  templateUrl: './right-section.component.html',
  styleUrls: ['./right-section.component.less']
})
export class RightSectionComponent implements OnInit {
  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

}
