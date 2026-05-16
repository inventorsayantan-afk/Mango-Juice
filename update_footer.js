const fs = require('fs');

const filePath = 'c:\\Users\\User\\OneDrive\\Desktop\\Mango Juice Product Website\\index.html';
let content = fs.readFileSync(filePath, 'utf8');

const oldFooter = `<footer class="bg-surface-container-low dark:bg-surface-container-lowest border-t border-outline-variant/50 full-width">
<div class="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop py-12 max-w-container-max mx-auto">
<div class="md:col-span-4 flex flex-col gap-6">
<a class="font-headline-md text-headline-md text-primary dark:text-primary-fixed flex items-center gap-3" href="#">
<span class="material-symbols-outlined text-3xl" data-icon="spa">spa</span>
<span>Maharaja's Reserve</span>
</a>
<p class="font-body-md text-body-md text-secondary dark:text-secondary-fixed-dim max-w-xs">
                    The pinnacle of Indian mango heritage, bottled for the discerning palate.
                </p>
</div>
<div class="md:col-span-8 flex flex-wrap gap-x-16 gap-y-8 md:justify-end mt-8 md:mt-0">
<div class="flex flex-col gap-4">
<a class="font-label-caps text-label-caps text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed transition-colors opacity-80 hover:opacity-100" href="#">Brand Story</a>
<a class="font-label-caps text-label-caps text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed transition-colors opacity-80 hover:opacity-100" href="#">Certifications</a>
<a class="font-label-caps text-label-caps text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed transition-colors opacity-80 hover:opacity-100" href="#">Contact Us</a>
<a class="font-label-caps text-label-caps text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed transition-colors opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
</div>
</div>

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
        </footer>`;

const newFooter = `<footer class="bg-[#211100]/70 backdrop-blur-xl border-t border-white/10 full-width relative z-20 mt-12 shadow-[0_-10px_40px_rgba(33,17,0,0.3)]">
<div class="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop py-16 max-w-container-max mx-auto">
<div class="md:col-span-6 flex flex-col gap-6">
<a href="#" class="flex flex-col gap-0 items-start hover:opacity-90 transition-opacity">
    <span class="font-['Cinzel'] text-2xl font-bold tracking-[3px] bg-gradient-to-r from-[#ffda75] to-[#ff9d00] bg-clip-text text-transparent">MAHARAJA'S</span>
    <span class="font-['Cinzel'] text-sm font-semibold tracking-[6px] bg-gradient-to-r from-[#ffda75] to-[#ff9d00] bg-clip-text text-transparent mt-[2px]">RESERVE</span>
</a>
<p class="font-body-md text-body-md text-white/70 max-w-sm mt-4 leading-relaxed">
    The pinnacle of Indian mango heritage, thoughtfully cold-pressed and bottled for the discerning palate. Experience liquid gold.
</p>
</div>
<div class="md:col-span-6 flex flex-wrap gap-x-16 gap-y-8 md:justify-end mt-8 md:mt-0 pt-4">
<div class="flex flex-col gap-5 text-right">
<a class="font-label-caps text-label-caps text-white/60 hover:text-[#ffdbb0] transition-colors uppercase tracking-[0.2em]" href="#">Brand Story</a>
<a class="font-label-caps text-label-caps text-white/60 hover:text-[#ffdbb0] transition-colors uppercase tracking-[0.2em]" href="#">Certifications</a>
<a class="font-label-caps text-label-caps text-white/60 hover:text-[#ffdbb0] transition-colors uppercase tracking-[0.2em]" href="#">Contact Us</a>
<a class="font-label-caps text-label-caps text-white/60 hover:text-[#ffdbb0] transition-colors uppercase tracking-[0.2em]" href="#">Privacy Policy</a>
</div>
</div>

<div class="md:col-span-12 mt-16 pt-8 border-t border-white/10 flex flex-col items-center gap-8">
    <p class="font-body-md text-xs text-white/40 text-center max-w-3xl leading-relaxed">
        Disclaimer: This website is not for marketing purposes. It is purely a conceptual project for demo, quality, and training purposes. The products depicted are fictional.
    </p>
    <div class="flex flex-col md:flex-row justify-between items-center w-full gap-6">
        <p class="font-body-md text-sm text-white/50 tracking-wide">
            © 2024 Maharaja's Reserve. All Rights Reserved.
        </p>
        <div class="flex flex-col md:flex-row items-center gap-6">
            <span class="font-body-md text-sm text-white/50">Designed and developed by Sayantan Deb</span>
            <a href="https://wa.me/918335850981" target="_blank" class="font-label-caps text-xs border border-[#ffdbb0]/30 text-[#ffdbb0] bg-[#ffdbb0]/5 hover:bg-[#ffdbb0]/15 hover:border-[#ffdbb0]/60 px-6 py-2.5 rounded-full transition-all flex items-center gap-2 uppercase tracking-[0.15em] shadow-[0_0_15px_rgba(255,219,176,0.05)] hover:shadow-[0_0_20px_rgba(255,219,176,0.15)]">
                Hire me
                <span class="material-symbols-outlined text-[16px]">chat</span>
            </a>
        </div>
    </div>
</div>
</div>
</footer>`;

// Use simple replacement. Note: We use string replace on the exact block.
// Since the block spans multiple lines and has specific whitespace, let's just do a rough index replacement.
const startIdx = content.indexOf('<footer class="bg-surface-container-low dark:bg-surface-container-lowest border-t border-outline-variant/50 full-width">');
const endStr = '</footer>';
const endIdx = content.indexOf(endStr, startIdx) + endStr.length;

if (startIdx !== -1 && endIdx !== -1) {
    const pre = content.substring(0, startIdx);
    const post = content.substring(endIdx);
    fs.writeFileSync(filePath, pre + newFooter + post, 'utf8');
    console.log('Footer updated successfully.');
} else {
    console.error('Could not find the footer block to replace.');
}
