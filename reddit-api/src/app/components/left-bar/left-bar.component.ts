import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.less']
})
export class LeftBarComponent {
  @Input() posts: Post[];
  @Output()
  open: EventEmitter<Post> = new EventEmitter();

  public openInDetail(post) {
    this.open.emit(post);
  }

}
