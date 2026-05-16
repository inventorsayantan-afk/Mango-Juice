const fs = require('fs');

const filePath = 'c:\\Users\\User\\OneDrive\\Desktop\\Mango Juice Product Website\\index.html';

let content = fs.readFileSync(filePath, 'utf8');

// Helper function for replacements
const replaceAll = (str, find, replace) => {
  return str.split(find).join(replace);
};

// 1. Ingredients Cards
content = replaceAll(
    content,
    '<div class="bg-surface p-8 rounded-DEFAULT border border-outline-variant/40 flex flex-col items-center text-center group hover:shadow-[0_20px_40px_-15px_rgba(27,28,28,0.06)] transition-shadow duration-300">',
    '<div class="bg-[#311900]/40 backdrop-blur-md p-8 rounded-2xl border border-white/20 flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-300">'
);
content = replaceAll(
    content,
    '<div class="w-20 h-20 rounded-full bg-surface-container-highest flex items-center justify-center mb-6 group-hover:bg-primary-container transition-colors duration-300">',
    '<div class="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:bg-[#f59f00]/80 transition-colors duration-300">'
);
content = replaceAll(
    content,
    '<span class="material-symbols-outlined text-primary group-hover:text-on-primary-container text-3xl"',
    '<span class="material-symbols-outlined text-[#ffdbb0] group-hover:text-white text-3xl"'
);
content = replaceAll(content, 'text-on-surface mb-4">Single Origin', 'text-[#ffdbb0] mb-4">Single Origin');
content = replaceAll(content, 'text-on-surface mb-4">First Press', 'text-[#ffdbb0] mb-4">First Press');
content = replaceAll(content, 'text-on-surface mb-4">Zero Additives', 'text-[#ffdbb0] mb-4">Zero Additives');

content = replaceAll(content, '<p class="font-body-md text-body-md text-on-surface-variant">Sourced exclusively', '<p class="font-body-md text-body-md text-white/80">Sourced exclusively');
content = replaceAll(content, '<p class="font-body-md text-body-md text-on-surface-variant">We utilize only the first', '<p class="font-body-md text-body-md text-white/80">We utilize only the first');
content = replaceAll(content, '<p class="font-body-md text-body-md text-on-surface-variant">No added sugars', '<p class="font-body-md text-body-md text-white/80">No added sugars');

// 2. How It's Made
content = replaceAll(
    content,
    'bg-surface-container-lowest border border-outline-variant/40 rounded-lg',
    'bg-[#311900]/40 backdrop-blur-md border border-white/20 rounded-2xl'
);
content = replaceAll(
    content,
    'text-[120px] leading-none text-primary',
    'text-[120px] leading-none text-[#ffdbb0]'
);
content = replaceAll(
    content,
    'text-headline-md text-on-surface mb-4',
    'text-headline-md text-[#ffdbb0] mb-4'
);
content = replaceAll(
    content,
    'text-body-md text-on-surface-variant mb-6',
    'text-body-md text-white/80 mb-6'
);
content = replaceAll(
    content,
    'text-body-md text-on-surface-variant max-w-lg mb-8',
    'text-body-md text-white/80 max-w-lg mb-8'
);

// 3. Certifications
content = replaceAll(
    content,
    'border-tertiary-fixed-dim flex items-center justify-center mb-4 bg-surface relative gold-texture',
    'border-white/30 flex items-center justify-center mb-4 bg-[#311900]/40 backdrop-blur-md relative gold-texture'
);
content = replaceAll(content, 'text-4xl text-tertiary', 'text-4xl text-[#ffdbb0]');
content = replaceAll(content, 'text-label-caps text-on-surface-variant', 'text-label-caps text-[#311900] font-bold');

