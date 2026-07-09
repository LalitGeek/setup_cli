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
  category: 'Frontend' | 'Backend' | 'Languages' | 'Databases' | 'Cloud' | 'DevOps' | 'Linux' | 'AI';
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
  react: {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    overview: 'React is a popular open-source JavaScript library for building user interfaces, particularly single-page applications. Developed and maintained by Meta.',
    requirements: [
      { title: 'Node.js (v18.0.0+)', code: 'node -v' },
      { title: 'npm (v9.0.0+)', code: 'npm -v' }
    ],
    installation: [
      { title: 'Install React globally or use Vite initializer', code: 'npm create vite@latest my-react-app -- --template react-ts' }
    ],
    projectCreation: [
      { title: 'Create App using Vite', code: 'npm create vite@latest my-app -- --template react-ts\ncd my-app\nnpm install' }
    ],
    folderStructure: `my-app/
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts`,
    run: [
      { title: 'Run Development Server', code: 'npm run dev' }
    ],
    build: [
      { title: 'Build for Production', code: 'npm run build' },
      { title: 'Preview Local Production Build', code: 'npm run preview' }
    ],
    production: [
      { title: 'Production environment checks', description: 'Ensure React Developer Tools are disabled in prod, use production builds, and enable gzip compression on Nginx/Cloudflare.' }
    ],
    deployment: [
      { title: 'Deploy to Vercel', code: 'npm install -g vercel\nvercel' },
      { title: 'Deploy to Netlify', code: 'npm install -g netlify-cli\nnetlify deploy --prod' }
    ],
    troubleshooting: [
      { title: 'Clear NPM cache and reinstall', code: 'rm -rf node_modules package-lock.json\nnpm cache clean --force\nnpm install' }
    ],
    usefulLinks: [
      { label: 'Official Documentation', url: 'https://react.dev' },
      { label: 'Vite Guide', url: 'https://vite.dev/guide/' }
    ],
    commonErrors: [
      { error: 'Hooks can only be called inside the body of a function component.', solution: 'Ensure you are not calling hooks inside conditional statements, loops, or nested functions.' },
      { error: 'Module not found: Can\'t resolve \'react-router-dom\'', solution: 'Run `npm install react-router-dom` to install the router package.' }
    ],
    bestPractices: [
      'Keep components small and focused on a single responsibility.',
      'Use functional components and modern React Hooks instead of class components.',
      'Memoize expensive calculations using useMemo and callbacks using useCallback.',
      'Keep state as local as possible to avoid unnecessary re-renders.'
    ]
  },
  nextjs: {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Frontend',
    overview: 'Next.js is a React framework created by Vercel that enables developer features such as Server-Side Rendering (SSR), Static Site Generation (SSG), and API Routes.',
    requirements: [
      { title: 'Node.js (v18.17.0+)', code: 'node -v' }
    ],
    installation: [
      { title: 'Create Next.js App (Interactive)', code: 'npx create-next-app@latest my-next-app' },
      { title: 'Create Next.js App with flags', code: 'npx create-next-app@latest my-next-app --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"' }
    ],
    projectCreation: [
      { title: 'Create and Navigate', code: 'npx create-next-app@latest my-app --typescript --tailwind --app\ncd my-app' }
    ],
    folderStructure: `my-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
├── public/
├── package.json
├── tailwind.config.ts
└── next.config.ts`,
    run: [
      { title: 'Run Dev Server', code: 'npm run dev' }
    ],
    build: [
      { title: 'Build for Production', code: 'npm run build' },
      { title: 'Start Production Server Locally', code: 'npm run start' }
    ],
    deployment: [
      { title: 'Deploy on Vercel', description: 'Next.js is optimized for Vercel. Push to Github/Gitlab and connect your repository to Vercel for zero-config deployments.' }
    ],
    troubleshooting: [
      { title: 'Reset Next.js Cache', code: 'rm -rf .next\nnpm run dev' }
    ],
    usefulLinks: [
      { label: 'Next.js Docs', url: 'https://nextjs.org/docs' }
    ],
    commonErrors: [
      { error: 'Error: Next Router was not mounted.', solution: 'Import `useRouter` from `next/navigation` instead of `next/router` when using the App Router.' }
    ],
    bestPractices: [
      'Use Server Components by default for better SEO and performance.',
      'Mark components with "use client" only when using interactivity, state, or hooks.',
      'Use next/image for automatic image optimization.',
      'Use next/font to automatically optimize and load web fonts.'
    ]
  },
  vue: {
    id: 'vue',
    name: 'Vue.js',
    category: 'Frontend',
    overview: 'Vue.js is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable and integrates easily with other libraries.',
    requirements: [
      { title: 'Node.js (v18.0.0+)', code: 'node -v' },
      { title: 'npm (v9.0.0+)', code: 'npm -v' }
    ],
    installation: [
      { title: 'Create Vue App via Vite', code: 'npm create vue@latest' }
    ],
    projectCreation: [
      { title: 'Initialize Vue project with Vite', code: 'npm create vite@latest my-vue-app -- --template vue-ts\ncd my-vue-app\nnpm install' }
    ],
    folderStructure: `my-vue-app/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.vue
│   ├── main.ts
│   └── vite-env.d.ts
├── index.html
├── package.json
└── vite.config.ts`,
    run: [
      { title: 'Run dev server', code: 'npm run dev' }
    ],
    build: [
      { title: 'Build Vue App', code: 'npm run build' }
    ],
    troubleshooting: [
      { title: 'Clear npm cache and reinstall', code: 'rm -rf node_modules package-lock.json && npm install' }
    ],
    usefulLinks: [
      { label: 'Vue.js Docs', url: 'https://vuejs.org' }
    ],
    commonErrors: [
      { error: 'Component name "Home" should always be multi-word.', solution: 'Rename component to "HomeView" or disable the `vue/multi-word-component-names` ESLint rule.' }
    ],
    bestPractices: [
      'Use the Composition API with <script setup> syntax for clean and readable code.',
      'Always use props and emit validation.',
      'Use key attributes with v-for properly to ensure correct rendering update paths.'
    ]
  },
  nuxt: {
    id: 'nuxt',
    name: 'Nuxt.js',
    category: 'Frontend',
    overview: 'Nuxt is an open-source framework that makes web development intuitive and powerful. Create performant and production-ready full-stack web apps and websites.',
    requirements: [
      { title: 'Node.js (v18.0.0+)', code: 'node -v' }
    ],
    installation: [
      { title: 'Initialize Nuxt App', code: 'npx nuxi@latest init my-nuxt-app' }
    ],
    projectCreation: [
      { title: 'Initialize and Install', code: 'npx nuxi@latest init my-app\ncd my-app\nnpm install' }
    ],
    folderStructure: `my-app/
├── .nuxt/
├── components/
├── layouts/
├── pages/
│   └── index.vue
├── public/
├── server/
│   └── api/
├── app.vue
├── nuxt.config.ts
└── package.json`,
    run: [
      { title: 'Run Dev Server', code: 'npm run dev -- -o' }
    ],
    build: [
      { title: 'Build for Production', code: 'npm run build' },
      { title: 'Preview production build', code: 'node .output/server/index.mjs' }
    ],
    troubleshooting: [
      { title: 'Clear Nuxt cache', code: 'rm -rf .nuxt .output node_modules && npm install' }
    ],
    usefulLinks: [
      { label: 'Nuxt Docs', url: 'https://nuxt.com' }
    ],
    commonErrors: [
      { error: 'Hydration node mismatch error.', solution: 'Ensure Server-Side Rendered (SSR) HTML matches client state. Avoid client-only elements or window APIs during created hooks.' }
    ],
    bestPractices: [
      'Use directory-based routing in the pages/ folder for clean page structure.',
      'Leverage Nuxt composables like useFetch and useAsyncData for data fetching.',
      'Wrap client-only code inside <ClientOnly> tags.'
    ]
  },
  angular: {
    id: 'angular',
    name: 'Angular',
    category: 'Frontend',
    overview: 'Angular is a development platform, built on TypeScript, that includes a component-based framework for building scalable web applications.',
    requirements: [
      { title: 'Node.js (v18.13.0+)', code: 'node -v' }
    ],
    installation: [
      { title: 'Install Angular CLI globally', code: 'npm install -g @angular/cli' }
    ],
    projectCreation: [
      { title: 'Create new Angular app', code: 'ng new my-app --style css --routing --ssr\ncd my-app' }
    ],
    folderStructure: `my-app/
├── src/
│   ├── app/
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── index.html
│   └── main.ts
├── angular.json
├── package.json
└── tsconfig.json`,
    run: [
      { title: 'Run Development Server', code: 'ng serve' }
    ],
    build: [
      { title: 'Build production application', code: 'ng build' }
    ],
    troubleshooting: [
      { title: 'Clear cache and rebuild', code: 'ng cache clean\nrm -rf .angular dist node_modules && npm install' }
    ],
    usefulLinks: [
      { label: 'Angular Documentation', url: 'https://angular.dev' }
    ],
    commonErrors: [
      { error: 'NG0203: inject() must be called from an injection context.', solution: 'Ensure you call inject() within constructor or provider init stages, not inside async handlers.' }
    ],
    bestPractices: [
      'Use standalone components by default for modular, clean component declarations.',
      'Manage state reactively using Angular Signals or RxJS observables.',
      'Optimize performance with trackBy function or the new @for loop tracking.'
    ]
  },
  svelte: {
    id: 'svelte',
    name: 'SvelteKit',
    category: 'Frontend',
    overview: 'Svelte is a compiler approach to building user interfaces. SvelteKit is the official application framework for Svelte, featuring file-based routing and SSR.',
    requirements: [
      { title: 'Node.js (v18.0.0+)', code: 'node -v' }
    ],
    installation: [
      { title: 'Create Svelte project via Svelte CLI', code: 'npm create svelte@latest my-svelte-app' }
    ],
    projectCreation: [
      { title: 'Initialize SvelteKit project', code: 'npm create svelte@latest my-app\ncd my-app\nnpm install' }
    ],
    folderStructure: `my-app/
├── src/
│   ├── routes/
│   │   ├── +layout.svelte
│   │   └── +page.svelte
│   └── app.html
├── static/
├── package.json
├── svelte.config.js
└── vite.config.ts`,
    run: [
      { title: 'Run Dev Server', code: 'npm run dev -- --open' }
    ],
    build: [
      { title: 'Build production application', code: 'npm run build' }
    ],
    troubleshooting: [
      { title: 'Re-sync Svelte types', code: 'npx svelte-kit sync' }
    ],
    usefulLinks: [
      { label: 'Svelte Docs', url: 'https://svelte.dev' }
    ],
    commonErrors: [
      { error: 'db connection fails inside component script', solution: 'Move sensitive database code to +page.server.js instead of inline inside +page.svelte script blocks.' }
    ],
    bestPractices: [
      'Use Svelte stores or Svelte 5 Runes for global reactive state.',
      'Keep style blocks local inside Svelte components; styles are automatically scoped.',
      'Use +page.server.ts for secure data fetching and API calls.'
    ]
  },
  solid: {
    id: 'solid',
    name: 'SolidJS',
    category: 'Frontend',
    overview: 'SolidJS is a declarative, efficient, and flexible JavaScript library for building user interfaces without a virtual DOM, compiling directly to real DOM nodes.',
    requirements: [
      { title: 'Node.js (v18.0.0+)', code: 'node -v' }
    ],
    installation: [
      { title: 'Create Solid App via Vite', code: 'npm create vite@latest my-solid-app -- --template solid-ts' }
    ],
    projectCreation: [
      { title: 'Create and run Solid app', code: 'npm create vite@latest my-app -- --template solid-ts\ncd my-app\nnpm install' }
    ],
    folderStructure: `my-app/
├── src/
│   ├── App.tsx
│   ├── index.css
│   └── index.tsx
├── index.html
├── package.json
└── vite.config.ts`,
    run: [
      { title: 'Run Development Server', code: 'npm run dev' }
    ],
    build: [
      { title: 'Build for production', code: 'npm run build' }
    ],
    troubleshooting: [
      { title: 'Reinstall node modules', code: 'rm -rf node_modules package-lock.json && npm install' }
    ],
    usefulLinks: [
      { label: 'SolidJS Docs', url: 'https://www.solidjs.com' }
    ],
    commonErrors: [
      { error: 'Props object losing reactivity.', solution: 'Do not destructure React-style props in SolidJS. Use props.propName directly or use `splitProps`.' }
    ],
    bestPractices: [
      'Use Signals (createSignal) for local reactive state.',
      'Avoid destructuring props to keep reactivity intact.',
      'Use <Show> and <For> components instead of standard JS ternary/map operators.'
    ]
  },
  tailwind: {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'Frontend',
    overview: 'Tailwind CSS is a utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.',
    requirements: [
      { title: 'Node.js (v18.0.0+)', code: 'node -v' }
    ],
    installation: [
      { title: 'Install tailwindcss via npm', code: 'npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p' }
    ],
    projectCreation: [
      { title: 'Install Tailwind and generate configuration', code: 'npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p' }
    ],
    folderStructure: `my-project/
├── tailwind.config.js
├── postcss.config.js
└── src/
    └── index.css`,
    run: [
      { title: 'Build CSS (standalone CLI)', code: 'npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch' }
    ],
    build: [
      { title: 'Minify CSS build', code: 'npx tailwindcss -o ./dist/output.css --minify' }
    ],
    troubleshooting: [
      { title: 'Styles not showing up', description: 'Double check the `content` array paths in tailwind.config.js. Make sure it covers all HTML/TS/JS templates!' }
    ],
    usefulLinks: [
      { label: 'Tailwind CSS Docs', url: 'https://tailwindcss.com' }
    ],
    commonErrors: [
      { error: 'Tailwind classes not rendering on dynamically injected HTML.', solution: 'Add the classes to tailwind whitelist safelist config or avoid using dynamic template string class injection.' }
    ],
    bestPractices: [
      'Use Arbitrary Values sparingly; define custom theme classes in tailwind.config.js instead.',
      'Group custom configurations inside tailwind.config.js theme extension block.',
      'Use Tailwind CSS IntelliSense plugin in VS Code for autocomplete and formatting.'
    ]
  },
  django: {
    id: 'django',
    name: 'Django',
    category: 'Backend',
    overview: 'Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. It handles the hassle of web development so you can focus on writing your app.',
    requirements: [
      { title: 'Python 3.10+', code: 'python3 --version' },
      { title: 'pip (Python package manager)', code: 'pip --version' }
    ],
    installation: [
      { title: 'Install Django using pip', code: 'pip install django' }
    ],
    projectCreation: [
      { title: 'Create virtualenv and start project', code: 'python3 -m venv venv\nsource venv/bin/activate\npip install django\ndjango-admin startproject myproject .\npython manage.py startapp myapp' }
    ],
    folderStructure: `myproject/
├── manage.py
├── myproject/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
├── myapp/
│   ├── migrations/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── tests.py
│   └── views.py
└── venv/`,
    run: [
      { title: 'Run Server', code: 'python manage.py runserver' },
      { title: 'Create Migrations', code: 'python manage.py makemigrations\npython manage.py migrate' },
      { title: 'Create Superuser', code: 'python manage.py createsuperuser' }
    ],
    build: [
      { title: 'Collect Static Files', code: 'python manage.py collectstatic --no-input' }
    ],
    production: [
      { title: 'Update settings.py for production', description: 'Set DEBUG = False, define ALLOWED_HOSTS, configure SECURE_SSL_REDIRECT, and configure database connections via environment variables.' }
    ],
    deployment: [
      { title: 'Deploy with Gunicorn', code: 'pip install gunicorn\ngunicorn myproject.wsgi:application --bind 0.0.0.0:8000' }
    ],
    troubleshooting: [
      { title: 'Reset migrations (Dev ONLY)', code: 'find . -path "*/migrations/*.py" -not -name "__init__.py" -delete\nfind . -path "*/migrations/*.pyc" -delete\nrm db.sqlite3' }
    ],
    usefulLinks: [
      { label: 'Django Docs', url: 'https://docs.djangoproject.com' }
    ],
    commonErrors: [
      { error: 'You have unapplied migrations.', solution: 'Run `python manage.py migrate` to apply database schema updates.' },
      { error: 'Allowed Hosts check failed.', solution: 'Add your domain or IP to the ALLOWED_HOSTS list in settings.py.' }
    ],
    bestPractices: [
      'Store sensitive settings (SECRET_KEY, DB_PASSWORD) in environmental variables.',
      'Keep database queries optimized by using select_related() and prefetch_related().',
      'Split settings.py into base.py, local.py, and production.py for better configuration control.',
      'Write tests in views, models, and forms.'
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
  linux_files: {
    id: 'linux_files',
    name: 'File & Directory',
    category: 'Linux',
    overview: 'Commands used to navigate the filesystem, view/edit files, search contents, and manage directory trees in Linux environments.',
    requirements: [],
    installation: [],
    projectCreation: [],
    run: [
      { title: 'List directory contents with detail', code: 'ls -lah' },
      { title: 'Create directories with parents', code: 'mkdir -p /path/to/nested/directory' },
      { title: 'Find files by name recursively', code: 'find . -type f -name "*.log"' },
      { title: 'Grep string pattern inside files', code: 'grep -rnI "search_string" /path/to/folder/' }
    ],
    build: [],
    troubleshooting: [
      { title: 'Disk usage of directory contents', code: 'du -sh * | sort -h' },
      { title: 'Monitor file changes in real-time', code: 'tail -f /var/log/syslog' }
    ],
    commonErrors: [
      { error: 'No space left on device.', solution: 'Clean package caches, delete orphaned files, or check disk usage distribution with `df -h` and `du -sh`.' }
    ],
    bestPractices: [
      'Avoid running `rm -rf` without reviewing paths and checking double slashes.',
      'Use find in combination with exec carefully to prevent unintended bulk changes.',
      'Use grep with -I flag to skip searching binary files.'
    ]
  },
  linux_sys: {
    id: 'linux_sys',
    name: 'System & Process',
    category: 'Linux',
    overview: 'Commands for monitoring CPU/RAM loads, active system threads, daemon services, and process resources.',
    requirements: [],
    installation: [],
    projectCreation: [],
    run: [
      { title: 'Show active processes / RAM resources', code: 'htop' },
      { title: 'Check RAM consumption in human units', code: 'free -h' },
      { title: 'Check disk storage partitions', code: 'df -h' },
      { title: 'Search for active process PID', code: 'pgrep -lf node' }
    ],
    build: [],
    troubleshooting: [
      { title: 'Kill process by PID forcefully', code: 'kill -9 <PID>' },
      { title: 'Check system service journals', code: 'journalctl -u docker.service -n 50 -f' }
    ],
    commonErrors: [
      { error: 'Failed to start service: Unit not found.', solution: 'Ensure the package is installed, or run `systemctl daemon-reload` to fetch newly added service files.' }
    ],
    bestPractices: [
      'Use systemctl status before restarting services to understand their failure reasons.',
      'Avoid kill -9 unless normal kill commands fail, as it prevents process cleanups.',
      'Monitor swap space usage to identify application RAM leaks.'
    ]
  },
  linux_net: {
    id: 'linux_net',
    name: 'Network & Ports',
    category: 'Linux',
    overview: 'Commands to test connectivity, analyze socket binds, verify open ports, and secure data transfers.',
    requirements: [],
    installation: [],
    projectCreation: [],
    run: [
      { title: 'View listening TCP/UDP ports and PIDs', code: 'sudo ss -tulpn' },
      { title: 'Verify server port connection', code: 'nc -zv 127.0.0.1 80' },
      { title: 'Download files via web', code: 'wget -c https://example.com/file.tar.gz' },
      { title: 'Inspect local network interfaces', code: 'ip a' }
    ],
    build: [],
    troubleshooting: [
      { title: 'Trace network packets routing', code: 'traceroute 8.8.8.8' },
      { title: 'Inspect DNS details', code: 'dig example.com A' }
    ],
    commonErrors: [
      { error: 'nc: connect to port failed: Connection refused.', solution: 'Verify that the service is running, listening on the correct network interface, and not blocked by local firewalls.' }
    ],
    bestPractices: [
      'Use ss instead of the obsolete netstat command for faster port lookups.',
      'Restrict socket binds to localhost (127.0.0.1) instead of public interfaces (0.0.0.0) unless necessary.',
      'Check firewalld or ufw logs when encountering packet losses.'
    ]
  },
  linux_permissions: {
    id: 'linux_permissions',
    name: 'Permissions & Users',
    category: 'Linux',
    overview: 'Commands for user account management, permission attributes, ownership controls, and security policies.',
    requirements: [],
    installation: [],
    projectCreation: [],
    run: [
      { title: 'Make script file executable', code: 'chmod +x install.sh' },
      { title: 'Change owner/group of files', code: 'sudo chown -R user:group /var/www' },
      { title: 'Set strict read/write for owner only', code: 'chmod 600 config.json' },
      { title: 'Create new user account', code: 'sudo useradd -m -s /bin/bash username' }
    ],
    build: [],
    troubleshooting: [
      { title: 'Add user to sudoers group', code: 'sudo usermod -aG sudo username' },
      { title: 'Inspect current user privileges', code: 'sudo -l' }
    ],
    commonErrors: [
      { error: 'Permission denied (publickey).', solution: 'Check directory permissions on remote ~/.ssh (must be 700) and authorized_keys (must be 600).' }
    ],
    bestPractices: [
      'Adhere to the principle of least privilege: do not set files to 777.',
      'Use user groups to coordinate read/write permissions for web root files.',
      'Avoid running shell utilities or cron daemons directly as root.'
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
  }
};
