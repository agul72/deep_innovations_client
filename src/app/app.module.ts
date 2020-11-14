import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { AppComponent } from './components/app.component';
import { FormsModule } from '@angular/forms';
import { SongsListComponent } from './songs-list/components/songs-list/songs-list.component';
import { YoutubePlayerWrapperComponent } from './youtube-player/components/youtube-player-wrapper/youtube-player-wrapper.component';
import { QuotesListComponent } from './youtube-player/components/quotes-list/quotes-list.component';
import { QuoteComponent } from './youtube-player/components/quote/quote.component';
import { FilterTextPipe } from './pipes/filter-text.pipe';
import { SecondsToMinutesPipe } from './pipes/seconds-to-minutes.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    SongsListComponent,
    YoutubePlayerWrapperComponent,
    QuotesListComponent,
    QuoteComponent,
    FilterTextPipe,
    SecondsToMinutesPipe
  ],
  imports: [
	BrowserModule,
	FormsModule,
	NgxYoutubePlayerModule.forRoot(),
	FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
