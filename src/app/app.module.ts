import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarListComponent } from './calendar/calendar-list/calendar-list.component';
import { CalendarItemComponent } from './calendar/calendar-list/calendar-item/calendar-item.component';
import { ScheduleComponent } from './calendar/schedule/schedule.component';
import { WeatherComponent } from './calendar/weather/weather.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FahrenheitPipe } from './fahrenheit.pipe';
import { MomentPipe } from './moment.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    CalendarComponent,
    CalendarListComponent,
    CalendarItemComponent,
    ScheduleComponent,
    WeatherComponent,
    FahrenheitPipe,
    MomentPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
