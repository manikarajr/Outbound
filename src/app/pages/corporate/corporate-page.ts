import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface CorporatePackage {
  title: string;
  locations: string;
  duration: string;
  group: string;
  price: string;
  img: string;
  badge: string;
  badgeColor: string;
  rating: string;
  inclusions: string[];
}

interface CorporateStat {
  value: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-corporate-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <section class="bg-gradient-to-b from-slate-700 to-[#7AAD5C] text-white py-28 px-6">
      <div class="max-w-6xl mx-auto text-center">
        <h1 class="text-5xl md:text-6xl font-bold mb-4">Corporate Travel Solutions</h1>
        <p class="text-lg md:text-xl text-white/90 mb-2">
          MICE, team outings & incentive programs
        </p>
        <p class="text-white/70">Boost productivity and strengthen team bonds with tailored corporate travel experiences</p>
      </div>
    </section>

    <!-- Main Content -->
    <div class="bg-white py-20 px-6">
      <div class="max-w-6xl mx-auto">

        <!-- Corporate Stats -->
        <section class="mb-20 grid md:grid-cols-3 gap-6">
          <div *ngFor="let stat of corpStats" class="group rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 p-8 text-center hover:shadow-lg transition-all">
            <div class="text-5xl mb-4">{{ stat.value }}</div>
            <h3 class="text-lg font-bold text-gray-900">{{ stat.label }}</h3>
          </div>
        </section>

        <!-- Corporate Solutions -->
        <section class="mb-20">
          <div class="mb-12">
            <h2 class="text-4xl font-bold text-gray-900 mb-2">Our Solutions</h2>
            <p class="text-gray-600 text-lg">
              Comprehensive corporate travel programs designed for your business needs
            </p>
            <div class="h-1 w-20 bg-slate-700 rounded mt-4"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-7">
            <div *ngFor="let pkg of corporatePackages; let i = index" class="pkg-card" [style.animation-delay]="(i * 0.1) + 's'">
              <!-- Image -->
              <div class="relative h-56 overflow-hidden">
                <img [src]="pkg.img" [alt]="pkg.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <!-- Badge -->
                <span
                  class="absolute top-4 left-4 px-3 py-1 text-[10px] font-body font-bold tracking-widest uppercase rounded-full text-white"
                  [style.background]="pkg.badgeColor">
                  {{ pkg.badge }}
                </span>
                <!-- Rating -->
                <div
                  class="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm">
                  <svg class="w-3 h-3" viewBox="0 0 20 20" fill="#FFD700">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span class="text-white text-[11px] font-body font-semibold">{{ pkg.rating }}</span>
                </div>
              </div>

              <!-- Body -->
              <div class="p-6">
                <p class="text-[11px] text-gray-400 font-body tracking-widest uppercase mb-1.5">{{ pkg.locations }}</p>
                <h3 class="font-display text-xl text-gray-900 font-semibold mb-1.5 leading-tight">{{ pkg.title }}</h3>

                <!-- Meta -->
                <div class="flex items-center gap-4 text-gray-400 text-xs font-body mb-4">
                  <span class="flex items-center gap-1">
                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {{ pkg.duration }}
                  </span>
                  <span class="flex items-center gap-1">
                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {{ pkg.group }}
                  </span>
                </div>

                <!-- Inclusions Chips -->
                <div class="flex flex-wrap gap-1.5 mb-5">
                  <span *ngFor="let inc of pkg.inclusions"
                    class="px-2.5 py-1 rounded-full text-[10px] font-body font-medium bg-pista-50 text-pista-dark">{{ inc }}</span>
                </div>

