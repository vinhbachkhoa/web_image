import { Component, OnInit } from '@angular/core';
import { ContentService } from './contents.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  fileToUpload: File = null;

  constructor(private homeService: ContentService) { }

  ngOnInit() {
  }

  handleChange(file: FileList) {
    debugger;
    this.fileToUpload = file.item(0);
    console.log(this.fileToUpload);
  }

  upLoadFile() {
    this.homeService.uploadFile(this.fileToUpload)
      .then(res => {
        console.log("upload success");
      })
      .catch(error => {
        console.log("Upload fail");
      })
  }
}
