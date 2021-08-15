import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  Directive,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { DummyComponent } from '../dummy-component/dummy-component.component';

@Directive({ selector: 'child-directive' })
export class ChildDirective {
  // constructor(
  //   private viewContainer: ViewContainerRef,
  //   private componentFactoryResolver: ComponentFactoryResolver
  // ) {
  //   var factory = this.componentFactoryResolver.resolveComponentFactory(
  //     DummyComponent
  //   );
  //   this.viewContainer.createComponent<DummyComponent>(factory);
  // }
}

@Component({
  selector: 'viewChildTest',
  templateUrl: 'view-child-test.component.html'
})
export class ViewChildTest implements AfterViewInit {
  @ViewChild(ChildDirective) child!: ChildDirective;

  ngAfterViewInit() {}
}