                <!-- Price + CTA -->
                <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span class="text-[10px] text-gray-400 uppercase tracking-wide font-body">Starting at</span>
                    <p class="font-body font-bold text-gray-900 text-xl leading-none mt-0.5">{{ pkg.price }}</p>
                    <span class="text-[10px] text-gray-400 font-body">per person</span>
                  </div>
                  <a href="#" class="btn-pista">
                    Get Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Why Choose Us -->
        <section class="mb-20 bg-gradient-to-r from-slate-100 to-slate-50 rounded-3xl p-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Why Partner With Outbound Travelers?</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <svg class="h-12 w-12 text-[#7AAD5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                  <circle cx="12" cy="12" r="9" stroke-width="1.5"/>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 2"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-gray-900 mb-1">Dedicated Account Manager</h3>
                <p class="text-gray-600">Personalized support throughout planning and execution</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <svg class="h-12 w-12 text-[#7AAD5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m0 0L4 7m8 4v10l8-4V7M4 11v10l8 4 8-4v-10"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-gray-900 mb-1">Budget Flexibility</h3>
                <p class="text-gray-600">Solutions tailored to your budget and requirements</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <svg class="h-12 w-12 text-[#7AAD5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                  <circle cx="12" cy="12" r="9"/>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 2v20M2 12h20M5.64 5.64a8 8 0 0 1 12.72 0M5.64 18.36a8 8 0 0 0 12.72 0"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-gray-900 mb-1">Global Network</h3>
                <p class="text-gray-600">Access to premium vendors worldwide</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <svg class="h-12 w-12 text-[#7AAD5C]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-gray-900 mb-1">Comprehensive Reporting</h3>
                <p class="text-gray-600">Detailed analytics and ROI tracking for your programs</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <svg class="h-12 w-12 text-[#7AAD5C]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-gray-900 mb-1">Industry Experience</h3>
                <p class="text-gray-600">15+ years managing corporate travel programs</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <svg class="h-12 w-12 text-[#7AAD5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                  <circle cx="12" cy="12" r="9"/>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6l4 2"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-gray-900 mb-1">24/7 Support</h3>
                <p class="text-gray-600">Always available for emergencies and support</p>
              </div>
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="bg-gradient-to-r from-slate-700 to-slate-800 rounded-3xl p-12 text-center text-white">
          <h2 class="text-4xl font-bold mb-4">Let's Plan Your Corporate Program</h2>
          <p class="text-lg text-white/90 mb-8">
            Contact our corporate travel specialists for a customized proposal tailored to your organization
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-[#7AAD5C] hover:bg-[#5C8A3E] text-white font-bold px-8 py-3.5 rounded-full transition-colors duration-200">
              Get a Quote →
            </button>
            <button class="border-2 border-white text-white font-bold px-8 py-3.5 rounded-full hover:bg-white hover:text-slate-700 transition-all duration-200">
              Schedule a Call
            </button>
          </div>
        </section>

      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class CorporatePage {
  corpStats: CorporateStat[] = [
    { value: '500+', label: 'Corporate Clients', icon: '' },
    { value: '98%', label: 'Client Satisfaction', icon: '' },
    { value: '15+', label: 'Years Experience', icon: '' },
  ];

  corporatePackages: CorporatePackage[] = [
    {
      title: 'MICE Solutions',
      locations: 'Global Destinations',
      duration: 'Customizable',
      group: 'Large Groups',
      price: '₹50,000+',
      img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&q=85',
      badge: 'Complete',
      badgeColor: '#7AAD5C',
      rating: '4.9',
      inclusions: ['Event Management', 'Venue Selection', 'AV Coordination', 'On-site Support', 'Reporting']
    },
    {
      title: 'Team Outings',
      locations: 'Domestic & International',
      duration: '2-5 Days',
      group: '20-500 People',
      price: '₹15,000+',
      img: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=500&q=85',
      badge: 'Popular',
      badgeColor: '#4A90E2',
      rating: '4.8',
      inclusions: ['Team Building', 'Activities', 'Accommodations', 'Meals', 'Transportation']
    },
    {
      title: 'Incentive Travel',
      locations: 'Premium Destinations',
      duration: '3-7 Days',
      group: 'Key Performers',
      price: '₹40,000+',
      img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=85',
      badge: 'Luxury',
      badgeColor: '#FFD700',
      rating: '5.0',
      inclusions: ['5-Star Hotels', 'Fine Dining', 'Spa & Wellness', 'Experiences', 'VIP Service']
    },
    {
      title: 'Conference Tours',
      locations: 'Major Cities',
      duration: '4-8 Days',
      group: 'Professionals',
      price: '₹35,000+',
      img: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=500&q=85',
      badge: 'Business',
      badgeColor: '#1a1a1a',
      rating: '4.7',
      inclusions: ['Conference Setup', 'Leisure Tours', 'Hotel Booking', 'Transportation', 'Support']
    }
  ];
}
