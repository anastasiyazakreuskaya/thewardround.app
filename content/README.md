# Content Management

Simple JSON-based content management for speakers and resources.

## Files

- `speakers.json` - All meetup speakers (upcoming and past)
- `resources.json` - All filed resources

## Managing Speakers

### Add a New Upcoming Speaker

Edit `content/speakers.json` and add:

```json
{
  "id": "2026-06",
  "date": "June 26, 2026",
  "status": "upcoming",
  "speaker": {
    "name": "Speaker Name",
    "affiliation": "Their Institution and Role",
    "photo": "uploads/speakers/speaker-name.jpeg"
  },
  "talk": {
    "title": "Talk Title",
    "abstract": "Full abstract text here..."
  },
  "recap": null
}
```

### Add a Session Recap

After the session, edit the speaker entry:
1. Change `"status": "upcoming"` to `"status": "past"`
2. Add recap text: `"recap": "Key takeaways from the session..."`

### Example Speaker Entry

```json
{
  "id": "2026-05",
  "date": "May 28, 2026",
  "status": "past",
  "speaker": {
    "name": "Francisco Nunes",
    "affiliation": "Senior Researcher at Fraunhofer AICOS, Porto, Portugal",
    "photo": "uploads/speakers/francisco-nunes.jpeg"
  },
  "talk": {
    "title": "Finding friends at the clinic",
    "abstract": "Finding clinical partners and participants..."
  },
  "recap": "We discussed strategies for clinical recruitment including..."
}
```

## Managing Resources

Edit `content/resources.json` and add:

```json
{
  "id": "2026-05",
  "date": "15 May 2026",
  "kind": "Paper",
  "title": "Author et al. (2026). Paper Title.",
  "where": "Journal Name",
  "link": "https://doi.org/...",
  "annotator": "X.Y.",
  "annotatorRole": "Role, Institution",
  "forWhom": "Who should read this",
  "readTime": "Allow 30 minutes.",
  "why": "Why this resource is useful..."
}
```

### Fields Explanation

- **id**: Unique ID (format: YYYY-MM)
- **date**: Date filed (e.g., "15 May 2026")
- **kind**: Type - "Paper", "Method", "Tool", "Book"
- **title**: Full citation or name
- **where**: Journal, conference, or platform
- **link**: URL (use "#" if no link yet)
- **annotator**: Initials or name
- **annotatorRole**: Their position and institution
- **forWhom**: Target audience
- **readTime**: Time investment
- **why**: Personal annotation - why you're filing it

## Publishing Changes

After editing JSON files:

```bash
git add content/
git commit -m "Add new speaker/resource"
git push
```

Changes appear live in 1-2 minutes.

## Tips

- Keep one speaker with `"status": "upcoming"` at a time
- Use consistent date formats: "May 28, 2026"
- Test JSON validity: https://jsonlint.com/
- Keep file sizes small (< 100KB each)
