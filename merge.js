const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');
let codeHtml = fs.readFileSync('code.html', 'utf8');

const startHead = codeHtml.indexOf('<script src="https://cdn.tailwindcss.com');
const endHead = codeHtml.indexOf('</style>') + '</style>'.length;
const headContent = codeHtml.substring(startHead, endHead);

const startBody = codeHtml.indexOf('<!-- Ingredients Section -->');
const endBody = codeHtml.indexOf('</footer>') + '</footer>'.length;
const bodyContent = codeHtml.substring(startBody, endBody);

const wrappedBody = `
    <div class="bg-background text-on-background font-body-md antialiased selection:bg-primary-container selection:text-on-primary-container relative" style="z-index: 10; background-color: #fcf9f8;">
${bodyContent}
    </div>
`;

indexHtml = indexHtml.replace('</head>', `    ${headContent}\n</head>`);
indexHtml = indexHtml.replace('    <script src="script.js"></script>', `${wrappedBody}\n    <script src="script.js"></script>`);

fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('Successfully merged!');
