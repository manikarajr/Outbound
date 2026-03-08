import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials {
  reviews = [
    {
      name: 'Priya & Arjun',
      trip: 'Maldives Honeymoon',
      avatar: 'https://i.pravatar.cc/80?img=5',
      text: 'Outbound Travelers made our honeymoon absolutely perfect. The overwater villa, transfers, excursions — every single detail was flawless. Truly exceptional!',
      stars: 5,
    },
    {
      name: 'Vikram Nair',
      trip: 'Thailand Family Tour',
      avatar: 'https://i.pravatar.cc/80?img=12',
      text: 'Traveled with family of 6 including elderly parents. The team handled every concern proactively. World-class service from start to finish.',
      stars: 5,
    },
    {
      name: 'Meena Suresh',
      trip: 'Kashmir Trip – 6 Days',
      avatar: 'https://i.pravatar.cc/80?img=9',
      text: 'The Kashmir package was beyond our expectations. Gorgeous houseboat, Gulmarg snow, amazing hospitality — perfectly organized every step of the way.',
      stars: 5,
    },
  ];

  avatarRow = [
    'https://i.pravatar.cc/40?img=3',
    'https://i.pravatar.cc/40?img=7',
    'https://i.pravatar.cc/40?img=14',
    'https://i.pravatar.cc/40?img=20',
  ];

  promises = [
    'Free personalized itinerary within 24 hours',
    'No hidden charges — transparent pricing',
    'Dedicated travel manager for your trip',
    'Flexible cancellation & rescheduling policy',
  ];

  today = new Date().toISOString().split('T')[0];

  destinations = [
    'Maldives', 'Bali', 'Thailand', 'Vietnam', 'Dubai', 'Singapore',
    'Kashmir', 'Andaman', 'Kerala', 'Rajasthan', 'Europe', 'USA',
  ];
}
