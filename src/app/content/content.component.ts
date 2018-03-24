import { Component, OnInit } from '@angular/core';
import { ContentService } from './content.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private contentSerivce: ContentService) { }

  content: any;
  ngOnInit() {
    // this.contentSerivce.getData().subscribe((res) => {
    //   this.content = res;
    //   console.log(this.content);
    // })
  }
}
