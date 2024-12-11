
  // Function to fetch the JSON file based on selected language
  function loadLanguage(language) {
    fetch(`Data/${language}.json`)
      .then(response => response.json())
      .then(data => {
        updateText(data[0]); // assuming you only have one object in the JSON array
      })
      .catch(error => {
        console.error('Error loading language file:', error);
      });
    
    // Update the page direction based on the language selected
    updatePageDirection(language);
  }

  // Function to update text content of the elements
  function updateText(translations) {
    // Update the title
    const title = document.querySelector('[data-translate="title"]');
    if (title) {
      title.textContent = translations.title;
    }

    // Loop through all elements with a data-translate attribute and update their text
    const translateElements = document.querySelectorAll('[data-translate]');
    translateElements.forEach(element => {
      const translationKey = element.getAttribute('data-translate');
      if (translations[translationKey]) {
        element.textContent = translations[translationKey];
      }
    });
  }

  // Function to update the page direction (LTR or RTL)
  function updatePageDirection(language) {
    const body = document.body;
    if (language === 'ar') {
      // Set body direction to RTL for Arabic
      body.setAttribute('dir', 'rtl');
    } else {
      // Set body direction to LTR for other languages
      body.setAttribute('dir', 'ltr');
    }
  }

  // Event listener for language selector
  const languageSelector = document.getElementById('language-selector');
  languageSelector.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    // Save the selected language to localStorage
    localStorage.setItem('language', selectedLanguage);
    loadLanguage(selectedLanguage);  // Load the selected language
  });

  // Load the language from localStorage when the page loads
  document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'en'; // Default to 'en' if no language is saved
    languageSelector.value = savedLanguage; // Set the selected value in the dropdown
    loadLanguage(savedLanguage); // Load the saved language
  });

