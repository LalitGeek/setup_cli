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
  category: 'Development' | 'Backend' | 'Languages' | 'Databases' | 'Cloud' | 'DevOps' | 'Linux' | 'AI';
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
    category: 'Development',
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
    category: 'Development',
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
      { title: 'Example Dockerfile for Node.js', code: `FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]` }
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
      { title: 'Reverse Proxy Config', code: `server {
    listen 80;
    server_name example.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}` }
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
      { title: 'Create deployment YAML', code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-app
        image: my-app-image:v1
        ports:
        - containerPort: 3000` }
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
      { title: 'Node.js OpenAI connection script', code: `import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const completion = await openai.chat.completions.create({
  model: "gpt-4o",
  messages: [{ role: "user", content: "Hello!" }],
});
console.log(completion.choices[0].message.content);` }
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
