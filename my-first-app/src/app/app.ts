import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponent } from './components/my-component/my-component';
import { Interpolation } from './components/interpolation/interpolation';
import { PropertyBinding } from './components/property-binding/property-binding';
import { EventBinding } from './components/event-binding/event-binding';
import { TwowayBinding } from './components/twoway-binding/twoway-binding';
import { Httpcache } from './components/httpcache/httpcache';
import { Signals } from './components/signals/signals';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyComponent, Interpolation, PropertyBinding, EventBinding, TwowayBinding, Httpcache, Signals], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-first-app');
}
