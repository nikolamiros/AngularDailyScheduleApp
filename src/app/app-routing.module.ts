import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarItemComponent } from './calendar/calendar-list/calendar-item/calendar-item.component';

const routes: Routes = [
  { path: '', redirectTo: '/calendar', pathMatch: 'full' },
  {
    path: 'calendar', component: CalendarComponent, children: [
      {path: ':id', component: CalendarItemComponent}
    ]
  },
  {path: 'about-me', component: AboutMeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
