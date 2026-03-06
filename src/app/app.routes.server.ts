import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'package-detail/:category/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return [
        // packages category - IDs 1 to 7
        { category: 'packages', id: '1' },
        { category: 'packages', id: '2' },
        { category: 'packages', id: '3' },
        { category: 'packages', id: '4' },
        { category: 'packages', id: '5' },
        { category: 'packages', id: '6' },
        { category: 'packages', id: '7' },
        // honeymoon category - IDs 1 to 6
        { category: 'honeymoon', id: '1' },
        { category: 'honeymoon', id: '2' },
        { category: 'honeymoon', id: '3' },
        { category: 'honeymoon', id: '4' },
        { category: 'honeymoon', id: '5' },
        { category: 'honeymoon', id: '6' },
        // international category - IDs 1 to 6
        { category: 'international', id: '1' },
        { category: 'international', id: '2' },
        { category: 'international', id: '3' },
        { category: 'international', id: '4' },
        { category: 'international', id: '5' },
        { category: 'international', id: '6' },
        // destinations-domestic category - IDs 1 to 6
        { category: 'destinations-domestic', id: '1' },
        { category: 'destinations-domestic', id: '2' },
        { category: 'destinations-domestic', id: '3' },
        { category: 'destinations-domestic', id: '4' },
        { category: 'destinations-domestic', id: '5' },
        { category: 'destinations-domestic', id: '6' },
        // destinations-international category - IDs 1 to 6
        { category: 'destinations-international', id: '1' },
        { category: 'destinations-international', id: '2' },
        { category: 'destinations-international', id: '3' },
        { category: 'destinations-international', id: '4' },
        { category: 'destinations-international', id: '5' },
        { category: 'destinations-international', id: '6' },
        // corporate category - IDs 1 to 4
        { category: 'corporate', id: '1' },
        { category: 'corporate', id: '2' },
        { category: 'corporate', id: '3' },
        { category: 'corporate', id: '4' },
      ];
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
