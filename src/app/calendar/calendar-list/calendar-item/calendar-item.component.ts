import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Meeting } from '../../meeting.model';
import { CalendarService } from '../../calendar.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-calendar-item',
  templateUrl: './calendar-item.component.html',
  styleUrls: ['./calendar-item.component.css']
})
export class CalendarItemComponent implements OnInit {

  meetingr: Meeting;
  id: number;

  @Input() meeting: Meeting;
  @Input() index: number;

  @Input() count: number;





  constructor(private calService: CalendarService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.meetingr = this.calService.getMeeting(this.id);
        this.calService.countNumber.next(this.count);
      }
    );
    
  }


  onDeleteMeeting() {
    this.calService.deleteMeeting(this.index);
    this.router.navigate(['/calendar']);
    
  }

}
