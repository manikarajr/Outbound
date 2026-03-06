import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about-page.html',
})
export class AboutPage {
  values: { icon: SafeHtml; title: string; desc: string }[] = [];

  constructor(private sanitizer: DomSanitizer) {
    this.values = [
      {
        icon: sanitizer.bypassSecurityTrustHtml(`<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`),
        title: 'Passion for Travel',
        desc: 'We live and breathe travel. Every destination we recommend, we have personally explored.',
      },
      {
        icon: sanitizer.bypassSecurityTrustHtml(`<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`),
        title: 'Trust & Transparency',
        desc: 'No hidden charges. No surprises. Just honest pricing and crystal-clear itineraries.',
      },
      {
        icon: sanitizer.bypassSecurityTrustHtml(`<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>`),
        title: 'Personalised Service',
        desc: 'Every trip is tailored to you — your budget, your timeline, your dream.',
      },
      {
        icon: sanitizer.bypassSecurityTrustHtml(`<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"/></svg>`),
        title: '24/7 Support',
        desc: 'Day or night, our team is just a call away — before, during, and after your trip.',
      },
    ];
  }

  stats = [
    { value: '15+', label: 'Years of Experience' },
    { value: '50,000+', label: 'Happy Travelers' },
    { value: '500+', label: 'Corporate Clients' },
    { value: '4.9★', label: 'Google Rating' },
  ];

  team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80',
      bio: '15+ years crafting unforgettable travel experiences across India and beyond.',
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80',
      bio: 'Ensures every itinerary runs flawlessly from booking to return.',
    },
    {
      name: 'Arjun Mehta',
      role: 'International Travel Expert',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80',
      bio: 'Specialist in bespoke international packages for discerning travelers.',
    },
  ];

}
