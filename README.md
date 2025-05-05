# David Reznik-Martov - Psychotherapy Website

A professional website for David Reznik-Martov, a qualified psychodynamic psychotherapist based in London. The website is built with HTML, CSS (Sass), and JavaScript, featuring a responsive design and bilingual support (English/Russian).

## Features

- Responsive design for all devices
- Bilingual support (English/Russian)
- Dark/Light theme toggle
- Serif/Sans-serif font toggle
- Mobile-friendly navigation
- Contact form with Web3Forms integration
- SEO optimized with meta tags and structured data
- Accessible design following WCAG guidelines

## Project Structure

```
drm-web/
├── index.html              # Homepage
├── therapy.html            # Therapy services page
├── experience.html         # Professional experience page
├── training.html           # Training and qualifications page
├── contact.html            # Contact form page
├── robots.txt              # Search engine crawling rules
├── sitemap.xml             # XML sitemap for search engines
├── src/
│   ├── js/
│   │   ├── main.js         # Main JavaScript functionality
│   │   ├── contact.js      # Contact form handling
│   │   └── config.js       # Configuration settings
│   └── styles/
│       ├── main.scss       # Source SCSS styles
│       ├── main.css        # Compiled CSS
│       └── main.css.map    # Source map for debugging
└── README.md               # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/drm-web.git
   cd drm-web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Compile SCSS to CSS:
   ```bash
   sass src/styles/main.scss:src/styles/main.css
   ```
   
   For development with auto-compilation:
   ```bash
   sass --watch src/styles/main.scss:src/styles/main.css
   ```

4. Open `index.html` in your browser to view the website locally.

## Development

### SCSS Compilation

The project uses Sass for styling. To compile SCSS to CSS:

```bash
sass src/styles/main.scss:src/styles/main.css
```

For development with auto-compilation:

```bash
sass --watch src/styles/main.scss:src/styles/main.css
```

### JavaScript

The website uses vanilla JavaScript for:
- Theme toggling (dark/light mode)
- Font toggling (serif/sans-serif)
- Language switching (English/Russian)
- Mobile menu functionality
- Contact form handling

### Contact Form

The contact form uses Web3Forms for handling submissions. The access key is stored in `src/js/config.js`. For security reasons, this file should not be committed to version control in production.

## Deployment

The website is designed to be deployed on GitHub Pages. Simply push the repository to GitHub and enable GitHub Pages in the repository settings.

## SEO Features

- Meta tags for search engines
- Structured data (JSON-LD)
- XML sitemap
- robots.txt configuration
- Semantic HTML structure
- Responsive images with alt text

## Accessibility

The website follows WCAG guidelines with:
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Sufficient color contrast
- Responsive design for all devices

## License

All rights reserved. © 2024 David Reznik-Martov

## Contact

For any questions or issues, please contact David Reznik-Martov through the contact form on the website. 