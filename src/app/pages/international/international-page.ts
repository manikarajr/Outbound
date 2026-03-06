import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import internationalData from '../../data/international.json';

@Component({
  selector: 'app-international-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <section class="bg-gradient-to-b from-blue-600 to-[#7AAD5C] text-white py-28 px-6">
      <div class="max-w-6xl mx-auto text-center">
        <h1 class="text-5xl md:text-6xl font-bold mb-4">International Destinations</h1>
        <p class="text-lg md:text-xl text-white/90 mb-2">
          The world is your itinerary
        </p>
        <p class="text-white/70">Explore incredible destinations across continents with expert guidance</p>
      </div>
    </section>

    <!-- Main Content -->
    <div class="bg-white py-20 px-6">
      <div class="max-w-6xl mx-auto">

        <!-- Regions Grid -->
        <section class="mb-20">
          <div class="mb-12">
            <h2 class="text-4xl font-bold text-gray-900 mb-2">Explore by Region</h2>
            <p class="text-gray-600 text-lg">
              Discover our curated international travel packages
            </p>
            <div class="h-1 w-20 bg-blue-600 rounded mt-4"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-7">
            <div *ngFor="let region of regions; let i = index" class="pkg-card" [style.animation-delay]="(i * 0.1) + 's'">
              <!-- Image -->
              <div class="relative h-56 overflow-hidden">
                <img [src]="region.img" [alt]="region.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <!-- Badge -->
                <span
                  class="absolute top-4 left-4 px-3 py-1 text-[10px] font-body font-bold tracking-widest uppercase rounded-full text-white"
                  [style.background]="region.badgeColor">
                  {{ region.badge }}
                </span>
                <!-- Rating -->
                <div
                  class="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm">
                  <svg class="w-3 h-3" viewBox="0 0 20 20" fill="#FFD700">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span class="text-white text-[11px] font-body font-semibold">{{ region.rating }}</span>
                </div>
              </div>

              <!-- Body -->
              <div class="p-6">
                <p class="text-[11px] text-gray-400 font-body tracking-widest uppercase mb-1.5">{{ region.locations }}</p>
                <h3 class="font-display text-xl text-gray-900 font-semibold mb-1.5 leading-tight">{{ region.title }}</h3>

                <!-- Meta -->
                <div class="flex items-center gap-4 text-gray-400 text-xs font-body mb-4">
                  <span class="flex items-center gap-1">
                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {{ region.duration }}
                  </span>
                  <span class="flex items-center gap-1">
                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {{ region.group }}
                  </span>
                </div>

                <!-- Inclusions Chips -->
                <div class="flex flex-wrap gap-1.5 mb-5">
                  <span *ngFor="let inc of region.inclusions"
                    class="px-2.5 py-1 rounded-full text-[10px] font-body font-medium bg-pista-50 text-pista-dark">{{ inc }}</span>
                </div>

                <!-- Price + CTA -->
                <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span class="text-[10px] text-gray-400 uppercase tracking-wide font-body">Starting from</span>
                    <p class="font-body font-bold text-gray-900 text-xl leading-none mt-0.5">{{ region.price }}</p>
                    <span class="text-[10px] text-gray-400 font-body">per person</span>
                  </div>
                  <a href="#" class="btn-pista">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Why Travel Internationally Section -->
        <section class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12 mb-20">
          <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Why Travel Internationally?</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="text-center">
              <svg class="w-14 h-14 text-blue-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
                <path d="M12 2v20M2 12h20M5.64 5.64a8 8 0 0 1 12.72 0M5.64 18.36a8 8 0 0 0 12.72 0" stroke="currentColor" stroke-width="2" fill="none"/>
              </svg>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Diverse Cultures</h3>
              <p class="text-gray-600 text-sm">Experience rich traditions and unique lifestyles</p>
            </div>
            <div class="text-center">
              <svg class="w-14 h-14 text-amber-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 18H7v-4h7v4zm5-5H3V4h16v11z"/>
              </svg>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Historical Sites</h3>
              <p class="text-gray-600 text-sm">Visit UNESCO world heritage and iconic landmarks</p>
            </div>
            <div class="text-center">
              <svg class="w-14 h-14 text-orange-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11 9H9V7h2v2zm0 4H9v-2h2v2zm2-4h2V7h-2v2zm2 4h2v-2h-2v2zM7 9H5V7h2v2zm0 4H5v-2h2v2zm8-4h2V7h-2v2zm2 4h2v-2h-2v2zM3 3h18v2H3V3zm0 4h18v12H3V7z"/>
              </svg>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Culinary Adventures</h3>
              <p class="text-gray-600 text-sm">Taste authentic cuisines from around the world</p>
            </div>
            <div class="text-center">
              <svg class="w-14 h-14 text-purple-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.268 6.854a5 5 0 1 0 7.07 7.071M12 5v14m0 0l-4-4m4 4l4-4"/>
              </svg>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Personal Growth</h3>
              <p class="text-gray-600 text-sm">Expand horizons and create lasting memories</p>
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-center text-white">
          <h2 class="text-4xl font-bold mb-4">Ready for Your International Adventure?</h2>
          <p class="text-lg text-white/90 mb-8">
            Our visa assistance, travel insurance, and 24/7 support make international travel hassle-free
          </p>
          <button class="bg-white text-blue-600 font-bold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-colors duration-200 text-lg">
            Plan Your Journey →
          </button>
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
export class InternationalPage {
  regions = internationalData.packages;
}
