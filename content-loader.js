// Content loader for The Ward Round
// Loads speakers and resources from JSON files

window.WR_CONTENT = {
  speakers: [],
  resources: [],
  loaded: false
};

// Load all content
async function loadContent() {
  try {
    // Load speakers
    const speakersResponse = await fetch('content/speakers.json');
    window.WR_CONTENT.speakers = await speakersResponse.json();
    
    // Load resources
    const resourcesResponse = await fetch('content/resources.json');
    window.WR_CONTENT.resources = await resourcesResponse.json();
    
    window.WR_CONTENT.loaded = true;
    
    // Trigger re-render if React is loaded
    if (window.triggerContentReload) {
      window.triggerContentReload();
    }
  } catch (error) {
    console.error('Error loading content:', error);
    // Fallback to empty arrays
    window.WR_CONTENT.speakers = [];
    window.WR_CONTENT.resources = [];
    window.WR_CONTENT.loaded = true;
  }
}

// Auto-load when script runs
loadContent();
