import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  trustItems = [
    { number: '15,000+', label: 'Happy Travelers' },
    { number: '12+ Yrs', label: 'Experience' },
    { number: '80+',     label: 'Destinations' },
    { number: '4.9',     label: 'Google Rating' },
  ];
}