const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');

// 1. Find a Store Section
const findStoreHtml = `
        <!-- Find a Store Section -->
        <section class="py-24 bg-surface-container-highest border-t border-outline-variant/50 relative overflow-hidden" id="store-locator">
            <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
                <span class="material-symbols-outlined text-tertiary text-4xl mb-6" data-icon="storefront">storefront</span>
                <h2 class="font-headline-lg text-headline-lg text-on-surface mb-6">Find a Store</h2>
                <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">Searching for Maharaja's Reserve near you...</p>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter text-left">
                    <div class="bg-surface p-8 rounded-DEFAULT border border-outline-variant/40 hover:shadow-[0_20px_40px_-15px_rgba(27,28,28,0.06)] transition-shadow duration-300">
                        <h4 class="font-headline-md text-xl mb-2 text-on-surface">Maharaja Preferred Outlet</h4>
                        <p class="font-body-md text-on-surface-variant mb-4">Shop No. 4, Royal Heritage Center</p>
                        <p class="font-label-caps text-sm text-tertiary">0.8 km away · Open until 10:00 PM</p>
                    </div>
                    <div class="bg-surface p-8 rounded-DEFAULT border border-outline-variant/40 hover:shadow-[0_20px_40px_-15px_rgba(27,28,28,0.06)] transition-shadow duration-300">
                        <h4 class="font-headline-md text-xl mb-2 text-on-surface">Daily Needs Supermart</h4>
                        <p class="font-body-md text-on-surface-variant mb-4">Ground Floor, Orchid Mall</p>
                        <p class="font-label-caps text-sm text-tertiary">1.2 km away · Open until 11:00 PM</p>
                    </div>
                    <div class="bg-surface p-8 rounded-DEFAULT border border-outline-variant/40 hover:shadow-[0_20px_40px_-15px_rgba(27,28,28,0.06)] transition-shadow duration-300">
                        <h4 class="font-headline-md text-xl mb-2 text-on-surface">Fresh Grocers</h4>
                        <p class="font-body-md text-on-surface-variant mb-4">Near Station Road</p>
                        <p class="font-label-caps text-sm text-tertiary">2.5 km away · Open until 9:30 PM</p>
                    </div>
                </div>
            </div>
        </section>
`;

indexHtml = indexHtml.replace('<!-- Footer -->', findStoreHtml + '\n<!-- Footer -->');

// 2. Order Modal
const modalHtml = `
        <!-- Order Modal -->
        <div id="order-modal" class="fixed inset-0 z-[100] hidden items-center justify-center bg-black/60 backdrop-blur-sm opacity-0 transition-opacity duration-300" style="display: none;">
            <div id="order-modal-content" class="bg-surface p-10 rounded-2xl max-w-md w-full text-center shadow-2xl transform scale-95 transition-transform duration-300 relative">
                <button id="close-modal" class="absolute top-4 right-4 text-secondary hover:text-primary transition-colors">
                    <span class="material-symbols-outlined">close</span>
                </button>
                <div class="w-20 h-20 rounded-full bg-primary-container/20 flex items-center justify-center mx-auto mb-6">
                    <span class="material-symbols-outlined text-4xl text-primary">check_circle</span>
                </div>
                <h2 class="font-headline-lg text-2xl mb-4 text-on-surface">Order Placed!</h2>
                <p class="font-body-lg text-on-surface-variant mb-8">Your Maharaja's Reserve is on its way to chill you down. Get ready for the sovereign taste of Alphonso.</p>
                <button id="continue-shopping" class="w-full font-label-caps bg-primary text-on-primary px-6 py-4 rounded-full active:scale-[0.98] transition-all hover:shadow-md hover:bg-on-primary-fixed-variant">
                    Continue Shopping
                </button>
            </div>
        </div>
`;

indexHtml = indexHtml.replace('    </div>\n    <script src="script.js"></script>', modalHtml + '\n    </div>\n    <script src="script.js"></script>');

// 3. Footer Credits Update
// Use regex to replace the old footer end block
const footerPattern = /<div class="md:col-span-12 mt-12 pt-8 border-t border-outline-variant\/30 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/footer>/;

const newFooterEnd = `
                <div class="md:col-span-12 mt-12 pt-8 border-t border-outline-variant/30 flex flex-col items-center gap-6">
                    <p class="font-body-md text-sm text-secondary text-center max-w-3xl">
                        Disclaimer: This website is not for marketing purposes. It is purely a conceptual project for demo, quality, and training purposes.
                    </p>
                    <div class="flex flex-col md:flex-row justify-between items-center w-full gap-4">
                        <p class="font-body-md text-sm text-secondary">
                            © 2024 Maharaja's Reserve. All Rights Reserved.
                        </p>
                        <div class="flex items-center gap-3">
                            <span class="font-body-md text-sm text-secondary">Designed and developed by Sayantan Deb</span>
                            <a href="https://wa.me/918335850981" target="_blank" class="font-label-caps text-xs bg-[#25D366] text-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow flex items-center gap-1">Hire me <span class="material-symbols-outlined text-[14px]">chat</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
`;

indexHtml = indexHtml.replace(footerPattern, newFooterEnd);

fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('index.html updated successfully');
