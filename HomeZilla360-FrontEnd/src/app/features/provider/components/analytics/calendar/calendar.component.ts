import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import daygrid from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent  {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [daygrid],
    
    
  };
  
}

