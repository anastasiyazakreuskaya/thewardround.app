# Uploads

Place images and assets here for The Ward Round website.

## Recommended Structure

```
uploads/
├── speakers/          # Speaker photos for meetups
│   ├── francisco-nunes.jpg
│   └── [speaker-name].jpg
├── workarounds/       # Optional: images for workaround posts
├── resources/         # Optional: images for resource annotations
└── general/           # General site images
```

## Usage

### For Speaker Photos (Meetups)

1. **Add the image:**
   - Save speaker photo to `uploads/speakers/francisco-nunes.jpg`
   - Recommended: Square format, at least 400x400px, JPG or PNG

2. **Reference in meetups.jsx:**
   ```jsx
   const speaker = {
     photo: "uploads/speakers/francisco-nunes.jpg",
     name: "Francisco Nunes",
     // ... rest of speaker info
   };
   ```

### For Other Images

**In JSX files:**
```jsx
<img src="uploads/general/your-image.png" alt="Description" />
```

**In CSS:**
```css
background-image: url('../uploads/your-image.png');
```

## Image Best Practices

- **File naming:** Use lowercase with hyphens (e.g., `francisco-nunes.jpg`)
- **File formats:** 
  - Photos: JPG (smaller file size)
  - Graphics with transparency: PNG
- **Size optimization:** 
  - Speaker photos: 400-800px square
  - Keep files under 500KB when possible
- **Commit to git:** Images in `uploads/` are tracked and will be deployed

## Example: Adding Francisco's Photo

1. Save his photo as `uploads/speakers/francisco-nunes.jpg`
2. Update `sections/meetups.jsx` line 7:
   ```jsx
   photo: "uploads/speakers/francisco-nunes.jpg",
   ```
3. Commit and push:
   ```bash
   git add uploads/speakers/francisco-nunes.jpg
   git add sections/meetups.jsx
   git commit -m "Add Francisco Nunes speaker photo"
   git push
   ```
