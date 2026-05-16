// nav-bar.js
// Injected into each concept to provide a persistent return bar.

(function() {
  // Wait for the DOM to be ready, or run immediately if it already is.
  const init = () => {
    // Prevent multiple injections
    if (document.getElementById('jcs-injected-bar')) return;

    // Find the current script tag to read data attributes
    const scripts = document.getElementsByTagName('script');
    let currentScript = null;
    for (let i = 0; i < scripts.length; i++) {
      if (scripts[i].src && scripts[i].src.includes('nav-bar.js')) {
        currentScript = scripts[i];
        break;
      }
    }

    // Default configuration
    let config = {
      name: 'Concept',
      letter: '?',
      backHref: '/index.html',
      chooseHref: 'mailto:designer@example.com'
    };

    if (currentScript) {
      config.name = currentScript.getAttribute('data-concept-name') || config.name;
      config.letter = currentScript.getAttribute('data-concept-letter') || config.letter;
      config.backHref = currentScript.getAttribute('data-back-href') || config.backHref;
      config.chooseHref = currentScript.getAttribute('data-choose-href') || config.chooseHref;
    }

    // Load CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    // Dynamically get the path to nav-bar.css relative to this script
    let scriptPath = currentScript ? currentScript.src : '/assets/nav-bar.js';
    link.href = scriptPath.replace('.js', '.css');
    document.head.appendChild(link);

    // Create the bar element
    const bar = document.createElement('header');
    bar.id = 'jcs-injected-bar';
    bar.className = 'jcs-bar';
    bar.setAttribute('role', 'banner');
    bar.setAttribute('aria-label', 'Concept preview navigation');

    // SVG Icons
    const backIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>`;
    const forwardIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;

    // Inner HTML
    bar.innerHTML = `
      <a href="${config.backHref}" class="jcs-bar__link">
        ${backIcon} Back to concepts
      </a>
      <div class="jcs-bar__label">
        CONCEPT ${config.letter} · ${config.name}
      </div>
      <a href="${config.chooseHref}" class="jcs-bar__button">
        <span class="jcs-button-text">Choose this</span> ${forwardIcon}
      </a>
    `;

    // Wait until document.body is available
    const appendBar = () => {
      document.body.appendChild(bar);

      // Push body down so the concept header isn't covered
      // Account for mobile (56px) and desktop (64px) + safe area inset
      const style = document.createElement('style');
      style.textContent = `
        body {
          padding-top: calc(56px + env(safe-area-inset-top, 0px)) !important;
        }
        @media (min-width: 768px) {
          body {
            padding-top: calc(64px + env(safe-area-inset-top, 0px)) !important;
          }
        }
      `;
      document.head.appendChild(style);
    };

    if (document.body) {
      appendBar();
    } else {
      window.addEventListener('DOMContentLoaded', appendBar);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
