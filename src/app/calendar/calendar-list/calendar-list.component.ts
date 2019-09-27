import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Meeting } from '../meeting.model';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'app-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.css']
})
export class CalendarListComponent implements OnInit {

  meetings: Meeting[] = [];
  countNumber: number;

  constructor(private calService: CalendarService) { }

  ngOnInit() {
    this.calService.meetingChanged.subscribe(
      (meetings: Meeting[]) => {
        this.meetings = meetings;
      }
    );
    this.meetings = this.calService.getMeetings();
    
    console.log(this.meetings);
  }

  
}
