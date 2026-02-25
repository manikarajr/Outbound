import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from '../../shared/pipes/safe-html.pipe';

@Component({
  selector: 'app-packages',
  imports: [CommonModule, SafeHtmlPipe],
  templateUrl: './packages.html',
  styleUrl: './packages.css',
})
export class Packages {
  packages = [
    {
      title: 'Southeast Asia Explorer',
      locations: 'Thailand · Vietnam · Singapore',
      duration: '12N / 13D',
      group: 'Family & Couples',
      price: '₹1,24,999',
      img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=700&q=85',
      badge: 'Best Seller',
      badgeColor: '#7AAD5C',
      rating: '4.9',
      inclusions: ['Flights', 'Hotels', 'Breakfast', 'Transfers', 'Guide'],
    },
    {
      title: 'European Dream Tour',
      locations: 'Paris · Rome · Barcelona',
      duration: '14N / 15D',
      group: 'All Groups',
      price: '₹2,49,999',
      img: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=700&q=85',
      badge: 'Premium',
      badgeColor: '#1a1a1a',
      rating: '5.0',
      inclusions: ['Flights', 'Hotels', 'Eurail Pass', 'Breakfast', 'Guide'],
    },
    {
      title: 'Golden Triangle India',
      locations: 'Delhi · Agra · Jaipur',
      duration: '6N / 7D',
      group: 'All Groups',
      price: '₹24,999',
      img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=700&q=85',
      badge: 'Heritage',
      badgeColor: '#C27A40',
      rating: '4.8',
      inclusions: ['AC Hotels', 'Breakfast', 'AC Cab', 'Entry Tickets'],
    },
  ];

  services = [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#7AAD5C" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"/></svg>`,
      title: 'Visa Assistance',
      desc: 'End-to-end visa processing support',
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#7AAD5C" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253"/></svg>`,
      title: 'Forex & Insurance',
      desc: 'Competitive forex rates & travel insurance',
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#7AAD5C" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/></svg>`,
      title: 'Instant Booking',
      desc: 'Book in minutes with instant confirmation',
    },
  ];
}
