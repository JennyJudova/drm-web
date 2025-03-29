document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const data = {
        name: formData.get('name'),
        pronouns: formData.get('pronouns'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        message: formData.get('message'),
        to: 'reznik.martov@gmail.com'
      };
  
      // Show loading state
      const submitButton = form.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.textContent;
      submitButton.textContent = 'Sending...';
      submitButton.disabled = true;
  
      try {
        // Get access key from environment variable or use secure method
        
        // if (!accessKey) {
        //   throw new Error('Missing API access key');
        // }
        
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: "34c53462-7f4c-41ea-ba88-ab6c8d4cbd07",
            ...data,
            subject: `New contact form submission from ${data.name}`,
            from_name: 'David Reznik-Martov Website'
          })
        });
  
        const result = await response.json();
        
        if (response.ok) {
          alert('Thank you for your message. I will get back to you soon!');
          form.reset();
        } else {
          throw new Error(result.message || 'Something went wrong');
        }
      } catch (error) {
        alert('Sorry, there was an error sending your message. Please try again later.');
        console.error('Error:', error);
      } finally {
        // Reset button state
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
      }
    });
  });