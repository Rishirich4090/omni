import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <!-- Home Page Content -->
    <div class="flex flex-col min-h-[calc(100vh-200px)] max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
      
      <!-- Hero Section -->
      <div class="flex-1 flex flex-col justify-center py-12 md:py-16">
        <!-- Hero Title with smaller font and better spacing -->
        <div class="mb-20 md:mb-24 lg:mb-28">
          <div class="text-left">
            <h1 class="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[0.9] tracking-tight">
              <div class="text-omni-blue mb-3 md:mb-4">Omni</div>
              <div class="text-black">Vision</div>
            </h1>
          </div>
        </div>

        <!-- Performance Metrics with better positioning -->
        <div class="mb-20 md:mb-24 lg:mb-28">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-3xl">
            <!-- Speed Metric -->
            <div class="bg-white/20 backdrop-blur-md border border-white/40 rounded-2xl p-6 md:p-8 shadow-xl hover:bg-white/25 transition-all duration-300">
              <div class="flex items-start justify-between mb-6">
                <div>
                  <div class="text-4xl md:text-5xl font-bold text-black mb-2">0.02s</div>
                  <div class="text-black/90 text-lg font-medium">speed</div>
                </div>
                <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
              </div>
              <div class="text-black/80 text-sm leading-relaxed">
                Lightning-fast processing for instant, real-time insights
              </div>
            </div>

            <!-- Accuracy Metric -->
            <div class="bg-white/20 backdrop-blur-md border border-white/40 rounded-2xl p-6 md:p-8 shadow-xl hover:bg-white/25 transition-all duration-300">
              <div class="flex items-start justify-between mb-6">
                <div>
                  <div class="text-4xl md:text-5xl font-bold text-black mb-2">99.9%</div>
                  <div class="text-black/90 text-lg font-medium">accuracy</div>
                </div>
                <div class="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
              </div>
              <div class="text-black/80 text-sm leading-relaxed">
                Advanced AI algorithms ensure precise recognition and analysis
              </div>
            </div>
          </div>
        </div>

        <!-- Tagline -->
        <div class="mb-12 md:mb-16">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-medium text-black leading-tight max-w-3xl">
            The Intelligence Behind Vision
          </h2>
        </div>

        <!-- Call to Action Arrow -->
        <div class="flex items-center">
          <button class="group flex items-center space-x-4 text-black hover:text-omni-blue transition-all duration-300">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/ccdb1a1b012e24f777bdf35704d2c91972c11607?width=40" 
              alt="Explore"
              class="w-5 h-6 group-hover:translate-x-2 transition-transform duration-300"
            />
            <span class="text-xl font-medium">Explore the future</span>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class HomeComponent {}
