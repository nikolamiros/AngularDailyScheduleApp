import { Injectable, EventEmitter, Input } from '@angular/core';
import { Meeting } from './meeting.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  // meetingsChanged = new EventEmitter<Meeting[]>();
  meetingChanged = new Subject<Meeting[]>();
  countNumber = new Subject<number>();
  id: number;

  // @Input() count: number;

  private meetings: Meeting[] = [
    new Meeting('Lunch', 'Belgrade', 12, 45, 'Lunch with Marija'),
    new Meeting('Meeting', 'Belgrade', 15, 45, 'Meeting with Dusan')
  ];

  constructor() { }

  getMeetings() {
    return this.meetings.slice();
  }

  getMeeting(index: number) {
    return this.meetings[index];
  }

  countMeetings() {
    this.countNumber.next();
  }

  addMeetings(meeting: Meeting) {
    this.meetings.push(meeting);
    this.meetingChanged.next(this.meetings.slice());
    console.log(this.meetings);
  }

  deleteMeeting(index: number) {
    this.meetings.splice(index, 1);
    this.countNumber.next(this.meetings.length);
    this.meetingChanged.next(this.meetings.slice());
    console.log(this.meetings);
  }

  
}
