const fs = require('fs');
const path = require('path');

// Update HTML files to reference the new CSS path
function updateHTMLFiles() {
  const outDir = path.join(__dirname, 'out');
  
  // Find all HTML files
  function findHTMLFiles(dir) {
    const files = [];
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...findHTMLFiles(fullPath));
      } else if (item.endsWith('.html')) {
        files.push(fullPath);
      }
    });
    
    return files;
  }
  
  const htmlFiles = findHTMLFiles(outDir);
  
  htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace _next/static/css with root CSS file (remove basePath prefix)
    content = content.replace(/\/TonyMakis\.github\.io\/_next\/static\/css\/[^"]+\.css/g, '/styles.css');
    
    fs.writeFileSync(file, content);
    console.log(`Updated ${path.relative(outDir, file)}`);
  });
}

updateHTMLFiles();
