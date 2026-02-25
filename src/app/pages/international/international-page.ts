import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Region {
  label: string;
  count: number;
  image: string;
  description: string;
}

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
              Discover our curated collection of international destinations
            </p>
            <div class="h-1 w-20 bg-blue-600 rounded mt-4"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article *ngFor="let region of regions"
              class="group rounded-2xl overflow-hidden bg-white border border-gray-100 hover:border-blue-600 transition-all duration-300 hover:shadow-2xl cursor-pointer">
              <div class="relative h-64 overflow-hidden">
                <img [src]="region.image" [alt]="region.label"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-center">
                    <h3 class="text-3xl font-bold text-white mb-2">{{ region.label }}</h3>
                    <p class="text-white/80 text-sm">{{ region.count }} destinations</p>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <p class="text-gray-600 text-sm mb-4">{{ region.description }}</p>
                <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-colors duration-200">
                  Explore {{ region.label }} →
                </button>
              </div>
            </article>
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

        <!-- Featured International Deals -->
        <section class="mb-20">
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-2">Featured International Packages</h2>
            <p class="text-gray-600">Limited-time offers on popular international destinations</p>
            <div class="h-1 w-20 bg-blue-600 rounded mt-4"></div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-blue-600 transition-all hover:shadow-xl">
              <div class="bg-gradient-to-r from-blue-600 to-blue-500 p-8 text-white">
                <h3 class="text-2xl font-bold mb-2">Europe Grand Tour</h3>
                <p class="text-blue-100 mb-4">7N/8D: Paris → Amsterdam → Berlin → Vienna</p>
                <div class="flex items-baseline gap-2">
                  <span class="text-4xl font-bold">$1,899</span>
                  <span class="text-blue-200 line-through">$2,499</span>
                  <span class="bg-red-500 px-3 py-1 rounded-full text-sm font-bold">Save 24%</span>
                </div>
              </div>
              <div class="p-6">
                <ul class="space-y-2 mb-6">
                  <li class="flex items-center gap-2 text-gray-700">
                    <span class="text-green-600 font-bold">✓</span>
                    5-star accommodations
                  </li>
                  <li class="flex items-center gap-2 text-gray-700">
                    <span class="text-green-600 font-bold">✓</span>
                    Guided city tours
                  </li>
                  <li class="flex items-center gap-2 text-gray-700">
                    <span class="text-green-600 font-bold">✓</span>
                    Travel insurance included
                  </li>
                </ul>
                <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors">
                  Book Now →
                </button>
              </div>
            </div>

            <div class="rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-blue-600 transition-all hover:shadow-xl">
              <div class="bg-gradient-to-r from-indigo-600 to-purple-500 p-8 text-white">
                <h3 class="text-2xl font-bold mb-2">Southeast Asia Adventure</h3>
                <p class="text-indigo-100 mb-4">6N/7D: Bangkok → Chiang Mai → Phuket</p>
                <div class="flex items-baseline gap-2">
                  <span class="text-4xl font-bold">$799</span>
                  <span class="text-indigo-200 line-through">$999</span>
                  <span class="bg-red-500 px-3 py-1 rounded-full text-sm font-bold">Save 20%</span>
                </div>
              </div>
              <div class="p-6">
                <ul class="space-y-2 mb-6">
                  <li class="flex items-center gap-2 text-gray-700">
                    <span class="text-green-600 font-bold">✓</span>
                    Boutique hotels & resorts
                  </li>
                  <li class="flex items-center gap-2 text-gray-700">
                    <span class="text-green-600 font-bold">✓</span>
                    Thai cooking class
                  </li>
                  <li class="flex items-center gap-2 text-gray-700">
                    <span class="text-green-600 font-bold">✓</span>
                    Island hopping tour
                  </li>
                </ul>
                <button class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition-colors">
                  Book Now →
                </button>
              </div>
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
  regions: Region[] = [
    {
      label: 'Southeast Asia',
      count: 18,
      image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=500&q=85',
      description: 'Thailand, Vietnam, Indonesia, Cambodia, and more. Experience vibrant cultures, ancient temples, and pristine beaches.'
    },
    {
      label: 'Europe',
      count: 24,
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=500&q=85',
      description: 'From the Eiffel Tower to the Swiss Alps. Discover historic cities, charming countryside, and world-class cuisine.'
    },
    {
      label: 'Middle East',
      count: 10,
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&q=85',
      description: 'Dubai, Abu Dhabi, Jordan, and beyond. Experience luxury, desert adventures, and Arabian hospitality.'
    },
    {
      label: 'Far East',
      count: 12,
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500&q=85',
      description: 'Japan, South Korea, China, and Mongolia. Discover ancient traditions blended with modern innovation.'
    },
    {
      label: 'USA & Canada',
      count: 8,
      image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=500&q=85',
      description: 'Natural wonders, bustling cities, and outdoor adventures. Explore diverse landscapes and experiences.'
    },
    {
      label: 'South America',
      count: 6,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=85',
      description: 'Peru, Brazil, Argentina, and Chile. Experience Amazon rainforests, Machu Picchu, and vibrant cultures.'
    },
  ];
}
