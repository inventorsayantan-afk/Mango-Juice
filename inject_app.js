const fs = require('fs');

const TESTIMONIALS = [
  { id: 1, name: "Vikram Mehta", role: "Connoisseur", content: "The richness of the Alphonso mango is captured perfectly. It's like eating a fresh mango from Ratnagiri.", rating: 5 },
  { id: 2, name: "Sarah Jenkins", role: "Food Critic", content: "Unequivocally the best mango nectar I've ever tasted. The texture is velvety and divine.", rating: 5 },
  { id: 3, name: "Anita Rao", role: "Lifestyle Blogger", content: "Maharaja's Reserve isn't just a drink; it's an experience. The packaging is as elegant as the flavor.", rating: 5 },
  { id: 4, name: "David Chen", role: "Sommelier", content: "A surprising complexity for a fruit nectar. The balance of acidity and sweetness is masterfully handled.", rating: 5 },
  { id: 5, name: "Elena Rodriguez", role: "Chef de Cuisine", content: "We use this in our signature desserts. The consistency is unmatched by any other nectar on the market.", rating: 5 },
  { id: 6, name: "Michael Smith", role: "Wellness Coach", content: "The purity is what stands out. You can tell there's no artificial interference. Pure golden sunshine.", rating: 5 },
  { id: 7, name: "Priya Sharma", role: "Hospitality Directer", content: "Our VVIP guests specifically request Maharaja's Reserve. It's the gold standard of luxury beverages.", rating: 5 },
  { id: 8, name: "Hiroshi Tanaka", role: "Import Specialist", content: "The standard of single-origin harvesting here is world-class. A true boutique product from India.", rating: 5 },
  { id: 9, name: "Isabella Conti", role: "Travel Writer", content: "Every sip takes me back to the coast of Maharashtra. An authentic, heritage-rich flavor profile.", rating: 5 },
  { id: 10, name: "Lucas Wright", role: "Organic Enthusiast", content: "Finally, a luxury product that respects the fruit as much as the consumer. Simply spectacular.", rating: 5 },
  { id: 11, name: "Sophia Müller", role: "Gourmet Scout", content: "The pulpy texture is incredible. It feels substantial and premium, unlike filtered commercial juices.", rating: 5 },
  { id: 12, name: "Ahmed Al-Fayed", role: "Private Collector", content: "A regular feature at our family gatherings. It pairs beautifully with both spicy and savory cuisines.", rating: 5 }
];

const renderCard = (t) => `
<div class="w-[350px] flex-shrink-0 bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-[32px] hover:bg-white/10 transition-colors group">
  <div class="flex gap-1 mb-4">
    <span class="material-symbols-outlined text-[16px] text-mango fill">star</span>
    <span class="material-symbols-outlined text-[16px] text-mango fill">star</span>
    <span class="material-symbols-outlined text-[16px] text-mango fill">star</span>
    <span class="material-symbols-outlined text-[16px] text-mango fill">star</span>
    <span class="material-symbols-outlined text-[16px] text-mango fill">star</span>
  </div>
  <p class="text-cream/80 text-lg leading-relaxed mb-6 italic font-sans">"${t.content}"</p>
  <div class="flex items-center gap-4">
    <div class="w-10 h-10 rounded-full bg-mango/20 flex items-center justify-center text-mango font-bold text-xs border border-mango/30 font-display">
      ${t.name.charAt(0)}
    </div>
    <div>
      <h4 class="font-bold text-cream uppercase tracking-widest text-xs font-display">${t.name}</h4>
      <p class="text-cream/40 text-[10px] uppercase font-bold tracking-tighter font-sans">${t.role}</p>
    </div>
  </div>
</div>`;

const row1 = TESTIMONIALS.slice(0, 6);
const row2 = TESTIMONIALS.slice(6, 12);
// Duplicate for infinite scroll
const row1HTML = [...row1, ...row1].map(renderCard).join('');
const row2HTML = [...row2, ...row2].map(renderCard).join('');

