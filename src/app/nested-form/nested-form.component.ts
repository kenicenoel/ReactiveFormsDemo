import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css']
})
export class NestedFormComponent implements OnInit {

 
  nestedForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() 
  {
    const phone = this.formBuilder.group({
      area: [],
      prefix: [],
      number: []
    })
    
    this.nestedForm = this.formBuilder.group(
      {
        email: '',
        homePhone: phone,
        cellPhone: phone
      }
    )

    this.nestedForm.valueChanges.subscribe(console.log)
  }
}
