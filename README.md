# Request a Demo

A modern, full-stack application for collecting and managing demo requests. This project is built as a monorepo for seamless development across the frontend and backend.

## Tech Stack

### Frontend
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)

### Backend
- **Framework**: [NestJS](https://nestjs.com/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **Validation**: [class-validator](https://github.com/typestack/class-validator)

### Infrastructure
- **Containerization**: [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)

## Prerequisites

- **Node.js**: 18+ (LTS recommended)
- **Docker**: For running the database locally
- **npm**: For package management

## Getting Started

### 1. Install Dependencies

Install dependencies for all workspaces from the root directory:
```bash
npm install
```

### 2. Infrastructure Setup

Start the PostgreSQL database using Docker Compose:
```bash
npm run db:up
```

### 3. Environment Variables

Create the required `.env` files based on the provided examples:

- **Backend API**: Copy `apps/api/.env.example` to `apps/api/.env`
- **Frontend Web**: Copy `apps/web/.env.example` to `apps/web/.env`

**Default Configuration:**
- Backend API runs on: `http://localhost:3001`
- Frontend Web runs on: `http://localhost:3000`

### 4. Database Migration

Run the Prisma migrations to set up your database schema:
```bash
npm run db:migrate
```

### 5. Run the Application

Start the backend and frontend in separate terminals:

**Terminal 1 - Backend API:**
```bash
npm run api
```

**Terminal 2 - Frontend Web:**
```bash
npm run web
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Available Scripts

From the root directory, you can run:

- `npm run api`: Starts only the NestJS backend.
- `npm run web`: Starts only the Next.js frontend.
- `npm run db:up`: Starts the database container.
- `npm run db:migrate`: Runs Prisma migrations.
- `npm run build`: Builds both applications for production.

## Project Structure

```
apps/
├── api/                # NestJS Backend
│   ├── prisma/
│   │   └── schema.prisma # Prisma Schema
│   ├── src/
│   │   ├── demo/        # Demo Module (Business Logic)
│   │   ├── prisma/      # Prisma Client & Service
│   │   ├── app.module.ts
│   │   └── main.ts
│   └── test/           # E2E Tests
└── web/                # Next.js Frontend
    ├── public/         # Static Assets
    ├── src/
    │   ├── app/        # Next.js App Router (Pages & Layouts)
    │   ├── components/ # React Components (UI & Business)
    │   └── lib/        # Utilities (API client, Validation, etc.)
    └── tailwind.config.ts
```

## API Endpoints

- `POST /api/demo` - Submit a new demo request.

## Features

- ✅ **Full-stack Monorepo**: Shared workspace for efficient development.
- ✅ **Form Validation**: Robust client-side (Zod) and server-side (class-validator) validation.
- ✅ **Security**: Integrated Helmet and CORS protection.
- ✅ **Infrastructure**: One-click database setup with Docker.
- ✅ **Responsive UI**: Modern, accessible design using shadcn/ui.
- ✅ **Type Safety**: End-to-end TypeScript support.

## License

MIT