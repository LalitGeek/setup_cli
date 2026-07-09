interface MockResponse {
  keywords: string[];
  response: string;
}

const mockResponses: MockResponse[] = [
  {
    keywords: ['react', 'install react', 'vite react', 'react setup'],
    response: `# React 19 Setup Guide with Vite & TypeScript

Here is how you can set up a premium React application from scratch using Vite.

### 1. Verification
Before starting, check your Node.js and NPM versions:
\`\`\`bash
node -v
npm -v
\`\`\`

### 2. Create the Application
Create a new project using the Vite template for React and TypeScript:
\`\`\`bash
npm create vite@latest my-react-app -- --template react-ts
cd my-react-app
\`\`\`

### 3. Install Dependencies & Dev Server
Install the required node modules and start the local development server:
\`\`\`bash
npm install
npm run dev
\`\`\`

| Command | Action | Description |
| :--- | :--- | :--- |
| \`npm install\` | Packages Install | Installs dependencies in package.json |
| \`npm run dev\` | Start Server | Starts Vite dev server with hot reload |
| \`npm run build\` | Production Build | Compiles code and outputs assets to /dist |

### Best Practices
* **Use Component-Level State**: Keep state as local as possible.
* **TypeScript Typing**: Write strong TypeScript interfaces for props to prevent runtime exceptions.
`
  },
  {
    keywords: ['django', 'setup django', 'django install', 'python django'],
    response: `# Django Backend Quickstart

Django is a high-level Python web framework designed for rapid development. Here is how to configure a new Django project.

### 1. Environment Setup
Create a Python virtual environment and activate it:
\`\`\`bash
# Create the environment
python3 -m venv venv

# Activate on Linux/macOS
source venv/bin/activate

# Activate on Windows
venv\\Scripts\\activate
\`\`\`

### 2. Install Django
Install Django and configure your requirements file:
\`\`\`bash
pip install django
pip freeze > requirements.txt
\`\`\`

### 3. Initialize Project & App
Create the main project configuration and your first application app:
\`\`\`bash
django-admin startproject myproject .
python manage.py startapp myapp
\`\`\`

### 4. Apply Migrations & Run
Create the tables in SQLite and start the development server:
\`\`\`bash
python manage.py migrate
python manage.py runserver
\`\`\`

Now access your project at [http://127.0.0.1:8000/](http://127.0.0.1:8000/).
`
  },
  {
    keywords: ['docker', 'docker container', 'dockerfile', 'docker commands'],
    response: `# Docker Cheat Sheet & Walkthrough

Here are the most common Docker CLI commands and configurations used in production.

### Dockerfile Boilerplate for Node.js
Create a file named \`Dockerfile\` at your project root:
\`\`\`dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

### Core CLI Commands

* **Build Image**:
  \`\`\`bash
  docker build -t my-web-app:latest .
  \`\`\`
* **Run Container in Background**:
  \`\`\`bash
  docker run -d -p 8080:3000 --name my-running-app my-web-app:latest
  \`\`\`
* **List Running Containers**:
  \`\`\`bash
  docker ps
  \`\`\`
* **Stop Container**:
  \`\`\`bash
  docker stop my-running-app
  \`\`\`
* **View Container Logs**:
  \`\`\`bash
  docker logs -f my-running-app
  \`\`\`
`
  },
  {
    keywords: ['git', 'git commands', 'git setup', 'github'],
    response: `# Git Version Control Cheat Sheet

Master git commands for your daily development workflow.

### 1. Initialize and Push
\`\`\`bash
# Initialize local repo
git init

# Add all unstaged files
git add .

# Commit changes
git commit -m "feat: configure setup_cli center"

# Push to GitHub
git branch -M main
git remote add origin https://github.com/user/repo.git
git push -u origin main
\`\`\`

### 2. Branch Management
* **Create and checkout branch**:
  \`\`\`bash
  git checkout -b feature/auth-system
  \`\`\`
* **Switch branch**:
  \`\`\`bash
  git checkout main
  \`\`\`
* **Merge branch**:
  \`\`\`bash
  git merge feature/auth-system
  \`\`\`
`
  },
  {
    keywords: ['nginx', 'nginx setup', 'nginx reverse proxy'],
    response: `# Nginx Web Server Configuration

Nginx is the standard reverse proxy and static site server.

### Reverse Proxy Configuration
Place the following inside \`/etc/nginx/sites-available/default\`:
\`\`\`nginx
server {
    listen 80;
    server_name mydomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
\`\`\`

### Commands to Apply Configurations
\`\`\`bash
# Test configurations for syntax errors
sudo nginx -t

# Reload configuration without downtime
sudo nginx -s reload
\`\`\`
`
  }
];

const fallbackResponse = `# Setup CLI AI Assistant

I am your developer assistant. I can help you with commands, setups, syntax, and debugging logs. 

Here are some things I can assist you with:
1. **Setup guides** for React, Next.js, Django, Express, and databases.
2. **Docker configurations** and deployment scripts.
3. **Nginx configs** for reverse proxies.
4. **Interactive Dev Tools**: Checkout the Developer Tools tab on the left sidebar to generate UUIDs, encode/decode JWTs, formatting JSON, and testing Regex.

To get started, try asking about one of the technologies listed in the sidebar (e.g. **"React Setup"**, **"Setup Django"**, or **"Docker commands"**), or type an error log to get an explanation.
`;

export const getAIResponse = (query: string): string => {
  const normalizedQuery = query.toLowerCase().trim();
  for (const item of mockResponses) {
    if (item.keywords.some(keyword => normalizedQuery.includes(keyword))) {
      return item.response;
    }
  }
  return fallbackResponse;
};

export const streamAIResponse = (
  query: string,
  onChunk: (text: string) => void,
  onComplete: () => void
) => {
  const fullText = getAIResponse(query);
  const words = fullText.split(' ');
  let currentText = '';
  let index = 0;

  const timer = setInterval(() => {
    if (index < words.length) {
      currentText += (index === 0 ? '' : ' ') + words[index];
      onChunk(currentText);
      index++;
    } else {
      clearInterval(timer);
      onComplete();
    }
  }, 45); // Standard typing animation speed
};
