(function() {
    // 1. Inject Indentation and Layout Styles
    const style = document.createElement('style');
    style.innerHTML = `
        /* Two-column layout for IELTS GT Resources */
        .resources-grid {
            display: flex;
            gap: 20px;
            margin-top: 8pt;
            margin-bottom: 8pt;
        }
        .resources-column {
            flex: 1;
        }
        @media (max-width: 600px) {
            .resources-grid {
                flex-direction: column;
                gap: 10px;
            }
        }
        /* Indentation styling for vocabulary content blocks */
        .vocab-content {
            margin-left: 30px;
            margin-bottom: 15px;
        }
        .cv-container ul {
            padding-left: 20px;
        }
        .cv-container li {
            margin-bottom: 3pt;
        }
        /* Home Icon Styling */
        .home-icon-link {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-right: 12px;
            text-decoration: none;
            font-size: 22px;
            vertical-align: middle;
            transition: transform 0.2s ease;
        }
        .home-icon-link:hover {
            transform: scale(1.1);
        }
    `;
    document.head.appendChild(style);

    // 2. Insert Home Icon before the Theme Switcher
    window.addEventListener('DOMContentLoaded', () => {
        const themeSwitcher = document.querySelector('.theme-switcher');
        if (themeSwitcher && !document.querySelector('.home-icon-link')) {
            // Retrieve home page target from master-config.js (defaults to language.html)
            const homeUrl = (window.MASTER_CONFIG && window.MASTER_CONFIG.homePage) ? window.MASTER_CONFIG.homePage : 'language.html';
            
            const homeLink = document.createElement('a');
            homeLink.href = homeUrl;
            homeLink.className = 'home-icon-link';
            homeLink.title = 'Return to Language Hub';
            homeLink.innerHTML = '🏠';
            
            themeSwitcher.parentNode.insertBefore(homeLink, themeSwitcher);
        }
    });
})();
