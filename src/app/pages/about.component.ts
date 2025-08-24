import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <!-- About Page Content -->
    <div class="min-h-[calc(100vh-200px)] max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-12 md:py-16">
      
      <!-- Page Header -->
      <div class="text-center mb-16 md:mb-20">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-medium text-black mb-6 leading-tight">
          About <span class="text-omni-dark-blue">OmniVision</span>
        </h1>
        <p class="text-xl md:text-2xl text-black/80 max-w-3xl mx-auto leading-relaxed">
          Pioneering the future of artificial intelligence and computer vision technology
        </p>
      </div>

      <!-- Mission Section -->
      <div class="mb-20">
        <div class="bg-white/15 backdrop-blur-md border border-white/30 rounded-3xl p-8 md:p-12 shadow-xl">
          <h2 class="text-3xl md:text-4xl font-semibold text-black mb-6">Our Mission</h2>
          <p class="text-lg md:text-xl text-black/80 leading-relaxed mb-6">
            At OmniVision, we believe that artificial intelligence should enhance human capabilities, not replace them. 
            Our mission is to develop cutting-edge computer vision technologies that empower businesses and individuals 
            to see, understand, and interact with the world in entirely new ways.
          </p>
          <p class="text-lg text-black/70 leading-relaxed">
            We're committed to making AI vision technology accessible, reliable, and transformative for industries 
            ranging from healthcare and security to retail and manufacturing.
          </p>
        </div>
      </div>

      <!-- Values Grid -->
      <div class="mb-20">
        <h2 class="text-3xl md:text-4xl font-semibold text-black text-center mb-12">Our Values</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Value 1: Innovation -->
          <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center">
            <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg class="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-black mb-4">Innovation</h3>
            <p class="text-black/70 leading-relaxed">
              Continuously pushing the boundaries of what's possible with AI and computer vision technology.
            </p>
          </div>

          <!-- Value 2: Accuracy -->
          <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center">
            <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg class="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-black mb-4">Precision</h3>
            <p class="text-black/70 leading-relaxed">
              Delivering industry-leading accuracy and reliability in every solution we create.
            </p>
          </div>

          <!-- Value 3: Ethics -->
          <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center">
            <div class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg class="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-black mb-4">Ethics</h3>
            <p class="text-black/70 leading-relaxed">
              Maintaining the highest standards of privacy, security, and responsible AI development.
            </p>
          </div>
        </div>
      </div>

      <!-- Team Section -->
      <div class="mb-20">
        <h2 class="text-3xl md:text-4xl font-semibold text-black text-center mb-12">Leadership Team</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Team Member 1 -->
          <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300">
            <div class="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-black text-2xl font-bold shadow-lg">
              DS
            </div>
            <h3 class="text-xl font-semibold text-black mb-2">Dr. Sarah Chen</h3>
            <p class="text-omni-blue font-medium mb-3">CEO & Co-founder</p>
            <p class="text-black/70 text-sm leading-relaxed">
              Former Google AI researcher with 15+ years in computer vision and machine learning.
            </p>
          </div>

          <!-- Team Member 2 -->
          <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300">
            <div class="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-black text-2xl font-bold shadow-lg">
              MJ
            </div>
            <h3 class="text-xl font-semibold text-black mb-2">Michael Johnson</h3>
            <p class="text-omni-blue font-medium mb-3">CTO & Co-founder</p>
            <p class="text-black/70 text-sm leading-relaxed">
              Serial entrepreneur and AI expert, previously built and sold two successful startups.
            </p>
          </div>

          <!-- Team Member 3 -->
          <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300">
            <div class="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mx-auto mb-6 flex items-center justify-center text-black text-2xl font-bold shadow-lg">
              AP
            </div>
            <h3 class="text-xl font-semibold text-black mb-2">Dr. Aisha Patel</h3>
            <p class="text-omni-blue font-medium mb-3">Head of Research</p>
            <p class="text-black/70 text-sm leading-relaxed">
              PhD in Computer Vision from MIT, published 50+ papers in top-tier AI conferences.
            </p>
          </div>
        </div>
      </div>

      <!-- Statistics -->
      <div class="mb-20">
        <div class="bg-white/15 backdrop-blur-md border border-white/30 rounded-3xl p-8 md:p-12 shadow-xl">
          <h2 class="text-3xl md:text-4xl font-semibold text-black text-center mb-12">By the Numbers</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold text-black mb-2">50M+</div>
              <div class="text-black/70 text-sm">Images Processed</div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold text-black mb-2">99.9%</div>
              <div class="text-black/70 text-sm">Accuracy Rate</div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold text-black mb-2">500+</div>
              <div class="text-black/70 text-sm">Enterprise Clients</div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold text-black mb-2">24/7</div>
              <div class="text-black/70 text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center">
        <h2 class="text-3xl md:text-4xl font-medium text-black mb-6">
          Join the Vision Revolution
        </h2>
        <p class="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
          Be part of the future where AI enhances human potential and transforms how we interact with technology.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-white text-omni-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-omni-light transition-colors shadow-xl">
            Explore Careers
          </button>
          <button class="border-2 border-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-omni-blue transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class AboutComponent {}
