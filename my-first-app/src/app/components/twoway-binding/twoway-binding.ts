import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-twoway-binding',
  imports: [CommonModule, FormsModule],
  templateUrl: './twoway-binding.html',
  styleUrl: './twoway-binding.css',
})
export class TwowayBinding {
 username: string = "";
}
