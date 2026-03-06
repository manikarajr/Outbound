import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import packagesData from '../../data/packages.json';

interface Package {
  id: string;
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
  tag: string;
}

@Component({
  selector: 'app-packages-page',
  imports: [CommonModule, RouterLink],
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
        <div class="grid grid-cols-1 md:grid-cols-3 gap-7">
          <div *ngFor="let pkg of filteredPackages; let i = index" class="pkg-card" [style.animation-delay]="(i * 0.1) + 's'">
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
                  <span class="text-[10px] text-gray-400 uppercase tracking-wide font-body">Starting from</span>
                  <p class="font-body font-bold text-gray-900 text-xl leading-none mt-0.5">{{ pkg.price }}</p>
                  <span class="text-[10px] text-gray-400 font-body">per person</span>
                </div>
                <a [routerLink]="['/package-detail', 'packages', pkg.id]" class="btn-pista">
                  View Details
                </a>
              </div>
            </div>
          </div>
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

  packages: Package[] = packagesData.packages;

  get uniqueTags(): string[] {
    return packagesData.filterTags;
  }

  get filteredPackages(): Package[] {
    if (!this.selectedTag) {
      return this.packages;
    }
    return this.packages.filter(pkg => pkg.tag === this.selectedTag);
  }
}
