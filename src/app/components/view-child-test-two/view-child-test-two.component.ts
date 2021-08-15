import { Component, Directive, Input, ViewChild } from '@angular/core';

@Directive({ selector: '[pane]' })
export class Pane {
  @Input() id!: string;
}

@Component({
  selector: 'example-app',
  template: `
    <div pane id="1" *ngIf="shouldShow"></div>
    <div pane id="2" *ngIf="!shouldShow"></div>

    <button (click)="toggle()">Toggle</button>

    <div>Selected: {{ selectedPane }}</div>
  `
})
export class ViewChildTestTwo {
  @ViewChild(Pane)
  set pane(v: Pane) {
    setTimeout(() => {
      this.selectedPane = v.id;
    }, 0);
  }
  selectedPane: string = '';
  shouldShow = true;
  toggle() {
    this.shouldShow = !this.shouldShow;
  }
}
