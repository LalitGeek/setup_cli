export interface CommandSection {
  title: string;
  code?: string;
  language?: string;
  description?: string;
  list?: string[];
}

export interface TechnologyGuide {
  id: string;
  name: string;
  category: 'Learning' | 'Frontend' | 'Backend' | 'Languages' | 'Databases' | 'Cloud' | 'DevOps' | 'Linux' | 'AI' | 'Security' | 'Mobile';
  overview: string;
  requirements: CommandSection[];
  installation: CommandSection[];
  projectCreation: CommandSection[];
  folderStructure?: string;
  run: CommandSection[];
  build: CommandSection[];
  production?: CommandSection[];
  deployment?: CommandSection[];
  troubleshooting: CommandSection[];
  usefulLinks?: { label: string; url: string }[];
  commonErrors: { error: string; solution: string }[];
  bestPractices: string[];
}

export const commandsData: Record<string, TechnologyGuide> = {
  learning: {
    id: 'learning',
    name: 'Web Core Learning',
    category: 'Learning',
    overview: 'A complete chapter-wise learning path for HTML5, CSS3, and JavaScript, ranging from absolute beginner basics to advanced expert implementations with interactive code examples.',
    requirements: [],
    installation: [],
    projectCreation: [],
    run: [
      {
        title: '🟢 Level 1 — HTML Basics',
        description: 'Introduction to HTML vs HTML5, how browsers render, file structure, headings, paragraphs, and text formatting tags.',
        list: [
          "1.1 What is HTML?|HyperText Markup Language (HTML) is the standard markup language for creating web pages.|<!-- HTML structures the web content -->\n<p>Hello World</p>",
          "1.2 HTML vs HTML5|Differences include native audio/video playback, canvas graphics, and modern semantic element support.|<!-- HTML5 introduces new elements & APIs -->\n<header>\n  <nav>Navigation</nav>\n</header>",
          "1.3 How Browsers Render HTML|The browser parses HTML markup into a Document Object Model (DOM) tree, combines it with styles (CSSOM), and paints it.|<!-- DOM parsing flow: HTML -> Tokenization -> DOM Nodes -> Render Tree -->",
          "1.4 HTML Boilerplate|Standard HTML5 layout containing DOCTYPE, html language, character set, viewport responsive tags, and page titles.|<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Document</title>\n</head>\n<body>\n</body>\n</html>",
          "1.5 Basic Elements|Usage of standard headings (h1 to h6), paragraphs, line breaks, comments, and horizontal rules.|<!-- Heading 1 -->\n<h1>Main Title</h1>\n<p>This is a paragraph.</p>\n<hr>\n<br>",
          "1.6 Text Formatting|Using inline tags like strong, em, b, i, mark, small, sub, sup, del, ins, code, pre, and kbd.|<p>\n  <strong>Bold</strong> and <em>Italic</em>.\n  <mark>Highlighted</mark>.\n  <code>console.log()</code>.\n</p>"
        ]
      },
      {
        title: '🟢 Level 2 — Links & Media',
        description: 'Working with hyperlink attributes, responsive image formats, audio players, video embeds, and sandboxed iframes.',
        list: [
          "2.1 Hyperlinks|Creating absolute, relative, email, telephone, anchor, and downloadable links.|<a href=\"https://google.com\" target=\"_blank\">Google</a>\n<a href=\"mailto:info@domain.com\">Email Us</a>\n<a href=\"#section-2\">Go to Section 2</a>",
          "2.2 Images & Picture|Embedding images with fallback srcset, picture tags, responsive resizing, and native lazy loading.|<picture>\n  <source srcset=\"image-large.webp\" media=\"(min-width: 800px)\">\n  <img src=\"image-fallback.jpg\" alt=\"Responsive Image\" loading=\"lazy\">\n</picture>",
          "2.3 Audio Players|Embedding sound assets with controls, loops, and muted autoplays.|<audio controls loop>\n  <source src=\"audio.mp3\" type=\"audio/mpeg\">\n  Your browser does not support audio.\n</audio>",
          "2.4 Video Players|Embedding video assets with poster frames, tracking subtitles, and play/pause controls.|<video controls poster=\"thumbnail.jpg\" width=\"400\">\n  <source src=\"video.mp4\" type=\"video/mp4\">\n  <track src=\"subs.vtt\" kind=\"subtitles\" srclang=\"en\" label=\"English\">\n</video>",
          "2.5 Iframes & Sandbox|Embedding external documents, maps, or videos securely utilizing sandboxing privileges.|<iframe src=\"https://example.com\" sandbox=\"allow-scripts allow-forms\" width=\"100%\" height=\"300\">\n</iframe>"
        ]
      },
      {
        title: '🟢 Level 3 — Lists & Tables',
        description: 'Generating bullet lists, numbered ordered sequences, definition maps, and complex multi-row spreadsheet grids.',
        list: [
          "3.1 HTML Lists|Unordered bullet lists, ordered numbering lists, definition descriptions, and nested structures.|<ul>\n  <li>Item 1</li>\n  <li>\n    Item 2\n    <ol>\n      <li>Nested Item</li>\n    </ol>\n  </li>\n</ul>",
          "3.2 Table Grids|Generating complex spreadsheets using table, tr, td, th, colspan, rowspan, and semantic sections (thead, tbody, tfoot).|<table>\n  <thead>\n    <tr>\n      <th>Header 1</th>\n      <th>Header 2</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td colspan=\"2\">Cell spanning two columns</td>\n    </tr>\n  </tbody>\n</table>"
        ]
      },
      {
        title: '🟢 Level 4 — Interactive Forms',
        description: 'Building user-input interfaces using forms, labels, inputs, validation rules, regex patterns, select options, and progress trackers.',
        list: [
          "4.1 Form Basics|Setting up form containers with submission methods (GET/POST) and destination action URLs.|<form action=\"/api/submit\" method=\"POST\">\n  <!-- Inputs go here -->\n</form>",
          "4.2 Input Types|Working with text, email, password, url, search, number, slider ranges, date pickers, colors, checkboxes, and radio buttons.|<input type=\"text\" placeholder=\"Username\">\n<input type=\"password\" placeholder=\"Secure Password\">\n<input type=\"range\" min=\"0\" max=\"100\">\n<input type=\"color\">",
          "4.3 Form Elements|Utilizing selects, options, grouped lists, datalists, fieldsets, legends, output displays, and progress bars.|<fieldset>\n  <legend>Details</legend>\n  <select>\n    <optgroup label=\"Fruits\">\n      <option value=\"apple\">Apple</option>\n    </optgroup>\n  </select>\n</fieldset>",
          "4.4 Input Validation|Enforcing browser-side validations using required fields, lengths, min/max limits, patterns (regex), and autocompletes.|<input type=\"text\" required minlength=\"4\" pattern=\"[a-zA-Z0-9]+\" placeholder=\"Alpha-numeric only\">"
        ]
      },
      {
        title: '🟢 Level 5 — Semantic HTML5',
        description: 'Creating accessible, search-engine friendly structures using header, footer, article, section, aside, details, and summary tags.',
        list: [
          "5.1 Semantic Tags|Creating logical page divisions using header, main, section, article, nav, aside, and footer elements.|<main>\n  <section>\n    <h2>Section Name</h2>\n    <article>Article Body</article>\n  </section>\n</main>",
          "5.2 Interactive Disclosure|Creating native collapsible details widgets using details, summary, and address structures.|<details>\n  <summary>Click to Expand</summary>\n  <p>Hidden information disclosed on user request.</p>\n</details>"
        ]
      },
      {
        title: '🟢 Level 6 — HTML5 Web APIs',
        description: 'Leveraging modern browser APIs like client localStorage, drag and drop events, user Geolocation coordinates, and web workers.',
        list: [
          "6.1 Local & Session Storage|Saving client key-value preferences inside local browser memory buffers.|// Save data\nlocalStorage.setItem(\"user_theme\", \"dark\");\n// Retrieve data\nconst theme = localStorage.getItem(\"user_theme\");",
          "6.2 Geolocation API|Requesting client coordinates (latitude & longitude) with user permission.|navigator.geolocation.getCurrentPosition(\n  (pos) => console.log(pos.coords.latitude, pos.coords.longitude),\n  (err) => console.error(err)\n);",
          "6.3 Web Workers|Delegating computationally heavy tasks to background execution threads.|// main.js\nconst worker = new Worker(\"worker.js\");\nworker.postMessage(\"start\");\nworker.onmessage = (e) => console.log(e.data);",
          "6.4 Drag & Drop API|Making elements draggable and registering target drop drop zones.|<div draggable=\"true\" ondragstart=\"event.dataTransfer.setData('text', event.target.id)\">\n  Drag me!\n</div>"
        ]
      },
      {
        title: '🟢 Level 7 — Search Engine Optimization (SEO)',
        description: 'Managing search metadata, crawl instructions, canonical links, Open Graph social cards, and JSON-LD structured data formats.',
        list: [
          "7.1 Meta & Canonical|Configuring page title, descriptions, robots directions, and canonical duplicate indicators.|<meta name=\"description\" content=\"Detailed guide on setup workflows.\">\n<link rel=\"canonical\" href=\"https://example.com/page\">",
          "7.2 Open Graph & Twitter|Providing custom title, descriptions, and banner images for social media platforms.|<meta property=\"og:title\" content=\"Setup CLI Developer Guide\">\n<meta property=\"og:image\" content=\"https://example.com/banner.jpg\">\n<meta name=\"twitter:card\" content=\"summary_large_image\">",
          "7.3 JSON-LD Structured Data|Embedding schema markup contexts to tell crawlers how to render rich rich search results.|<script type=\"application/ld+json\">\n{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"WebSite\",\n  \"name\": \"Setup CLI\"\n}\n</script>"
        ]
      },
      {
        title: '🟢 Level 8 — Web Accessibility (A11Y)',
        description: 'Enforcing web accessibility utilizing ARIA labels, interactive focus boundaries, semantic tags, and skip links.',
        list: [
          "8.1 ARIA Labels & Roles|Adding accessible labels and role modifiers to generic tags for screen reader navigation.|<button aria-label=\"Close menu\" role=\"button\">\n  &times;\n</button>",
          "8.2 Focus & Skip Links|Setting skip links to bypass navigation and managing focus index coordinates.|<a href=\"#main-content\" class=\"skip-link\">Skip to content</a>\n<input type=\"text\" tabindex=\"0\">"
        ]
      },
      {
        title: '🟢 Level 9 — Performance Optimization',
        description: 'Speeding up asset loads using asset preloading, prefetching, DNS preconnect, and script loading flags (async/defer).',
        list: [
          "9.1 Resource Hints|Telling the browser to fetch resources early using preload, prefetch, and dns-prefetch.|<link rel=\"preload\" href=\"font.woff2\" as=\"font\" type=\"font/woff2\" crossorigin>\n<link rel=\"dns-prefetch\" href=\"https://api.example.com\">",
          "9.2 Script Load Flags|Differentiating execution flows using default, async, and defer script loadings.|<!-- Execute script after document is parsed -->\n<script defer src=\"main.js\"></script>\n<!-- Execute script asynchronously as soon as it is fetched -->\n<script async src=\"tracker.js\"></script>"
        ]
      },
      {
        title: '🟢 Level 10 — Responsive viewports',
        description: 'Fluid layout concepts, mobile-first design, viewport settings, and media sizing wrappers.',
        list: [
          "10.1 Viewport Configuration|Using the meta viewport tag to adjust layout sizing ratios correctly across mobile screens.|<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=5.0\">"
        ]
      },
      {
        title: '🟢 Level 11 — SVG Graphics',
        description: 'Embedding scalable vector paths, circles, rectangles, styling gradients, animations, and icons.',
        list: [
          "11.1 Scalable Vectors (SVG)|Drawing inline vector components, shapes, and complex paths.|<svg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\">\n  <circle cx=\"50\" cy=\"50\" r=\"40\" fill=\"#8b5cf6\" />\n</svg>"
        ]
      },
      {
        title: '🟢 Level 12 — HTML5 Canvas Elements',
        description: 'Drawing 2D shapes, texts, render operations, dynamic sprite sheets, and gaming animation frames.',
        list: [
          "12.1 Canvas 2D Context|Initializing canvas elements and rendering shapes programmatically via script.|<canvas id=\"my-canvas\" width=\"200\" height=\"200\"></canvas>\n<script>\n  const ctx = document.getElementById(\"my-canvas\").getContext(\"2d\");\n  ctx.fillStyle = \"blue\";\n  ctx.fillRect(10, 10, 150, 100);\n</script>"
        ]
      },
      {
        title: '🟢 Level 13 — Document Metadata',
        description: 'Applying document tags, content locales, system themes, manifest paths, and device wrappers.',
        list: [
          "13.1 Metadata & Theme|Declaring charset systems, languages, mobile theme color, and application manifest icons.|<meta name=\"theme-color\" content=\"#8b5cf6\">\n<link rel=\"manifest\" href=\"/manifest.json\">"
        ]
      },
      {
        title: '🟢 Level 14 — Progressive Web Apps (PWA)',
        description: 'Scaffolding manifests, managing offline service workers, and configuring app installers.',
        list: [
          "14.1 Service Worker Registrations|Registering service worker files to support offline caching and background syncs.|<script>\n  if (\"serviceWorker\" in navigator) {\n    navigator.serviceWorker.register(\"/sw.js\");\n  }\n</script>"
        ]
      },
      {
        title: '🟢 Level 15 — HTML Web Components',
        description: 'Scaffolding modular custom elements, shadowing DOM boundaries, and using HTML templates/slots.',
        list: [
          "15.1 Custom Web Components|Creating custom components with templates, slot placeholders, and Shadow DOM.|<template id=\"card-template\">\n  <style>.card { color: red; }</style>\n  <div class=\"card\"><slot name=\"title\">Title</slot></div>\n</template>"
        ]
      },
      {
        title: '🟢 Level 16 — Embedded Content',
        description: 'Working with object, embed, iframe, picture, and source element wrappers.',
        list: [
          "16.1 Native Embeds|Using embed and object tags to render media or external assets.|<object data=\"document.pdf\" type=\"application/pdf\" width=\"100%\" height=\"400\">\n  <p>PDF cannot be rendered.</p>\n</object>"
        ]
      },
      {
        title: '🟢 Level 17 — Developer Best Practices',
        description: 'Structuring clean folders, maintaining conventions, writing descriptive comments, and organizing reusable HTML modules.',
        list: [
          "17.1 Clean Markup Standards|Writing self-descriptive comments, tags, indentation, and clean markup hierarchy.|<!-- Recommended: Use lowercase tags and close all elements -->\n<div class=\"card\">\n  <p>Hello World</p>\n</div>"
        ]
      },
      {
        title: '🟢 Level 18 — Client Side Security',
        description: 'Protecting websites against Cross-Site Scripting (XSS) attacks, sandboxing, and configuring Content Security Policies.',
        list: [
          "18.1 XSS & Sandboxing|Mitigating script injection risks using strict sandbox wrappers on iframes.|<iframe src=\"https://untrusted-source.com\" sandbox=\"allow-scripts\">\n</iframe>"
        ]
      },
      {
        title: '🟢 Level 19 — Browser Feature Detection',
        description: 'Detecting modern API capabilities and building backward compatibility polyfills.',
        list: [
          "19.1 Feature Detection|Checking browser support for storage, workers, or canvas APIs.|if (window.Worker) {\n  console.log(\"Web Workers Supported\");\n} else {\n  console.log(\"Fallback to main thread\");\n}"
        ]
      },
      {
        title: '🟢 Level 20 — Interview Prep & FAQ',
        description: 'Typical interview tasks, answers on semantic tags, accessibility, performance, and HTML5 APIs.',
        list: [
          "20.1 Common Questions|Interview Q&A: Explain the difference between block elements and inline elements.|// Answer: Block elements take up the full container width (e.g. div, p);\n// Inline elements only take up their text content width (e.g. span, strong)."
        ]
      },
      {
        title: '📚 HTML Element Reference',
        description: 'An ultimate cheatsheet categorizing standard Document, Text, Layout, Media, Form, and Interactive elements.',
        list: [
          "Document Elements|html, head, body, title, meta, link, script tags.|<!-- HTML document nodes -->",
          "Text Formatting|h1-h6 headings, p paragraphs, span, div sections.|<!-- Text containers -->",
          "Layout Elements|header, nav, main, section, article, aside, footer.|<!-- Layout layout nodes -->",
          "Media Elements|img, picture, audio, video, canvas, svg.|<!-- Media nodes -->"
        ]
      },
      {
        title: '💼 Practice Projects Catalog',
        description: 'Exercises to build your HTML knowledge from beginner card panels up to complex multipage app wireframes.',
        list: [
          "Beginner Projects|Build a Personal Portfolio page, a resume layout, or product cards.|<!-- Practice Task: Create index.html representing your developer bio -->",
          "Intermediate Projects|Scaffold login forms, survey inputs, or dynamic layout grids.|<!-- Practice Task: Form validation and flex wrap dashboard -->",
          "Advanced Projects|Design a documentation website, PWA application dashboard, or CMS pages.|<!-- Practice Task: Complete accessible corporate landing template -->"
        ]
      },
      {
        title: '🟢 Level 1 — CSS Fundamentals',
        description: 'Introduction to CSS syntax, history, best practices, and integration methods (inline, internal, external).',
        list: [
          "1.1 CSS Introduction|CSS (Cascading Style Sheets) styles markup. Features include layouts, colors, responsive queries, and animations.|/* CSS Syntax */\nbody {\n  background: #0f172a;\n  color: #f8fafc;\n}",
          "1.2 Adding CSS|Inline, Internal, External, and Import stylesheets.|<!-- External Link -->\n<link rel=\"stylesheet\" href=\"styles.css\">",
          "1.3 Selectors|Universal (*), Element, Class, ID, and Group selectors.|/* Class & ID Selectors */\n.btn { padding: 8px; }\n#main-header { border-bottom: 1px solid; }"
        ]
      },
      {
        title: '🟢 Level 2 — CSS Selectors',
        description: 'Advanced targeting including attribute matching, structural combinators, state pseudo-classes, and pseudo-elements.',
        list: [
          "2.1 Attribute Selectors|Match elements based on the presence or value of attributes.|a[href*=\"secure\"] {\n  color: #10b981;\n}",
          "2.2 Combinators|Descendant (space), Child (>), Adjacent Sibling (+), and General Sibling (~).|div > p {\n  margin-bottom: 1rem;\n}",
          "2.3 Pseudo Classes|Style states like :hover, :focus, :active, :nth-child(), and :has().|button:hover {\n  filter: brightness(1.1);\n}",
          "2.4 Pseudo Elements|Style parts of an element using ::before, ::after, ::first-line.|div::before {\n  content: \"⚡ \";\n}"
        ]
      },
      {
        title: '🟢 Level 3 — Colors & Units',
        description: 'Mastering color spaces (HEX, RGB, HSL, currentColor) and absolute vs relative measurement units.',
        list: [
          "3.1 CSS Colors|Named, HEX, RGB, HSL, RGBA, HSLA, currentColor, and transparent.|color: hsla(220, 15%, 60%, 0.8);",
          "3.2 CSS Units|Absolute (px) and Relative (em, rem, %, vh, vw, vmin, vmax, ch).|font-size: 1.25rem;\nwidth: 50vw;"
        ]
      },
      {
        title: '🟢 Level 4 — Typography',
        description: 'Configuring fonts, sizes, text transformations, decoration lines, spacing controls, text shadows, and word wrapping.',
        list: [
          "4.1 Typography|font-family, size, weight, line-height, text-align, text-shadow, and white-space.|h1 {\n  font-family: 'Outfit', sans-serif;\n  line-height: 1.2;\n  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);\n}"
        ]
      },
      {
        title: '🟢 Level 5 — Box Model',
        description: 'Managing dimensions, padding borders, margins, outlines, box-sizing, and overflow scroll states.',
        list: [
          "5.1 Box Model|Handling padding, margin, border, box-sizing, and overflow.|* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}"
        ]
      },
      {
        title: '🟢 Level 6 — Backgrounds',
        description: 'Working with background-image scaling, alignment coordinate values, attachments, and CSS gradient patterns.',
        list: [
          "6.1 Backgrounds & Gradients|background-color, background-image, background-repeat, size, and CSS gradients.|.gradient-hero {\n  background: linear-gradient(135deg, #4f46e5, #9333ea);\n}"
        ]
      },
      {
        title: '🟢 Level 7 — Borders & Effects',
        description: 'Creating element borders, outline offsets, box shadows, element filtering, and backdrop-filter blends.',
        list: [
          "7.1 Borders & Filters|border-radius, box-shadow, filter, and glassmorphism backdrop-filters.|.card {\n  box-shadow: 0 4px 20px rgba(0,0,0,0.1);\n  backdrop-filter: blur(10px);\n}"
        ]
      },
      {
        title: '🟢 Level 8 — Display & Visibility',
        description: 'Configuring displays (block, inline, flex, grid, none), element visibility, opacity, and cursor interaction rules.',
        list: [
          "8.1 Display & Visibility|display (block, inline, inline-block, none), visibility, opacity, and pointer-events.|.hidden {\n  display: none;\n  pointer-events: none;\n}"
        ]
      },
      {
        title: '🟢 Level 9 — Positioning',
        description: 'Absolute coordinates, static, relative, fixed, sticky position behaviors, z-index overlays, and floats.',
        list: [
          "9.1 Positioning|static, relative, absolute, fixed, sticky, and z-index.|.sticky-nav {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}"
        ]
      },
      {
        title: '🟢 Level 10 — Flexbox',
        description: 'Setting up flex directions, cross-axis alignment, justifications, flexible spacing, and order indexes.',
        list: [
          "10.1 Flexbox Layout|display: flex, flex-direction, justify-content, align-items, flex-wrap, and gap.|.flex-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}"
        ]
      },
      {
        title: '🟢 Level 11 — CSS Grid',
        description: 'Two-dimensional templates, fractional layout sizes, grid gap spacings, auto-fit repeat templates, and minmax boundaries.',
        list: [
          "11.1 Grid Layout|display: grid, grid-template-columns, grid-template-rows, areas, minmax, auto-fit, and gap.|.grid-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n}"
        ]
      },
      {
        title: '🟢 Level 12 — Responsive Design',
        description: 'Authoring responsive media query breaks, container queries, mobile-first strategies, and responsive font heights.',
        list: [
          "12.1 Responsive Design|Media queries, breakpoints, mobile-first design, and container queries.|@media (min-width: 768px) {\n  .sidebar {\n    display: block;\n  }\n}"
        ]
      },
      {
        title: '🟢 Level 13 — Animations',
        description: 'Applying ease transitions, delay keyframes, animation iterations, play states, and timing functions.',
        list: [
          "13.1 Transitions & Keyframes|transition-property, duration, @keyframes, iteration-count, and easing.|@keyframes pulse {\n  0% { transform: scale(1); }\n  50% { transform: scale(1.05); }\n  100% { transform: scale(1); }\n}"
        ]
      },
      {
        title: '🟢 Level 14 — Transformations',
        description: 'Manipulating 2D/3D scales, translations, rotates, transforms origins, skew factors, and perspectives.',
        list: [
          "14.1 Transformations|translate(), rotate(), scale(), skew(), transform-origin, and 3D perspective.|.rotate-card {\n  transform: rotateY(180deg);\n  perspective: 1000px;\n}"
        ]
      },
      {
        title: '🟢 Level 15 — Variables',
        description: 'Configuring CSS custom properties at root scopes, var mappings, and fallback values.',
        list: [
          "15.1 CSS Variables|Declaring variables inside :root, using var(), and configuring fallbacks.|:root {\n  --primary: #6366f1;\n}\n.btn {\n  background: var(--primary, #3b82f6);\n}"
        ]
      },
      {
        title: '🟢 Level 16 — Functions',
        description: 'Programmatic calculations using calc(), clamping fluid sizes, selecting min/max nodes, and color functions.',
        list: [
          "16.1 CSS Functions|calc(), clamp(), min(), max(), minmax(), rgb(), and hsl().|width: calc(100% - 2rem);\nfont-size: clamp(1rem, 2.5vw, 2rem);"
        ]
      },
      {
        title: '🟢 Level 17 — Modern CSS',
        description: 'Leveraging nested syntax selectors, cascade layers (@layer), scope rules, logical parameters, and snap coordinates.',
        list: [
          "17.1 Modern CSS|CSS Nesting, Cascade Layers (@layer), @scope, scroll snap, scroll behavior.|@layer components {\n  .card {\n    margin: 1rem;\n  }\n}"
        ]
      },
      {
        title: '🟢 Level 18 — CSS Architecture',
        description: 'Adopting modular structural styles using BEM notation, OOCSS guidelines, SMACSS categories, ITCSS, and Atomic properties.',
        list: [
          "18.1 CSS Architecture|BEM, OOCSS, SMACSS, ITCSS, and Atomic CSS methodologies.|/* BEM Syntax example */\n.card { }\n.card__header { }\n.card__header--active { }"
        ]
      },
      {
        title: '🟢 Level 19 — CSS Frameworks',
        description: 'Leveraging component/utility styles with Tailwind CSS, Bootstrap grid systems, Bulma, Foundation, and material guidelines.',
        list: [
          "19.1 Frameworks|Sleek utilities with Bootstrap, Tailwind CSS, Bulma, Foundation, and Materialize.|<!-- Tailwind utilities -->\n<div class=\"flex items-center space-x-2 bg-indigo-600 text-white p-4 rounded-xl\">\n</div>"
        ]
      },
      {
        title: '🟢 Level 20 — Preprocessors',
        description: 'Writing preprocessor markup styles with Sass/SCSS nesting, variables, mixins, imports, and inheritance trees.',
        list: [
          "20.1 Preprocessors|Adding variables, nested rules, mixins, imports, and functions in Sass, SCSS, and Less.|/* SCSS mixin */\n@mixin flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}"
        ]
      },
      {
        title: '🟢 Level 21 — Performance',
        description: 'Configuring critical fold CSS rules, code minifications, removing unused classes, and loading flags.',
        list: [
          "21.1 CSS Performance|Critical CSS paths, minification, removing unused classes, and load strategies.|/* Minify and load css asynchronously */\n<link rel=\"preload\" href=\"styles.css\" as=\"style\">"
        ]
      },
      {
        title: '🟢 Level 22 — Accessibility',
        description: 'Enabling readable focus rings, high contrast visual filters, and media query reduced motion preferences.',
        list: [
          "22.1 CSS Accessibility|Focus outline styles, high contrast themes, and reduced motion queries.|@media (prefers-reduced-motion: reduce) {\n  * {\n    animation-duration: 0.01ms !important;\n    transition-duration: 0.01ms !important;\n  }\n}"
        ]
      },
      {
        title: '🟢 Level 23 — CSS for Components',
        description: 'Component stylesheets for buttons, UI cards, form selectors, tables, navigation nodes, modal frames, and skeleton screens.',
        list: [
          "23.1 CSS Components|Buttons, cards, input forms, tables, navbars, sidebars, modals, skeleton loaders.|.skeleton {\n  background: linear-gradient(90deg, #1e293b 25%, #334155 50%, #1e293b 75%);\n  background-size: 200% 100%;\n  animation: loading 1.5s infinite;\n}"
        ]
      },
      {
        title: '🟢 Level 24 — Visual Effects',
        description: 'Developing glassmorphic cards, neumorphism shadows, glowing borders, parallax backgrounds, and custom scroll bars.',
        list: [
          "24.1 Glassmorphism & Effects|Neumorphism, glow shadows, blur backdrops, parallax scrollings, scrollbars.|.glass {\n  background: rgba(255, 255, 255, 0.05);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}"
        ]
      },
      {
        title: '🟢 Level 25 — Interview Preparation',
        description: 'Typical CSS interview questions, specificities, and layout challenges.',
        list: [
          "25.1 Interview Prep|Common CSS interview questions, specificities, and layout challenges.|/* Specificity calculation: Inline (1000) > ID (100) > Class (10) > Element (1) */"
        ]
      },
      {
        title: '📚 CSS Property Reference',
        description: 'Ultimate cheatsheet categorizing Layout, Sizing, Spacing, Typography, Backgrounds, Borders, Effects, Flexbox, Grid, Animations, and Responsive properties.',
        list: [
          "Layout Properties|display, position, float, clear, z-index, overflow, aspect-ratio.|/* Layout elements */",
          "Spacing Properties|margin, padding, gap, columns.|/* Layout spacing */",
          "Typography Properties|font, text, line-height, letter-spacing.|/* Font settings */",
          "Effects Properties|box-shadow, filter, backdrop-filter, opacity.|/* Visual filters */"
        ]
      },
      {
        title: '💼 CSS Practice Projects',
        description: 'Exercises to build your CSS knowledge from profile cards to advanced admin dashboard screens and design systems.',
        list: [
          "Beginner Projects|Build a Personal Profile Card, Login Form, Pricing Table, or Navigation Bar.|/* Task: Styled bio card layout */",
          "Intermediate Projects|Scaffold a full blog layout grid, dashboard UI elements, or modern portfolio pages.|/* Task: CSS Grid & Flex dashboard */",
          "Advanced Projects|Develop an enterprise SaaS landing page, Kanban Trello-style board, or component library.|/* Task: Pure CSS responsive design system */"
        ]
      }
    ],
    build: [],
    troubleshooting: [],
    usefulLinks: [
      { label: 'MDN Web Docs (HTML)', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { label: 'MDN Web Docs (CSS)', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { label: 'MDN Web Docs (JS)', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' }
    ],
    commonErrors: [
      { error: 'Uncaught TypeError: Cannot read properties of null', solution: 'Ensure the DOM element is fully loaded before selecting it (use DOMContentLoaded event or defer script tags).' }
    ],
    bestPractices: [
      'Write clean, semantic HTML5 elements for screen-reader accessibility (A11y).',
      'Prefer CSS Grid and Flexbox over absolute positioning rules.',
      'Always utilize strict comparison triggers (===) instead of soft comparison checks (==).'
    ]
  },
  frontend: {
    id: 'frontend',
    name: 'Frontend Commands',
    category: 'Frontend',
    overview: 'A consolidated, searchable directory of setup, build, and management commands for major web frameworks and libraries.',
    requirements: [],
    installation: [],
    projectCreation: [],
    run: [
      {
        title: '⚛️ React.js CLI',
        description: 'Create, run, and compile React applications using Vite compiler setups.',
        list: [
          'Create Vite React (TS)|Initialize a Vite React TypeScript boilerplate app|npm create vite@latest my-app -- --template react-ts',
          'Create Vite React (JS)|Initialize a Vite React JavaScript boilerplate app|npm create vite@latest my-app -- --template react',
          'Run Dev Server|Start the Vite development web server locally|npm run dev',
          'Run on Specific Port|Start the dev server on a designated port|npm run dev -- --port 8080',
          'Run & Open Browser|Start the dev server and open the app in the browser|npm run dev -- --open',
          'Build Production|Compile production optimized build directory|npm run build',
          'Preview Build|Preview the compiled production assets locally|npm run preview',
          'Install Tailwind CSS|Install Tailwind and initialize postCSS configuration|npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p',
          'Install React Router|Install React Router DOM for routing support|npm install react-router-dom',
          'Install Redux Toolkit|Install Redux Toolkit and React-Redux for state management|npm install @reduxjs/toolkit react-redux',
          'Install Zustand|Install Zustand for lightweight, fast state management|npm install zustand',
          'Install Lucide Icons|Install Lucide React icon package|npm install lucide-react',
          'Install Shadcn UI|Initialize shadcn/ui configuration in React project|npx shadcn@latest init',
          'Install Axios|Install Axios HTTP client library|npm install axios',
          'Install Vitest (Unit Testing)|Install Vitest and React Testing Library|npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom @vitejs/plugin-react',
          'Run Vitest Tests|Execute Unit Tests with Vitest test runner|npx vitest',
          'Run ESLint Linting|Validate codebase for code style and syntax errors|npm run lint',
          'Format with Prettier|Format all source files utilizing Prettier|npx prettier --write "src/**/*.{js,jsx,ts,tsx,css,md}"',
          'Check Outdated Deps|List outdated node module dependencies|npm outdated',
          'Bundle Size Analyzer|Install Rollup Visualizer to inspect bundle composition|npm install -D rollup-plugin-visualizer',
          'Deploy gh-pages|Deploy React application to GitHub Pages hosting|npm install -D gh-pages && npm run build && npx gh-pages -d dist',
          'Clean NPM Reinstall|Force clear NPM cache and clean reinstall all dependencies|rm -rf node_modules package-lock.json && npm cache clean --force && npm install'
        ]
      },
      {
        title: '⏭️ Next.js App CLI',
        description: 'Enterprise React framework development, server side rendering, and compile tasks.',
        list: [
          'Create Next.js (Interactive)|Run interactive create-next-app initialization prompt|npx create-next-app@latest my-next-app',
          'Create Next.js (Flags)|Provision Next.js project with TypeScript, Tailwind, App Router, Src dir, and Import alias|npx create-next-app@latest my-next-app --typescript --tailwind --app --src-dir --import-alias "@/*" --eslint',
          'Run Dev Server|Start Next.js dev server with hot module reloading|npm run dev',
          'Run on Custom Port|Start Next.js development server on port 8080|npm run dev -- -p 8080',
          'Build Production|Compile Next.js production optimized builds|npm run build',
          'Start Prod Server|Launch built production server locally on default port 3000|npm run start',
          'Start Prod on Port|Launch built production server on port 8080|npm run start -- -p 8080',
          'Static HTML Export|Compile and export project to static HTML files (output: export)|npm run build',
          'Install Shadcn UI|Initialize shadcn/ui configuration for Next.js App Router|npx shadcn@latest init',
          'Install Auth.js (Next-Auth)|Install Next-Auth package for user authentication|npm install next-auth@beta',
          'Install Prisma ORM|Install Prisma devDependency and client|npm install prisma --save-dev && npx prisma init',
          'Prisma DB Pull|Introspect schema from the database|npx prisma db pull',
          'Prisma Migrations|Generate and apply database migration schema|npx prisma migrate dev --name init',
          'Prisma Studio|Open interactive local database viewer GUI|npx prisma studio',
          'Install Next-Themes|Install dark mode theme toggle support for Next.js|npm install next-themes',
          'Install Bundle Analyzer|Install next bundle analyzer package|npm install @next/bundle-analyzer',
          'TypeScript Typecheck|Run TypeScript compiler check on all code files|npx tsc --noEmit',
          'Run ESLint check|Run linter diagnostics across all files|npm run lint',
          'Format with Prettier|Format all files utilizing Prettier|npx prettier --write "src/**/*.{js,jsx,ts,tsx,css,json}"',
          'Clear Next Cache|Wipe Next.js build cache folder and restart development server|rm -rf .next && npm run dev',
          'Clean NPM Reinstall|Wipe node_modules, cache, and lockfile then reinstall|rm -rf node_modules package-lock.json .next && npm cache clean --force && npm install'
        ]
      },
      {
        title: '🟢 Vue.js CLI',
        description: 'Scaffold and run progressive client applications.',
        list: [
          'Create Vue App|Run interactive Vue project configuration tool|npm create vue@latest',
          'Create Vue via Vite|Initialize Vue framework with Vite and TypeScript|npm create vite@latest my-vue-app -- --template vue-ts',
          'Run Dev Server|Launch local dev server with hot module updates|npm run dev',
          'Build Production|Compile optimized production assets|npm run build'
        ]
      },
      {
        title: '⛰️ Nuxt.js App CLI',
        description: 'Universal Vue framework full-stack setup tasks.',
        list: [
          'Create Nuxt App|Initialize a fresh Nuxt application scaffolding|npx nuxi@latest init my-nuxt-app',
          'Run Dev Server|Launch Nuxt local server and open port automatically|npm run dev -- -o',
          'Build Production|Compile Nuxt app for server-side hosting distributions|npm run build',
          'Preview Build|Run compiled local server production output|node .output/server/index.mjs',
          'Reset Nuxt Cache|Remove build caches, outputs, modules, and reinstall|rm -rf .nuxt .output node_modules && npm install'
        ]
      },
      {
        title: '🅰️ Angular CLI',
        description: 'Enterprise structural application platform cli commands.',
        list: [
          'Install CLI Globally|Install Angular cli tooling globally|npm install -g @angular/cli',
          'Create Angular App|Create Angular app with Routing & Server Side Rendering|ng new my-app --style css --routing --ssr',
          'Run Dev Server|Start Angular dev server on local port|ng serve',
          'Build Production|Compile production-ready application bundles|ng build',
          'Clear Angular Cache|Clean dev cache and rebuild project dependencies|ng cache clean && rm -rf .angular dist node_modules && npm install'
        ]
      },
      {
        title: '⚡ SvelteKit CLI',
        description: 'Extremely fast compiling Svelte framework commands.',
        list: [
          'Create Svelte App|Initialize Svelte project template boilerplate|npm create svelte@latest my-svelte-app',
          'Run Dev Server|Start SvelteKit development web server and open browser|npm run dev -- --open',
          'Build Production|Compile production optimized bundles|npm run build',
          'Sync Svelte Types|Synchronize SvelteKit auto-generated type bindings|npx svelte-kit sync'
        ]
      },
      {
        title: '🟦 SolidJS CLI',
        description: 'Vite compiling web components without Virtual DOM.',
        list: [
          'Create Solid App|Vite-based SolidJS TypeScript project setup|npm create vite@latest my-app -- --template solid-ts',
          'Run Dev Server|Start SolidJS local development server|npm run dev',
          'Build Production|Compile production bundle distributions|npm run build'
        ]
      },
      {
        title: '🎨 Tailwind CSS CLI',
        description: 'Utility styling compiler CLI configurations, plugins, and helpers.',
        list: [
          'Install Tailwind v3 (NPM)|Install Tailwind CSS, PostCSS, and Autoprefixer packages|npm install -D tailwindcss postcss autoprefixer',
          'Init Tailwind v3 Config|Create tailwind.config.js and postcss.config.js initializers|npx tailwindcss init -p',
          'Init Config (Full)|Create tailwind.config.js with all default values expanded|npx tailwindcss init --full',
          'Install Tailwind v4|Install Tailwind CSS v4 and the vite plugin integration|npm install tailwindcss@next @tailwindcss/vite@next',
          'Watch CSS CLI|Watch custom input.css and compile utility classes dynamically|npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch',
          'Minify CSS Output|Build and compress CSS payload for production deployment|npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify',
          'Install Typography|Install official typography plugin for prose layout|npm install -D @tailwindcss/typography',
          'Install Forms Plugin|Install forms plugin for default element resets|npm install -D @tailwindcss/forms',
          'Install Aspect Ratio|Install aspect-ratio utility compatibility plugin|npm install -D @tailwindcss/aspect-ratio',
          'Install Container Queries|Install container-based responsive query utility|npm install -D @tailwindcss/container-queries',
          'Install Class Sorter|Install Prettier plugin for automated Tailwind class sorting|npm install -D prettier-plugin-tailwindcss',
          'Format Class Order|Sort and format classes across files utilizing Prettier|npx prettier --write "src/**/*.tsx"',
          'Install Tailwind Merge|Install tailwind-merge and clsx for dynamic class merging|npm install tailwind-merge clsx',
          'Download Standalone CLI|Download the standalone, node-free compiled Tailwind executable|curl -sLO https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-x64 && chmod +x tailwindcss-linux-x64',
          'Run Standalone CLI|Watch and build utilizing standalone executable|./tailwindcss-linux-x64 -i input.css -o output.css --watch'
        ]
      }
    ],
    build: [],
    troubleshooting: [],
    usefulLinks: [
      { label: 'Vite documentation', url: 'https://vite.dev' },
      { label: 'Next.js documentation', url: 'https://nextjs.org' },
      { label: 'Tailwind CSS documentation', url: 'https://tailwindcss.com' }
    ],
    commonErrors: [
      { error: 'npm ERR! code ERESOLVE', solution: 'Try appending `--legacy-peer-deps` to bypass conflicting peer dependency versions.' }
    ],
    bestPractices: [
      'Keep your node_modules folder updated and run audit checks periodically.',
      'Always configure Tailwind content directories correctly to purge unused styles.'
    ]
  },
  backend: {
    id: 'backend',
    name: 'Backend Commands',
    category: 'Backend',
    overview: 'A consolidated, searchable directory of setup, run, build, and deployment commands for major backend web frameworks and runtimes.',
    requirements: [],
    installation: [],
    projectCreation: [],
    run: [
      {
        title: '🐍 Django CLI',
        description: 'High-level Python web framework setups and database migration tasks.',
        list: [
          'Install Django|Install Django library using pip|pip install django',
          'Create Project|Create virtual env and initialize project|python3 -m venv venv && source venv/bin/activate && pip install django && django-admin startproject myproject . && python manage.py startapp myapp',
          'Run Dev Server|Launch local development web server|python manage.py runserver',
          'Create Migrations|Detect database model modifications|python manage.py makemigrations',
          'Apply Migrations|Apply pending schemas to active database|python manage.py migrate',
          'Create Superuser|Initialize administrator console accounts|python manage.py createsuperuser',
          'Collect Static|Consolidate client static files for production|python manage.py collectstatic --no-input',
          'Deploy Gunicorn|Run production WSGI server instance|pip install gunicorn && gunicorn myproject.wsgi:application --bind 0.0.0.0:8000',
          'Reset DB (Dev)|Remove all migrations files and SQL database|find . -path "*/migrations/*.py" -not -name "__init__.py" -delete && rm db.sqlite3'
        ]
      },
      {
        title: '🌶️ Flask CLI',
        description: 'Micro Python web framework local runtimes and configurations.',
        list: [
          'Install Flask|Install Flask package utilizing pip installer|pip install Flask',
          'Create Minimal App|Scaffold a single file hello world application|mkdir flask-app && cd flask-app && python3 -m venv venv && source venv/bin/activate && pip install Flask && echo -e "from flask import Flask\\napp = Flask(__name__)\\n\\n@app.route(\'/\')\\ndef hello():\\n    return \'Hello!\'\\nif __name__ == \'__main__\':\\n    app.run(debug=True)" > app.py',
          'Run Dev Server|Launch local Flask server in debug mode|flask run --debug',
          'Run on custom Port|Start web listener on specific TCP port|flask run --port=8080',
          'Freeze Deps|Export installed packages to requirements.txt|pip freeze > requirements.txt',
          'Gunicorn Server|Deploy container running Gunicorn server|pip install gunicorn && gunicorn -w 4 -b 0.0.0.0:8000 app:app',
          'Enable Debug|Manually enable hot module reload parameters|export FLASK_APP=app.py && export FLASK_DEBUG=1 && flask run'
        ]
      },
      {
        title: '🟢 Node.js CLI',
        description: 'V8 JavaScript runtime executions, managers, and system environments.',
        list: [
          'Install Node (Ubuntu)|Deploy NodeSource binary package setup|curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - && sudo apt-get install -y nodejs',
          'Install Node (macOS)|Deploy Node client binaries using homebrew|brew install node',
          'Initialize Project|Create node package metadata manifest file|mkdir node-app && cd node-app && npm init -y',
          'Run JS File|Execute JavaScript file directly in runtime|node index.js',
          'Run with Watcher|Run script with hot reloading (Node 18+)|node --watch index.js',
          'Install Dependencies|Download and link package-lock.json libraries|npm install',
          'PM2 Process Run|Keep application running in background|npm install -g pm2 && pm2 start index.js --name "node-app"',
          'Clean Reinstall|Wipe node_modules folder and do clean install|rm -rf node_modules package-lock.json && npm install'
        ]
      },
      {
        title: '⚡ Express.js CLI',
        description: 'Node.js web application routing framework scripts and generators.',
        list: [
          'Install Express|Install Express.js package dependency|npm install express',
          'Scaffold Generator|Scaffold complete MVC directory boilerplate|npx express-generator --git my-express-app && cd my-express-app && npm install',
          'Start Default|Run server task defined in package.json|npm start',
          'Run with Nodemon|Run development server with active code reload|npx nodemon bin/www',
          'Production Prune|Remove development package devDependencies|npm prune --production',
          'PM2 Cluster mode|Launch application in high-availability cluster|pm2 start bin/www -i max',
          'Kill Port|Terminate process occupying default port 3000|npx kill-port 3000'
        ]
      },
      {
        title: '🐘 PHP CLI',
        description: 'Pragmatic scripting language environments and compilers.',
        list: [
          'Install PHP (Ubuntu)|Deploy standard PHP packages via apt-get|sudo apt update && sudo apt install php php-cli php-fpm php-json php-common -y',
          'Install PHP (macOS)|Deploy PHP runtime via homebrew|brew install php',
          'Quick Scaffold|Write quick info test script|mkdir php-app && cd php-app && echo "<?php phpinfo();" > index.php',
          'Start Web Server|Launch built-in lightweight PHP listener|php -S localhost:8000',
          'Execute Script|Run script file directly in terminal CLI|php index.php',
          'Syntax Lint Check|Validate PHP script files for code errors|php -l index.php',
          'Print Config|Display full php.ini parameters report|php -i'
        ]
      },
      {
        title: '🟥 Laravel CLI',
        description: 'Robust PHP MVC framework web scaffolding and database tools.',
        list: [
          'Global Installer|Install Laravel project generator CLI|composer global require laravel/installer',
          'Create Laravel Project|Create fresh Laravel framework application|laravel new my-laravel-app && cd my-laravel-app',
          'Start Server|Launch local Artisan developer web server|php artisan serve',
          'Run Migrations|Apply pending database migration schemas|php artisan migrate',
          'Optimize Caches|Cache configurations, routes, and views|php artisan config:cache && php artisan route:cache && php artisan view:cache',
          'Prod Autoloader|Optimize composer autoload mappings|composer install --no-dev --optimize-autoloader',
          'Clear Caches|Clear cached application configs and routes|php artisan optimize:clear',
          'Fix Permissions|Adjust storage write permission flags|chmod -R 775 storage bootstrap/cache'
        ]
      }
    ],
    build: [],
    troubleshooting: [],
    usefulLinks: [
      { label: 'Django Docs', url: 'https://docs.djangoproject.com' },
      { label: 'Node.js Docs', url: 'https://nodejs.org' },
      { label: 'Laravel Docs', url: 'https://laravel.com' }
    ],
    commonErrors: [
      { error: 'Address already in use', solution: 'Kill the process occupying the port (e.g. `npx kill-port 3000`) or configure a different PORT.' }
    ],
    bestPractices: [
      'Always store credentials and database keys in environment variables.',
      'Implement structured loggers and request rate-limiters.'
    ]
  },
  docker: {
    id: 'docker',
    name: 'Docker',
    category: 'DevOps',
    overview: 'Docker is a platform designed to help developers build, share, and run applications in isolated container environments, eliminating "it works on my machine" issues.',
    requirements: [
      { title: 'Linux Kernel/Docker Desktop (macOS/Windows)', code: 'docker --version' }
    ],
    installation: [
      { title: 'Ubuntu installation script', code: 'curl -fsSL https://get.docker.com -o get-docker.sh\nsudo sh get-docker.sh\nsudo usermod -aG docker $USER' }
    ],
    projectCreation: [
      { title: 'Example Dockerfile for Node.js', code: `FROM node:18-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --only=production\nCOPY . .\nEXPOSE 3000\nCMD ["npm", "start"]` }
    ],
    run: [
      { title: 'Build Image', code: 'docker build -t my-app:latest .' },
      { title: 'Run Container', code: 'docker run -d -p 8080:3000 --name my-running-app my-app:latest' },
      { title: 'List Containers', code: 'docker ps -a' },
      { title: 'Stop Container', code: 'docker stop my-running-app' }
    ],
    build: [
      { title: 'Docker Compose Build & Run', code: 'docker compose up -d --build' }
    ],
    troubleshooting: [
      { title: 'Clean unused containers, networks, and images', code: 'docker system prune -a --volumes' },
      { title: 'View logs', code: 'docker logs -f my-running-app' },
      { title: 'Shell access inside container', code: 'docker exec -it my-running-app sh' }
    ],
    commonErrors: [
      { error: 'Permission denied while trying to connect to the Docker daemon socket.', solution: 'Run `sudo usermod -aG docker $USER` and restart your terminal session.' }
    ],
    bestPractices: [
      'Use small base images like alpine or slim to reduce size and vulnerabilities.',
      'Use multi-stage builds to keep production images tiny.',
      'Leverage build cache by copying package files and installing dependencies first.',
      'Avoid running containers as root; define a non-root USER.'
    ]
  },
  git: {
    id: 'git',
    name: 'Git & GitHub',
    category: 'DevOps',
    overview: 'Git is a distributed version control system designed to handle everything from small to very large projects with speed and efficiency. GitHub is a hosting provider for Git repositories.',
    requirements: [
      { title: 'Git CLI client', code: 'git --version' }
    ],
    installation: [
      { title: 'Debian/Ubuntu', code: 'sudo apt update && sudo apt install git -y' },
      { title: 'Fedora/CentOS', code: 'sudo dnf install git -y' }
    ],
    projectCreation: [
      { title: 'Initialize Repository', code: 'git init\ngit add .\ngit commit -m "Initial commit"\ngit branch -M main\ngit remote add origin <repo_url>\ngit push -u origin main' }
    ],
    run: [
      { title: 'Check Status', code: 'git status' },
      { title: 'Create and Switch Branch', code: 'git checkout -b feature/new-page' },
      { title: 'Pull latest', code: 'git pull origin main' },
      { title: 'Stash changes', code: 'git stash\ngit stash pop' }
    ],
    build: [],
    troubleshooting: [
      { title: 'Undo last commit (keep files)', code: 'git reset --soft HEAD~1' },
      { title: 'Force discard all uncommitted changes', code: 'git reset --hard HEAD' },
      { title: 'Change commit message of last commit', code: 'git commit --amend -m "New message"' }
    ],
    commonErrors: [
      { error: 'Updates were rejected because the remote contains work that you do not have locally.', solution: 'Run `git pull origin <branch>` to fetch and merge changes before pushing, or resolve conflicts.' }
    ],
    bestPractices: [
      'Write clear, descriptive commit messages in the imperative mood.',
      'Commit often, commit early, and keep commits focused on a single logical change.',
      'Use a .gitignore file to exclude configuration, secrets, logs, and build folders.',
      'Always review your changes with `git diff` before committing.'
    ]
  },
  nginx: {
    id: 'nginx',
    name: 'Nginx',
    category: 'DevOps',
    overview: 'Nginx is a high-performance HTTP server, reverse proxy, load balancer, and mail proxy, popular for its high concurrency, performance, and low memory usage.',
    requirements: [
      { title: 'Linux Server or Container', code: 'nginx -v' }
    ],
    installation: [
      { title: 'Install on Ubuntu', code: 'sudo apt update && sudo apt install nginx -y' }
    ],
    projectCreation: [
      { title: 'Reverse Proxy Config', code: `server {\n    listen 80;\n    server_name example.com;\n\n    location / {\n        proxy_pass http://localhost:3000;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection 'upgrade';\n        proxy_set_header Host $host;\n        proxy_cache_bypass $http_upgrade;\n    }\n}` }
    ],
    run: [
      { title: 'Start Nginx', code: 'sudo systemctl start nginx' },
      { title: 'Restart Nginx', code: 'sudo systemctl restart nginx' },
      { title: 'Reload Configuration (no downtime)', code: 'sudo nginx -s reload' },
      { title: 'Test configuration syntax', code: 'sudo nginx -t' }
    ],
    build: [],
    troubleshooting: [
      { title: 'View access logs', code: 'tail -f /var/log/nginx/access.log' },
      { title: 'View error logs', code: 'tail -f /var/log/nginx/error.log' }
    ],
    commonErrors: [
      { error: 'nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)', solution: 'Another service (like Apache or another container) is running on port 80. Stop it or change Nginx ports.' }
    ],
    bestPractices: [
      'Always test configuration with `nginx -t` before reloading/restarting.',
      'Disable server tokens (server_tokens off;) to hide Nginx version from headers.',
      'Configure gzip compression to reduce size of HTML, CSS, and JS assets.',
      'Configure SSL/TLS using modern cyphers and Let\'s Encrypt.'
    ]
  },
  postgresql: {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'Databases',
    overview: 'PostgreSQL is a powerful, open-source object-relational database system with over 35 years of active development, known for reliability, feature robustness, and performance.',
    requirements: [],
    installation: [
      { title: 'Install on Ubuntu', code: 'sudo apt update && sudo apt install postgresql postgresql-contrib -y' }
    ],
    projectCreation: [
      { title: 'Log in and create database', code: 'sudo -i -u postgres psql\nCREATE DATABASE mydb;\nCREATE USER myuser WITH PASSWORD \'mypassword\';\nGRANT ALL PRIVILEGES ON DATABASE mydb TO myuser;' }
    ],
    run: [
      { title: 'Start Postgres Service', code: 'sudo systemctl start postgresql' },
      { title: 'Check service status', code: 'sudo systemctl status postgresql' },
      { title: 'Connect to db via psql CLI', code: 'psql -U myuser -d mydb -h 127.0.0.1 -W' }
    ],
    build: [],
    troubleshooting: [
      { title: 'Reload settings', code: 'sudo systemctl reload postgresql' },
      { title: 'Reset passwords in psql', code: 'ALTER USER username WITH PASSWORD \'new_password\';' }
    ],
    commonErrors: [
      { error: 'Connection refused. Is the server running on host "localhost" (127.0.0.1) and accepting TCP/IP connections on port 5432?', solution: 'Ensure PostgreSQL service is running. If connecting remotely, check listen_addresses in postgresql.conf and pg_hba.conf configurations.' }
    ],
    bestPractices: [
      'Never run connections as the root postgres superuser in application settings.',
      'Set up connection pooling (using PgBouncer) for scaling connection-heavy apps.',
      'Use indexes strategically, especially on frequently queried columns and foreign keys.',
      'Schedule automated database backups using pg_dump.'
    ]
  },
  kubernetes: {
    id: 'kubernetes',
    name: 'Kubernetes',
    category: 'DevOps',
    overview: 'Kubernetes (K8s) is an open-source system for automating deployment, scaling, and management of containerized applications.',
    requirements: [
      { title: 'kubectl CLI tool', code: 'kubectl version --client' }
    ],
    installation: [
      { title: 'Install kubectl (Debian/Ubuntu)', code: 'sudo apt-get update && sudo apt-get install -y apt-transport-https ca-certificates curl\ncurl -fsSL https://pkgs.k8s.io/core:/stable:/v1.28/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-archive-keyring.gpg\necho "deb [signed-by=/etc/apt/keyrings/kubernetes-archive-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.28/deb/ /" | sudo tee /etc/apt/sources.list.d/kubernetes.list\nsudo apt-get update && sudo apt-get install -y kubectl' }
    ],
    projectCreation: [
      { title: 'Create deployment YAML', code: `apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: my-app-deployment\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: my-app\n  template:\n    metadata:\n      labels:\n        app: my-app\n    spec:\n      containers:\n      - name: my-app\n        image: my-app-image:v1\n        ports:\n        - containerPort: 3000` }
    ],
    run: [
      { title: 'Apply deployment configuration', code: 'kubectl apply -f deployment.yaml' },
      { title: 'Get Running Pods', code: 'kubectl get pods' },
      { title: 'Get Services', code: 'kubectl get services' },
      { title: 'Describe Pod details', code: 'kubectl describe pod <pod-name>' }
    ],
    build: [],
    troubleshooting: [
      { title: 'View pod logs', code: 'kubectl logs -f <pod-name>' },
      { title: 'Exec into running pod', code: 'kubectl exec -it <pod-name> -- /bin/sh' },
      { title: 'Check events in namespace', code: 'kubectl get events --sort-by=\'.metadata.creationTimestamp\'' }
    ],
    commonErrors: [
      { error: 'ErrImagePull / ImagePullBackOff', solution: 'The cluster cannot pull the container image. Check image name, tag, public repository configuration, or registry pull secrets.' }
    ],
    bestPractices: [
      'Define resource requests and limits (CPU/Memory) for all containers.',
      'Configure Liveness and Readiness Probes to keep traffic away from unready services.',
      'Use Namespaces to isolate projects and environments (Dev, Staging, Prod).',
      'Store configurations in ConfigMaps and sensitive credentials in Secrets.'
    ]
  },
  aws: {
    id: 'aws',
    name: 'AWS (EC2 & S3)',
    category: 'Cloud',
    overview: 'Amazon Web Services (AWS) provides reliable, scalable, and inexpensive cloud computing services on a pay-as-you-go basis.',
    requirements: [
      { title: 'AWS CLI installed', code: 'aws --version' }
    ],
    installation: [
      { title: 'Configure CLI credentials', code: 'aws configure' }
    ],
    projectCreation: [
      { title: 'Create S3 Bucket via CLI', code: 'aws s3 mb s3://my-unique-bucket-name-12345 --region us-east-1' }
    ],
    run: [
      { title: 'Sync local files to S3', code: 'aws s3 sync ./dist s3://my-unique-bucket-name-12345' },
      { title: 'List EC2 Instances', code: 'aws ec2 describe-instances --query "Reservations[*].Instances[*].[InstanceId,State.Name,PublicIpAddress]" --output table' }
    ],
    build: [],
    troubleshooting: [
      { title: 'Check AWS authentication status', code: 'aws sts get-caller-identity' }
    ],
    commonErrors: [
      { error: 'An error occurred (AccessDenied) when calling the PutObject operation.', solution: 'Ensure the IAM user executing the command has `s3:PutObject` permission in their policy and the bucket policy allows writes.' }
    ],
    bestPractices: [
      'Enable Multi-Factor Authentication (MFA) on the root account and administrative accounts.',
      'Never use the root AWS account for daily developer tasks; use IAM users/roles.',
      'Use Amazon S3 Bucket Policies to block public access unless hosting static sites.',
      'Utilize AWS Budget alerts to monitor costs and prevent billing surprises.'
    ]
  },
  linux: {
    id: 'linux',
    name: 'Linux Commands',
    category: 'Linux',
    overview: 'A comprehensive, interactive reference directory of standard Linux command utilities organized by administrative category.',
    requirements: [],
    installation: [],
    projectCreation: [],
    run: [
      {
        title: '📁 File & Directory Management',
        description: 'Navigate and manage filesystem folders and paths.',
        list: [
          'pwd|Print current working directory path|pwd',
          'ls|List directory contents|ls -lah',
          'tree|List directory contents recursively in tree structure|tree -L 2',
          'cd|Change working directory|cd /var/log',
          'mkdir|Create a new directory|mkdir -p src/components',
          'rmdir|Remove empty directory|rmdir old_logs',
          'touch|Create empty file or update timestamps|touch index.js',
          'cp|Copy files and directories|cp -r src/ backup/',
          'mv|Move or rename files and directories|mv config.json.bak config.json',
          'rm|Remove files or directories|rm -rf /tmp/cache',
          'find|Find files and directories recursively|find . -name "*.log"',
          'locate|Find files by database index lookup|locate nginx.conf',
          'stat|Display file status details|stat app.log',
          'file|Determine file type format|file archive.tar.gz',
          'basename|Strip directory path from filename|basename /usr/bin/python',
          'dirname|Extract directory path from file path|dirname /usr/bin/python',
          'realpath|Resolve absolute path of file|realpath ../index.js'
        ]
      },
      {
        title: '📄 File Viewing & Editing',
        description: 'Read, parse, and edit file contents in terminal.',
        list: [
          'cat|Concatenate and display file content|cat /etc/hosts',
          'tac|Display file content in reverse order (bottom-up)|tac logs.txt',
          'less|Page through file content interactively|less /var/log/syslog',
          'more|Page through file content page by page|more list.txt',
          'head|Display the first lines of a file|head -n 15 app.log',
          'tail|Display the last lines of a file|tail -n 20 -f app.log',
          'nano|Easy-to-use terminal text editor|nano settings.conf',
          'vim|Advanced modal terminal text editor|vim config.yaml',
          'vi|Standard UNIX visual text editor|vi index.html',
          'emacs|Extensible and customizable text editor|emacs main.c',
          'bat|Clone of cat command with syntax highlighting|bat --style=numbers script.sh',
          'xxd|Make a hex dump of a file or do the reverse|xxd binary.bin'
        ]
      },
      {
        title: '🔍 Search & Text Processing',
        description: 'Process and search text content or streams using regex filters.',
        list: [
          'grep|Search for pattern in files using basic regex|grep -rnw "." -e "api_key"',
          'egrep|Search for pattern using extended regex|egrep "ERROR|WARN" syslog',
          'fgrep|Search for fixed string patterns quickly|fgrep "127.0.0.1" /etc/hosts',
          'awk|Pattern scanning and text processing language|awk \'{print $1, $3}\' data.txt',
          'sed|Stream editor for filtering and transforming text|sed -i "s/http/https/g" config.js',
          'cut|Remove or extract sections from lines of files|cut -d ":" -f 1 /etc/passwd',
          'sort|Sort lines of text files|sort -u names.txt',
          'uniq|Report or filter out repeated lines in a file|uniq -c sorted.txt',
          'tr|Translate, squeeze, or delete characters|echo "hello" | tr "a-z" "A-Z"',
          'wc|Print newline, word, and byte counts for files|wc -l index.html',
          'diff|Compare files line by line|diff file1.txt file2.txt',
          'comm|Compare two sorted files line by line|comm -12 file1.txt file2.txt',
          'paste|Merge lines of files side-by-side|paste file1.txt file2.txt',
          'join|Join lines of two files on a common field|join file1.txt file2.txt',
          'split|Split a file into fixed-size pieces|split -b 10M backup.tar.gz part_',
          'csplit|Split a file into sections determined by pattern|csplit data.txt "/%%/" "{*}"',
          'strings|Print printable characters from a binary file|strings /usr/bin/ls'
        ]
      },
      {
        title: '📦 Package Management',
        description: 'Install, update, remove, and query system applications categorywise.',
        list: [
          'apt|Install and update packages (Debian/Ubuntu)|sudo apt update && sudo apt install curl -y',
          'apt-get|Legacy command-line tool for package handling|sudo apt-get purge apache2',
          'dpkg|Low-level Debian package installer|sudo dpkg -i package.deb',
          'dnf|Next-generation package manager (Fedora/RHEL)|sudo dnf install git',
          'yum|Legacy package manager (RHEL/CentOS)|sudo yum update',
          'rpm|Low-level RPM package manager (RHEL/Fedora)|sudo rpm -ivh package.rpm',
          'pacman|Lightweight package manager (Arch Linux)|sudo pacman -Syu',
          'snap|Universal sandboxed app package manager|sudo snap install discord',
          'flatpak|Universal sandboxed desktop app package manager|flatpak install flathub org.gimp.GIMP'
        ]
      },
      {
        title: '👤 User & Group Management',
        description: 'Administer system user accounts, credentials, and access groups.',
        list: [
          'whoami|Print the current active user name|whoami',
          'id|Print user and group IDs (UID/GID)|id $USER',
          'users|Print usernames of users currently logged in|users',
          'who|Show active logged in sessions|who -h',
          'w|Show active user sessions and tasks|w',
          'useradd|Create a new user account|sudo useradd -m -s /bin/bash newuser',
          'usermod|Modify an existing user account|sudo usermod -aG docker,sudo devuser',
          'userdel|Delete a user account|sudo userdel -r olduser',
          'passwd|Change user account password|sudo passwd devuser',
          'groupadd|Create a new user group|sudo groupadd devteam',
          'groupmod|Modify group properties|sudo groupmod -n developer devteam',
          'groupdel|Delete a user group|sudo groupdel devteam',
          'su|Switch current active shell user|su - adminuser',
          'sudo|Execute commands as superuser or another user|sudo systemctl restart nginx'
        ]
      },
      {
        title: '🔐 Permissions & Ownership',
        description: 'Govern directory access bits, file ownership, and access control lists.',
        list: [
          'chmod|Modify file Mode bits (Read/Write/Execute)|chmod 755 script.sh',
          'chown|Change file owner and group owners|sudo chown -R dev:devteam /var/www',
          'chgrp|Change file group ownership|sudo chgrp webmasters index.html',
          'umask|Define default file creation permissions mask|umask 022',
          'getfacl|Display file access control lists|getfacl secrets.txt',
          'setfacl|Configure file access control lists|setfacl -m u:alice:rw secrets.txt'
        ]
      },
      {
        title: '⚙ Process Management',
        description: 'Monitor active tasks, execute background threads, and dispatch shutdown signals.',
        list: [
          'ps|Capture snapshot of active processes|ps aux | grep node',
          'top|Display Linux processes in real-time|top',
          'htop|Interactive process viewer and system resource monitor|htop',
          'pgrep|Find process ID (PID) matching criteria|pgrep -l nginx',
          'pidof|Get process ID of a running program|pidof docker',
          'kill|Send termination/management signal to PID|kill -9 1234',
          'killall|Kill processes by name|sudo killall node',
          'pkill|Signal processes by matching attributes|pkill -f "python server.py"',
          'nice|Run command with custom scheduling priority|nice -n 10 backup.sh',
          'renice|Alter scheduling priority of active PIDs|renice +5 -p 1234',
          'jobs|List background shell tasks|jobs -l',
          'fg|Bring background task to foreground|fg %1',
          'bg|Resume suspended task in background|bg %1',
          'nohup|Run command immune to hangups|nohup node server.js > output.log 2>&1 &',
          'watch|Run command periodically in fullscreen|watch -n 1 "df -h"'
        ]
      },
      {
        title: '💾 Disk & Storage',
        description: 'Monitor disk blocks, mount paths, and format filesystems.',
        list: [
          'df|Report filesystem disk space usage|df -h',
          'du|Estimate directory space usage recursively|du -sh /var/www/*',
          'lsblk|List block storage devices and partitions|lsblk -e 7',
          'blkid|Print block storage device attributes (UUID, type)|sudo blkid',
          'mount|Mount filesystem paths|sudo mount /dev/sdb1 /mnt/media',
          'umount|Unmount filesystem paths|sudo umount /mnt/media',
          'fdisk|Create and modify MBR partition tables|sudo fdisk -l',
          'parted|Manipulate partitions (supports GPT tables)|sudo parted -l',
          'mkfs|Format partitions to Linux filesystem|sudo mkfs.ext4 /dev/sdb1',
          'fsck|Verify and repair filesystem integrity|sudo fsck /dev/sdb1',
          'tune2fs|Adjust tunable filesystem properties|sudo tune2fs -c 10 /dev/sdb1',
          'swapon|Enable devices and files for paging and swapping|sudo swapon /dev/sdb2',
          'swapoff|Disable devices and files for paging and swapping|sudo swapoff /dev/sdb2'
        ]
      },
      {
        title: '🧠 Memory Management',
        description: 'Verify RAM consumption, virtual memory, and kernel buffers.',
        list: [
          'free|Display amount of free and used memory in the system|free -h -t',
          'vmstat|Report virtual memory statistics|vmstat 1 5',
          'slabtop|Display kernel slab cache information in real-time|sudo slabtop -o',
          'smem|Report memory usage with shared memory representation|sudo smem -u -t',
          'pmap|Report memory map of a process|pmap -x 1234'
        ]
      },
      {
        title: '🌐 Networking',
        description: 'Configure interfaces, monitor sockets, check connectivity, and parse DNS records.',
        list: [
          'ip|Configure routing, network devices, and interfaces|ip a s eth0',
          'ifconfig|Legacy interface configuration utility|ifconfig eth0',
          'ping|Send ICMP ECHO_REQUEST to network hosts|ping -c 4 google.com',
          'traceroute|Print route packets trace to host|traceroute 1.1.1.1',
          'tracepath|Trace path to network host discovering MTU|tracepath -n google.com',
          'ss|Investigate socket details (replaces netstat)|ss -tulpn',
          'netstat|Print network connections and routing stats|netstat -ant',
          'arp|Manipulate system ARP cache|arp -a',
          'route|Show or manipulate IP routing table|route -n',
          'dig|DNS lookup utility|dig mx google.com +short',
          'nslookup|Query name servers interactively|nslookup google.com',
          'host|DNS lookup utility|host google.com',
          'curl|Transfer data to/from server|curl -i -X POST -d \'{"key":"val"}\' https://api.com/v1',
          'wget|Download files from web links|wget -c https://example.com/file.zip',
          'telnet|User interface for TELNET protocol|telnet 192.168.1.1 80',
          'nc|Network debugging and arbitrary data transfer (netcat)|nc -zv 127.0.0.1 22',
          'tcpdump|Dump network traffic packets|sudo tcpdump -i eth0 port 80',
          'tshark|Terminal-based packet analyzer (Wireshark CLI)|tshark -i eth0 -Y "http.request"',
          'nmap|Network exploration and port scanner|nmap -sS -p 1-1000 192.168.1.1'
        ]
      },
      {
        title: '🔑 SSH & Remote Access',
        description: 'Initiate secure shell connections, key gens, and synchronized file mirroring.',
        list: [
          'ssh|OpenSSH secure shell client for remote login|ssh -i key.pem user@192.168.1.100 -p 2222',
          'scp|Secure copy remote file transfer|scp -P 2222 local.txt user@remote:/var/www/',
          'sftp|Secure file transfer program|sftp -P 2222 user@remote',
          'ssh-keygen|Generate and convert authentication keys|ssh-keygen -t ed25519 -C "admin@domain.com"',
          'ssh-copy-id|Install public key to remote authorized_keys|ssh-copy-id -i ~/.ssh/id_ed25519.pub user@192.168.1.100',
          'rsync|Fast, incremental file synchronization tool|rsync -avz --exclude "node_modules" ./src/ user@remote:/var/www/',
          'mosh|Mobile shell with roaming and local echo|mosh user@remote'
        ]
      },
      {
        title: '🔥 Firewall & Security',
        description: 'Administer packet filters, cryptographic hashes, and UFW shields.',
        list: [
          'ufw|Uncomplicated Firewall configuration manager|sudo ufw allow 80/tcp && sudo ufw enable',
          'iptables|Administration tool for packet filtering|sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT',
          'nft|Administer packet filtering framework nftables|sudo nft list ruleset',
          'fail2ban-client|Ban malicious brute-forcing IPs|sudo fail2ban-client status sshd',
          'openssl|Cryptography and SSL/TLS CLI tool|openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365',
          'gpg|GNU Privacy Guard encryption tool|gpg -c confidential.txt',
          'sha256sum|Calculate or verify SHA256 checksums|sha256sum release.iso',
          'md5sum|Calculate or verify MD5 checksums|md5sum config.tar.gz'
        ]
      },
      {
        title: '📜 System Information',
        description: 'Display kernel configurations, hostname profiles, and system specifications.',
        list: [
          'uname|Print kernel version and system architecture|uname -a',
          'hostname|Show or set system hostname|hostname -f',
          'hostnamectl|Control system hostname and machine ID|sudo hostnamectl set-hostname prod-server',
          'uptime|Show how long the system has been running|uptime -p',
          'lscpu|Display CPU architecture information|lscpu',
          'lsmem|List available memory ranges and online status|lsmem -S',
          'lspci|List all PCI devices|lspci -v',
          'lsusb|List USB devices|lsusb -t',
          'dmidecode|Dump BIOS DMI tables to human-readable format|sudo dmidecode -t system',
          'hwinfo|Probe for hardware details|sudo hwinfo --short',
          'inxi|Command-line system hardware info script|inxi -Fz',
          'neofetch|Distro info and ASCII logo layout (deprecated)|neofetch',
          'fastfetch|Modern and fast C implementation of neofetch|fastfetch'
        ]
      },
      {
        title: '📊 Monitoring',
        description: 'Inspect CPU ticks, disk input/output, and bandwidth utilization.',
        list: [
          'top|Standard real-time process monitoring display|top',
          'htop|Interactive process and thread viewer|htop',
          'iotop|Simple top-like I/O monitor for processes|sudo iotop -o',
          'iftop|Display bandwidth usage on an interface in real-time|sudo iftop -i eth0',
          'bmon|Bandwidth monitor and rate estimator|bmon -p eth0',
          'dstat|Versatile resource stats tool (combines vmstat, iostat)|dstat -cdngy 1',
          'iostat|Report CPU and I/O statistics for devices|iostat -xz 1 5',
          'sar|Collect, report, or save system activity information|sar -u 1 10',
          'mpstat|Report processors related statistics|mpstat -P ALL 1 5',
          'vmstat|Report virtual memory and scheduling statistics|vmstat -s'
        ]
      },
      {
        title: '⚡ Systemctl & Services',
        description: 'Control systemd daemons, localizations, time settings, and active sessions.',
        list: [
          'systemctl|Control systemd system and service manager|sudo systemctl restart nginx',
          'service|Run system V init scripts (compatibility wrapper)|sudo service nginx restart',
          'journalctl|Query systemd journal logs database|journalctl -u nginx.service -n 50 --no-pager',
          'loginctl|Control systemd session manager|loginctl list-sessions',
          'timedatectl|Configure system clock, date, and timezone settings|sudo timedatectl set-timezone UTC',
          'hostnamectl|Control system hostname and machine ID|hostnamectl',
          'localectl|Control system keyboard layout and locale settings|localectl list-x11-keymap-layouts'
        ]
      },
      {
        title: '📅 Scheduling',
        description: 'Establish cron expressions, automated timers, and delayed commands.',
        list: [
          'crontab|Maintain cron jobs for automated schedulers|crontab -e',
          'at|Queue commands for execution at later time|echo "sh backup.sh" | at 02:00 AM',
          'batch|Queue commands for execution depending on load levels|batch',
          'systemd timers|Unit files triggering systemd tasks|systemctl list-timers'
        ]
      },
      {
        title: '📦 Archive & Compression',
        description: 'Pack folders into gzip, tar, bzip, zip, and xz archives.',
        list: [
          'tar|Tape archive compression and extraction utility|tar -czvf archive.tar.gz src/',
          'gzip|Compress files using Lempel-Ziv coding|gzip -9 config.json',
          'gunzip|Decompress gzip archives|gunzip config.json.gz',
          'bzip2|Compress files using block-sorting algorithm|bzip2 config.json',
          'bunzip2|Decompress bzip2 archives|bunzip2 config.json.bz2',
          'xz|Compress or decompress files using LZMA algorithm|xz -d file.xz',
          'unzip|List, test, and extract ZIP archives|unzip -q archive.zip -d dest/',
          'zip|Package and compress files in ZIP format|zip -r archive.zip folder/',
          '7z|High compression ratio file archiver|7z a -mx=9 backup.7z data/'
        ]
      },
      {
        title: '🌍 Environment Variables',
        description: 'Configure and print environment arrays, aliases, and shell sources.',
        list: [
          'env|Run program in modified environment or print variables|env',
          'printenv|Print system environment variables|printenv PATH',
          'export|Mark variables to be inherited by child processes|export PORT=3000',
          'unset|Delete variables or functions from memory|unset PORT',
          'source|Execute file commands in current shell process|source ~/.bashrc',
          'alias|Create command string shortcuts|alias ll="ls -lah"',
          'unalias|Remove active command string shortcuts|unalias ll'
        ]
      },
      {
        title: '🐚 Shell Commands',
        description: 'Access terminal command history, prints, and execution evaluations.',
        list: [
          'echo|Print text line to standard output|echo "PORT: $PORT"',
          'printf|Format and print data text parameters|printf "Hello %s\n" "Alice"',
          'history|Display terminal command history logs|history | tail -n 20',
          'clear|Clear the active terminal viewport|clear',
          'reset|Reinitialize the terminal context|reset',
          'exit|Terminate active shell terminal|exit',
          'exec|Replace current active shell with new command|exec zsh',
          'eval|Evaluate arguments as a shell command|eval "echo \$PORT"',
          'which|Locate command binary path inside PATH environment|which nginx',
          'whereis|Locate source, binary, and manual pages for command|whereis python',
          'type|Show how shell interprets command name input|type -a ls'
        ]
      },
      {
        title: '📂 File Transfer',
        description: 'Securely sync and transfer files via FTP, SSH, or HTTP.',
        list: [
          'rsync|Faster file sync recursively with compression|rsync -avP --delete src/ dest/',
          'scp|Secure copy file transfer using SSH protocol|scp user@host:/var/log/nginx/access.log ./local_logs/',
          'wget|Retrieve files via HTTP, HTTPS, and FTP links|wget -O newname.zip https://site.com/file.zip',
          'curl|Transfer data with URL syntax support|curl -o response.html https://site.com',
          'ftp|Interactive File Transfer Protocol client|ftp 192.168.1.1',
          'sftp|Interactive secure file transfer client|sftp user@host'
        ]
      },
      {
        title: '🔄 Boot & Shutdown',
        description: 'Trigger machine power cycles, halts, and systemd reboots.',
        list: [
          'reboot|Reboot the machine system|sudo reboot',
          'shutdown|Schedule machine poweroffs or reboots|sudo shutdown -h +10 "Server maintenance scheduled"',
          'poweroff|Power down the computer hardware|sudo poweroff',
          'halt|Stop all CPU functions|sudo halt',
          'init|Control system initialization runlevels|sudo init 6',
          'systemctl reboot|Reboot machine via systemd request|sudo systemctl reboot',
          'systemctl poweroff|Power down machine via systemd request|sudo systemctl poweroff'
        ]
      },
      {
        title: '📋 Logs',
        description: 'Monitor system log events, dmesg ring buffers, and custom syslog writes.',
        list: [
          'journalctl|Read and query systemd journal system logs|journalctl -xe -f',
          'dmesg|Inspect and control kernel ring logs|sudo dmesg -T | tail -n 50',
          'logger|Write message strings to system syslog database|logger -t DB_BACKUP "Database backup completed successfully"',
          'tail|Monitor log updates in real-time (tail -f)|tail -f /var/log/messages',
          'less|View log contents paging interactively|less +G /var/log/syslog'
        ]
      },
      {
        title: '🐳 Containers',
        description: 'Pack, spin up, and manage sandboxed OCI containers.',
        list: [
          'docker|Docker container manager command-line|docker run -d -p 80:80 --name web nginx:alpine',
          'docker-compose|Define multi-container deployments|docker-compose up -d',
          'podman|Daemonless container engine (OCI standard)|podman run -d --name db postgres',
          'nerdctl|Docker-compatible container manager for containerd|nerdctl run -d nginx'
        ]
      },
      {
        title: '☸ Kubernetes',
        description: 'Manage clusters, orchestrations, and local kinds/minikubes.',
        list: [
          'kubectl|Kubernetes cluster orchestrator CLI client|kubectl get pods -n kube-system',
          'helm|Package manager for Kubernetes configurations|helm install prometheus prometheus-community/prometheus',
          'minikube|Spin up single-node local Kubernetes cluster|minikube start --driver=docker',
          'kind|Run Kubernetes cluster inside local Docker containers|kind create cluster --name test-cluster'
        ]
      },
      {
        title: '🛠 Development Tools',
        description: 'Manage compilations, runtimes, package builders, and local build tools.',
        list: [
          'git|Distributed version control system client|git log --oneline -n 10',
          'make|Automated compilation parser using Makefiles|make -j4',
          'gcc|GNU C Compiler framework launcher|gcc -O2 main.c -o app',
          'g++|GNU C++ Compiler framework launcher|g++ -std=c++20 main.cpp -o app',
          'cmake|Cross-platform build system manager|cmake -B build -S . && cmake --build build',
          'python|Python language runtime engine launcher|python3 -m http.server 8000',
          'node|Node.js JavaScript server runtime engine|node --watch server.js',
          'npm|Node Package Manager client installer|npm ci --only=production',
          'yarn|Facebook package manager client installer|yarn install --frozen-lockfile',
          'pnpm|Fast disk space efficient package manager client|pnpm recursive install',
          'bun|All-in-one JS runtime and package manager|bun run dev',
          'java|Java SE Runtime Environment launcher|java -jar app.jar',
          'javac|Java SE programming compiler tool|javac Main.java',
          'go|Go compiler toolchain launcher|go build -ldflags "-s -w" -o app',
          'rustc|Rust compiler launcher|rustc -O main.rs',
          'cargo|Rust package builder tool|cargo build --release'
        ]
      },
      {
        title: '☁ Cloud CLI',
        description: 'Configure and invoke APIs for hosting, server deployments, and sync policies.',
        list: [
          'aws|Amazon Web Services command-line client|aws s3 cp file.txt s3://my-bucket/',
          'az|Microsoft Azure command-line client|az vm list --output table',
          'gcloud|Google Cloud Platform command-line client|gcloud compute instances list',
          'doctl|DigitalOcean resource command-line client|doctl compute droplet list',
          'flyctl|Fly.io hosting command-line manager|flyctl status',
          'vercel|Vercel cloud host application manager CLI|vercel --prod',
          'netlify|Netlify cloud host application manager CLI|netlify deploy --prod'
        ]
      },
      {
        title: '🗃 Database CLI',
        description: 'Initiate SQL command prompts, redis keyspaces, and sqlite terminals.',
        list: [
          'psql|PostgreSQL interactive database terminal client|psql -h localhost -U postgres -d mydb',
          'mysql|MySQL database command line client|mysql -h 127.0.0.1 -u root -p',
          'mariadb|MariaDB database command line client|mariadb -u root -p',
          'sqlite3|SQLite file-based database client|sqlite3 local.db ".tables"',
          'redis-cli|Redis cache database CLI console|redis-cli monitor',
          'mongosh|MongoDB shell client console|mongosh "mongodb://localhost:27017"'
        ]
      },
      {
        title: '🔧 Virtualization',
        description: 'Provision virtual machines, hypervisors, and qemus.',
        list: [
          'virsh|Manage libvirt domains and hypervisors|sudo virsh list --all',
          'virt-install|Provision virtual machines via libvirt commands|sudo virt-install --name ubuntu-vm --ram 2048 --vcpus 2 --disk size=10 --os-variant ubuntu22.04 --cdrom ubuntu.iso',
          'qemu|Machine emulator and virtualizer tool|qemu-system-x86_64 -hda disk.img -m 1024 -enable-kvm',
          'VBoxManage|VirtualBox command-line interface helper|VBoxManage startvm "Windows VM" --type headless',
          'multipass|Manage Ubuntu VMs locally via CLI|multipass launch --name dev-vm'
        ]
      },
      {
        title: '📈 Performance',
        description: 'Trace runtime kernel calls, stress test workloads, and run benchmarks.',
        list: [
          'perf|Performance monitoring utility for Linux kernels|sudo perf top',
          'strace|Trace kernel system calls and signal transfers|strace -e open,read -p 1234',
          'ltrace|Trace library calls in program processes|ltrace ./binary',
          'time|Calculate command execution time properties|time ./slow_script.sh',
          'hyperfine|Command-line program benchmarking utility|hyperfine "grep pattern file.txt"',
          'stress|Stress test CPU, memory, I/O, and disk sectors|stress --cpu 4 --timeout 60',
          'stress-ng|Intense hardware system stress test tool|stress-ng --cpu 2 --io 1 --vm 1 --vm-bytes 1G --timeout 60s'
        ]
      },
      {
        title: '🛡 Security & Pentesting',
        description: 'Audit network ports, crack passwords, run packet sniffs, and inspect SQL injection vulnerabilities.',
        list: [
          'nmap|Network exploration and security port scanner|nmap -A -v 192.168.1.1',
          'hydra|Fast network login credentials cracker|hydra -l admin -P passwords.txt ssh://192.168.1.50',
          'sqlmap|Automated SQL injection vulnerability detector|sqlmap -u "http://site.com/item.php?id=1" --dbs',
          'nikto|Web server vulnerability detector scanner|nikto -h http://example.com',
          'metasploit (msfconsole)|Penetration testing framework CLI launcher|msfconsole -q',
          'aircrack-ng|802.11 wireless keys cracking framework|aircrack-ng capture.cap',
          'john|John the Ripper password cracker|john --wordlist=rockyou.txt hashes.txt',
          'hashcat|Rule-based multi-threaded password cracker|hashcat -m 0 -a 0 hashes.txt rockyou.txt',
          'wireshark|Interactive network packet analyzer (GUI)|wireshark &',
          'tcpdump|Command-line packet sniffer analysis tool|sudo tcpdump -nnvvXSs 1514 -i eth0'
        ]
      },
      {
        title: '📚 Help & Documentation',
        description: 'Access command manual pages, simplified summaries, and built-in descriptors.',
        list: [
          'man|Format and display system manual pages (Standard)|man 5 systemd.timer',
          'info|Read complex GNU info documents|info coreutils',
          'help|Display built-in shell commands description|help cd',
          'apropos|Search manual page titles for keywords|apropos firewall',
          'whatis|Print single-line manual descriptions|whatis iptables',
          'tldr|Simplified and community-driven cheat-sheets|tldr tar'
        ]
      }
    ],
    build: [],
    troubleshooting: [],
    usefulLinks: [
      { label: 'TLDR Pages', url: 'https://tldr.sh/' },
      { label: 'Linux Commands Directory', url: 'https://www.kernel.org/doc/man-pages/' }
    ],
    commonErrors: [
      { error: 'Command not found.', solution: 'Check path spelling, verify the binary is inside your PATH environment variable, or run package manager to install it.' }
    ],
    bestPractices: [
      'Use tldr or man command to preview flags before executing new commands.',
      'Pipe large command outputs into `less` to read page-by-page without freeze.',
      'Check system log files inside /var/log/ when applications throw general failures.'
    ]
  },
  arch: {
    id: 'arch',
    name: 'Arch Linux',
    category: 'Linux',
    overview: 'Arch Linux is a lightweight and flexible Linux® distribution that adheres to the KISS (Keep It Simple, Stupid) principle.',
    requirements: [],
    installation: [
      { title: 'Update Package Database & Upgrade Systems', code: 'sudo pacman -Syu' }
    ],
    projectCreation: [],
    run: [
      { title: 'Install a package', code: 'sudo pacman -S <package_name>' },
      { title: 'Remove a package and its dependencies', code: 'sudo pacman -Rs <package_name>' },
      { title: 'Clean package cache', code: 'sudo pacman -Sc' }
    ],
    build: [],
    troubleshooting: [
      { title: 'Update keyring to fix signature issues', code: 'sudo pacman -Sy archlinux-keyring && sudo pacman -Syu' }
    ],
    commonErrors: [
      { error: 'error: failed to commit transaction (conflicting files)', solution: 'Check which packages own the files or run the upgrade forcing overwrite (use with caution: `sudo pacman -Syu --overwrite "*"`).' }
    ],
    bestPractices: [
      'Always read the Arch Linux homepage before performing full system upgrades.',
      'Do not do partial upgrades; always run pacman -Syu instead of pacman -Sy.',
      'Keep backup configuration files in /etc/ with pacnew files reviews regularly.'
    ]
  },
  openai: {
    id: 'openai',
    name: 'OpenAI API & Ollama',
    category: 'AI',
    overview: 'OpenAI provides access to state-of-the-art language, vision, and image generation models. Ollama allows running large language models (like Llama 3) locally.',
    requirements: [],
    installation: [
      { title: 'Install OpenAI Node package', code: 'npm install openai' },
      { title: 'Install Ollama CLI (Linux)', code: 'curl -fsSL https://ollama.com/install.sh | sh' }
    ],
    projectCreation: [
      { title: 'Run local Llama3 via Ollama', code: 'ollama run llama3' },
      { title: 'Node.js OpenAI connection script', code: `import OpenAI from "openai";\n\nconst openai = new OpenAI({\n  apiKey: process.env.OPENAI_API_KEY,\n});\n\nconst completion = await openai.chat.completions.create({\n  model: "gpt-4o",\n  messages: [{ role: "user", content: "Hello!" }],\n});\nconsole.log(completion.choices[0].message.content);` }
    ],
    run: [
      { title: 'Ollama List Local Models', code: 'ollama list' },
      { title: 'Ollama Run Local model in background', code: 'ollama serve' }
    ],
    build: [],
    troubleshooting: [
      { title: 'Check Ollama server response', code: 'curl http://localhost:11434/api/tags' }
    ],
    commonErrors: [
      { error: '401 Unauthorized API key.', solution: 'Export the OPENAI_API_KEY environment variable correctly with a valid key.' }
    ],
    bestPractices: [
      'Always use environment variables for keys; never hardcode them in version control.',
      'Implement prompt token usage logging to monitor API costs.',
      'Use streaming responses (`stream: true`) to deliver faster, smoother UI feedback.'
    ]
  },
  hacking: {
    id: 'hacking',
    name: 'Cybersecurity & Hacking Tools',
    category: 'Security',
    overview: 'A premium, searchable catalog of industry-standard security assessment, enumeration, and penetration testing tools.',
    requirements: [],
    installation: [],
    projectCreation: [],
    run: [
      {
        title: '🔍 Information Gathering (OSINT)',
        description: 'Passive and active OSINT tools to map out domains, emails, and users.',
        list: [
          'theHarvester|Gather emails, subdomains, IPs, and employee names|theHarvester -d target.com -l 500 -b google',
          'Maltego|Interactive OSINT mapping and analysis tool|maltego',
          'Amass|In-depth subdomain enumeration and mapping|amass enum -d target.com',
          'Subfinder|Fast passive subdomain discovery tool|subfinder -d target.com -o subdomains.txt',
          'Assetfinder|Find subdomains associated with a target domain|assetfinder --subs-only target.com',
          'Whois|Retrieve domain registration ownership records|whois target.com',
          'dig|Perform DNS record lookups|dig target.com ANY',
          'nslookup|Query internet name servers interactively|nslookup target.com',
          'dnsrecon|DNS enumeration and security auditing utility|dnsrecon -d target.com',
          'dnsenum|Enumerate DNS information and scrape subdomains|dnsenum target.com',
          'Fierce|DNS locator and scanner tool|fierce --domain target.com',
          'Recon-ng|Web-based open source intelligence reconnaissance|recon-ng',
          'Sherlock|Find usernames across social networks|sherlock username',
          'SpiderFoot|Automated OSINT reconnaissance engine|sf.py -l 127.0.0.1:5001'
        ]
      },
      {
        title: '🌐 Network Scanning & Enumeration',
        description: 'Map out port status, service fingerprints, and network topology.',
        list: [
          'Nmap|Network port scanner and service mapper|nmap -sS -sV -O -T4 target_ip',
          'Masscan|High speed TCP port scanner (entire Internet in 6 min)|masscan -p80,443 target_subnet --rate=1000',
          'RustScan|Extremely fast port scanner built in Rust|rustscan -a target_ip -- -sV',
          'arp-scan|ARP packet scanner for local subnets|sudo arp-scan --localnet',
          'Netdiscover|Active/passive local address address lookup scanning|sudo netdiscover -r 192.168.1.0/24',
          'hping3|TCP/IP packet assembler and analyzer|sudo hping3 -S -p 80 -c 5 target_ip',
          'fping|Send ICMP echo probes to multiple hosts|fping -a -g 192.168.1.0/24',
          'enum4linux|Enumerate information from Windows/Samba targets|enum4linux -a target_ip',
          'nbtscan|Scan networks for NetBIOS name information|nbtscan -r 192.168.1.0/24',
          'snmpwalk|Query SNMP entities for values|snmpwalk -v2c -c public target_ip'
        ]
      },
      {
        title: '🌍 Web Application Testing',
        description: 'Identify flaws, inject code, and fuzz directory endpoints.',
        list: [
          'Burp Suite|Web application penetration testing toolkit|burpsuite',
          'OWASP ZAP|Automated web application vulnerability scanner|zaproxy',
          'Nikto|General web server security scanner|nikto -h http://target.com',
          'Gobuster|Directory, file, and DNS brute-forcing scanner|gobuster dir -u http://target.com -w wordlist.txt',
          'Feroxbuster|Fast recursive directory brute-forcer in Rust|feroxbuster -u http://target.com',
          'Dirsearch|Web path scanner using brute-force dictionaries|dirsearch -u http://target.com',
          'ffuf|Fast web fuzzer written in Go|ffuf -u http://target.com/FUZZ -w wordlist.txt',
          'Wfuzz|Web application vulnerability fuzzer|wfuzz -c -z file,wordlist.txt --hc 404 http://target.com/FUZZ',
          'WhatWeb|Identify web frameworks and technologies on pages|whatweb target.com',
          'httpx|Fast and multi-purpose HTTP toolkit|httpx -l urls.txt -status-code -title',
          'nuclei|Fast template-based vulnerability scanner|nuclei -u http://target.com'
        ]
      },
      {
        title: '🔑 Password Auditing',
        description: 'Audit hash robustness and brute force credential authentication.',
        list: [
          'John the Ripper|Fast offline password hash cracker|john --wordlist=rockyou.txt hashes.txt',
          'Hashcat|Advanced GPU-accelerated password cracker|hashcat -m 0 -a 0 hashes.txt rockyou.txt',
          'Hydra|Fast network login credentials brute-forcer|hydra -l admin -P pass.txt target_ip ssh',
          'Medusa|Parallel login brute-forcing tool|medusa -h target_ip -u admin -P pass.txt -M ssh',
          'CeWL|Custom wordlist generator from target webpage|cewl -d 2 -m 5 -w wordlist.txt http://target.com',
          'Crunch|Generate custom wordlist tables using charsets|crunch 6 8 abcdef -o wordlist.txt'
        ]
      },
      {
        title: '📡 Wireless Security',
        description: 'Audit 802.11 standards, capture handshakes, and spoof AP beacons.',
        list: [
          'Aircrack-ng|802.11 WEP and WPA-PSK keys cracking|aircrack-ng -w wordlist.txt handshake.cap',
          'Airodump-ng|Capture wireless packets and identify BSSIDs|sudo airodump-ng wlan0mon',
          'Aireplay-ng|Inject frames to deauthenticate clients|sudo aireplay-ng --deauth 10 -a BSSID -c CLIENT wlan0mon',
          'Airbase-ng|Create rogue access points to capture traffic|sudo airbase-ng -e "Free Wifi" -c 6 wlan0mon',
          'Kismet|Wireless network detector, sniffer, and wardriver|kismet',
          'Wifite|Automated wireless auditing tool|sudo wifite',
          'Reaver|Brute-force WPS PINs to recover WPA passwords|sudo reaver -i wlan0mon -b BSSID -vv',
          'Bully|Implementation of WPS brute-force attack in C|sudo bully -b BSSID -c 6 wlan0mon'
        ]
      },
      {
        title: '📦 Packet Analysis & Network Monitoring',
        description: 'Analyze telemetry, extract payloads, and debug raw traffic.',
        list: [
          'Wireshark|Graphical network packet analyzer|wireshark &',
          'tcpdump|Command-line packet sniffer and dumper|sudo tcpdump -i eth0 -w capture.pcap',
          'tshark|Terminal-based packet analyzer (Wireshark CLI)|tshark -r capture.pcap -Y "http"',
          'Ettercap|Multipurpose sniffer and MITM interceptor|ettercap -G',
          'Bettercap|Complete, modular MITM framework|sudo bettercap',
          'ngrep|Network grep pattern matching sniffer|sudo ngrep -d eth0 "GET" port 80',
          'Zeek|Powerful network security monitoring framework|zeek'
        ]
      },
      {
        title: '📱 Mobile Security',
        description: 'Audit package bundles, bypass pinning, and trace mobile systems.',
        list: [
          'ADB|Android Debug Bridge command-line client|adb devices',
          'Fastboot|Flash Android firmware and unlock bootloaders|fastboot oem unlock',
          'JADX|Decompile Android DEX and APK files to Java code|jadx-gui app.apk',
          'APKTool|Decompile and recompile Android APK files|apktool d app.apk',
          'MobSF|Mobile Security Framework static/dynamic analyzer|python3 manage.py runserver',
          'Frida|Dynamic instrumentation toolkit for developers/analysts|frida -U -f com.example.app --no-pause',
          'Objection|Runtime mobile exploration tool powered by Frida|objection --gadget com.example.app explore',
          'libimobiledevice|Software library to talk to iOS devices|ideviceinfo'
        ]
      },
      {
        title: '🧩 Reverse Engineering',
        description: 'Disassemble, decompile, and inspect binary formats.',
        list: [
          'Ghidra|NSA software reverse engineering framework|ghidraRun',
          'Radare2|Advanced command-line hex editor and disassembler|r2 /bin/ls',
          'Cutter|GUI frontend for radare2 framework|cutter &',
          'Binary Ninja|Decompiler and reverse engineering platform|binaryninja &',
          'IDA Free|Interactive disassembler platform|ida64',
          'objdump|Display information from object files|objdump -d /bin/ls',
          'strings|Print printable characters from binary file|strings /bin/ls',
          'readelf|Display information about ELF format files|readelf -h /bin/ls',
          'ldd|Print shared library dependencies of a program|ldd /bin/ls'
        ]
      },
      {
        title: '🐳 Container & Cloud Security',
        description: 'Identify configurations, audit registries, and monitor namespaces.',
        list: [
          'Docker Bench|Audit docker configurations against security baselines|docker run --rm -v /var/run/docker.sock:/var/run/docker.sock docker/docker-bench-security',
          'Trivy|Vulnerability scanner for containers and clouds|trivy image nginx',
          'Dive|Explore docker image layers and reduce size|dive nginx',
          'kubectl|Kubernetes orchestrator command-line client|kubectl get secrets --all-namespaces',
          'kube-bench|Check Kubernetes deployment against CIS benchmark|kube-bench run',
          'kube-hunter|Hunt for security weaknesses in Kubernetes clusters|kube-hunter --remote target_ip',
          'kubescape|Kubernetes security scan and compliance auditor|kubescape scan',
          'ScoutSuite|Multi-cloud security posture assessment tool|scout aws',
          'Prowler|AWS security assessment and hardening tool|prowler aws',
          'CloudSploit|Cloud security auditing script|node index.js --cloud=aws'
        ]
      },
      {
        title: '🔐 Cryptography',
        description: 'Manage hashes, compute certs, and verify signatures.',
        list: [
          'OpenSSL|Cryptography and SSL certificate toolkit|openssl x509 -in cert.pem -text -noout',
          'GPG|GnuPG encryption and signature tool|gpg --encrypt --recipient user@domain.com secret.txt',
          'Hashcat Utilities|Helper utilities for Hashcat tasks|cap2hccapx.bin capture.cap handshake.hccapx',
          'sha256sum|Calculate and verify SHA256 checksums|sha256sum release.iso',
          'md5sum|Calculate and verify MD5 checksums|md5sum release.iso'
        ]
      },
      {
        title: '📝 Log Analysis & Forensics',
        description: 'Examine disk tables, memory dumps, and extract files.',
        list: [
          'Autopsy|Graphical digital forensics platform|autopsy &',
          'Sleuth Kit|Command-line digital forensics tools|fls -r image.dd',
          'Volatility|Memory forensics and analysis framework|volatility -f memory.raw --profile=Win7SP1x64 pslist',
          'Binwalk|Tool for searching binary images for embedded files|binwalk -e firmware.bin',
          'foremost|Recover lost files based on their headers|foremost -i image.dd -o output',
          'exiftool|Read and write metadata in files|exiftool image.jpg',
          'yara|Pattern matching tool for malware researchers|yara rules.yar file_to_scan'
        ]
      },
      {
        title: '🧬 Malware Analysis',
        description: 'Run static and dynamic malware telemetry tasks.',
        list: [
          'YARA|Malware pattern matching utility|yara -r malware_rules/ suspicious_directory/',
          'Cuckoo Sandbox|Automated malware analysis sandbox system|cuckoo',
          'PEStudio|Static investigation tool for Windows PE files|pestudio.exe',
          'Detect It Easy (DIE)|Program for determining file types and packers|diec /path/to/binary',
          'CAPA|Detect capabilities in executable files|capa /path/to/binary'
        ]
      },
      {
        title: '🌎 DNS & Domain Analysis',
        description: 'Perform active zone transfers and sub domain enumeration.',
        list: [
          'dnsrecon|Perform DNS reconnaissance tasks|dnsrecon -d target.com',
          'dnsenum|DNS intelligence gathering tool|dnsenum target.com',
          'dig|Perform targeted DNS queries|dig target.com TXT',
          'host|Perform DNS lookups|host -t mx target.com',
          'nslookup|DNS client lookup server utility|nslookup -type=ns target.com',
          'Amass|DNS name collection mapping tool|amass intel -d target.com'
        ]
      },
      {
        title: '📂 SMB & Active Directory',
        description: 'Audit Active Directory configurations and SMB shares.',
        list: [
          'enum4linux|Query SMB/Samba status information|enum4linux -v target_ip',
          'smbclient|FTP-like client to access SMB shares|smbclient //target_ip/share -U user',
          'rpcclient|Execute client-side MS-RPC functions|rpcclient -U "" target_ip',
          'CrackMapExec|Swiss army knife for pentesting Active Directory|crackmapexec smb target_subnet -u user -p pass',
          'NetExec|Modern active directory pentesting utility|nxc smb target_subnet -u user -p pass',
          'ldapsearch|Query LDAP directory systems|ldapsearch -x -h target_ip -b "dc=domain,dc=local"'
        ]
      },
      {
        title: '🛠 Exploit Frameworks',
        description: 'Database of shellcodes, payloads, and modules.',
        list: [
          'Metasploit Framework|Ruby penetration testing platform|msfconsole',
          'SearchSploit|Offline search utility for Exploit-DB|searchsploit cisco ios',
          'ExploitDB CLI|Search exploit database from terminal|searchsploit'
        ]
      },
      {
        title: '🔍 Vulnerability Assessment',
        description: 'Scan targets for known bugs and out-of-date assets.',
        list: [
          'Nuclei|Scan vulnerabilities using YAML templates|nuclei -t cves/ -u http://target.com',
          'Nikto|Check web servers for vulnerability configurations|nikto -h target.com',
          'OpenVAS|Open Vulnerability Assessment System daemon|gvm-cli',
          'Nessus (CLI)|Launch scan tasks via Nessus API|nessuscli scan launch',
          'Lynis|System hardening audit tool for Linux/Unix|lynis audit system'
        ]
      },
      {
        title: '🧪 API Security',
        description: 'Fuzz and audit REST, GraphQL, and JSON web credentials.',
        list: [
          'Postman|Interactive API client test tool (GUI)|postman',
          'Insomnia|Streamlined REST and GraphQL client|insomnia',
          'OWASP ZAP|Test API endpoints for injection errors|zap-api-scan.py -t http://api.target.com/v1/ -f openapi',
          'Burp Suite|Intercept and replay API request payloads|burpsuite',
          'jwt-tool|JSON Web Token auditing toolkit|python3 jwt-tool.py -t JWT_TOKEN'
        ]
      },
      {
        title: '🧠 OSINT & Social Media',
        description: 'Correlate accounts, phone networks, and emails.',
        list: [
          'Sherlock|Find users across 300+ social sites|sherlock target_username',
          'SpiderFoot|Scrape open source info automatically|sf.py',
          'theHarvester|Harvest email subdomains from public sites|theHarvester -d target.com -b all',
          'GHunt|OSINT tool for investigating Google accounts|ghunt email target@gmail.com',
          'PhoneInfoga|Information gathering tool for phone numbers|phoneinfoga scan -n +1234567890',
          'Holehe|Check if email is registered on 120+ sites|holehe target@domain.com'
        ]
      },
      {
        title: '🖥 Linux Security',
        description: 'Harden host operating system kernels, users, and filters.',
        list: [
          'Lynis|Run local security audit audits|sudo lynis audit system',
          'chkrootkit|Scan host for active rootkits|sudo chkrootkit',
          'rkhunter|Rootkit Hunter security auditor|sudo rkhunter --check',
          'auditd|Kernel auditing service monitor daemon|sudo auditctl -l',
          'fail2ban-client|Ban brute force IPs in firewalls|sudo fail2ban-client status',
          'ufw|Setup firewall packet filters|sudo ufw status verbose',
          'nftables|High speed firewall rules administrator|sudo nft list ruleset'
        ]
      },
      {
        title: '☁ Cloud Security',
        description: 'Assess cloud groups, firewall configs, and storage settings.',
        list: [
          'AWS CLI|Manage AWS cloud resources|aws ec2 describe-security-groups',
          'Prowler|Hardening tool for AWS, Azure and GCP|prowler aws',
          'Azure CLI|Manage Azure cloud resources|az account list',
          'ScoutSuite|Cloud security posture audit utility|scout azure',
          'gcloud CLI|Manage Google Cloud resources|gcloud compute firewall-rules list'
        ]
      },
      {
        title: '📚 Learning & Labs',
        description: 'Vulnerable web applications, platforms, and practice playgrounds.',
        list: [
          'Kali Linux tools|Full reference directory of pentesting tools|kali-bloatware',
          'OWASP projects|Standards and security guidelines portal|owasp',
          'DVWA|Damn Vulnerable Web Application lab|docker run --rm -p 80:80 vulnerables/web-dvwa',
          'Juice Shop|Modern insecure web app Node.js lab|docker run --rm -p 3000:3000 bkimminich/juice-shop',
          'Metasploitable|Intentionally vulnerable virtual machine lab|metasploitable',
          'Hack The Box|Immersive online gamified cybersecurity labs|htb',
          'TryHackMe|Hands-on cybersecurity training platform|thm'
        ]
      }
    ],
    build: [],
    troubleshooting: [],
    usefulLinks: [
      { label: 'Kali Tools', url: 'https://www.kali.org/tools/' },
      { label: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/' }
    ],
    commonErrors: [
      { error: 'Permission denied (Root required)', solution: 'Prepend `sudo` to commands that bind raw interfaces or parse network sockets.' }
    ],
    bestPractices: [
      'Always secure explicit authorization before initiating security audits.',
      'Document your audit trails clearly to maintain accountability.'
    ]
  },
  termux: {
    id: 'termux',
    name: 'Termux Command Library',
    category: 'Mobile',
    overview: 'A premium, fully interactive console library for Termux android environments covering packages, virtualization, text processing, security, and developer runtimes.',
    requirements: [],
    installation: [],
    projectCreation: [],
    run: [
      {
        title: '🚀 Getting Started',
        description: 'Initialize, configure, and secure your primary Termux application container.',
        list: [
          'Install Termux|Setup Termux from official F-Droid or GitHub repositories|pkg install termux-tools',
          'Initial Setup|Initialize primary directory setup configuration|termux-setup-storage',
          'Update & Upgrade|Fetch repository updates and upgrade core modules|pkg update && pkg upgrade -y',
          'Change Repository Mirrors|Select the fastest global/local mirror repository|termux-change-repo',
          'Storage Permission|Request Android system storage permissions|termux-setup-storage',
          'Reset Environment|Clean termux environment back to default|rm -rf $PREFIX && exit',
          'Backup & Restore|Archive current Termux prefix directory to storage|tar -zcvf /sdcard/termux-backup.tar.gz -C /data/data/com.termux/files usr home'
        ]
      },
      {
        title: '📦 Package Management',
        description: 'Install, remove, and clean package binaries on local Termux.',
        list: [
          'pkg|Shorthand Termux-specific package manager utility|pkg install git',
          'apt|Advanced package tool for DEB packages|apt update',
          'dpkg|Directly install or query custom .deb package archives|dpkg -i file.deb',
          'apt-cache|Search package metadata and dependencies|apt-cache search python',
          'Package Search|Query termux mirrors for available utilities|pkg search curl',
          'Package Install|Install a packages and resolve dependencies|pkg install tmux -y',
          'Package Remove|Uninstall a package and delete binary shortcuts|pkg uninstall tmux -y',
          'Package Update|Synchronize package index database|pkg update',
          'Package Upgrade|Apply package version upgrades|pkg upgrade',
          'Package Cleanup|Remove cached packages and unused dependencies|pkg clean && pkg autoclean'
        ]
      },
      {
        title: '🐚 Shell & Terminal',
        description: 'Configure interactive environments, custom aliases, and scripts.',
        list: [
          'Bash|Default interactive Unix system shell|bash',
          'Zsh|Extensible shell with themes and custom completions|pkg install zsh',
          'Fish|User-friendly shell with auto-suggestions out of the box|pkg install fish',
          'Oh My Zsh|Framework for managing Zsh shell configurations|sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"',
          'Aliases|Set quick command shortcuts in terminal config|alias gs="git status"',
          'Environment Variables|Export environment configuration parameters|export PATH=$PATH:$HOME/bin',
          'Shell Scripts|Create executable automation bash scripts|nano script.sh && chmod +x script.sh',
          'Command History|View previous commands run in shell session|history',
          'Auto Completion|Enable tab auto-completion utility packages|pkg install bash-completion'
        ]
      },
      {
        title: '📂 File Management',
        description: 'Navigate directories, modify permissions, and find files.',
        list: [
          'ls|List directory files and folders|ls -la',
          'cd|Change directory path in the shell|cd $HOME',
          'pwd|Print current working directory path|pwd',
          'cp|Copy file or directory recursively|cp -r source/ dest/',
          'mv|Move or rename files and directories|mv old.txt new.txt',
          'rm|Remove files or folders recursively|rm -rf folder/',
          'mkdir|Create a new directory folder path|mkdir project',
          'touch|Create an empty file or update timestamp|touch index.html',
          'find|Search for files matching name or regex query|find . -name "*.js"',
          'tree|Visualize folders and file structure hierarchical tree|tree -L 2',
          'chmod|Modify file or directory read/write/execute permissions|chmod 755 script.sh',
          'chown|Change owner user and group parameters|chown user:group file.txt',
          'ln|Create symbolic link shortcut reference|ln -s target_dir shortcut_name',
          'stat|Display detailed file metadata status|stat file.txt'
        ]
      },
      {
        title: '📄 Text Editors',
        description: 'Edit configuration files and write code in the console.',
        list: [
          'nano|Simple and easy to use terminal text editor|nano config.txt',
          'vim|Highly customizable advanced modal editor|vim index.js',
          'neovim|Modern rewrite of Vim with Lua plugin support|pkg install neovim',
          'micro|Intuitive modern terminal editor with mouse support|pkg install micro',
          'sed|Stream editor for parsing and transforming text|sed -i "s/old/new/g" file.txt',
          'awk|Pattern scanning and processing language utility|awk "{print $1}" file.txt',
          'grep|Search files for lines matching regular expression|grep -rn "TODO" .'
        ]
      },
      {
        title: '🌐 Networking',
        description: 'Analyze connections, resolve DNS, and fetch remote documents.',
        list: [
          'ping|Send ICMP echo packets to test host accessibility|ping google.com -c 4',
          'curl|Command-line tool for transferring data via URLs|curl -I https://google.com',
          'wget|Non-interactive network downloader utility|wget https://example.com/file.zip',
          'ip|Display and configure network routing interfaces|ip addr show',
          'netstat|Print active network sockets and TCP states|netstat -pant',
          'ss|Modern utility to inspect socket stats (replaces netstat)|ss -tuln',
          'traceroute|Trace routing path packet hops to target|traceroute google.com',
          'dig|Perform advanced DNS resolution lookups|dig google.com ANY',
          'nslookup|Query internet name servers interactively|nslookup google.com',
          'host|Simple DNS lookup utility|host google.com',
          'ifconfig|View and configure legacy network interface stats|ifconfig'
        ]
      },
      {
        title: '🔐 SSH & Remote Access',
        description: 'Connect to servers, generate keypairs, and transfer data.',
        list: [
          'OpenSSH|Open-source SSH server and client suite|pkg install openssh',
          'ssh|Connect securely to remote server shells|ssh user@remote_ip -p 22',
          'scp|Securely copy files over SSH protocol|scp local.txt user@remote_ip:/path/',
          'sftp|Secure file transfer program interface|sftp user@remote_ip',
          'ssh-keygen|Generate public/private authentication keypairs|ssh-keygen -t ed25519',
          'ssh-copy-id|Install public key on remote SSH authorized_keys|ssh-copy-id -i ~/.ssh/id_ed25519.pub user@remote_ip',
          'rsync|Fast incremental directory synchronization tool|rsync -avz local/ user@remote_ip:/remote/',
          'tmux remote sessions|Keep SSH sessions active after disconnecting|tmux new -s remote'
        ]
      },
      {
        title: '👤 User & Permissions',
        description: 'Audit privileges, manage credentials, and emulate root.',
        list: [
          'sudo (proot)|Emulate root environment privileges in user namespaces|proot -0 -w ~ bash',
          'passwd|Change Termux user session password credentials|passwd',
          'groups|Display user group memberships|groups',
          'id|Print user and group IDs for the shell session|id',
          'whoami|Print active shell user name|whoami',
          'chmod|Modify file permissions flags|chmod +x binary',
          'chown|Change file owner ownership properties|chown owner file'
        ]
      },
      {
        title: '📦 Archives',
        description: 'Compress and expand package archives and folders.',
        list: [
          'zip|Package and compress files in standard ZIP layout|zip archive.zip file1.txt file2.txt',
          'unzip|Extract files from ZIP compressed archive|unzip archive.zip',
          'tar|Tape archive utility to package folders|tar -cvf archive.tar folder/',
          'gzip|Compress or expand files using GNU ZIP compression|gzip file.txt',
          'bzip2|High quality data compressor utilizing Burrows-Wheeler|bzip2 file.txt',
          'xz|Fast compression utility using LZMA algorithms|xz file.txt',
          '7zip|Archive utility with very high compression ratios|pkg install 7zip'
        ]
      },
      {
        title: '💻 Programming Languages',
        description: 'Deploy runtime engines and package managers on Termux.',
        list: [
          'Install Python|Install Python 3 runtime and development headers|pkg install python python-pip -y',
          'pip|Python package installer for third-party libraries|pip install requests',
          'venv|Create isolated Python virtual environments|python -m venv venv',
          'pipx|Install and run Python applications in isolated environments|pipx install black',
          'node|Execute Node.js JavaScript runtime scripts|node app.js',
          'npm|JavaScript Node package manager client|npm install axios',
          'yarn|Fast package manager by Meta|npm install -g yarn',
          'pnpm|Performant npm replacement utilising hard links|npm install -g pnpm',
          'bun|All-in-one JavaScript runtime and package manager|curl -fsSL https://bun.sh/install | bash',
          'PHP CLI|Run PHP scripts directly in termux|pkg install php',
          'Composer|PHP dependency package manager|php -r "readfile(\'https://getcomposer.org/installer\');" | php',
          'OpenJDK|Install Java SE runtime and compiler environment|pkg install openjdk-17 -y',
          'javac|Compile Java classes from source files|javac App.java',
          'Go Toolchain|Install Go compiler and environment|pkg install golang',
          'rustup|Install and manage Rust toolchains|curl --proto \'=https\' --tlsv1.2 -sSf https://sh.rustup.rs | sh',
          'cargo|Rust package manager and compiler runner|cargo run',
          'gem|Ruby package distribution runtime installer|pkg install ruby'
        ]
      },
      {
        title: '🌐 Web Development',
        description: 'Scaffold modern reactive user interfaces on Android.',
        list: [
          'Vite|Ultra-fast frontend build tool and server|npm create vite@latest',
          'Create React App|Classic standard React starter template|npx create-react-app my-app',
          'npm|Node Package Manager project init|npm init -y',
          'pnpm|Install dev dependencies in nested folders|pnpm install',
          'Next.js|React application server-side framework|npx create-next-app@latest',
          'Angular|Enterprise frontend web application framework|npm install -g @angular/cli',
          'Vue|Progressive web application framework template|npm create vue@latest',
          'Svelte|Component compiler framework scaffold|npx sv create'
        ]
      },
      {
        title: '⚙ Backend Development',
        description: 'Build robust network server APIs on Termux.',
        list: [
          'Express.js|Minimalist web framework for Node.js|npm install express',
          'NestJS|Progressive TypeScript backend framework|npm install -g @nestjs/cli',
          'Django|Batteries-included Python web framework|pip install django',
          'Flask|Lightweight Python WSGI web application framework|pip install flask',
          'FastAPI|Modern, fast Python web framework for APIs|pip install fastapi uvicorn',
          'Laravel|PHP web application framework with elegant syntax|composer global require laravel/installer'
        ]
      },
      {
        title: '🗄 Databases',
        description: 'Setup and query local relational and document engines.',
        list: [
          'SQLite|Lightweight serverless SQL database engine|pkg install sqlite',
          'PostgreSQL Client|Connect to PostgreSQL database servers|pkg install postgresql',
          'MySQL Client|Connect to MariaDB/MySQL database servers|pkg install mariadb',
          'Redis CLI|Run Redis server database in background|pkg install redis',
          'MongoDB Shell|Query remote or local MongoDB databases|pkg install mongodb'
        ]
      },
      {
        title: '🐳 Containers & Virtualization',
        description: 'Run standard Linux distributions in isolated chroots.',
        list: [
          'proot|Chroot emulation without root permissions|pkg install proot',
          'proot-distro|Manage and run Linux distros in Termux|pkg install proot-distro',
          'Ubuntu|Run an Ubuntu OS user space container|proot-distro install ubuntu',
          'Debian|Run a Debian Linux environment|proot-distro install debian',
          'Arch Linux|Run Arch Linux distro inside Termux|proot-distro install archlinux',
          'Fedora|Run a Fedora Linux environment|proot-distro install fedora',
          'Alpine|Run ultra-lightweight Alpine Linux distribution|proot-distro install alpine'
        ]
      },
      {
        title: '☁ Cloud & DevOps',
        description: 'Deploy clouds, run playbooks, and manage versioning.',
        list: [
          'Git|Distributed version control system client|pkg install git',
          'GitHub CLI|Manage repositories and issues from console|pkg install gh',
          'Docker (remote client)|Control Docker daemons from Termux console|pkg install docker',
          'AWS CLI|Command-line tool to manage AWS cloud services|pip install awscli',
          'Azure CLI|Command-line tool to manage Azure cloud services|pip install azure-cli',
          'Google Cloud CLI|Manage Google Cloud platform assets|curl https://sdk.cloud.google.com | bash',
          'Terraform|Infrastructure as code provisioning client|pkg install terraform',
          'Ansible|Run playbooks and configure environments|pip install ansible'
        ]
      },
      {
        title: '📱 Android Development',
        description: 'Interact with Android debug ports and decompile bundles.',
        list: [
          'ADB|Android Debug Bridge terminal utility|pkg install android-tools',
          'Fastboot|Flash Android recovery images and kernels|fastboot devices',
          'APKTool|Rebuild and decompile Android APK assets|pkg install apktool',
          'JADX|Decompile Dalvik bytecodes to readable Java|pkg install jadx',
          'Gradle|Build automation tool for Java/Android applications|pkg install gradle',
          'OpenJDK|Compile and test Java programs on-device|pkg install openjdk-17'
        ]
      },
      {
        title: '🛡 Cybersecurity (Authorized Use)',
        description: 'Audit network ports, web services, and check vulnerabilities.',
        list: [
          'Nmap|Perform host port checks and network discovery|nmap -F target_ip',
          'Whois|Query domain ownership record details|whois google.com',
          'dnsrecon| DNS enumeration and zone transfer testing|pkg install dnsrecon',
          'Amass|Discover subdomains and map out target attack surface|amass enum -d target.com',
          'Nikto|Scan target web servers for dangerous files and configs|nikto -h target.com',
          'Gobuster|Directory and file brute-forcer for web servers|gobuster dir -u http://target.com -w wordlist.txt',
          'ffuf|Fast web vulnerability fuzzer written in Go|ffuf -u http://target.com/FUZZ -w wordlist.txt',
          'tcpdump|Intercept and dump network packets from interfaces|tcpdump -vv',
          'tshark|Terminal-based packet analyzer (Wireshark CLI)|tshark',
          'Aircrack-ng tools|Crack WPA keys and audit wireless signals|pkg install aircrack-ng',
          'strings|Scan binaries for ASCII/Unicode character sequences|strings binary',
          'objdump|Disassemble binary files to inspect instruction sets|objdump -d binary',
          'readelf|Display structural metadata from ELF files|readelf -h binary'
        ]
      },
      {
        title: '🤖 AI & Machine Learning',
        description: 'Run lightweight local LLMs and integrate cloud models.',
        list: [
          'Ollama Client|Query Ollama LLM servers from Termux|curl -X POST http://local_ip:11434/api/generate',
          'OpenAI API|Interact with OpenAI completions via curl|curl https://api.openai.com/v1/chat/completions',
          'Gemini API|Query Google Gemini model endpoints from console|curl https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent',
          'Hugging Face CLI|Download datasets and model weights from Hub|pip install huggingface_hub'
        ]
      },
      {
        title: '🔧 Automation',
        description: 'Schedule scripts, configure cron utilities, and run tasks.',
        list: [
          'Cron|Schedule recurring jobs in user namespace background|pkg install cronie',
          'Task Scheduling|Execute tasks at specific absolute times|at 12:00 PM tomorrow -f script.sh',
          'Shell Scripts|Write bash automation scripts to chain programs|bash script.sh',
          'Python Automation|Run advanced scripting playbooks with python|python automation.py',
          'Node.js Automation|Write automated API callers in Node|node automation.js'
        ]
      },
      {
        title: '📊 Monitoring',
        description: 'Inspect CPU, memory usage, disk allocations, and processes.',
        list: [
          'htop|Interactive colorful process monitor client|htop',
          'top|Display CPU activities and process lists|top',
          'free|Print system memory allocation and swap space stats|free -h',
          'df|Display disk space allocations and mount points|df -h',
          'du|Summarize disk space usage of files and directories|du -sh *',
          'ps|Display snapshot of active processes|ps aux',
          'vmstat|Print virtual memory statistics and queue states|vmstat 1'
        ]
      },
      {
        title: '🔍 Search & Text Processing',
        description: 'Filter lines, format data tables, and calculate words.',
        list: [
          'grep|Search files for lines matching query regex|grep -i "error" log.txt',
          'sed|Search and replace substrings in-place|sed -i "s/http/https/g" config.json',
          'awk|Retrieve columns and run calculations on tables|awk \'{print $2, $4}\' data.txt',
          'cut|Extract specific fields or characters from fields|cut -d "," -f 1 data.csv',
          'sort|Sort lines of text files alphabetically or numerically|sort -n file.txt',
          'uniq|Delete duplicate adjacent lines from sorted input|uniq -c file.txt',
          'wc|Count characters, lines, and words of text inputs|wc -l file.txt',
          'tr|Translate, squeeze, or delete characters from input|tr "[:lower:]" "[:upper:]"'
        ]
      },
      {
        title: '🎨 Productivity',
        description: 'Run multiple windows, preview syntax, and find files.',
        list: [
          'tmux|Terminal multiplexer for window splitting and sessions|tmux new-session -s main',
          'screen|Multiplex shell sessions with simple commands|screen',
          'fzf|Fuzzy finder command-line interactive filter|find . | fzf',
          'bat|Clone of cat command with syntax highlighting|pkg install bat',
          'eza|Modern replacement for ls written in Rust|pkg install eza',
          'ripgrep|Ultra-fast recursively grep tool|pkg install ripgrep',
          'fd|Simple and fast alternative to find utility|pkg install fd'
        ]
      },
      {
        title: '📚 Git & GitHub',
        description: 'Initialize repositories, submit commits, and authenticate keys.',
        list: [
          'Git Installation|Setup git configuration options|git config --global user.name "Name"',
          'Repository Management|Initialize and manage local git databases|git init',
          'Branching|Create or switch isolated code branches|git checkout -b feature-branch',
          'Merging|Merge commits from target branch into active branch|git merge main',
          'Rebasing|Reapply commits on top of another base tip|git rebase main',
          'GitHub Authentication|Authenticate with remote GitHub accounts|gh auth login',
          'SSH Keys|Configure SSH credentials for secure pushes|ssh -T git@github.com',
          'GitHub CLI|Check issues, pull requests, and status|gh pr status'
        ]
      },
      {
        title: '🔧 Utilities',
        description: 'Encode parameters, generate passwords, and encode QR codes.',
        list: [
          'QR Code Generator|Encode text to printable QR code formats|pkg install qrencode && qrencode -t ansiutf8 "text"',
          'Base64 Encode/Decode|Convert text to base64 encoding formats|echo -n "test" | base64',
          'JSON Formatter|Format minified JSON structures in console|echo \'{"a":1}\' | jq',
          'UUID Generator|Generate unique identification keys|uuidgen',
          'Password Generator|Create high entropy random passwords|openssl rand -base64 12',
          'Hash Utilities|Generate MD5/SHA checksum file verification|sha256sum file.txt',
          'Cron Expression Generator|Generate cron trigger schedules|echo "0 12 * * * command"'
        ]
      }
    ],
    build: [],
    troubleshooting: [],
    usefulLinks: [
      { label: 'Termux Wiki', url: 'https://wiki.termux.com/' },
      { label: 'F-Droid Termux', url: 'https://f-droid.org/en/packages/com.termux/' }
    ],
    commonErrors: [
      { error: 'Repository under maintenance or offline', solution: 'Run `termux-change-repo` and choose an alternative official mirror.' }
    ],
    bestPractices: [
      'Only install packages from official and verified mirror sources.',
      'Regularly back up your home and prefix directories.'
    ]
  }
};
