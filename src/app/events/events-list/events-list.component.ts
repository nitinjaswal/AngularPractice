import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/_services/event.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events:any[];
  constructor(private eventService:EventService,private toastr:ToastrService) { 
   
  }

  ngOnInit(): void {
    this.events=this.eventService.getEvents();
  }

  handleEventClicked(data) {
    console.log(data);
  }

  handleThumbnailClick(eventName){
    this.toastr.success(eventName);
  }
}
