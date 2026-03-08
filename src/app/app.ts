import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';
import { Footer } from './shared/footer/footer';
import { Splash } from './shared/splash/splash';

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, RouterOutlet, Splash],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Outbound');
}
