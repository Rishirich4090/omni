import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <!-- Shared Layout for OmniVision -->
    <div class="min-h-screen relative overflow-hidden bg-white font-afacad">
      <!-- Gradient Background -->
      <div class="absolute inset-0 bg-omni-gradient opacity-90"></div>
      
      <!-- Background Image/Eye - positioned to not interfere with content -->
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/c5f563da2136862ad02d4a6614bcb852a6b9c1d0?width=3200" 
          alt="Vision Eye" 
          class="w-auto h-full max-w-none opacity-40 object-cover"
        />
      </div>

      <!-- Header Navigation -->
      <header class="relative z-20 p-6 md:p-8 lg:p-10">
        <nav class="flex items-center justify-between max-w-7xl mx-auto">
          <!-- Logo -->
          <div class="flex items-center">
            <a routerLink="/" class="flex items-center space-x-3 group">
              <div class="w-8 h-8 bg-omni-blue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <div class="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span class="text-black font-semibold text-lg hidden sm:block">OmniVision</span>
            </a>
          </div>
          
          <!-- Mobile menu button -->
          <button class="md:hidden text-black">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          
          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-2">
            <a 
              routerLink="/" 
              routerLinkActive="bg-black/10 text-omni-dark-blue font-semibold"
              [routerLinkActiveOptions]="{exact: true}"
              class="text-black hover:text-omni-blue transition-colors font-medium px-4 py-2 rounded-full">
              Home
            </a>
            <a 
              routerLink="/products" 
              routerLinkActive="bg-black/10 text-omni-dark-blue font-semibold"
              class="text-black hover:text-omni-blue transition-colors font-medium px-4 py-2 rounded-full">
              Products
            </a>
            <a 
              routerLink="/about" 
              routerLinkActive="bg-black/10 text-omni-dark-blue font-semibold"
              class="text-black hover:text-omni-blue transition-colors font-medium px-4 py-2 rounded-full">
              About
            </a>
            <a 
              routerLink="/contact" 
              routerLinkActive="bg-omni-light text-omni-blue"
              class="bg-white text-omni-blue px-6 py-3 rounded-full font-semibold hover:bg-omni-light transition-colors ml-4">
              Contact us
            </a>
          </div>
        </nav>
      </header>

      <!-- Page Content -->
      <main class="relative z-10">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: []
})
export class LayoutComponent {}
