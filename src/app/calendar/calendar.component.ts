import { Component, OnInit } from '@angular/core';
import { CalendarService } from './calendar.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Meeting } from './meeting.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  
})
export class CalendarComponent implements OnInit {

  calendarForm: FormGroup;

  

  constructor(private route: ActivatedRoute, private calService: CalendarService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        
        this.initForm();
      }
    );
  }


  onSubmit() {

    const newRecipe = new Meeting(
    this.calendarForm.value['name'], 
    this.calendarForm.value['location'], 
    this.calendarForm.value['timeHours'],
    this.calendarForm.value['timeSecond'],
    this.calendarForm.value['description']);
    
    this.calService.addMeetings(newRecipe);
    this.calendarForm.reset();
  }

  private initForm() {
    let meetingName = '';
    let meetingDesc = '';
    let meetingLocation = '';
    let meetingTimeHours: number;
    let meetingTimeSecond: number;
    
    this.calendarForm = new FormGroup({
      'name': new FormControl(meetingName, Validators.required),
      'description': new FormControl(meetingDesc),
      'location': new FormControl(meetingLocation, Validators.required),
      'timeHours': new FormControl(meetingTimeHours, [Validators.required, Validators.pattern(/^(0[0-9]|1[0-9]|2[0-3])$/)]),
      'timeSecond': new FormControl(meetingTimeSecond, [Validators.required, Validators.pattern(/^([0-5][0-9]|[1-5][0-9])$/)])
    });
    
  }

  
}
