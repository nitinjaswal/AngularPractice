import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { ISession } from 'src/app/_models/event.model';
import { restrictedWords } from '..';

@Component({
  selector: 'app-createsession',
  templateUrl: './createsession.component.html',
  styleUrls: ['./createsession.component.css']
})
export class CreatesessionComponent implements OnInit {
  newSessionForm: FormGroup;
  name: FormControl
  presenter: FormControl
  duration: FormControl
  level: FormControl
  abstract: FormControl

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.name = new FormControl('', Validators.required),
      this.presenter = new FormControl('', Validators.required),
      this.duration = new FormControl('', Validators.required),
      this.level = new FormControl('', Validators.required),
      this.abstract = new FormControl('', [Validators.required,
      Validators.maxLength(400), restrictedWords(['foo','bar'])])


    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    })
  }

  

  saveSession(formValues) {
    let session: ISession = {
      id: undefined,
      name: formValues.name,
      duration: +formValues.duration,
      level: formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters: []
    }
    console.log(formValues)
  }
}
