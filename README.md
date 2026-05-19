# The Ward Round Website

A simple, static website for The Ward Round working group. Built with React (no build tools required).

## Structure

```
├── index.html          - Entry point
├── styles.css          - All styling
├── app.jsx            - Main app & navigation
├── data.js            - Content data (workarounds, resources, past speakers)
├── paper.jsx          - Reusable design components
├── photo.jsx          - Photo components
├── sections/          - Page sections
│   ├── home.jsx       - Home page with signup
│   ├── workaround.jsx - Field notes
│   ├── resources.jsx  - Resources & readings
│   ├── meetups.jsx    - Next meeting & recaps
│   └── legal.jsx      - Legal notice / Impressum
└── uploads/           - Images & assets
    └── speakers/      - Speaker photos

```

## How to Edit Content

### Speakers & Resources (Easy!)
**Edit JSON files in `content/` folder:**
- `content/speakers.json` - Upcoming and past speakers
- `content/resources.json` - Filed resources

See `content/README.md` for detailed instructions.

### Workarounds
Edit `data.js` and add/edit entries in the `workarounds` array.

### Method 2: Use JSON files (optional)
Create JSON files in `content/` folders (see `content/README.md`), then copy to `data.js`.

## Quick Edits

### Update next meetup date
Edit `sections/meetups.jsx` - line ~30

### Change site title or meta
Edit `index.html` - `<title>` tag

### Update signup form
Replace iframe `src` in `sections/home.jsx`

## Local Development

### Option 1: VS Code Live Preview (recommended)
1. Right-click `index.html` → "Show Preview"

### Option 2: Python server
```bash
python3 -m http.server 8000
# Open http://localhost:8000
```

## Deploy to GitHub Pages

```bash
git add .
git commit -m "Update content"
git push
```

Site updates in ~1-2 minutes at: `https://anastasiyazakreuskaya.github.io/thewardround.app/`

## Files

**Core files (don't delete):**
- `index.html`, `app.jsx`, `data.js`, `styles.css`
- `paper.jsx`, `photo.jsx`
- All files in `sections/`

**Optional:**
- `content/` - Use if you want JSON-based content management
- `uploads/` - For images

## Tech Stack

- React 18 (loaded from CDN)
- Babel Standalone (compiles JSX in browser)
- No build process needed
- No dependencies to install
