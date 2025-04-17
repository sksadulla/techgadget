// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    const searchForm = document.querySelector('.search-bar');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchInput = this.querySelector('input');
            const categorySelect = this.querySelector('select');
            alert(`Searching for ${searchInput.value} in ${categorySelect.value}`);
            // In a real implementation, this would redirect to search results
        });
    }
    
    // Filter functionality on reviews page
    const filterSelects = document.querySelectorAll('.filter-options select');
    filterSelects.forEach(select => {
        select.addEventListener('change', function() {
            // In a real implementation, this would filter the reviews
            console.log(`Filtering by ${this.id}: ${this.value}`);
        });
    });
    
    // Contact form submission
    const contactForm = document.getElementById('complaintForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('#name').value;
            const email = this.querySelector('#email').value;
            const subject = this.querySelector('#subject').value;
            const message = this.querySelector('#message').value;
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // In a real implementation, this would send the form data to a server
            console.log('Form submitted:', { name, email, subject, message });
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
    
    // Newsletter subscription
    const newsletterForms = document.querySelectorAll('.newsletter form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (!email) {
                alert('Please enter your email address.');
                return;
            }
            
            // In a real implementation, this would subscribe the email
            console.log('Subscribed email:', email);
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        });
    });
    
    // Product rating stars (for individual review pages)
    const ratingStars = document.querySelectorAll('.rating-stars .star');
    if (ratingStars.length > 0) {
        ratingStars.forEach(star => {
            star.addEventListener('click', function() {
                const rating = this.getAttribute('data-rating');
                const ratingContainer = this.closest('.rating-stars');
                ratingContainer.setAttribute('data-rating', rating);
                console.log('User rated:', rating);
                // In a real implementation, this would save the rating
            });
        });
    }
    
    // Image zoom functionality for product images
    const productImages = document.querySelectorAll('.product-image img');
    productImages.forEach(img => {
        img.addEventListener('click', function() {
            // In a real implementation, this would open a lightbox/modal
            console.log('Zooming image:', this.src);
        });
    });
    
    // Mobile menu toggle (would be used if we add a mobile menu)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const mobileMenu = document.querySelector('.mobile-menu');
            mobileMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
});

// Function to handle pagination
function goToPage(page) {
    console.log('Navigating to page:', page);
    // In a real implementation, this would load the requested page
}

// Function to sort products
function sortProducts(criteria) {
    console.log('Sorting by:', criteria);
    // In a real implementation, this would reorder the products
}

// Function to filter by price range
function filterByPrice(range) {
    console.log('Filtering by price range:', range);
    // In a real implementation, this would filter the products
}