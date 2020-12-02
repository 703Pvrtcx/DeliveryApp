import { TabsPage } from './page/menu/tabs/tabs.page';
import { SidemenuPage } from './page/menu/sidemenu/sidemenu.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'sidemenu/tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'item-list',
    loadChildren: () => import('./page/Store/item-list/item-list.module').then( m => m.ItemListPageModule)
  },
  {
    path: 'item-view',
    loadChildren: () => import('./page/Store/item-view/item-view.module').then( m => m.ItemViewPageModule)
  },
  {
    path: 'item-detail',
    loadChildren: () => import('./page/Store/item-detail/item-detail.module').then( m => m.ItemDetailPageModule)
  },
  {
    path: 'item-cart',
    loadChildren: () => import('./page/Store/item-cart/item-cart.module').then( m => m.ItemCartPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./page/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'leaflet',
    loadChildren: () => import('./page/Map-Location/leaflet/leaflet.module').then( m => m.LeafletPageModule)
  },
  {
    path: 'maps',
    loadChildren: () => import('./page/Map-Location/maps/maps.module').then( m => m.MapsPageModule)
  },
  {
    path: 'sidemenu', component: SidemenuPage, children: [
      {
        path: 'tabs',
        component: TabsPage,
        children: [

          {
            path: 'home',
            loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
          },
          {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
          },
    
          {
            path: 'profile',
            loadChildren: () => import('./page/profile/profile.module').then( m => m.ProfilePageModule)
          },
          {
            path: 'contact',
            loadChildren: () => import('./page/contact/contact.module').then( m => m.ContactPageModule)
          },
          {
            path: 'leaflet',
            loadChildren: () => import('./page/Map-Location/leaflet/leaflet.module').then( m => m.LeafletPageModule)
          },
          {
            path: 'maps',
            loadChildren: () => import('./page/Map-Location/maps/maps.module').then( m => m.MapsPageModule)
          },
          {
            path: 'detail',
            loadChildren: () => import('./page/detail/detail.module').then( m => m.DetailPageModule)
          },

        ]
      },
      
    ]
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
