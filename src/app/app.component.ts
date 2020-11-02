import {AfterContentInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  @ViewChild('valueInput', {static: true}) valueInput: ElementRef;
  title = 'concepts';

  constructor() {
  }

  ngOnInit(): void {
  }

  click(): void {
    console.log();
    this.valueInput.nativeElement.value = 'test';
  }


}
