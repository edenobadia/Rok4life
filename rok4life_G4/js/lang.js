<script>
  const languageSelect = document.getElementById('language-select');

  // Define an object that maps language codes to the corresponding text for each language.
  const text = {
    'en': {
      'welcome-message': 'Welcome to our website!',
      'about-us': 'About Us',
      'contact-us': 'Contact Us',
    },
    'he': {
      'welcome-message': 'ברוכים הבאים לאתר שלנו',
      'about-us': 'עלינו',
      'contact-us': 'צור קשר',
    },
  };

  // Function to update the displayed text based on the user's language selection.
  function updateText() {
    const selectedLanguage = languageSelect.value;
    document.getElementById('welcome-message').textContent = text[selectedLanguage]['welcome-message'];
    document.getElementById('about-us').textContent = text[selectedLanguage]['about-us'];
    document.getElementById('contact-us').textContent = text[selectedLanguage]['contact-us'];
  }

  // Add an event listener to the dropdown menu that will trigger the text update function whenever the user makes a selection.
  languageSelect.addEventListener('change', updateText);

  // Call the updateText function on page load to initialize the text based on the default language selection.
  updateText();
</script>
