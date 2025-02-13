// Function to display a selected page and hide others
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
      page.style.display = 'none';
    });
    const activePage = document.getElementById(pageId);
    if (activePage) {
      activePage.style.display = 'block';
    }
  }
  
  // Initialize the default page on load
  function init() {
    showPage('golden-guild');
  }
  
  // Handle the contact form submission
  function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Retrieve form values using DOM interaction
    const nameInput = document.getElementById('contact-name').value;
    const emailInput = document.getElementById('contact-email').value;
    const messageInput = document.getElementById('contact-message').value;
    
    // Create an object to represent the contact message
    const contactMessage = {
      name: nameInput,
      email: emailInput,
      message: messageInput,
      timestamp: new Date().toISOString()
    };
    
    // Retrieve existing messages from localStorage (or initialize an empty array)
    let messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
    
    // Add the new message using an array method
    messages.push(contactMessage);
    
    // Save the updated messages array back to localStorage
    localStorage.setItem('contactMessages', JSON.stringify(messages));
    
    // Use template literals exclusively for dynamic string output
    const confirmationText = `Thank you, ${nameInput}! Your message has been received.`;
    document.getElementById('form-confirmation').textContent = confirmationText;
    
    // Clear the form
    document.getElementById('contact-form').reset();
    
    // Conditional branching: Log the number of stored messages
    if (messages.length > 0) {
      console.log(`There are now ${messages.length} messages stored.`);
    }
  }
  
  // Function to display stored messages (demonstrates use of an object, an array, and an array method)
  function displayStoredMessages() {
    const messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
    const messageStrings = messages.map(msg => {
      return `From ${msg.name} (${msg.email}): ${msg.message}`;
    });
    console.log(`Stored messages:\n${messageStrings.join('\n')}`);
  }
  
  // Set up event listeners when the window loads
  window.onload = function() {
    init();
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', handleFormSubmit);
    }
  };
  