const injectedHTML = `
<!-- Injected Content from maharaja's-reserve -->
<div class="bg-mango text-ink font-sans">
  
  <!-- Certifications Section -->
  <section class="py-16 bg-cream border-y border-ink/5">
    <div class="max-w-7xl mx-auto px-6">
      <p class="text-center text-xs font-bold uppercase tracking-[0.3em] text-ink/40 mb-12 font-display">Our Quality Benchmarks</p>
      <div class="flex flex-wrap justify-center gap-8 md:gap-16">
        <div class="flex items-center gap-3 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
          <span class="material-symbols-outlined text-[20px] text-mango-dark">check_circle</span>
          <span class="font-display font-bold text-sm tracking-tighter">Organic Certified</span>
        </div>
        <div class="flex items-center gap-3 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
          <span class="material-symbols-outlined text-[20px] text-mango-dark">check_circle</span>
          <span class="font-display font-bold text-sm tracking-tighter">Global GAP</span>
        </div>
        <div class="flex items-center gap-3 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
          <span class="material-symbols-outlined text-[20px] text-mango-dark">check_circle</span>
          <span class="font-display font-bold text-sm tracking-tighter">ISO 22000</span>
        </div>
        <div class="flex items-center gap-3 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
          <span class="material-symbols-outlined text-[20px] text-mango-dark">check_circle</span>
          <span class="font-display font-bold text-sm tracking-tighter">Fair Trade</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Product Details -->
  <section id="details" class="py-24 bg-cream">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-20">
        <h2 class="text-4xl md:text-5xl font-black text-ink mb-4 uppercase font-display">Naturally Refined</h2>
        <div class="w-24 h-1.5 bg-mango mx-auto rounded-full"></div>
      </div>
      <div class="grid lg:grid-cols-2 gap-20 items-center">
        <div class="order-2 lg:order-1">
           <img src="https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?q=80&w=1000&auto=format&fit=crop" alt="Premium Alphonso Mango Nectar" class="w-full max-w-md mx-auto rounded-3xl shadow-2xl" />
        </div>
        <div class="order-1 lg:order-2 space-y-12">
          <div>
            <h3 class="text-2xl font-bold mb-4 flex items-center gap-2 font-display">
              <span class="w-8 h-8 rounded-lg bg-mango flex items-center justify-center text-xs text-white">01</span>
              Single-Origin Alphonso
            </h3>
            <p class="text-ink/70 leading-relaxed pl-10 font-sans">
              Grown in the distinct soil of Ratnagiri, our mangoes benefit from the salt-tinged sea breeze, resulting in a flavor profile that is creamy, intense, and naturally sweet.
            </p>
          </div>
          <div>
            <h3 class="text-2xl font-bold mb-4 flex items-center gap-2 font-display">
              <span class="w-8 h-8 rounded-lg bg-mango flex items-center justify-center text-xs text-white">02</span>
              No Added Preservatives
            </h3>
            <p class="text-ink/70 leading-relaxed pl-10 font-sans">
              Honesty in every bottle. We don't add colors, artificial aromas, or chemical stabilizers. What you taste is the pure essence of the fruit.
            </p>
          </div>
          <div>
            <h3 class="text-2xl font-bold mb-4 flex items-center gap-2 font-display">
              <span class="w-8 h-8 rounded-lg bg-mango flex items-center justify-center text-xs text-white">03</span>
              Small Batch Perfection
            </h3>
            <p class="text-ink/70 leading-relaxed pl-10 font-sans">
              Produced in limited quantities during the peak season to ensure that every bottle meets our stringent standards for viscosity and Brix levels.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- How Its Made -->
  <section class="py-24 bg-mango relative">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white/10 backdrop-blur-md p-10 rounded-[40px] border border-white/20 text-center hover:-translate-y-2 transition-transform duration-300">
          <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-mango mx-auto mb-6 shadow-xl">
            <span class="material-symbols-outlined text-[24px]">eco</span>
          </div>
          <h3 class="text-xl font-bold mb-4 text-ink uppercase tracking-tight font-display">Orchard Selection</h3>
          <p class="text-ink/70 leading-relaxed font-sans">We source only from century-old orchards in the heart of Devgad and Ratnagiri.</p>
        </div>
        <div class="bg-white/10 backdrop-blur-md p-10 rounded-[40px] border border-white/20 text-center hover:-translate-y-2 transition-transform duration-300">
          <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-mango mx-auto mb-6 shadow-xl">
            <span class="material-symbols-outlined text-[24px]">star</span>
          </div>
          <h3 class="text-xl font-bold mb-4 text-ink uppercase tracking-tight font-display">Peak Harvest</h3>
          <p class="text-ink/70 leading-relaxed font-sans">Mangoes are hand-picked at the precise moment of sun-ripened perfection.</p>
        </div>
        <div class="bg-white/10 backdrop-blur-md p-10 rounded-[40px] border border-white/20 text-center hover:-translate-y-2 transition-transform duration-300">
          <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-mango mx-auto mb-6 shadow-xl">
            <span class="material-symbols-outlined text-[24px]">water_drop</span>
          </div>
          <h3 class="text-xl font-bold mb-4 text-ink uppercase tracking-tight font-display">Cold-Pressed Purity</h3>
          <p class="text-ink/70 leading-relaxed font-sans">Extracted using traditional methods that preserve the delicate fiber and essential oils.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonial Wall -->
  <style>
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      display: flex;
      width: max-content;
      animation: marquee 30s linear infinite;
    }
    .animate-marquee-slow {
      display: flex;
      width: max-content;
      animation: marquee 40s linear infinite;
    }
    .pause-on-hover:hover .animate-marquee,
    .pause-on-hover:hover .animate-marquee-slow {
      animation-play-state: paused;
    }
  </style>
  <section id="reviews" class="py-24 bg-ink overflow-hidden border-y border-white/5 pause-on-hover">
    <div class="max-w-7xl mx-auto px-6 mb-16 text-center">
      <span class="text-mango font-bold uppercase tracking-[0.4em] text-xs mb-4 block font-display">The Wall of Praise</span>
      <h2 class="text-4xl md:text-5xl font-black text-cream uppercase tracking-tight font-display">Voices of the Reserve</h2>
    </div>
    
    <div class="flex flex-col gap-8 relative">
      <div class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ink to-transparent z-10 pointer-events-none"></div>
      <div class="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ink to-transparent z-10 pointer-events-none"></div>

      <!-- Marquee Row 1 -->
      <div class="animate-marquee gap-8 px-4">
        ${row1HTML}
      </div>
      
      <!-- Marquee Row 2 -->
      <div class="animate-marquee-slow gap-8 px-4" style="animation-direction: reverse;">
        ${row2HTML}
      </div>
    </div>
    
    <div class="mt-16 text-center">
      <p class="text-cream/30 text-sm font-medium font-sans">Hover to witness the heritage in motion</p>
    </div>
  </section>

  <!-- Footer -->
  <footer id="contact" class="bg-mango pt-24 pb-12 border-t border-white/20">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid md:grid-cols-4 gap-12 mb-20">
        <div class="col-span-2">
          <h2 class="text-4xl font-black text-ink mb-6 uppercase tracking-tighter font-display">Maharaja's Reserve</h2>
          <p class="text-ink/70 max-w-md mb-8 font-sans">
            Decades of heritage, bottled for the discerning palette. Maharaja's Reserve is the ultimate tribute to the king of fruits.
          </p>
          <div class="flex gap-4">
            <a href="#" class="w-10 h-10 rounded-full border border-ink/20 flex items-center justify-center hover:bg-ink hover:text-mango transition-colors"><span class="material-symbols-outlined text-[20px]">photo_camera</span></a>
            <a href="#" class="w-10 h-10 rounded-full border border-ink/20 flex items-center justify-center hover:bg-ink hover:text-mango transition-colors"><span class="material-symbols-outlined text-[20px]">thumb_up</span></a>
            <a href="#" class="w-10 h-10 rounded-full border border-ink/20 flex items-center justify-center hover:bg-ink hover:text-mango transition-colors"><span class="material-symbols-outlined text-[20px]">chat_bubble</span></a>
          </div>
        </div>
        <div>
          <h4 class="font-bold uppercase tracking-widest text-ink mb-6 font-display">Quick Links</h4>
          <ul class="space-y-4 text-ink/70 font-sans">
            <li><a href="#home" class="hover:text-ink transition-colors">Home</a></li>
            <li><a href="#details" class="hover:text-ink transition-colors">Product Details</a></li>
            <li><a href="#about" class="hover:text-ink transition-colors">About Us</a></li>
            <li><a href="#contact" class="hover:text-ink transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold uppercase tracking-widest text-ink mb-6 font-display">Inquiries</h4>
          <p class="text-ink/70 mb-4 font-sans">info@maharajasreserve.com</p>
          <p class="text-ink/70 font-sans">+91 022 555 0123</p>
          <p class="text-ink/70 mt-8 font-sans">Konkan Valley Orchards,<br />Ratnagiri, Maharashtra.</p>
        </div>
      </div>
      <div class="pt-8 border-t border-ink/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-ink/50 uppercase tracking-widest font-sans">
        <p>© 2024 Maharaja's Reserve. All Rights Reserved.</p>
        <div class="flex gap-8">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</div>
`;

