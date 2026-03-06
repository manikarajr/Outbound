import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import honeymoonData from '../../data/honeymoon.json';

@Component({
  selector: 'app-honeymoon-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="bg-gradient-to-b from-red-600 via-red-500 to-[#7AAD5C] text-white py-28 px-6">
      <div class="max-w-6xl mx-auto text-center">
        <h1 class="text-5xl md:text-6xl font-bold mb-4">Honeymoon Escapes</h1>
        <p class="text-lg md:text-xl text-white/90 mb-2">
          Romantic getaways crafted for two
        </p>
        <p class="text-white/70">Create unforgettable memories at the world's most romantic destinations</p>
        <div class="mt-8">
          <svg class="w-8 h-8 mx-auto opacity-80" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="bg-white py-20 px-6">
      <div class="max-w-6xl mx-auto">

        <!-- Honeymoon Packages -->
        <section class="mb-20">
          <div class="mb-12">
            <h2 class="text-4xl font-bold text-gray-900 mb-2">Romantic Escapes</h2>
            <p class="text-gray-600 text-lg">
              Discover beautiful destinations perfect for celebrating love and creating magical moments
            </p>
            <div class="h-1 w-20 bg-red-500 rounded mt-4"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-7">
            <div *ngFor="let pkg of honeymoonPackages; let i = index" class="pkg-card" [style.animation-delay]="(i * 0.1) + 's'">
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
                    <span class="text-[10px] text-gray-400 font-body">per couple</span>
                  </div>
                  <a [routerLink]="['/package-detail', 'honeymoon', pkg.id]" class="btn-pista">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Honeymoon Tips Section -->
        <section class="mb-20 bg-gradient-to-r from-red-50 to-pink-50 rounded-3xl p-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Make Your Honeymoon Unforgettable</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <svg class="w-12 h-12 text-red-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3.5c-5 0-8.5 4-8.5 8.5 0 6 8.5 12 8.5 12s8.5-6 8.5-12c0-4.5-3.5-8.5-8.5-8.5z"/>
              </svg>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Planned by Experts</h3>
              <p class="text-gray-600">Every detail curated to create magical moments for newlyweds</p>
            </div>
            <div class="text-center">
              <svg class="w-12 h-12 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12h12M12 3v18M3 12l9-9 9 9"/>
              </svg>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Flexible Dates</h3>
              <p class="text-gray-600">Plan your getaway whenever you want with flexible scheduling</p>
            </div>
            <div class="text-center">
              <svg class="w-12 h-12 text-yellow-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 2c1.1 0 2 .9 2 2v1h3c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h3V4c0-1.1.9-2 2-2zm0 2h-2v1h2V4zm6 3H6v14h12V7z"/>
              </svg>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Special Surprises</h3>
              <p class="text-gray-600">Complimentary romantic touches like flowers, dinners & more</p>
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-12 text-center text-white">
          <h2 class="text-4xl font-bold mb-4">Ready to Say "I Do" to Your Dream Honeymoon?</h2>
          <p class="text-lg text-white/90 mb-8">
            Contact our honeymoon specialists to plan the perfect trip for you both
          </p>
          <button class="bg-white text-red-600 font-bold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-colors duration-200 text-lg">
            Start Planning →
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
export class HoneymoonPage {
  honeymoonPackages = honeymoonData.packages;
}
