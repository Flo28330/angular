import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighLightDirective {
  constructor( private elRef:ElementRef, private rendere:Renderer2) { }

  @HostListener('mouseenter') mouseEnterEvent ( eventData:Event){
    this.rendere.setStyle(this.elRef.nativeElement, 'background-color', 'red');
  }

  @HostListener('mouseleave') mouseLeaveEvent ( eventData:Event) {
    this.rendere.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }
}