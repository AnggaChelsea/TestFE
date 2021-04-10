import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { PeoplevideoComponent } from './components/peoplevideo/peoplevideo.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DocumentsComponent } from './components/documents/documents.component';
import { SidebarmenuComponent } from './components/sidebarmenu/sidebarmenu.component';
import { HomeComponent } from './components/home/home.component';
import { VideoComponent } from './components/video.component';
import { VideoService } from './services/video.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    PeoplevideoComponent,
    DocumentsComponent,
    SidebarmenuComponent,
    HomeComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
