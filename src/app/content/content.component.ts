import { Component, OnInit } from '@angular/core';
import { ContentService } from './content.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private contentSerivce: ContentService) { }

  contents: any[] = [{title:""}];
  content: string="quang vinh";
  ngOnInit() {
    this.contentSerivce.getData().subscribe((res) => {
      // this.content = res;
      this.contents=res;
      console.log(this.contents);
    })
  }
}