const filePath = 'c:\\Users\\User\\OneDrive\\Desktop\\Mango Juice Product Website\\index.html';
let content = fs.readFileSync(filePath, 'utf8');

// We need to inject the HTML just before <script src="script.js"></script>
const scriptTagIdx = content.lastIndexOf('<script src="script.js"></script>');
if (scriptTagIdx !== -1) {
  content = content.substring(0, scriptTagIdx) + injectedHTML + '\n    ' + content.substring(scriptTagIdx);
} else {
  console.log('Script tag not found, appending to end of body.');
  const bodyIdx = content.lastIndexOf('</body>');
  content = content.substring(0, bodyIdx) + injectedHTML + '\n' + content.substring(bodyIdx);
}

// Update tailwind config colors and fonts
const tailwindColorsInsert = `
                        "mango": "#F8A408",
                        "mango-dark": "#D97706",
                        "mango-light": "#FCD34D",
                        "cream": "#FDF8F1",
                        "ink": "#1A1A1A",
`;
const colorsIdx = content.indexOf('"colors": {') + '"colors": {'.length;
content = content.substring(0, colorsIdx) + tailwindColorsInsert + content.substring(colorsIdx);

const tailwindFontsInsert = `
                        "sans": ['Open Sans', "ui-sans-serif", "system-ui"],
                        "display": ['Montserrat', "sans-serif"],
`;
const fontsIdx = content.indexOf('"fontFamily": {') + '"fontFamily": {'.length;
content = content.substring(0, fontsIdx) + tailwindFontsInsert + content.substring(fontsIdx);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Injected successfully.');