// 4. Reviews
content = replaceAll(
    content,
    'bg-surface p-10 rounded-xl border border-outline-variant/30',
    'bg-[#311900]/40 backdrop-blur-md p-10 rounded-2xl border border-white/20'
);
content = replaceAll(
    content,
    'fill text-xl" data-icon="star',
    'fill text-xl text-[#f59f00]" data-icon="star'
);
content = replaceAll(
    content,
    'text-body-lg text-on-surface italic mb-8',
    'text-body-lg text-white/90 italic mb-8'
);
content = replaceAll(
    content,
    'bg-surface-variant flex items-center justify-center font-headline-md text-primary',
    'bg-[#f59f00]/80 flex items-center justify-center font-headline-md text-white'
);
content = replaceAll(content, 'text-label-caps text-on-surface">Alistair C.', 'text-label-caps text-[#ffdbb0]">Alistair C.');
content = replaceAll(content, 'text-label-caps text-on-surface">Eleanor V.', 'text-label-caps text-[#ffdbb0]">Eleanor V.');
content = replaceAll(content, 'text-sm text-on-surface-variant">Verified Purveyor', 'text-sm text-white/70">Verified Purveyor');
content = replaceAll(content, 'text-sm text-on-surface-variant">Culinary Director', 'text-sm text-white/70">Culinary Director');

// 5. Store Locator
content = replaceAll(
    content,
    'bg-surface p-8 rounded-DEFAULT border border-outline-variant/40 hover:shadow-[0_20px_40px_-15px_rgba(27,28,28,0.06)] transition-shadow duration-300',
    'bg-[#311900]/40 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:shadow-2xl transition-all duration-300'
);
content = replaceAll(content, 'text-xl mb-2 text-on-surface">Maharaja Preferred', 'text-xl mb-2 text-[#ffdbb0]">Maharaja Preferred');
content = replaceAll(content, 'text-xl mb-2 text-on-surface">Daily Needs', 'text-xl mb-2 text-[#ffdbb0]">Daily Needs');
content = replaceAll(content, 'text-xl mb-2 text-on-surface">Fresh Grocers', 'text-xl mb-2 text-[#ffdbb0]">Fresh Grocers');
content = replaceAll(content, 'text-body-md text-on-surface-variant mb-4', 'text-body-md text-white/80 mb-4');
content = replaceAll(content, 'text-sm text-tertiary">0.8 km', 'text-sm text-[#311900] font-bold">0.8 km');
content = replaceAll(content, 'text-sm text-tertiary">1.2 km', 'text-sm text-[#311900] font-bold">1.2 km');
content = replaceAll(content, 'text-sm text-tertiary">2.5 km', 'text-sm text-[#311900] font-bold">2.5 km');

// 6. Modal
content = replaceAll(
    content,
    'bg-surface p-10 rounded-2xl max-w-md w-full text-center shadow-2xl transform scale-95 transition-transform duration-300 relative',
    'bg-[#311900]/80 backdrop-blur-xl p-10 rounded-3xl border border-white/20 max-w-md w-full text-center shadow-2xl transform scale-95 transition-transform duration-300 relative'
);
content = replaceAll(content, 'text-secondary hover:text-primary transition-colors', 'text-white/50 hover:text-white transition-colors');
content = replaceAll(content, 'bg-primary-container/20 flex items-center justify-center mx-auto mb-6', 'bg-white/10 flex items-center justify-center mx-auto mb-6');
content = replaceAll(content, 'text-4xl text-primary">check_circle', 'text-4xl text-[#f59f00]">check_circle');
content = replaceAll(content, 'text-2xl mb-4 text-on-surface">Order Placed!', 'text-2xl mb-4 text-[#ffdbb0]">Order Placed!');
content = replaceAll(content, 'text-on-surface-variant mb-8">Your Maharaja', 'text-white/80 mb-8">Your Maharaja');
content = replaceAll(
    content,
    'bg-primary text-on-primary px-6 py-4 rounded-full active:scale-[0.98] transition-all hover:shadow-md hover:bg-on-primary-fixed-variant',
    'bg-[#f59f00] text-[#311900] font-bold px-6 py-4 rounded-full active:scale-[0.98] transition-all hover:shadow-[0_0_20px_rgba(245,159,0,0.4)]'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('HTML successfully updated with dark glassy themes via Node.js.');
