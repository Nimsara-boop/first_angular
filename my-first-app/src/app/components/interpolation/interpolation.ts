import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  imports: [],
  templateUrl: './interpolation.html',
  styleUrl: './interpolation.css',
})
export class Interpolation {
  appName = "Interpolation Component";
  explanation = "This component demonstrates the use of interpolation in Angular templates.";
}
