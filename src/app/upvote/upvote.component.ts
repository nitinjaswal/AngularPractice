import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css'],
})
export class UpvoteComponent implements OnInit {
  @Input() count: number;
  
  @Input() set voted(val) {
    console.log(val);
    this.iconColor = val ? 'red' : 'white';
  }

  iconColor: string;
  @Output() vote = new EventEmitter();


  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.vote.emit({});
  }
}
