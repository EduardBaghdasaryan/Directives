import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appYello]'
})
export class YelloDirective  implements OnInit{

  constructor(private element : ElementRef<HTMLElement>) {}

  ngOnInit(): void {
      this.element.nativeElement.style.backgroundColor = 'yellow'
  }

}
