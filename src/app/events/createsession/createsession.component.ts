import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormGroup, Validators, UntypedFormControl, UntypedFormBuilder } from '@angular/forms';
import { ISession } from 'src/app/_models/event.model';

import { restrictedWords } from '..';

@Component({
  selector: 'app-createsession',
  templateUrl: './createsession.component.html',
  styleUrls: ['./createsession.component.css']
})
export class CreatesessionComponent implements OnInit {
  @Output() saveNewSession  = new EventEmitter()
  @Output() cancelAddSession  = new EventEmitter()
  newSessionForm: UntypedFormGroup;
  name: UntypedFormControl
  presenter: UntypedFormControl
  duration: UntypedFormControl
  level: UntypedFormControl
  abstract: UntypedFormControl

  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit() {
    this.name = new UntypedFormControl('', Validators.required),
      this.presenter = new UntypedFormControl('', Validators.required),
      this.duration = new UntypedFormControl('', Validators.required),
      this.level = new UntypedFormControl('', Validators.required),
      this.abstract = new UntypedFormControl('', [Validators.required,
      Validators.maxLength(400), restrictedWords(['foo','bar'])])


    this.newSessionForm = new UntypedFormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    })
  }
  

  saveSession(formValues) {
    const session: ISession = {
      id: undefined,
      name: formValues.name,
      duration: +formValues.duration,
      level: formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters: []
    }
    this.saveNewSession.emit(session)
    this.cancelAddSession.emit();
    
  }
  cancel(){
    this.cancelAddSession.emit();
  }
}
