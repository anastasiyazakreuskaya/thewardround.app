# Quick Maintenance Guide

## Content Management System

All speakers and resources are managed through JSON files in `content/`:

### 1. Add/Update Speaker
**File:** `content/speakers.json`

Add new speaker entry:
```json
{
  "id": "2026-06",
  "date": "June 26, 2026",
  "status": "upcoming",
  "speaker": {
    "name": "Speaker Name",
    "affiliation": "Institution",
    "photo": "uploads/speakers/name.jpeg"
  },
  "talk": {
    "title": "Talk Title",
    "abstract": "Abstract text..."
  },
  "recap": null
}
```

After session: Change `"status": "past"` and add `"recap": "Session notes..."`

### 2. Add Resource
**File:** `content/resources.json`

```json
{
  "id": "2026-05",
  "date": "15 May 2026",
  "kind": "Paper",
  "title": "Citation",
  "where": "Journal",
  "link": "https://...",
  "annotator": "X.Y.",
  "annotatorRole": "Role, Institution",
  "forWhom": "Target audience",
  "readTime": "30 minutes",
  "why": "Why it's useful..."
}
```

### 3. Add Speaker Photo
1. Save to `uploads/speakers/speaker-name.jpeg`
2. Reference in speakers.json: `"photo": "uploads/speakers/speaker-name.jpeg"`

### 4. Add a Workaround
**File:** `data.js`
Add to the `workarounds` array:
```javascript
{
  id: "WR-016",
  date: "Jun 2026",
  title: "Your title",
  attribution: "A researcher somewhere",
  excerpt: "One sentence summary",
  body: ["Paragraph 1", "Paragraph 2", "Paragraph 3"],
  tags: ["Tag1", "Tag2"]
},
```

### 5. Add a Resource
**File:** `data.js`
Add to the `resources` array:
```javascript
{
  month: "15 May 2026",
  kind: "Paper",
  title: "Resource Title",
  annotator: "Annotated by X.Y.",
  annotatorRole: "Role, Institution",
  where: "Journal Name",
  link: "https://doi.org/...",
  why: "Why this resource is useful...",
  forWhom: "Who should read it",
  readTime: "Allow 30 minutes."
}
```

### 6. Update Legal Notice (Impressum)
**File:** `sections/legal.jsx` (line ~35)
Add your postal address where indicated.

## Publishing Changes

```bash
git add .
git commit -m "Description of changes"
git push
```

Wait 1-2 minutes, then check: https://anastasiyazakreuskaya.github.io/thewardround.app/

## File Overview

| File | Purpose |
|------|---------|
| `data.js` | **← EDIT THIS** for workarounds & resources |
| `sections/meetups.jsx` | **← EDIT** speaker info here |
| `sections/legal.jsx` | Legal notice / Impressum |
| `sections/home.jsx` | Home page |
| `sections/workaround.jsx` | Displays workarounds |
| `sections/resources.jsx` | Displays resources |
| `app.jsx` | Navigation & routing |
| `index.html` | Entry point |
| `styles.css` | All styling |
| `uploads/speakers/` | Speaker photos |
