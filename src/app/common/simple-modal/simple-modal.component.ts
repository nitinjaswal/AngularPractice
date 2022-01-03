import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { JQ_TOKEN } from 'src/app/_services/jQuery.service';

@Component({
  selector: 'simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent implements OnInit {
@Input() title: string;
@Input() elementId: string; 
@Input() closeOnBodyClick: string;
@ViewChild('modalContainer') containerEl: ElementRef;

  constructor(private router:Router, @Inject(JQ_TOKEN) private $: any ) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
  }

  closeModal() {
    if(this.closeOnBodyClick.toLocaleLowerCase() === "true") {
      this.$(this.containerEl.nativeElement).modal('hide');
    }
  }
}