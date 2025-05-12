const fs = require('fs');
const path = require('path');

// Read the template
const template = fs.readFileSync(path.join(__dirname, '../stories/story-template.html'), 'utf8');

// Function to generate a new story page
function generateStoryPage(storyData) {
    let content = template;
    
    // Replace all placeholders with actual content
    Object.keys(storyData).forEach(key => {
        const placeholder = `{{${key}}}`;
        content = content.replace(new RegExp(placeholder, 'g'), storyData[key]);
    });
    
    // Generate filename from title
    const filename = storyData.TITLE.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '') + '-story.html';
    
    // Write the new file
    fs.writeFileSync(path.join(__dirname, '../stories', filename), content);
    console.log(`Generated new story page: ${filename}`);
}

// Export the function
module.exports = { generateStoryPage };

// Example usage:
const newStory = {
    TITLE: "Your Story Title",
    SUBTITLE: "A brief description of your story",
    HERO_IMAGE: "your-hero-image.jpg",
    DATE: "January 1, 2025",
    DESCRIPTION: "A detailed description of your story that will appear in italics at the top.",
    CONTENT: `
        <h3>Your Story Content</h3>
        <p>Your story content goes here...</p>
        
        <h4>Section Title</h4>
        <p>More content...</p>
    `
};

// Uncomment the line below to generate a new story
// generateStoryPage(newStory); 