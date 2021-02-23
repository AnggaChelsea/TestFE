import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { PeoplevideoComponent } from './components/peoplevideo/peoplevideo.component';
import { VideoService } from './services/video.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DocumentsComponent } from './components/documents/documents.component';
import { SidebarmenuComponent } from './components/sidebarmenu/sidebarmenu.component';
import { HomeComponent } from './components/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    MainComponent,
    PeoplevideoComponent,
    DocumentsComponent,
    SidebarmenuComponent,
    HomeComponent,
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
