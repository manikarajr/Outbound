import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Destination {
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

@Component({
  selector: 'app-destinations-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <section class="bg-gradient-to-b from-[#7AAD5C] to-[#5C8A3E] text-white py-28 px-6">
      <div class="max-w-6xl mx-auto text-center">
        <h1 class="text-5xl md:text-6xl font-bold mb-4">Explore Destinations</h1>
        <p class="text-lg md:text-xl text-white/90 mb-2">
          Discover handcrafted journeys to the world's most beautiful destinations
        </p>
        <p class="text-white/70">From domestic retreats to international adventures, find your perfect escape</p>
      </div>
    </section>

    <!-- Main Content -->
    <div class="bg-white py-20 px-6">
      <div class="max-w-6xl mx-auto">

        <!-- Domestic India Section -->
        <section class="mb-20">
          <div class="mb-12">
            <h2 class="text-4xl font-bold text-gray-900 mb-2">Domestic India</h2>
            <p class="text-gray-600 text-lg">
              Explore the diverse beauty of India with our curated domestic travel packages
            </p>
            <div class="h-1 w-20 bg-[#7AAD5C] rounded mt-4"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-7">
            <div *ngFor="let dest of domesticDestinations; let i = index" class="pkg-card" [style.animation-delay]="(i * 0.1) + 's'">
              <!-- Image -->
              <div class="relative h-56 overflow-hidden">
                <img [src]="dest.img" [alt]="dest.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <!-- Badge -->
                <span
                  class="absolute top-4 left-4 px-3 py-1 text-[10px] font-body font-bold tracking-widest uppercase rounded-full text-white"
                  [style.background]="dest.badgeColor">
                  {{ dest.badge }}
                </span>
                <!-- Rating -->
                <div
                  class="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm">
                  <svg class="w-3 h-3" viewBox="0 0 20 20" fill="#FFD700">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span class="text-white text-[11px] font-body font-semibold">{{ dest.rating }}</span>
                </div>
              </div>

              <!-- Body -->
              <div class="p-6">
                <p class="text-[11px] text-gray-400 font-body tracking-widest uppercase mb-1.5">{{ dest.locations }}</p>
                <h3 class="font-display text-xl text-gray-900 font-semibold mb-1.5 leading-tight">{{ dest.title }}</h3>

                <!-- Meta -->
                <div class="flex items-center gap-4 text-gray-400 text-xs font-body mb-4">
                  <span class="flex items-center gap-1">
                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {{ dest.duration }}
                  </span>
                  <span class="flex items-center gap-1">
                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {{ dest.group }}
                  </span>
                </div>

                <!-- Inclusions Chips -->
                <div class="flex flex-wrap gap-1.5 mb-5">
                  <span *ngFor="let inc of dest.inclusions"
                    class="px-2.5 py-1 rounded-full text-[10px] font-body font-medium bg-pista-50 text-pista-dark">{{ inc }}</span>
                </div>

                <!-- Price + CTA -->
                <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span class="text-[10px] text-gray-400 uppercase tracking-wide font-body">Starting from</span>
                    <p class="font-body font-bold text-gray-900 text-xl leading-none mt-0.5">{{ dest.price }}</p>
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

        <!-- International Section -->
        <section class="mb-20">
          <div class="mb-12">
            <h2 class="text-4xl font-bold text-gray-900 mb-2">International Destinations</h2>
            <p class="text-gray-600 text-lg">
              Journey across continents with our premium international travel experiences
            </p>
            <div class="h-1 w-20 bg-[#7AAD5C] rounded mt-4"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-7">
            <div *ngFor="let dest of internationalDestinations; let i = index" class="pkg-card" [style.animation-delay]="(i * 0.1) + 's'">
              <!-- Image -->
              <div class="relative h-56 overflow-hidden">
                <img [src]="dest.img" [alt]="dest.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <!-- Badge -->
                <span
                  class="absolute top-4 left-4 px-3 py-1 text-[10px] font-body font-bold tracking-widest uppercase rounded-full text-white"
                  [style.background]="dest.badgeColor">
                  {{ dest.badge }}
                </span>
                <!-- Rating -->
                <div
                  class="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm">
                  <svg class="w-3 h-3" viewBox="0 0 20 20" fill="#FFD700">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  <span class="text-white text-[11px] font-body font-semibold">{{ dest.rating }}</span>
                </div>
              </div>

              <!-- Body -->
              <div class="p-6">
                <p class="text-[11px] text-gray-400 font-body tracking-widest uppercase mb-1.5">{{ dest.locations }}</p>
                <h3 class="font-display text-xl text-gray-900 font-semibold mb-1.5 leading-tight">{{ dest.title }}</h3>

                <!-- Meta -->
                <div class="flex items-center gap-4 text-gray-400 text-xs font-body mb-4">
                  <span class="flex items-center gap-1">
                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {{ dest.duration }}
                  </span>
                  <span class="flex items-center gap-1">
                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {{ dest.group }}
                  </span>
                </div>

                <!-- Inclusions Chips -->
                <div class="flex flex-wrap gap-1.5 mb-5">
                  <span *ngFor="let inc of dest.inclusions"
                    class="px-2.5 py-1 rounded-full text-[10px] font-body font-medium bg-pista-50 text-pista-dark">{{ inc }}</span>
                </div>

                <!-- Price + CTA -->
                <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span class="text-[10px] text-gray-400 uppercase tracking-wide font-body">Starting from</span>
                    <p class="font-body font-bold text-gray-900 text-xl leading-none mt-0.5">{{ dest.price }}</p>
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

        <!-- CTA Section -->
        <section class="bg-gradient-to-r from-[#5C8A3E] to-[#7AAD5C] rounded-3xl p-12 text-center text-white">
          <h2 class="text-4xl font-bold mb-4">Ready to Explore?</h2>
          <p class="text-lg text-white/90 mb-8">
            Let our travel experts help you plan your perfect getaway
          </p>
          <button class="bg-white text-[#7AAD5C] font-bold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-colors duration-200 text-lg">
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
export class DestinationsPage {
  domesticDestinations: Destination[] = [
    {
      title: 'Kashmir Retreat',
      locations: 'Srinagar · Pahalgam · Gulmarg',
      duration: '5N / 6D',
      group: 'Couples & Families',
      price: '₹34,999',
      img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=500&q=85',
      badge: 'Scenic',
      badgeColor: '#7AAD5C',
      rating: '4.9',
      inclusions: ['Hotels', 'Breakfast', 'Transfers', 'Houseboat', 'Guide']
    },
    {
      title: 'Andaman Paradise',
      locations: 'Port Blair · Havelock · Neil Island',
      duration: '4N / 5D',
      group: 'All Groups',
      price: '₹29,999',
      img: 'https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=500&q=85',
      badge: 'Beach',
      badgeColor: '#4A90E2',
      rating: '4.8',
      inclusions: ['Hotels', 'Breakfast', 'Island Tours', 'Water Sports', 'Transfers']
    },
    {
      title: 'Kerala Backwaters',
      locations: 'Kochi · Alleppey · Kumarakom',
      duration: '3N / 4D',
      group: 'All Groups',
      price: '₹19,999',
      img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=85',
      badge: 'Serene',
      badgeColor: '#7AAD5C',
      rating: '4.7',
      inclusions: ['Hotels', 'Breakfast', 'Houseboat', 'Backwater Tour', 'Transfers']
    },
    {
      title: 'Himachal Mountains',
      locations: 'Manali · Shimla · Dalhousie',
      duration: '5N / 6D',
      group: 'Adventure',
      price: '₹24,999',
      img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=85',
      badge: 'Peak',
      badgeColor: '#8B4513',
      rating: '4.9',
      inclusions: ['Hotels', 'Breakfast', 'Treks', 'Adventure Sports', 'Guide']
    },
    {
      title: 'Goa Getaway',
      locations: 'North Goa · South Goa · Panaji',
      duration: '3N / 4D',
      group: 'All Groups',
      price: '₹21,999',
      img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=500&q=85',
      badge: 'Beach',
      badgeColor: '#FF6B6B',
      rating: '4.6',
      inclusions: ['Resorts', 'Breakfast', 'Beach Tour', 'Water Sports', 'Transfers']
    },
    {
      title: 'Rajasthan Explorer',
      locations: 'Jaipur · Jaisalmer · Udaipur',
      duration: '4N / 5D',
      group: 'All Groups',
      price: '₹26,999',
      img: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=500&q=85',
      badge: 'Heritage',
      badgeColor: '#C27A40',
      rating: '4.8',
      inclusions: ['Hotels', 'Breakfast', 'Forts Tour', 'Desert Safari', 'Guide']
    }
  ];

  internationalDestinations: Destination[] = [
    {
      title: 'Maldives Dream',
      locations: 'Male · Ari Atoll · Baa Atoll',
      duration: '4N / 5D',
      group: 'Couples & Families',
      price: '₹79,999',
      img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=500&q=85',
      badge: 'Luxury',
      badgeColor: '#4A90E2',
      rating: '5.0',
      inclusions: ['Resorts', 'All Meals', 'Snorkeling', 'Spa', 'Transfers']
    },
    {
      title: 'Bali Soul',
      locations: 'Denpasar · Ubud · Seminyak',
      duration: '5N / 6D',
      group: 'All Groups',
      price: '₹44,999',
      img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500&q=85',
      badge: 'Tropical',
      badgeColor: '#7AAD5C',
      rating: '4.9',
      inclusions: ['Hotels', 'Breakfast', 'Temple Tours', 'Spa', 'Transfers']
    },
    {
      title: 'Thailand Adventure',
      locations: 'Bangkok · Chiang Mai · Phuket',
      duration: '5N / 6D',
      group: 'Adventure',
      price: '₹39,999',
      img: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=500&q=85',
      badge: 'Best Seller',
      badgeColor: '#FF6B6B',
      rating: '4.8',
      inclusions: ['Hotels', 'Breakfast', 'Cooking Class', 'Island Tour', 'Guide']
    },
    {
      title: 'Vietnam Escape',
      locations: 'Hanoi · Halong · Ho Chi Minh',
      duration: '6N / 7D',
      group: 'All Groups',
      price: '₹49,999',
      img: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=500&q=85',
      badge: 'Cultural',
      badgeColor: '#C27A40',
      rating: '4.7',
      inclusions: ['Hotels', 'Breakfast', 'Cruise', 'Walking Tour', 'Guide']
    },
    {
      title: 'Dubai Opulence',
      locations: 'Dubai · Abu Dhabi',
      duration: '4N / 5D',
      group: 'All Groups',
      price: '₹59,999',
      img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&q=85',
      badge: 'Premium',
      badgeColor: '#1a1a1a',
      rating: '4.9',
      inclusions: ['Hotels', 'Breakfast', 'Desert Safari', 'Shopping', 'Transfers']
    },
    {
      title: 'Singapore Marvel',
      locations: 'Singapore',
      duration: '4N / 5D',
      group: 'All Groups',
      price: '₹54,999',
      img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=500&q=85',
      badge: 'Modern',
      badgeColor: '#4A90E2',
      rating: '4.8',
      inclusions: ['Hotels', 'Breakfast', 'Gardens Tour', 'Sentosa', 'Transfers']
    }
  ];
}
