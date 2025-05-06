/*
   Trail Explorer - Main JavaScript
   Simple functionality for the outdoor adventure blog
*/

// Wait for the DOM to be fully loaded before running any scripts
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize search button functionality
    initSearchButton();
    
    // Initialize image hover effects
    initImageHoverEffects();
    
    // You can add more functionality as needed
    console.log('Trail Explorer website loaded successfully!');
});

/**
 * Initialize the search button functionality
 */
function initSearchButton() {
    const searchButton = document.querySelector('.search-btn');
    
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            // You could replace this with actual search functionality
            alert('Search functionality coming soon!');
            
            // Or uncomment this to show a custom search form
            // toggleSearchForm();
        });
    }
}

/**
 * Add hover effects to trip report images
 */
function initImageHoverEffects() {
    const gridItems = document.querySelectorAll('.grid-item');
    
    gridItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            // Add any additional hover effects beyond CSS
            const caption = this.querySelector('.grid-caption');
            if (caption) {
                caption.style.opacity = '1';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            // Reset any JavaScript-applied effects
            const caption = this.querySelector('.grid-caption');
            if (caption) {
                caption.style.opacity = '0.9';
            }
        });
    });
}

/**
 * Example function to toggle a search form
 * This is not used by default but could be enabled
 */
function toggleSearchForm() {
    // Check if search form already exists
    let searchForm = document.getElementById('search-form');
    
    if (searchForm) {
        // Toggle visibility if it exists
        searchForm.style.display = searchForm.style.display === 'none' ? 'block' : 'none';
    } else {
        // Create search form if it doesn't exist
        searchForm = document.createElement('div');
        searchForm.id = 'search-form';
        searchForm.className = 'search-form';
        
        searchForm.innerHTML = `
            <div class="search-container">
                <input type="text" placeholder="Search adventures...">
                <button>Search</button>
                <span class="close-search">&times;</span>
            </div>
        `;
        
        // Add to page
        document.body.appendChild(searchForm);
        
        // Add close button functionality
        const closeButton = searchForm.querySelector('.close-search');
        if (closeButton) {
            closeButton.addEventListener('click', function() {
                searchForm.style.display = 'none';
            });
        }
    }
}

/**
 * Example function to handle newsletter subscription
 * You can call this from a form submit event
 */
function handleSubscribe(email) {
    // This would normally send the email to your server
    console.log('Subscribing email:', email);
    alert('Thanks for subscribing! You\'ll receive updates soon.');
    
    // In a real implementation, you would submit to a server
    // fetch('/api/subscribe', {
    //     method: 'POST',
    //     body: JSON.stringify({ email }),
    //     headers: { 'Content-Type': 'application/json' }
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log('Success:', data);
    //     alert('Thanks for subscribing!');
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    //     alert('There was an error. Please try again.');
    // });
    
    return false; // Prevent form submission
}

/**
 * Example function to load more content dynamically
 * This could be used for "load more" buttons
 */
function loadMoreContent(contentType) {
    console.log(`Loading more ${contentType}...`);
    
    // This would normally fetch more content from your server
    // and then append it to the appropriate container
    
    // Example of how this might work:
    // fetch(`/api/${contentType}?page=2`)
    //     .then(response => response.json())
    //     .then(data => {
    //         // Find the appropriate container
    //         const container = document.querySelector(`.${contentType}-list`);
    //         
    //         // Append new items
    //         data.items.forEach(item => {
    //             const element = createElementFromTemplate(item);
    //             container.appendChild(element);
    //         });
    //     });
}

// Add any additional functions below