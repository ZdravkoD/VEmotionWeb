import { Component, OnInit } from '@angular/core';
import { GalleryComponent } from '../gallery/gallery.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.css']
})
export class CommonHeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  showGallery() {
    this.dialog.open(GalleryComponent, {});
  }

}
