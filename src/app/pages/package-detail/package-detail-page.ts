import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import packagesData from '../../data/packages.json';
import honeymoonData from '../../data/honeymoon.json';
import internationalData from '../../data/international.json';
import destinationsData from '../../data/destinations.json';
import corporateData from '../../data/corporate.json';

interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
}

interface PackageDetail {
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
  overview?: string;
  highlights?: string[];
  itinerary?: ItineraryDay[];
}

@Component({
  selector: 'app-package-detail-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div *ngIf="pkg; else notFound">

      <!-- ── HERO ─────────────────────────────────────────────────────── -->
      <section class="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img [src]="pkg.img" [alt]="pkg.title"
          class="w-full h-full object-cover scale-105" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div class="absolute inset-0 flex flex-col justify-end pb-12 px-6">
          <div class="max-w-5xl mx-auto w-full">
            <!-- Back link -->
            <a [routerLink]="backLink"
              class="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-semibold mb-6 transition-colors group">
              <svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </a>
            <!-- Badge -->
            <!-- <span class="inline-block px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full text-white mb-3"
              [style.background]="pkg.badgeColor">
              {{ pkg.badge }}
            </span> -->
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">{{ pkg.title }}</h1>
            <p class="text-white/70 text-base tracking-widest uppercase mb-4">{{ pkg.locations }}</p>
            <!-- Quick stats -->
            <div class="flex flex-wrap items-center gap-5 text-white">
              <span class="flex items-center gap-1.5 text-sm font-semibold">
                <svg class="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {{ pkg.duration }}
              </span>
              <span class="flex items-center gap-1.5 text-sm font-semibold">
                <svg class="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{ pkg.group }}
              </span>
              <span class="flex items-center gap-1.5 text-sm font-semibold">
                <svg class="w-3.5 h-3.5" viewBox="0 0 20 20" fill="#FFD700">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {{ pkg.rating }} / 5.0
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- ── MAIN CONTENT ─────────────────────────────────────────────── -->
      <div class="bg-white py-16 px-6">
        <div class="max-w-5xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">

            <!-- ── LEFT COLUMN ─────────────────────────────────────────── -->
            <div class="lg:col-span-2 space-y-14">

              <!-- Overview -->
              <section *ngIf="pkg.overview">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                <div class="h-1 w-14 bg-[#7AAD5C] rounded mb-5"></div>
                <p class="text-gray-600 leading-relaxed text-base">{{ pkg.overview }}</p>
              </section>

              <!-- Highlights -->
              <section *ngIf="pkg.highlights && pkg.highlights.length">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">Trip Highlights</h2>
                <div class="h-1 w-14 bg-[#7AAD5C] rounded mb-5"></div>
                <ul class="space-y-3">
                  <li *ngFor="let highlight of pkg.highlights"
                    class="flex items-start gap-3">
                    <svg class="w-5 h-5 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="#7AAD5C">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-gray-700 text-sm leading-relaxed">{{ highlight }}</span>
                  </li>
                </ul>
              </section>

              <!-- Day-by-Day Itinerary -->
              <section *ngIf="pkg.itinerary && pkg.itinerary.length">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">Day-by-Day Itinerary</h2>
                <div class="h-1 w-14 bg-[#7AAD5C] rounded mb-6"></div>

                <div class="space-y-3">
                  <div *ngFor="let day of pkg.itinerary"
                    class="border border-gray-100 rounded-2xl overflow-hidden">
                    <!-- Accordion Header -->
                    <button
                      (click)="toggleDay(day.day)"
                      class="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors duration-150">
                      <div class="flex items-center gap-4">
                        <span class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                          style="background:#7AAD5C;">
                          {{ day.day }}
                        </span>
                        <div>
                          <span class="text-[10px] font-bold tracking-widest uppercase text-[#7AAD5C]">Day {{ day.day }}</span>
                          <p class="font-semibold text-gray-900 text-sm">{{ day.title }}</p>
                        </div>
                      </div>
                      <svg class="w-5 h-5 text-gray-400 transition-transform duration-300 shrink-0"
                        [class.rotate-180]="openDay() === day.day"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <!-- Accordion Body -->
                    <div *ngIf="openDay() === day.day"
                      class="px-6 pb-5 pt-1 border-t border-gray-100 bg-gray-50/50">
                      <ul class="space-y-2 mt-3">
                        <li *ngFor="let activity of day.activities"
                          class="flex items-start gap-2.5 text-sm text-gray-600">
                          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#7AAD5C] shrink-0"></span>
                          {{ activity }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

            </div>

            <!-- ── RIGHT COLUMN – Sticky Card ─────────────────────────── -->
            <div class="lg:col-span-1">
              <div class="sticky top-24 rounded-2xl border border-gray-100 shadow-lg overflow-hidden">

                <!-- Price header -->
                <div class="px-6 py-5 border-b border-gray-100">
                  <p class="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-1">Starting from</p>
                  <p class="text-3xl font-bold text-gray-900">{{ pkg.price }}</p>
                  <p class="text-xs text-gray-400 mt-0.5">per person</p>
                </div>

                <!-- Inclusions -->
                <div class="px-6 py-5 border-b border-gray-100">
                  <p class="text-sm font-bold text-gray-700 mb-3">What's Included</p>
                  <div class="flex flex-wrap gap-2">
                    <span *ngFor="let inc of pkg.inclusions"
                      class="px-3 py-1.5 rounded-full text-[11px] font-semibold bg-[#f0f7ea] text-[#5C8A3E]">
                      {{ inc }}
                    </span>
                  </div>
                </div>

                <!-- CTA Buttons -->
                <div class="px-6 py-5 space-y-3">
                  <a href="tel:+919442282911"
                    class="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:-translate-y-0.5"
                    style="background:#7AAD5C;">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                    </svg>
                    Call to Book
                  </a>
                  <a href="https://wa.me/919442282911" target="_blank"
                    class="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:-translate-y-0.5"
                    style="background:#25D366;">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp Inquiry
                  </a>
                  <p class="text-center text-xs text-gray-400 mt-2">Free consultation · No booking fee</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

    </div>

    <!-- ── NOT FOUND ──────────────────────────────────────────────────── -->
    <ng-template #notFound>
      <div class="min-h-screen flex flex-col items-center justify-center text-center py-32 px-6">
        <svg class="w-20 h-20 text-gray-300 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 class="text-2xl font-bold text-gray-900 mb-2">Package Not Found</h2>
        <p class="text-gray-500 mb-8">We couldn't find the package you're looking for.</p>
        <a routerLink="/" class="px-8 py-3 rounded-full text-white font-bold text-sm" style="background:#7AAD5C;">
          Go Home
        </a>
      </div>
    </ng-template>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class PackageDetailPage implements OnInit {
  pkg: PackageDetail | null = null;
  backLink = '/';
  openDay = signal<number | null>(1);

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const category = params.get('category') ?? '';
      const id = params.get('id') ?? '';
      this.backLink = this.getBackLink(category);
      this.pkg = this.findPackage(category, id);
      // Open first day by default
      if (this.pkg?.itinerary?.length) {
        this.openDay.set(this.pkg.itinerary[0].day);
      }
      window.scrollTo(0, 0);
    });
  }

  toggleDay(day: number) {
    this.openDay.set(this.openDay() === day ? null : day);
  }

  private getBackLink(category: string): string {
    const map: Record<string, string> = {
      'packages': '/packages',
      'honeymoon': '/honeymoon',
      'international': '/international',
      'destinations-domestic': '/destinations',
      'destinations-international': '/destinations',
      'corporate': '/corporate'
    };
    return map[category] ?? '/';
  }

  private findPackage(category: string, id: string): PackageDetail | null {
    let list: PackageDetail[] = [];
    switch (category) {
      case 'packages':
        list = packagesData.packages as PackageDetail[];
        break;
      case 'honeymoon':
        list = honeymoonData.packages as PackageDetail[];
        break;
      case 'international':
        list = internationalData.packages as PackageDetail[];
        break;
      case 'destinations-domestic':
        list = destinationsData.domestic as PackageDetail[];
        break;
      case 'destinations-international':
        list = destinationsData.international as PackageDetail[];
        break;
      case 'corporate':
        list = corporateData.packages as PackageDetail[];
        break;
    }
    return list.find(p => p.id === id) ?? null;
  }
}
