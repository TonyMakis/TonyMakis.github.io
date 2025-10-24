const fs = require('fs');
const path = require('path');

// Move CSS files from _next to a public directory
function moveCSSFiles() {
  const outDir = path.join(__dirname, 'out');
  const nextDir = path.join(outDir, '_next');
  const staticDir = path.join(outDir, 'static');
  
  if (fs.existsSync(nextDir)) {
    // Create static directory if it doesn't exist
    if (!fs.existsSync(staticDir)) {
      fs.mkdirSync(staticDir, { recursive: true });
    }
    
    // Move CSS files
    const cssDir = path.join(nextDir, 'static', 'css');
    const newCssDir = path.join(staticDir, 'css');
    
    if (fs.existsSync(cssDir)) {
      if (!fs.existsSync(newCssDir)) {
        fs.mkdirSync(newCssDir, { recursive: true });
      }
      
      const files = fs.readdirSync(cssDir);
      files.forEach(file => {
        const srcPath = path.join(cssDir, file);
        const destPath = path.join(newCssDir, file);
        const stat = fs.statSync(srcPath);
        
        if (stat.isFile()) {
          fs.copyFileSync(srcPath, destPath);
          console.log(`Moved ${file} to static/css/`);
        }
      });
    }
    
    // Move JS files
    const jsDir = path.join(nextDir, 'static', 'chunks');
    const newJsDir = path.join(staticDir, 'chunks');
    
    if (fs.existsSync(jsDir)) {
      if (!fs.existsSync(newJsDir)) {
        fs.mkdirSync(newJsDir, { recursive: true });
      }
      
      const files = fs.readdirSync(jsDir);
      files.forEach(file => {
        const srcPath = path.join(jsDir, file);
        const destPath = path.join(newJsDir, file);
        const stat = fs.statSync(srcPath);
        
        if (stat.isFile()) {
          fs.copyFileSync(srcPath, destPath);
          console.log(`Moved ${file} to static/chunks/`);
        }
      });
    }
  }
}

moveCSSFiles();
