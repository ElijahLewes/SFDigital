// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('nav ul');
  
  menuToggle.addEventListener('click', function() {
    nav.classList.toggle('show');
  });
  
  // Contact form submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Here you would typically send the data to your server
      console.log('Form submitted:', { name, email, subject, message });
      
      // Show success message
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }
  
  // Archives filtering
  const contentTypeFilter = document.getElementById('content-type');
  const neighborhoodFilter = document.getElementById('neighborhood');
  const archiveItems = document.querySelectorAll('.archive-item');
  
  if (contentTypeFilter && neighborhoodFilter) {
    function filterItems() {
      const contentType = contentTypeFilter.value;
      const neighborhood = neighborhoodFilter.value;
      
      archiveItems.forEach(item => {
        const itemType = item.getAttribute('data-type');
        const itemNeighborhood = item.querySelector('.meta').textContent.toLowerCase();
        
        const typeMatch = contentType === 'all' || itemType === contentType;
        const neighborhoodMatch = neighborhood === 'all' || 
          itemNeighborhood.includes(neighborhood.toLowerCase());
        
        if (typeMatch && neighborhoodMatch) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }
    
    contentTypeFilter.addEventListener('change', filterItems);
    neighborhoodFilter.addEventListener('change', filterItems);
  }
});