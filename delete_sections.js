const fs = require('fs');

const filePath = 'c:\\Users\\User\\OneDrive\\Desktop\\Mango Juice Product Website\\index.html';
let content = fs.readFileSync(filePath, 'utf8');

// Find the start of the appended sections wrapper
const startMarker = '<div class="bg-background text-on-background font-body-md';
const endMarker = '<script src="script.js"></script>';

const startIdx = content.indexOf(startMarker);
const endIdx = content.lastIndexOf(endMarker);

if (startIdx !== -1 && endIdx !== -1) {
    const pre = content.substring(0, startIdx);
    const post = content.substring(endIdx);
    
    // We just keep everything before the wrapper, and everything from the script tag onwards
    fs.writeFileSync(filePath, pre + post, 'utf8');
    console.log('Successfully deleted the rest of the things.');
} else {
    console.error('Could not find markers', { startIdx, endIdx });
}
