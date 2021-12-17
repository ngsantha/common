const fs = require('fs');

fs.mkdirSync('./dist', { recursive: true });
fs.copyFileSync('./forms.js', './dist/forms.js');
fs.copyFileSync('./forms.d.ts', './dist/forms.d.ts');
fs.copyFileSync('./package.json', './dist/package.json');
