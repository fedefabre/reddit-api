import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-row',
  templateUrl: './post-row.component.html',
  styleUrls: ['./post-row.component.less']
})
export class PostRowComponent {
  @Input() post: Post;

  constructor() { }
}
