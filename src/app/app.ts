import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';
import { Footer } from './shared/footer/footer';
import { Hero } from './features/hero/hero';
import { Destinations } from './features/destinations/destinations';
import { Packages } from './features/packages/packages';
import { WhyUs } from './features/why-us/why-us';
import { Testimonials } from './features/testimonials/testimonials';

@Component({
  selector: 'app-root',
  imports: [Navbar,Footer,Hero,Destinations,Packages,WhyUs,Testimonials],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Outbound');
}
