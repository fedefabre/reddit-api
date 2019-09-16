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
  @Output()
  dismiss: EventEmitter<any> = new EventEmitter();

  public page = 1;
  public pageSize = 10;

  public openInDetail(post) {
    this.open.emit(post);
  }

  public dismissAll() {
    this.dismiss.emit(true);
  }

  public changePage(number: number) {
    this.page = number;
  }

}
