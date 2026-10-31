import { Component } from '@angular/core';
import { signal, computed } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
  count = signal(0);
  double = computed(() => this.count() * 2);
  isPrime = computed(() => this.checkIsPrime(this.count()));

  increment() {
    this.count.update((c) => c + 1); // or this.count.set(5)
  }
  checkIsPrime(num: number): boolean{
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
}
