import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Destination {
  name: string;
  nights: string;
  thumb: string;
  description?: string;
}

interface TravelStyle {
  name: string;
  thumb: string;
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

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article *ngFor="let dest of domesticDestinations"
              class="group rounded-2xl overflow-hidden bg-white border border-gray-100 hover:border-[#7AAD5C] transition-all duration-300 hover:shadow-xl">
              <div class="relative h-48 overflow-hidden">
                <img [src]="dest.thumb" [alt]="dest.name"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-1">{{ dest.name }}</h3>
                <p class="text-[#7AAD5C] font-semibold text-sm mb-3">{{ dest.nights }}</p>
                <p class="text-gray-600 text-sm mb-4">
                  Experience the magic of {{ dest.name }} with our expertly crafted itineraries.
                </p>
                <button class="w-full bg-[#7AAD5C] hover:bg-[#5C8A3E] text-white font-semibold py-2.5 rounded-lg transition-colors duration-200">
                  View Package →
                </button>
              </div>
            </article>
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

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article *ngFor="let dest of internationalDestinations"
              class="group rounded-2xl overflow-hidden bg-white border border-gray-100 hover:border-[#7AAD5C] transition-all duration-300 hover:shadow-xl">
              <div class="relative h-48 overflow-hidden">
                <img [src]="dest.thumb" [alt]="dest.name"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-1">{{ dest.name }}</h3>
                <p class="text-[#7AAD5C] font-semibold text-sm mb-3">{{ dest.nights }}</p>
                <p class="text-gray-600 text-sm mb-4">
                  Discover the wonders of {{ dest.name }} with luxury stays and guided tours.
                </p>
                <button class="w-full bg-[#7AAD5C] hover:bg-[#5C8A3E] text-white font-semibold py-2.5 rounded-lg transition-colors duration-200">
                  View Package →
                </button>
              </div>
            </article>
          </div>
        </section>

        <!-- Travel Styles Section -->
        <section class="mb-20">
          <div class="mb-12">
            <h2 class="text-4xl font-bold text-gray-900 mb-2">Travel Styles</h2>
            <p class="text-gray-600 text-lg">
              Choose your adventure - we have something for every type of traveler
            </p>
            <div class="h-1 w-20 bg-[#7AAD5C] rounded mt-4"></div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article *ngFor="let style of travelStyles"
              class="group rounded-2xl overflow-hidden bg-white border border-gray-100 hover:border-[#7AAD5C] transition-all duration-300 hover:shadow-xl">
              <div class="relative h-48 overflow-hidden">
                <img [src]="style.thumb" [alt]="style.name"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                  <h3 class="text-2xl font-bold text-white text-center px-4">{{ style.name }}</h3>
                </div>
              </div>
              <div class="p-6 text-center">
                <button class="w-full bg-[#7AAD5C] hover:bg-[#5C8A3E] text-white font-semibold py-2.5 rounded-lg transition-colors duration-200">
                  Explore {{style.name}} →
                </button>
              </div>
            </article>
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
    { name: 'Kashmir', nights: '5N/6D', thumb: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=500&q=85' },
    { name: 'Andaman', nights: '4N/5D', thumb: 'https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=500&q=85' },
    { name: 'Kerala', nights: '3N/4D', thumb: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=85' },
    { name: 'Himachal', nights: '5N/6D', thumb: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=85' },
    { name: 'Goa', nights: '3N/4D', thumb: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=500&q=85' },
    { name: 'Rajasthan', nights: '4N/5D', thumb: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=500&q=85' },
  ];

  internationalDestinations: Destination[] = [
    { name: 'Maldives', nights: '4N/5D', thumb: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=500&q=85' },
    { name: 'Bali', nights: '5N/6D', thumb: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500&q=85' },
    { name: 'Thailand', nights: '5N/6D', thumb: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=500&q=85' },
    { name: 'Vietnam', nights: '6N/7D', thumb: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=500&q=85' },
    { name: 'Dubai', nights: '4N/5D', thumb: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&q=85' },
    { name: 'Singapore', nights: '4N/5D', thumb: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=500&q=85' },
  ];

  travelStyles: TravelStyle[] = [
    { name: 'Luxury Travel', thumb: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=85' },
    { name: 'Adventure Tours', thumb: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=500&q=85' },
    { name: 'Family Trips', thumb: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=500&q=85' },
    { name: 'Honeymoon Packages', thumb: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=500&q=85' },
    { name: 'Group Tours', thumb: 'https://images.unsplash.com/photo-1527004013197-933b27eb1b36?w=500&q=85' },
  ];
}
