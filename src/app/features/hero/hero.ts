import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  trustItems = [
    { number: '15,000+', label: 'Happy Travelers' },
    { number: '12+ Yrs', label: 'Experience' },
    { number: '80+', label: 'Destinations' },
    { number: '4.9', label: 'Google Rating' },
  ];
}