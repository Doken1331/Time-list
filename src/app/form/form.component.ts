import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  myForm : FormGroup = new FormGroup({

    "positiveReviews": new FormArray([
      new FormControl()
    ]),
    "negativeReviews": new FormArray([
      new FormControl()
    ]),
    "conclusion": new FormControl()
});
  constructor() {

   }

  ngOnInit(): void {

  }

  getPositiveReviews() : FormArray{
    return this.myForm.controls['positiveReviews'] as FormArray;
}

  getNegativeReviews() : FormArray{
    return this.myForm.controls['negativeReviews'] as FormArray;
}

  addPositiveReviews(){
    (<FormArray>this.myForm.controls["positiveReviews"]).push(new FormControl());
}

  addNegativeReviews(){
    (<FormArray>this.myForm.controls["negativeReviews"]).push(new FormControl());
}

}
