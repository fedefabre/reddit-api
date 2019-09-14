import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less']
})
export class LandingComponent implements OnInit {

  constructor(private coreService: CoreService) { }

  ngOnInit() {
    this.coreService.getTopPost().subscribe( response => {
      console.log(response);
    })
  }

}
