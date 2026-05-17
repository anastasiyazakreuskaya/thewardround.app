# Quick Maintenance Guide

## Common Tasks

### 1. Update Speaker for Next Meetup
**File:** `sections/meetups.jsx` (lines 4-9)
```javascript
const speaker = {
  name: "Speaker Name",
  affiliation: "Their Institution",
  topic: "Talk Title Here",
  bio: "Brief bio about the speaker...",
};
```

### 2. Update Meetup Date
**File:** `sections/meetups.jsx` (line ~32)
```jsx
Wednesday, 28 May 2026  // ← Change this
17:00–18:30 BST         // ← And this
```

### 2. Add a Workaround
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

### 4. Add a Meetup Recap  
**File:** `data.js`
Add to the `speakers` array:
```javascript
{
  date: "May 2026",
  topic: "Topic title",
  name: "Speaker Name",
  affiliation: "Institution",
  summary: "What happened in the session",
  tags: ["Tag1", "Tag2"]
},
```

### 5. Add a Resource
**File:** `data.js`
Add to the `resources` array (if it exists, or create it):
```javascript
resources: [
  {
    title: "Resource Title",
    author: "Author",
    url: "https://...",
    summary: "Description",
    tags: ["HCI"]
  }
]
```

### 6. Change Workaround Submission Email
**File:** `sections/workaround.jsx` (line ~43)
Change the email in the `mailto:` link

### 7. Change Signup Form
**File:** `sections/home.jsx` (line ~48)
Replace the iframe `src` URL with your new form.

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
| `index.html` | Entry point, loads React & scripts |
| `app.jsx` | Navigation & routing |
| `data.js` | **← EDIT THIS** for most content |
| `sections/home.jsx` | Home page |
| `sections/workaround.jsx` | Displays workarounds |
| `sections/resources.jsx` | Displays resources |
| `sections/meetups.jsx` | **← EDIT** next meeting date here |
| `styles.css` | All styling |
| `paper.jsx` | Design components |
| `photo.jsx` | Photo components |

## Don't Touch
- `.git/` - Git repository data
- `CNAME` - GitHub Pages domain config
- `.gitignore` - Files to ignore in git
