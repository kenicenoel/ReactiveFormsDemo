import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.css']
})
export class ArrayFormComponent implements OnInit {
  arrayForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() 
  {

    
    this.arrayForm = this.formBuilder.group(
      {
        email: '',
        phones: this.formBuilder.array([]),
      }
    )

    this.arrayForm.valueChanges.subscribe(console.log)
  }

  get phoneForms()
  {
    return this.arrayForm.get('phones') as FormArray
  }

  addNewPhone()
  {
    const phone = this.formBuilder.group({
      area: [],
      prefix: [],
      number: []
    })

    this.phoneForms.push(phone);
  }

  deletePhone(i)
  {
    this.phoneForms.removeAt(i);

  }

}
