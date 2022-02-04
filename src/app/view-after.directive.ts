import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appViewAfter]'
})
export class ViewAfterDirective implements OnInit{
@Input('appViewAfter')
public showAfter : number | undefined

  constructor(private container :ViewContainerRef, private ref : TemplateRef<any>) {}


  ngOnInit(): void {
    setTimeout(()=> {
      this.container.createEmbeddedView(this.ref)
    },this.showAfter)
  } 
}