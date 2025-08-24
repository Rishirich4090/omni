import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <!-- Contact Page Content -->
    <div class="min-h-[calc(100vh-200px)] max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-12 md:py-16">
      
      <!-- Page Header -->
      <div class="text-center mb-16 md:mb-20">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-medium text-black mb-6 leading-tight">
          Contact <span class="text-omni-dark-blue">Us</span>
        </h1>
        <p class="text-xl md:text-2xl text-black/80 max-w-3xl mx-auto leading-relaxed">
          Ready to transform your vision? Let's discuss how OmniVision can help your business
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        <!-- Contact Form -->
        <div class="bg-white/15 backdrop-blur-md border border-white/30 rounded-3xl p-8 md:p-10 shadow-xl">
          <h2 class="text-2xl md:text-3xl font-semibold text-black mb-8">Get in Touch</h2>
          
          <form class="space-y-6">
            <!-- Name Input -->
            <div>
              <label for="name" class="block text-black/90 text-sm font-medium mb-2">Full Name</label>
              <input 
                type="text" 
                id="name"
                name="name"
                [(ngModel)]="formData.name"
                class="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-black placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                placeholder="Enter your full name"
              />
            </div>

            <!-- Email Input -->
            <div>
              <label for="email" class="block text-black/90 text-sm font-medium mb-2">Email Address</label>
              <input 
                type="email" 
                id="email"
                name="email"
                [(ngModel)]="formData.email"
                class="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-black placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                placeholder="Enter your email"
              />
            </div>

            <!-- Company Input -->
            <div>
              <label for="company" class="block text-black/90 text-sm font-medium mb-2">Company</label>
              <input 
                type="text" 
                id="company"
                name="company"
                [(ngModel)]="formData.company"
                class="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-black placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                placeholder="Your company name"
              />
            </div>

            <!-- Subject Select -->
            <div>
              <label for="subject" class="block text-black/90 text-sm font-medium mb-2">Subject</label>
              <select 
                id="subject"
                name="subject"
                [(ngModel)]="formData.subject"
                class="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
              >
                <option value="" class="bg-omni-blue text-black">Select a topic</option>
                <option value="general" class="bg-omni-blue text-black">General Inquiry</option>
                <option value="products" class="bg-omni-blue text-black">Product Information</option>
                <option value="pricing" class="bg-omni-blue text-black">Pricing & Plans</option>
                <option value="technical" class="bg-omni-blue text-black">Technical Support</option>
                <option value="partnership" class="bg-omni-blue text-black">Partnership</option>
              </select>
            </div>

            <!-- Message Textarea -->
            <div>
              <label for="message" class="block text-black/90 text-sm font-medium mb-2">Message</label>
              <textarea 
                id="message"
                name="message"
                [(ngModel)]="formData.message"
                rows="6"
                class="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-black placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Tell us about your project or requirements..."
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button 
              type="submit"
              (click)="onSubmit($event)"
              class="w-full bg-white text-omni-blue py-4 rounded-xl font-semibold text-lg hover:bg-omni-light transition-colors shadow-xl"
            >
              Send Message
            </button>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="space-y-8">
          
          <!-- Contact Cards -->
          <div class="bg-white/15 backdrop-blur-md border border-white/30 rounded-3xl p-8 md:p-10 shadow-xl">
            <h2 class="text-2xl md:text-3xl font-semibold text-black mb-8">Contact Information</h2>
            
            <div class="space-y-6">
              <!-- Email -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-black font-semibold mb-1">Email</h3>
                  <p class="text-black/70">contact@omnivision.ai</p>
                  <p class="text-black/70">support@omnivision.ai</p>
                </div>
              </div>

              <!-- Phone -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-black font-semibold mb-1">Phone</h3>
                  <p class="text-black/70">+1 (555) 123-4567</p>
                  <p class="text-black/70 text-sm">Mon-Fri, 9:00 AM - 6:00 PM PST</p>
                </div>
              </div>

              <!-- Address -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-black font-semibold mb-1">Office</h3>
                  <p class="text-black/70">123 Innovation Drive</p>
                  <p class="text-black/70">San Francisco, CA 94107</p>
                </div>
              </div>
            </div>
          </div>

          <!-- FAQ Section -->
          <div class="bg-white/15 backdrop-blur-md border border-white/30 rounded-3xl p-8 md:p-10 shadow-xl">
            <h2 class="text-2xl font-semibold text-black mb-6">Quick Answers</h2>
            
            <div class="space-y-4">
              <div class="border-b border-white/20 pb-4">
                <h3 class="text-black font-medium mb-2">How quickly do you respond?</h3>
                <p class="text-black/70 text-sm">We typically respond within 2-4 hours during business hours.</p>
              </div>
              
              <div class="border-b border-white/20 pb-4">
                <h3 class="text-black font-medium mb-2">Do you offer demos?</h3>
                <p class="text-black/70 text-sm">Yes! We provide personalized demos tailored to your use case.</p>
              </div>
              
              <div>
                <h3 class="text-black font-medium mb-2">Is there a free trial?</h3>
                <p class="text-black/70 text-sm">We offer a 14-day free trial with full access to our platform.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  };

  onSubmit(event: Event) {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', this.formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    
    // Reset form
    this.formData = {
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    };
  }
}
