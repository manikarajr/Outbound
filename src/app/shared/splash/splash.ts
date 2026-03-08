import { Component, signal, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.html',
})
export class Splash implements OnInit {
  visible = signal(true);
  fading = signal(false);

  ngOnInit() {
    // Start fading after 2s, remove after fade completes (700ms)
    setTimeout(() => this.fading.set(true), 5000);
    setTimeout(() => this.visible.set(false), 4700);
  }
}
