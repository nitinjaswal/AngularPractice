import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/_services/event.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { IEvent  } from '..';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})

export class EventsListComponent implements OnInit {
  events: IEvent[];
  constructor(private eventService: EventService, private toastr: ToastrService,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.events = this.route.snapshot.data['events']
  }


  handleEventClicked(data) {
    console.log(data);
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
}
