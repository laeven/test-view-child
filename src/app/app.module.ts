import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {
  ChildDirective,
  ViewChildTest
} from './components/view-child-test/view-child-test.component';
import {
  Pane,
  ViewChildTestTwo
} from './components/view-child-test-two/view-child-test-two.component';
import { DummyComponent } from './components/dummy-component/dummy-component.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ViewChildTest,
    ChildDirective,
    ViewChildTestTwo,
    Pane,
    DummyComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
