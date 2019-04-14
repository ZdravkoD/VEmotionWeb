import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  thumbnails = [
    'assets/images/thumbnail-he-joy-anticipation_tablet.png',
    'assets/images/thumbnail-he-joy-laughing.png'
  ]

  constructor() { }

  ngOnInit() {
  }

  selectVideo(videoName) {
    alert(videoName);
  }

}
