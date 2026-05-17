# Content Management

Store content as JSON files here, then copy to `data.js` to publish.

## Folders

- `workarounds/` - Anonymous field notes
- `resources/` - Tools and readings  
- `meetups/` - Meeting recaps

## Templates

### Workaround: `WR-###.json`
```json
{
  "id": "WR-015",
  "date": "May 2026",
  "title": "Your title",
  "attribution": "A PhD student in the UK",
  "excerpt": "One-sentence summary",
  "body": ["Paragraph 1", "Paragraph 2", "Paragraph 3"],
  "tags": ["Tag1", "Tag2"]
}
```

### Resource: `resource-name.json`
```json
{
  "title": "Resource Title",
  "type": "Paper",
  "author": "Author Name",
  "year": "2026",
  "url": "https://...",
  "summary": "Brief description",
  "tags": ["HCI", "Methods"]
}
```

### Meetup: `YYYY-MM.json`
```json
{
  "date": "May 2026",
  "topic": "Presentation topic",
  "name": "Speaker Name",
  "affiliation": "Institution",
  "summary": "Brief recap",
  "tags": ["Design", "Fieldwork"]
}
```

## To Publish

1. Create JSON file here
2. Copy content to `data.js`
3. Commit and push to GitHub
