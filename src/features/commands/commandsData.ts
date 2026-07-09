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
  }
};
