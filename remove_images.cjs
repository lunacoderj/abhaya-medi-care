const fs = require('fs');
const filePath = 'src/data/services.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Remove all injected images
content = content.replace(/image:\s*["'][^"']+["'],\s*\n/g, '');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Images removed successfully!');
