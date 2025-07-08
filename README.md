# CYBERNAUTICA OS

A comprehensive web-based operating system simulation with desktop environment, games, and event management for CYBERNAUTICA hackathon.

## 🚀 Features

- **Cyberpunk Desktop Environment**: Immersive OS simulation with window management
- **Event Management**: Comprehensive hackathon event system with 7+ interactive events
- **Interactive Terminal**: Functional command-line interface with file system navigation
- **App Center**: Install and manage event-specific applications
- **Responsive Design**: Works across desktop and mobile devices
- **Real-time Updates**: Dynamic content with modern React architecture

## 🏗️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Express.js + TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **UI**: Tailwind CSS + shadcn/ui components
- **State Management**: TanStack Query
- **Routing**: Wouter

## 📁 Project Structure

```
cybernautica-os/
├── client/          # React frontend
├── server/          # Express backend API
├── shared/          # Shared types and schemas
├── Dockerfile       # Docker configuration
└── package.json     # Dependencies and scripts
```

## 🛠️ Development Setup

### Prerequisites
- Node.js 20+
- PostgreSQL (optional - uses in-memory storage by default)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd cybernautica-os
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5000`

## 🐳 Docker Deployment

### Building the Docker Image

```bash
docker build -t cybernautica-os .
```

### Running with Docker

```bash
docker run -p 5000:5000 cybernautica-os
```

## 🌐 Back4App Deployment

### Prerequisites
1. Create a [Back4App](https://www.back4app.com/) account
2. Create a new Container App in your Back4App dashboard

### Deployment Steps

1. **Connect GitHub Repository**:
   - In Back4App dashboard, select "Create App" → "Container App"
   - Connect your GitHub account and select this repository
   - Choose the main branch for deployment

2. **Configure Build Settings**:
   - Build Command: `npm run build`
   - Start Command: `npm start`
   - Port: `5000`

3. **Environment Variables** (if needed):
   - `NODE_ENV=production`
   - `DATABASE_URL` (if using PostgreSQL)

4. **Deploy**:
   - Click "Deploy" and wait for the build to complete
   - Your app will be available at the provided Back4App URL

### Alternative: Manual Docker Deployment

If you prefer manual deployment:

1. Build and push to Docker Hub:
```bash
docker build -t your-username/cybernautica-os .
docker push your-username/cybernautica-os
```

2. In Back4App, create a Container App and use your Docker image URL

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - TypeScript type checking
- `npm run db:push` - Push database schema

## 🎮 Events Included

1. **HACKADEMIA** - AI-powered educational tools
2. **CYPHRANEXUS** - Cryptography and puzzle solving
3. **HIGH STAKES** - Card-based strategy games
4. **BREAKING VIRTUAL** - AR/VR technology challenges
5. **GEOMETRY DASH** - Creative geometry problems
6. **SONARIA** - Audio technology and sound design
7. **And more...**

## 🔧 Configuration

### Database Setup (Optional)
To use PostgreSQL instead of in-memory storage:

1. Set up a PostgreSQL database
2. Add `DATABASE_URL` environment variable
3. Run database migrations: `npm run db:push`

### Customization
- Modify themes in `client/src/index.css`
- Add new events in `server/storage.ts`
- Customize desktop components in `client/src/components/`

## 📄 License

MIT License - see LICENSE file for details

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 🐛 Issues

Report bugs and feature requests in the GitHub Issues section.

## 📞 Support

For deployment help or questions, check the documentation or create an issue in the repository.