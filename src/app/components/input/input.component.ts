import { Component, OnInit, forwardRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ] 

})
export class InputComponent implements OnInit, ControlValueAccessor {
  public form: FormGroup;

  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
    this.makeForm();
  }

  makeForm() {
    this.form  = this.fb.group({
     teststring: ['', [Validators.required, Validators.min(2)]]
    })
  }

  writeValue(obj: any): void {
    this.form.get( 'teststring').setValue(obj);
  }

  registerOnChange(fn: any): void {
    this.form.valueChanges.subscribe( fn );
  }

  registerOnTouched(fn: any): void{
    // implement later
  }

  setDisabledState(isDisabled: boolean): void{
    // implement later
  }

}
