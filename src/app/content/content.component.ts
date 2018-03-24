import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content/content.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private contentService: ContentService) { }

  content: any;
  ngOnInit() {
    this.contentService.getData().subscribe((res) => {
      this.content = res;
    });
  }
}
