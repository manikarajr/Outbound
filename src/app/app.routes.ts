import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home';
import { DestinationsPage } from './pages/destinations/destinations-page';
import { PackagesPage } from './pages/packages/packages-page';
import { HoneymoonPage } from './pages/honeymoon/honeymoon-page';
import { InternationalPage } from './pages/international/international-page';
import { CorporatePage } from './pages/corporate/corporate-page';
import { PackageDetailPage } from './pages/package-detail/package-detail-page';
import { AboutPage } from './pages/about/about-page';
import { GalleryPage } from './pages/gallery/gallery-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'destinations', component: DestinationsPage },
  { path: 'packages', component: PackagesPage },
  { path: 'honeymoon', component: HoneymoonPage },
  { path: 'international', component: InternationalPage },
  { path: 'corporate', component: CorporatePage },
  { path: 'about', component: AboutPage },
  { path: 'gallery', component: GalleryPage },
  { path: 'package-detail/:category/:id', component: PackageDetailPage },
  { path: '**', redirectTo: '' }
];
