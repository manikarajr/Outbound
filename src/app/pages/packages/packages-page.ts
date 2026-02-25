import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Package {
  id: string;
  label: string;
  tag: string;
  desc: string;
  image: string;
  price?: string;
}

@Component({
  selector: 'app-packages-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <section class="bg-gradient-to-b from-[#7AAD5C] to-[#5C8A3E] text-white py-28 px-6">
      <div class="max-w-6xl mx-auto text-center">
        <h1 class="text-5xl md:text-6xl font-bold mb-4">Our Travel Packages</h1>
        <p class="text-lg md:text-xl text-white/90 mb-2">
          Every budget, every dream — we've got a package for you
        </p>
        <p class="text-white/70">From budget-friendly trips to luxury escapes, discover your perfect match</p>
      </div>
    </section>

    <!-- Main Content -->
    <div class="bg-white py-20 px-6">
      <div class="max-w-6xl mx-auto">

        <!-- Filters Section -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">Filter by Type</h2>
          <div class="flex flex-wrap gap-3">
            <button *ngFor="let tag of uniqueTags"
              class="px-6 py-2.5 rounded-full font-semibold transition-all duration-200 border-2"
              [ngClass]="selectedTag === null || selectedTag === tag ? 'bg-[#7AAD5C] border-[#7AAD5C] text-white' : 'border-gray-300 text-gray-700 hover:border-[#7AAD5C]'"
              (click)="selectedTag = selectedTag === tag ? null : tag">
              {{ tag }}
            </button>
          </div>
        </div>

        <!-- Packages Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article *ngFor="let pkg of filteredPackages"
            class="group rounded-2xl overflow-hidden bg-white border border-gray-100 hover:border-[#7AAD5C] transition-all duration-300 hover:shadow-2xl">
            <div class="relative h-56 overflow-hidden">
              <img [src]="pkg.image" [alt]="pkg.label"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div class="absolute top-4 right-4">
                <span class="bg-[#7AAD5C] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {{ pkg.tag }}
                </span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ pkg.label }}</h3>
              <p class="text-gray-600 text-sm mb-4">{{ pkg.desc }}</p>
              <div class="border-t border-gray-200 pt-4">
                <button class="w-full bg-[#7AAD5C] hover:bg-[#5C8A3E] text-white font-semibold py-3 rounded-lg transition-colors duration-200">
                  View Details →
                </button>
              </div>
            </div>
          </article>
        </div>

        <!-- Empty State -->
        <div *ngIf="filteredPackages.length === 0" class="text-center py-16">
          <p class="text-gray-500 text-lg">No packages found for the selected filter</p>
        </div>

        <!-- CTA Section -->
        <section class="mt-20 bg-gradient-to-r from-[#5C8A3E] to-[#7AAD5C] rounded-3xl p-12 text-center text-white">
          <h2 class="text-4xl font-bold mb-4">Custom Package?</h2>
          <p class="text-lg text-white/90 mb-8">
            Can't find what you're looking for? Our travel experts can create a custom itinerary just for you
          </p>
          <button class="bg-white text-[#7AAD5C] font-bold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-colors duration-200 text-lg">
            Get a Custom Quote →
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
export class PackagesPage {
  selectedTag: string | null = null;

  packages: Package[] = [
    { id: '1', label: 'All Packages', tag: 'Popular', desc: 'Curated trips for all budgets and preferences', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&q=85' },
    { id: '2', label: 'Budget Trips', tag: 'Value', desc: 'More travel, less spend - explore on your budget', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500&q=85' },
    { id: '3', label: 'Luxury Escapes', tag: '5★', desc: 'Uncompromising comfort & style for the discerning traveler', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=85' },
    { id: '4', label: 'Group Tours', tag: 'Social', desc: 'Travel with like-minded explorers and make new friends', image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=500&q=85' },
    { id: '5', label: 'Weekend Getaways', tag: 'Quick', desc: 'Recharge in just 2–3 days with our short escapes', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500&q=85' },
    { id: '6', label: 'Family Holidays', tag: 'Kids ♥', desc: 'Safe, fun & unforgettable experiences for all ages', image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=500&q=85' },
  ];

  get uniqueTags(): string[] {
    return ['Popular', 'Value', '5★', 'Social', 'Quick', 'Kids ♥'];
  }

  get filteredPackages(): Package[] {
    if (!this.selectedTag) {
      return this.packages;
    }
    return this.packages.filter(pkg => pkg.tag === this.selectedTag);
  }
}
