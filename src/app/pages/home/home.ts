import { Component } from '@angular/core';
import { Hero } from '../../features/hero/hero';
import { Destinations } from '../../features/destinations/destinations';
import { Packages } from '../../features/packages/packages';
import { WhyUs } from '../../features/why-us/why-us';
import { Testimonials } from '../../features/testimonials/testimonials';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, Destinations, Packages, WhyUs, Testimonials],
  template: `
    <app-hero></app-hero>
    <app-destinations></app-destinations>
    <app-packages></app-packages>
    <app-why-us></app-why-us>
    <app-testimonials></app-testimonials>
  `
})
export class HomePage {}
