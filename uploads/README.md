# Uploads

Image storage for The Ward Round website.

## Structure

```
uploads/
└── speakers/          # Speaker photos for meetups
    └── francisco-nunes.jpeg
```

## Adding Speaker Photos

1. **Save photo** to `uploads/speakers/[name].jpeg` or `.jpg`
   - Recommended: Square format, 400-800px
   - Keep files under 500KB

2. **Update meetups.jsx** (line ~6):
   ```jsx
   photo: "uploads/speakers/francisco-nunes.jpeg",
   ```

3. **Commit and push:**
   ```bash
   git add uploads/speakers/[name].jpeg sections/meetups.jsx
   git commit -m "Add speaker photo"
   git push
   ```

## File Naming

- Use lowercase with hyphens: `francisco-nunes.jpeg`
- Formats: JPG for photos, PNG for graphics with transparency
