import { Component, OnInit, Input } from '@angular/core';
import { CalendarService } from '../calendar.service';
import { Subscription } from 'rxjs';
import { Meeting } from '../meeting.model';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  countMeetings: number;
  sub: Subscription;
  meetings: Meeting[] = [];
  countNumber: number;

  constructor(private calService: CalendarService) { }

  ngOnInit() {
    this.sub = this.calService.countNumber.subscribe(
      (index: number) => {
        this.countMeetings = index;
        console.log(this.countMeetings);
      }
    );
  }

  // ngOnInit() {
    
  //   this.calService.meetingChanged.subscribe(
  //     (meetings: Meeting[]) => {
  //       this.meetings = meetings;
        
  //     }
  //   );
  //   this.meetings = this.calService.getMeetings();
  //   this.countNumber = this.calService.countMeetings();
  //   console.log(this.countNumber);
  // }

}
