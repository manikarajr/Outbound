import { Component, HostListener, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


interface NavItem {
  label: string;
  key: string;
  hasMega?: boolean;
  hasDropdown?: boolean;
  href?: string;
}

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnDestroy {
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);
  isSearchOpen = signal(false);
  activeMenu = signal<string | null>(null);
  activeMobileAccordion = signal<string | null>(null);

  // Timer used to delay hiding the mega menu so the user can
  // move the mouse from the nav link into the panel without it closing.
  private closeTimer: ReturnType<typeof setTimeout> | null = null;

  navItems: NavItem[] = [
    { label: 'Destinations', key: 'destinations', hasMega: true, href: '/destinations' },
    { label: 'Packages', key: 'packages', hasDropdown: true, href: '/packages' },
    { label: 'Honeymoon', key: 'honeymoon', hasDropdown: true, href: '/honeymoon' },
    { label: 'International', key: 'international', hasDropdown: true, href: '/international' },
    { label: 'Corporate', key: 'corporate', hasDropdown: true, href: '/corporate' },
    { label: 'About Us', key: 'about', href: '/#why-us' },
  ];

  // ── Destinations ──────────────────────────────────────────────────
  domestic = [
    { name: 'Kashmir', nights: '5N/6D', thumb: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=120&q=80' },
    { name: 'Andaman', nights: '4N/5D', thumb: 'https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=120&q=80' },
    { name: 'Kerala', nights: '3N/4D', thumb: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&q=80' },
    { name: 'Himachal', nights: '5N/6D', thumb: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=120&q=80' },
    { name: 'Goa', nights: '3N/4D', thumb: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=120&q=80' },
    { name: 'Rajasthan', nights: '4N/5D', thumb: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=120&q=80' },
  ];

  international = [
    { name: 'Maldives', nights: '4N/5D', thumb: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=120&q=80' },
    { name: 'Bali', nights: '5N/6D', thumb: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=120&q=80' },
    { name: 'Thailand', nights: '5N/6D', thumb: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=120&q=80' },
    { name: 'Vietnam', nights: '6N/7D', thumb: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=120&q=80' },
    { name: 'Dubai', nights: '4N/5D', thumb: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=120&q=80' },
    { name: 'Singapore', nights: '4N/5D', thumb: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=120&q=80' },
  ];

  travelStyles = [
    { name: 'Luxury Travel', thumb: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=120&q=80' },
    { name: 'Adventure Tours', thumb: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=120&q=80' },
    { name: 'Family Trips', thumb: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=120&q=80' },
    { name: 'Honeymoon Packages', thumb: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=120&q=80' },
    { name: 'Group Tours', thumb: 'https://images.unsplash.com/photo-1527004013197-933b27eoeb7?w=120&q=80' },
  ];

  // ── Packages ───────────────────────────────────────────────────────
  packages = [
    { label: 'All Packages', tag: 'Popular', desc: 'Curated trips for all budgets', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&q=85' },
    { label: 'Budget Trips', tag: 'Value', desc: 'More travel, less spend', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500&q=85' },
    { label: 'Luxury Escapes', tag: '5★', desc: 'Uncompromising comfort & style', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=85' },
    { label: 'Group Tours', tag: 'Social', desc: 'Travel with like-minded explorers', image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=500&q=85' },
    { label: 'Weekend Getaways', tag: 'Quick', desc: 'Recharge in just 2–3 days', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500&q=85' },
    { label: 'Family Holidays', tag: 'Kids ♥', desc: 'Safe, fun & unforgettable for all ages', image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=500&q=85' },
  ];

  // ── Honeymoon ──────────────────────────────────────────────────────
  honeymoonDestinations = [
    { label: 'Maldives Honeymoon', nights: '4N/5D', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=85' },
    { label: 'Bali Romance', nights: '5N/6D', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=85' },
    { label: 'Kashmir Dreams', nights: '5N/6D', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&q=85' },
    { label: 'Europe Escapes', nights: '7N/8D', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&q=85' },
    { label: 'Kerala Backwaters', nights: '3N/4D', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=85' },
  ];

  // ── International Regions ──────────────────────────────────────────
  internationalRegions = [
    { label: 'Southeast Asia', count: 18, image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=400&q=85' },
    { label: 'Europe', count: 24, image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&q=85' },
    { label: 'Middle East', count: 10, image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=85' },
    { label: 'Far East', count: 12, image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&q=85' },
    { label: 'USA & Canada', count: 8, image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=400&q=85' },
  ];

  // ── Corporate ─────────────────────────────────────────────────────
  corporateOptions = [
    { label: 'MICE Solutions', desc: 'Meetings, incentives, conferences & exhibitions', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&q=85' },
    { label: 'Team Outings', desc: 'Build team spirit with curated experiences', image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=500&q=85' },
    { label: 'Conference Tours', desc: 'Blend business with leisure destinations', image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=500&q=85' },
    { label: 'Incentive Travel', desc: 'Reward your top performers in style', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=85' },
  ];

  corpStats = [
    { value: '500+', label: 'Corporate Clients', icon: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=60&q=80' },
    { value: '98%', label: 'Client Satisfaction', icon: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=60&q=80' },
    { value: '15+', label: 'Years of Experience', icon: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=60&q=80' },
  ];

  // ── Lifecycle ─────────────────────────────────────────────────────
  @HostListener('window:scroll')
  onScroll() { this.isScrolled.set(window.scrollY > 20); }

  /**
   * Called when the mouse enters a nav item or a mega panel.
   * Cancels any pending close timer so the menu stays visible.
   */
  openMenu(key: string) {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
    this.activeMenu.set(key);
  }

  /**
   * Called when the mouse leaves the nav <ul> or a mega panel.
   * Uses a short delay (150ms) so the cursor has time to travel
   * from the nav link into the panel without the menu disappearing.
   */
  closeMenu() {
    this.closeTimer = setTimeout(() => {
      this.activeMenu.set(null);
      this.closeTimer = null;
    }, 150);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
    document.body.style.overflow = this.isMobileMenuOpen() ? 'hidden' : '';
  }

  toggleSearch() { this.isSearchOpen.update(v => !v); }

  toggleMobileAccordion(key: string) {
    this.activeMobileAccordion.update(v => v === key ? null : key);
  }

  // Clean up the timer if the component is destroyed while it's running.
  ngOnDestroy() {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
    }
  }
}