import {AfterContentInit, Component, ContentChild, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit, AfterContentInit {
  @ContentChild('contentParagh', {static: true}) content: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log(this.content.nativeElement.innerHTML);
  }

}
