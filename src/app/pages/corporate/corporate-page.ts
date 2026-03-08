import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import corporateData from '../../data/corporate.json';

interface CorporatePackage {
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
}

interface CorporateStat {
  value: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-corporate-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="relative mt-[72px] h-80 md:h-[480px] flex items-center justify-center text-white overflow-hidden">
      <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80')"></div>
      <div class="absolute inset-0 bg-black/55"></div>
      <div class="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h1 class="text-5xl md:text-6xl font-bold mb-4">Corporate Travel Solutions</h1>
        <p class="text-lg md:text-xl text-white/90 mb-2">MICE, team outings & incentive programs</p>
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
                  <a [routerLink]="['/package-detail', 'corporate', pkg.id]" class="btn-pista">
                    View Details
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
                <!-- Dedicated Account Manager: person/user icon -->
                <svg class="h-12 w-12 text-[#7AAD5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-gray-900 mb-1">Dedicated Account Manager</h3>
                <p class="text-gray-600">Personalized support throughout planning and execution</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <!-- Budget Flexibility: banknotes/money icon -->
                <svg class="h-12 w-12 text-[#7AAD5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-gray-900 mb-1">Budget Flexibility</h3>
                <p class="text-gray-600">Solutions tailored to your budget and requirements</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <!-- Global Network: globe/world icon -->
                <svg class="h-12 w-12 text-[#7AAD5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-gray-900 mb-1">Global Network</h3>
                <p class="text-gray-600">Access to premium vendors worldwide</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <!-- Comprehensive Reporting: bar chart icon -->
                <svg class="h-12 w-12 text-[#7AAD5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-gray-900 mb-1">Comprehensive Reporting</h3>
                <p class="text-gray-600">Detailed analytics and ROI tracking for your programs</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <!-- Industry Experience: trophy icon -->
                <svg class="h-12 w-12 text-[#7AAD5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-gray-900 mb-1">Industry Experience</h3>
                <p class="text-gray-600">15+ years managing corporate travel programs</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <!-- 24/7 Support: chat bubble / support icon -->
                <svg class="h-12 w-12 text-[#7AAD5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"/>
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
            <a [routerLink]="['/']" fragment="contact" class="bg-[#7AAD5C] hover:bg-[#5C8A3E] text-white font-bold px-8 py-3.5 rounded-full transition-colors duration-200">
              Get a Quote
            </a>
            <a href="tel:+919442282911" class="border-2 border-white text-white font-bold px-8 py-3.5 rounded-full hover:bg-white hover:text-slate-700 transition-all duration-200">
              Schedule a Call
            </a>
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
  corpStats: CorporateStat[] = corporateData.stats.map(s => ({ ...s, icon: '' }));
  corporatePackages: CorporatePackage[] = corporateData.packages as CorporatePackage[];
}
