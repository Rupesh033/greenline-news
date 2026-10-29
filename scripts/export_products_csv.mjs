import fs from 'fs';
import path from 'path';

const DB_PATH = 'C:\\Users\\LAPPY PLUS\\brightbooks\\src\\lib\\db.json';

const OUTPUT_PATHS = [
  'c:\\Users\\LAPPY PLUS\\greenline news\\products.csv',
  'C:\\Users\\LAPPY PLUS\\brightbooks\\products.csv',
  'c:\\Users\\LAPPY PLUS\\OneDrive\\Desktop\\nr pentonic\\products.csv'
];

console.log('Reading database from:', DB_PATH);
const rawData = fs.readFileSync(DB_PATH, 'utf8');
const db = JSON.parse(rawData);

const products = db.products || [];
console.log(`Found ${products.length} products to export.`);

function cleanField(val) {
  if (val === null || val === undefined) return '';
  let str = String(val);
  // Replace newlines and tabs with space so each product stays on a single line
  str = str.replace(/[\r\n\t]+/g, ' ').trim();
  // Escape double quotes
  str = str.replace(/"/g, '""');
  return `"${str}"`;
}

const headers = [
  'ID',
  'Title / Name',
  'Brand',
  'Category',
  'SubCategory',
  'SKU',
  'Price (₹)',
  'Retail Price (₹)',
  'MRP (₹)',
  'Stock Quantity',
  'Stock Status',
  'MOQ',
  'Unit',
  'Short Description',
  'Long Description',
  'Primary Image URL',
  'All Image URLs',
  'Wholesale Tiers'
];

// UTF-8 BOM so Excel opens with proper encoding
let csvLines = ['\ufeff' + headers.map(cleanField).join(',')];

for (let i = 0; i < products.length; i++) {
  const p = products[i];

  const id = p.id || '';
  const name = p.name || '';
  const brand = p.brand || '';
  const category = p.category || '';
  const subCategory = p.subCategory || '';
  const sku = p.sku || '';
  const price = p.price !== undefined ? p.price : '';
  const retailPrice = p.retailPrice !== undefined ? p.retailPrice : '';
  const mrp = p.mrp !== undefined ? p.mrp : '';
  const stock = p.stock !== undefined ? p.stock : '';
  const status = p.status || '';
  const moq = p.moq !== undefined ? p.moq : '';
  const unit = p.unit || '';
  const description = p.description || '';
  const longDescription = p.long_description || '';
  
  // Primary Image URL
  const primaryImage = p.image || (Array.isArray(p.images) && p.images[0]) || '';
  
  // All Image URLs (joined by semicolon)
  let allImages = '';
  if (Array.isArray(p.images) && p.images.length > 0) {
    allImages = p.images.join(' ; ');
  } else if (primaryImage) {
    allImages = primaryImage;
  }

  // Wholesale Tiers
  let wholesaleTiers = '';
  if (Array.isArray(p.wholesaleTiers) && p.wholesaleTiers.length > 0) {
    wholesaleTiers = p.wholesaleTiers.map(t => `MinQty:${t.minQty || t.qty} -> ₹${t.price}`).join(' | ');
  }

  const row = [
    id,
    name,
    brand,
    category,
    subCategory,
    sku,
    price,
    retailPrice,
    mrp,
    stock,
    status,
    moq,
    unit,
    description,
    longDescription,
    primaryImage,
    allImages,
    wholesaleTiers
  ];

  csvLines.push(row.map(cleanField).join(','));
}

const finalCsv = csvLines.join('\n');
console.log(`Generated single-line formatted CSV with ${csvLines.length} rows (${(finalCsv.length / (1024 * 1024)).toFixed(2)} MB).`);

OUTPUT_PATHS.forEach(outPath => {
  try {
    const dir = path.dirname(outPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(outPath, finalCsv, 'utf8');
    console.log(`✅ Saved CSV successfully to: ${outPath}`);
  } catch (err) {
    console.error(`❌ Error saving to ${outPath}:`, err.message);
  }
});

console.log('Export completed successfully!');
