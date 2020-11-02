import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  @Input('highlightColor') highlightColor = 'red';

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    console.log(elRef);

  }

  @HostListener('mouseenter') onEnter(event: Event): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', this.highlightColor);
  }

  @HostListener('mouseleave') onLeave(event: Event): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
  }

}
