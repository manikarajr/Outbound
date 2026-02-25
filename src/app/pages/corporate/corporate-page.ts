import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface CorporatePackage {
  id: string;
  label: string;
  desc: string;
  image: string;
  benefits: string[];
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

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <article *ngFor="let pkg of corporatePackages"
              class="group rounded-2xl overflow-hidden bg-white border border-gray-100 hover:border-slate-700 transition-all duration-300 hover:shadow-2xl">
              <div class="relative h-48 overflow-hidden">
                <img [src]="pkg.image" [alt]="pkg.label"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div class="p-6">
                <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ pkg.label }}</h3>
                <p class="text-gray-600 text-sm mb-4">{{ pkg.desc }}</p>

                <div class="mb-6 space-y-2">
                  <h4 class="font-semibold text-gray-900 text-sm">Key Benefits:</h4>
                  <ul class="space-y-1">
                    <li *ngFor="let benefit of pkg.benefits" class="flex items-start gap-2 text-sm text-gray-600">
                      <span class="text-[#7AAD5C] font-bold mt-0.5">✓</span>
                      <span>{{ benefit }}</span>
                    </li>
                  </ul>
                </div>

                <button class="w-full bg-slate-700 hover:bg-slate-800 text-white font-semibold py-2.5 rounded-lg transition-colors duration-200">
                  Get Quote →
                </button>
              </div>
            </article>
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

        <!-- Recent Corporate Events -->
        <section class="mb-20">
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-2">Recent Corporate Programs</h2>
            <p class="text-gray-600">Successfully delivered programs for leading organizations</p>
            <div class="h-1 w-20 bg-slate-700 rounded mt-4"></div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
              <div class="bg-slate-700 text-white p-6">
                <h3 class="text-xl font-bold mb-2">Tech Company Team Offsite</h3>
                <p class="text-slate-100 text-sm mb-4">500+ employees across 5 locations</p>
              </div>
              <div class="p-6 space-y-3">
                <div class="flex justify-between">
                  <span class="text-gray-600">Destination:</span>
                  <span class="font-semibold text-gray-900">Bali, Indonesia</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Duration:</span>
                  <span class="font-semibold text-gray-900">5 days</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Focus:</span>
                  <span class="font-semibold text-gray-900">Team building & innovation</span>
                </div>
              </div>
            </div>

            <div class="rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
              <div class="bg-slate-700 text-white p-6">
                <h3 class="text-xl font-bold mb-2">Sales Incentive Trip</h3>
                <p class="text-slate-100 text-sm mb-4">Top 100 sales performers</p>
              </div>
              <div class="p-6 space-y-3">
                <div class="flex justify-between">
                  <span class="text-gray-600">Destination:</span>
                  <span class="font-semibold text-gray-900">Maldives</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Duration:</span>
                  <span class="font-semibold text-gray-900">4 days</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Focus:</span>
                  <span class="font-semibold text-gray-900">Luxury experience & recognition</span>
                </div>
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
      id: '1',
      label: 'MICE Solutions',
      desc: 'Meetings, Incentives, Conferences & Exhibitions',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&q=85',
      benefits: [
        'End-to-end event management',
        'Venue selection & negotiation',
        'Audio/visual setup coordination',
        'On-site event support',
        'Post event reporting'
      ]
    },
    {
      id: '2',
      label: 'Team Outings',
      desc: 'Build team spirit with curated experiences',
      image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=500&q=85',
      benefits: [
        'Adventure & activity planning',
        'Destination team building',
        'Customized group activities',
        'Team retreat packages',
        'Photo & video documentation'
      ]
    },
    {
      id: '3',
      label: 'Conference Tours',
      desc: 'Blend business with leisure destinations',
      image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=500&q=85',
      benefits: [
        'Conference logistics planning',
        'Leisure itineraries',
        'Hotel & transport booking',
        'Pre/post conference tours',
        'Budget management'
      ]
    },
    {
      id: '4',
      label: 'Incentive Travel',
      desc: 'Reward your top performers in style',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=85',
      benefits: [
        'Luxury destination curation',
        'VIP treatment arrangements',
        'Exclusive experiences',
        'Awards ceremony planning',
        'Performance tracking'
      ]
    }
  ];
}
