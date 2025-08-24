import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  template: `
    <!-- Products Page Content -->
    <div class="min-h-[calc(100vh-200px)] max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-12 md:py-16">
      
      <!-- Page Header -->
      <div class="text-center mb-16 md:mb-20">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-medium text-black mb-6 leading-tight">
          Our <span class="text-omni-dark-blue">Products</span>
        </h1>
        <p class="text-xl md:text-2xl text-black/80 max-w-3xl mx-auto leading-relaxed">
          Cutting-edge AI vision solutions that transform how you see and understand the world
        </p>
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-16">
        
        <!-- Product 1: Vision Analytics -->
        <div class="bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-xl hover:bg-white/20 transition-all duration-300">
          <div class="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
            <svg class="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-semibold text-black mb-4">Vision Analytics</h3>
          <p class="text-black/80 leading-relaxed mb-6">
            Real-time image and video analysis with advanced pattern recognition and behavioral insights.
          </p>
          <div class="flex items-center text-black/60 text-sm">
            <span class="bg-omni-blue/20 px-3 py-1 rounded-full mr-2">Real-time</span>
            <span class="bg-omni-blue/20 px-3 py-1 rounded-full">AI-powered</span>
          </div>
        </div>

        <!-- Product 2: Object Detection -->
        <div class="bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-xl hover:bg-white/20 transition-all duration-300">
          <div class="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
            <svg class="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-semibold text-black mb-4">Object Detection</h3>
          <p class="text-black/80 leading-relaxed mb-6">
            Identify and classify objects with precision using our advanced neural network technology.
          </p>
          <div class="flex items-center text-black/60 text-sm">
            <span class="bg-omni-blue/20 px-3 py-1 rounded-full mr-2">99.9% Accurate</span>
            <span class="bg-omni-blue/20 px-3 py-1 rounded-full">Multi-class</span>
          </div>
        </div>

        <!-- Product 3: Facial Recognition -->
        <div class="bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-xl hover:bg-white/20 transition-all duration-300">
          <div class="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
            <svg class="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-semibold text-black mb-4">Facial Recognition</h3>
          <p class="text-black/80 leading-relaxed mb-6">
            Secure and reliable face detection and recognition for authentication and security applications.
          </p>
          <div class="flex items-center text-black/60 text-sm">
            <span class="bg-omni-blue/20 px-3 py-1 rounded-full mr-2">Secure</span>
            <span class="bg-omni-blue/20 px-3 py-1 rounded-full">Biometric</span>
          </div>
        </div>

        <!-- Product 4: Scene Understanding -->
        <div class="bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-xl hover:bg-white/20 transition-all duration-300">
          <div class="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
            <svg class="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-semibold text-black mb-4">Scene Understanding</h3>
          <p class="text-black/80 leading-relaxed mb-6">
            Comprehensive scene analysis and contextual understanding for intelligent automation.
          </p>
          <div class="flex items-center text-black/60 text-sm">
            <span class="bg-omni-blue/20 px-3 py-1 rounded-full mr-2">Context-aware</span>
            <span class="bg-omni-blue/20 px-3 py-1 rounded-full">Smart</span>
          </div>
        </div>

        <!-- Product 5: OCR Technology -->
        <div class="bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-xl hover:bg-white/20 transition-all duration-300">
          <div class="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
            <svg class="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-semibold text-black mb-4">OCR Technology</h3>
          <p class="text-black/80 leading-relaxed mb-6">
            Extract and digitize text from images and documents with industry-leading accuracy.
          </p>
          <div class="flex items-center text-black/60 text-sm">
            <span class="bg-omni-blue/20 px-3 py-1 rounded-full mr-2">Multi-language</span>
            <span class="bg-omni-blue/20 px-3 py-1 rounded-full">Fast</span>
          </div>
        </div>

        <!-- Product 6: Edge Computing -->
        <div class="bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-xl hover:bg-white/20 transition-all duration-300">
          <div class="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
            <svg class="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-semibold text-black mb-4">Edge Computing</h3>
          <p class="text-black/80 leading-relaxed mb-6">
            Deploy AI vision capabilities directly on edge devices for reduced latency and enhanced privacy.
          </p>
          <div class="flex items-center text-black/60 text-sm">
            <span class="bg-omni-blue/20 px-3 py-1 rounded-full mr-2">Low-latency</span>
            <span class="bg-omni-blue/20 px-3 py-1 rounded-full">Private</span>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center">
        <h2 class="text-3xl md:text-4xl font-medium text-black mb-6">
          Ready to transform your vision?
        </h2>
        <p class="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
          Get started with our comprehensive AI vision platform and unlock new possibilities for your business.
        </p>
        <button class="bg-white text-omni-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-omni-light transition-colors shadow-xl">
          Start Free Trial
        </button>
      </div>
    </div>
  `,
  styles: []
})
export class ProductsComponent {}
