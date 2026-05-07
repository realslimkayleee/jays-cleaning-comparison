const fs = require('fs');

function getPngDimensions(filePath) {
  const buffer = fs.readFileSync(filePath);
  
  // PNG signature
  if (buffer.toString('hex', 0, 8) !== '89504e470d0a1a0a') {
    return 'Not a PNG file';
  }
  
  // IHDR chunk is always the first chunk after signature
  // Its data starts at byte 16 and contains width and height
  const width = buffer.readUInt32BE(16);
  const height = buffer.readUInt32BE(20);
  
  return { width, height };
}

try {
  console.log("Concept B:", getPngDimensions('public/images/concept-b/home_field_notes_journey.png'));
  console.log("Concept A:", getPngDimensions('public/images/concept-a/home_velvet_hour.png'));
} catch (e) {
  console.error(e);
}
