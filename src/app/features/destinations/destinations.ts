import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Destination {
  name: string;
  tag: string;
  type: 'domestic' | 'international';
  img: string;
  nights: string;
  price: string;
  featured?: boolean;
  tall?: boolean;
}

@Component({
  selector: 'app-destinations',
  imports: [CommonModule],
  templateUrl: './destinations.html',
  styleUrl: './destinations.css',
})
export class Destinations {

  tabs = [
    { label: 'All', key: 'all' },
    { label: 'Domestic', key: 'domestic' },
    { label: 'International', key: 'international' },
  ];

  activeTab = signal<string>('all');

  allDestinations: Destination[] = [
    {
      name: 'Kashmir',
      tag: 'Domestic',
      type: 'domestic',
      img: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?w=900&q=85',
      nights: '5N / 6D',
      price: '₹28,999',
      featured: true,
    },
    {
      name: 'Maldives',
      tag: 'International',
      type: 'international',
      img: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=85',
      nights: '4N / 5D',
      price: '₹72,999',
      tall: true,
    },
    {
      name: 'Bali',
      tag: 'International',
      type: 'international',
      img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=85',
      nights: '5N / 6D',
      price: '₹54,999',
    },
    {
      name: 'Kerala',
      tag: 'Domestic',
      type: 'domestic',
      img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=85',
      nights: '3N / 4D',
      price: '₹18,500',
    },
    {
      name: 'Dubai',
      tag: 'International',
      type: 'international',
      img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=85',
      nights: '4N / 5D',
      price: '₹65,000',
    },
    {
      name: 'Andaman',
      tag: 'Domestic',
      type: 'domestic',
      img: 'https://images.unsplash.com/photo-1570789210967-2cac24afeb00?w=800&q=85',
      nights: '4N / 5D',
      price: '₹32,000',
    },
  ];

  filteredDestinations = computed(() => {
    const tab = this.activeTab();
    if (tab === 'all') return this.allDestinations;
    return this.allDestinations.filter(d => d.type === tab);
  });

  setTab(key: string) {
    this.activeTab.set(key);
  }
}
