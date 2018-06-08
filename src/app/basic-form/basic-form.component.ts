import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {

  basicForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() 
  {
    this.basicForm = this.formBuilder.group(
      {
        email: 'hello@kenicenoel.com',
        message: 'Enter something cool',
        career: ''
      }
    )

    this.basicForm.valueChanges.subscribe(console.log)
  }

}
