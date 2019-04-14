import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MatInputModule,
   MatCardModule,
   MatButtonModule,
   MatListModule,
   MatToolbarModule,
   MatGridListModule,
   MatIconModule,
   MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryComponent } from './gallery/gallery.component';
import { PlayComponent } from './play/play.component';
import { LearnComponent } from './learn/learn.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonHeaderComponent } from './common-header/common-header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    GalleryComponent,
    PlayComponent,
    LearnComponent,
    CommonHeaderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [GalleryComponent]
})
export class AppModule { }
