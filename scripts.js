// Farmlink Website JavaScript
// Handles form submissions and SMS opt-in functionality

document.addEventListener('DOMContentLoaded', function() {
  // Contact form submission
  const contactForm = document.querySelector('#contact form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;
      
      // Here you would typically send the data to your server
      // This is a placeholder for demonstration purposes
      console.log('Form submitted:', { name, email, phone, message });
      
      // Show success message
      const formContainer = contactForm.parentElement;
      const successMessage = document.createElement('div');
      successMessage.className = 'alert alert-success mt-3';
      successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
      formContainer.appendChild(successMessage);
      
      // Reset form
      contactForm.reset();
      
      // Remove success message after 5 seconds
      setTimeout(() => {
        successMessage.remove();
      }, 5000);
    });
  }
  
  // SMS opt-in checkbox functionality
  const smsConsentCheckbox = document.getElementById('smsConsent');
  if (smsConsentCheckbox) {
    smsConsentCheckbox.addEventListener('change', function() {
      // Store the user's preference in localStorage for demo purposes
      // In a real application, you would save this to your user database
      localStorage.setItem('smsConsent', this.checked);
      
      if (this.checked) {
        // Show confirmation message
        const container = document.querySelector('#messaging .card-body');
        const consentConfirmation = document.createElement('div');
        consentConfirmation.className = 'alert alert-success mt-3';
        consentConfirmation.id = 'consentConfirmation';
        consentConfirmation.textContent = 'Thank you for opting in to our SMS messaging service!';
        
        // Only add if it doesn't already exist
        if (!document.getElementById('consentConfirmation')) {
          container.appendChild(consentConfirmation);
        }
      } else {
        // Remove confirmation message if exists
        const consentConfirmation = document.getElementById('consentConfirmation');
        if (consentConfirmation) {
          consentConfirmation.remove();
        }
      }
    });
    
    // Check if user has previously given consent
    const previousConsent = localStorage.getItem('smsConsent') === 'true';
    smsConsentCheckbox.checked = previousConsent;
    
    // Trigger change event to show confirmation if needed
    if (previousConsent) {
      const event = new Event('change');
      smsConsentCheckbox.dispatchEvent(event);
    }
  }
  
  // "Join Our Network" button functionality
  const joinButton = document.querySelector('header .btn-light');
  if (joinButton) {
    joinButton.addEventListener('click', function() {
      // Scroll to messaging section
      const messagingSection = document.getElementById('messaging');
      if (messagingSection) {
        messagingSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
  
  // Add current year to copyright
  const copyright = document.querySelector('footer p:first-child');
  if (copyright) {
    const currentYear = new Date().getFullYear();
    copyright.innerHTML = copyright.innerHTML.replace('2025', currentYear);
  }
});
