import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface HoneymoonDestination {
  name: string;
  nights: string;
  image: string;
  desc: string;
}

@Component({
  selector: 'app-honeymoon-page',
  standalone: true,
  imports: [CommonModule],
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

        <!-- Featured Honeymoon Destination -->
        <section class="mb-20">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div class="relative">
              <img [src]="honeymoonDestinations[0].image" [alt]="honeymoonDestinations[0].name"
                class="rounded-2xl shadow-2xl w-full h-96 object-cover" />
              <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-red-100 rounded-full opacity-20"></div>
            </div>
            <div>
              <span class="inline-flex items-center gap-1.5 bg-red-100 text-red-600 font-bold text-xs px-3 py-1 rounded-full mb-4">
                <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                MOST POPULAR
              </span>
              <h2 class="text-4xl font-bold text-gray-900 mb-4">{{ honeymoonDestinations[0].name }}</h2>
              <p class="text-[#7AAD5C] font-semibold text-lg mb-4">{{ honeymoonDestinations[0].nights }}</p>
              <p class="text-gray-600 text-lg leading-relaxed mb-6">
                {{ honeymoonDestinations[0].desc }}
              </p>
              <div class="flex gap-4">
                <button class="bg-[#7AAD5C] hover:bg-[#5C8A3E] text-white font-bold px-8 py-3.5 rounded-lg transition-colors duration-200">
                  View Itinerary →
                </button>
                <button class="border-2 border-[#7AAD5C] text-[#7AAD5C] hover:bg-[#7AAD5C] hover:text-white font-bold px-8 py-3.5 rounded-lg transition-all duration-200">
                  Customize Trip
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- More Honeymoon Destinations -->
        <section class="mb-20">
          <div class="mb-12">
            <h2 class="text-4xl font-bold text-gray-900 mb-2">More Romantic Escapes</h2>
            <p class="text-gray-600 text-lg">
              Discover other beautiful destinations perfect for celebrating love
            </p>
            <div class="h-1 w-20 bg-red-500 rounded mt-4"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article *ngFor="let dest of honeymoonDestinations.slice(1)"
              class="group rounded-2xl overflow-hidden bg-white border border-gray-100 hover:border-red-400 transition-all duration-300 hover:shadow-2xl">
              <div class="relative h-56 overflow-hidden">
                <img [src]="dest.image" [alt]="dest.name"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div class="absolute top-4 left-4">
                  <svg class="w-8 h-8 text-red-500 fill-current" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-2xl font-bold text-gray-900 mb-1">{{ dest.name }}</h3>
                <p class="text-[#7AAD5C] font-semibold text-sm mb-3">{{ dest.nights }}</p>
                <p class="text-gray-600 text-sm mb-4">{{ dest.desc }}</p>
                <button class="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2.5 rounded-lg transition-colors duration-200">
                  Explore →
                </button>
              </div>
            </article>
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
  honeymoonDestinations: HoneymoonDestination[] = [
    {
      name: 'Maldives Honeymoon',
      nights: '4N/5D',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=85',
      desc: 'Crystal-clear waters, overwater bungalows, and pristine beaches combine to create the ultimate romantic paradise. Enjoy private dinners, snorkeling, and endless sunsets.'
    },
    {
      name: 'Bali Romance',
      nights: '5N/6D',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500&q=85',
      desc: 'Lush rice terraces, ancient temples, and luxury resorts set the stage for romance. Experience couples spa treatments and beachfront dinners.'
    },
    {
      name: 'Kashmir Dreams',
      nights: '5N/6D',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=500&q=85',
      desc: 'Stunning mountain landscapes and serene houseboats on Dal Lake create an enchanting backdrop. Perfect for peaceful getaways with scenic beauty.'
    },
    {
      name: 'Europe Escapes',
      nights: '7N/8D',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=500&q=85',
      desc: 'Romantic cities, charming towns, and world-class cuisine await. From Paris to Venice, experience timeless European romance.'
    },
    {
      name: 'Kerala Backwaters',
      nights: '3N/4D',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=85',
      desc: 'Peaceful houseboats gliding through backwaters surrounded by lush greenery. A perfect retreat for couples seeking tranquility.'
    },
  ];
}
