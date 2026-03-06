import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery-page.html',
})
export class GalleryPage {
  images = [
    { src: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=85', label: 'Kashmir' },
    { src: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=85', label: 'Maldives' },
    { src: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=85', label: 'Bali' },
    { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85', label: 'Kerala' },
    { src: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&q=85', label: 'Thailand' },
    { src: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=85', label: 'Dubai' },
    { src: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=85', label: 'Europe' },
    { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=85', label: 'Himachal' },
    { src: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=85', label: 'Goa' },
    { src: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=85', label: 'Rajasthan' },
    { src: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=85', label: 'Singapore' },
    { src: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=600&q=85', label: 'Vietnam' },
  ];
}
