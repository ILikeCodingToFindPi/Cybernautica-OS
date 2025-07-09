# CYBERNAUTICA OS - Replit Configuration

## Overview

CYBERNAUTICA OS is a web-based operating system simulation built for hackathon events. It provides an immersive cyberpunk-themed desktop environment where users can interact with various applications, participate in coding challenges, and access educational content.

## System Architecture

### Full-Stack Application Structure
- **Frontend**: React with TypeScript using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for schema management
- **UI Framework**: shadcn/ui components with Tailwind CSS for styling
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing

### Monorepo Structure
The application follows a monorepo pattern with shared code:
- `/client` - React frontend application
- `/server` - Express.js backend API
- `/shared` - Shared types, schemas, and utilities

## Key Components

### Frontend Architecture
- **Component-based UI**: Built with React functional components and hooks
- **Cyberpunk Design System**: Custom CSS variables for consistent theming
- **Responsive Layout**: Desktop-first design with mobile considerations
- **Interactive Desktop Environment**: Window management system for applications

### Backend Architecture
- **RESTful API**: Express.js server providing event and user management endpoints
- **Database Abstraction**: Storage interface pattern supporting both in-memory and PostgreSQL implementations
- **Type Safety**: Full TypeScript implementation with shared schemas

### Database Schema
The application defines several core entities:
- **Users**: Authentication and user management
- **Events**: Hackathon events with themes, descriptions, and requirements
- **Announcements**: System-wide notifications and updates
- **Installed Apps**: User's installed event applications

### UI Components
Comprehensive component library including:
- Desktop environment with window management
- Terminal emulator with command processing
- Arcade games (Flappy-Bit and planned additions)
- App center for event discovery and installation
- Boot sequence and login screens

## Data Flow

### Client-Server Communication
1. React frontend makes API requests to Express backend
2. TanStack Query manages caching and synchronization
3. Backend validates requests and interacts with database
4. Responses include proper error handling and type safety

### State Management
- Server state managed by TanStack Query with automatic caching
- Local UI state managed by React hooks
- Window management state handled by custom hook

### Authentication Flow
- Login screen captures user credentials
- Server validates authentication (currently simulated)
- Successful login transitions to desktop environment

## External Dependencies

### Core Framework Dependencies
- **React 18**: Modern React with hooks and concurrent features
- **Express.js**: Web server framework
- **Drizzle ORM**: Type-safe database toolkit
- **Neon Database**: Serverless PostgreSQL provider

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Headless component primitives
- **Lucide React**: Icon library
- **Custom Fonts**: Inter, JetBrains Mono, and Orbitron

### Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Static type checking
- **ESBuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Development Environment
- Vite development server with HMR for frontend
- TSX for running TypeScript server with hot reload
- Replit-specific development banner and error overlay

### Production Build
1. Vite builds optimized frontend bundle to `dist/public`
2. ESBuild bundles server code to `dist/index.js`
3. Static files served by Express in production mode
4. Database migrations managed through Drizzle Kit

### Environment Configuration
- Database connection via `DATABASE_URL` environment variable
- Node environment detection for development vs production
- Replit-specific tooling integration when `REPL_ID` is present

## Changelog

```
Changelog:
- July 01, 2025. Initial setup
- July 08, 2025. Major content and design update:
  - Replaced all placeholder logos with new Cybernautica and school logos
  - Updated Cybernautica logo as desktop background
  - Updated color scheme to match logo (pink/cyan/green theme)
  - Removed arcade functionality completely
  - Updated all event details with actual brochure information
  - Added comprehensive event apps with real content for all 7 events
  - Updated announcements with actual event dates and information
  - Added event head contact information for all events
- July 09, 2025. Mobile responsiveness and desktop enhancement:
  - Added complete mobile responsive design with hamburger menu
  - Implemented auto-maximizing windows for mobile devices
  - Added tutorial widget on desktop with getting started guide
  - Added "Coming Soon" widget showing upcoming features
  - Enhanced mobile navigation with touch-friendly interface
  - Hidden dock on mobile, replaced with overlay menu system
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```