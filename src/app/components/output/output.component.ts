import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    inputControl: new FormControl('', [ Validators.required, Validators.min(2)])
  });

  public highChar:string ;
  public highCount:number = 0;
  constructor() { }

  ngOnInit(): void {
    this.form.valueChanges.subscribe( res=> this.processDups(res.inputControl.teststring ));
  }

  private processDups( str: string ){
    
    this.highCount;
    if( str != null &&  typeof str !== 'string') {
      return
    }
    const strArr = str.split("");
    const counts = {};
    strArr.forEach((character,index,arr) => {
        counts[character] = this.findDup( character, arr );
    });

    Object.keys( counts ).map( (char, id, arr) => {

      if( !this.highCount ) {

        this.highChar = char;
        this.highCount = counts[char];
        return;
      }
      else if( counts[char] > this.highCount ){
        this.highChar = char;
         this.highCount = counts[char];
       }
    });

    console.log( this.highCount, this.highChar );
  }

  private findDup( character: string, arr: Array<string>) {
    let count = 0;
    arr.forEach( item => {
      if (character == item){
        count += 1;
      }
    });

    return count;
  }
}
