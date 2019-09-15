import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.less']
})
export class PaginationComponent implements OnInit {
  @Input() datasetLength;
  @Input() pageSize;
  @Output()
  changePage: EventEmitter<any> = new EventEmitter();

  pageSelected = 1;

  public pages = [];

  ngOnInit() {
    this.pages = new Array(this.datasetLength / this.pageSize);
  }

  change(numberOfPage){
    this.pageSelected = numberOfPage;
    this.changePage.emit(numberOfPage);
  }

}
