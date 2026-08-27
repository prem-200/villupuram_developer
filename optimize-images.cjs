const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function optimize() {
  const assetsDir = path.join(__dirname, 'src', 'assets');
  const publicDir = path.join(__dirname, 'public');

  // Optimize log1.png (1.6MB -> ~60KB WebP)
  if (fs.existsSync(path.join(assetsDir, 'log1.png'))) {
    await sharp(path.join(assetsDir, 'log1.png'))
      .resize(400, 400, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(path.join(assetsDir, 'log1.webp'));
    console.log('✓ log1.png -> log1.webp');
  }

  // Optimize new.png -> 200x80 WebP for Logo (~2.5KB)
  if (fs.existsSync(path.join(assetsDir, 'new.png'))) {
    await sharp(path.join(assetsDir, 'new.png'))
      .resize(200, 80, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 85, effort: 6 })
      .toFile(path.join(assetsDir, 'new.webp'));
    
    // Copy to public/logo.webp for static preloading
    await sharp(path.join(assetsDir, 'new.png'))
      .resize(200, 80, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 85, effort: 6 })
      .toFile(path.join(publicDir, 'logo.webp'));

    console.log('✓ new.png -> new.webp & public/logo.webp (200x80)');
  }

  // Optimize tamilnadu_map.jpg
  if (fs.existsSync(path.join(assetsDir, 'tamilnadu_map.jpg'))) {
    await sharp(path.join(assetsDir, 'tamilnadu_map.jpg'))
      .resize(500, 650, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 75, effort: 6 })
      .toFile(path.join(assetsDir, 'tamilnadu_map.webp'));
    console.log('✓ tamilnadu_map.jpg -> tamilnadu_map.webp');
  }

  // Optimize footer_bg.jpg
  if (fs.existsSync(path.join(assetsDir, 'footer_bg.jpg'))) {
    await sharp(path.join(assetsDir, 'footer_bg.jpg'))
      .resize(1000, 600, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 70, effort: 6 })
      .toFile(path.join(assetsDir, 'footer_bg.webp'));
    console.log('✓ footer_bg.jpg -> footer_bg.webp');
  }

  console.log('\n✅ All images optimized successfully!');
}

optimize().catch(console.error);

