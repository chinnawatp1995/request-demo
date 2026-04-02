# Request a Demo

A full-stack application for collecting demo requests.

## Tech Stack

- **Frontend**: Next.js 14 (App Router) + TypeScript + Tailwind CSS + shadcn/ui
- **Backend**: NestJS + Prisma + PostgreSQL
- **Infrastructure**: Docker Compose

## Prerequisites

- Node.js 18+
- Docker & Docker Compose
- PostgreSQL (running via Docker)

## Getting Started

### 1. Start Infrastructure

```bash
docker-compose up -d
```

### 2. Setup Environment Variables

Create `.env` files in the root and `apps/api/`:

**Backend API (.env):**
```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/demo"
FRONTEND_API (apps/web/.env.local):
NEXT_PUBLIC_API_URL=http://localhost:3001
```

**Note:** Create `.env.local` in `apps/web/` for running locally

### 3. Install Dependencies

```bash
npm install
```

### 4. Setup Database

```bash
cd apps/api
npx prisma migrate dev --name init
```

### 5. Run the Application

```bash
# Terminal 1 - Backend
cd apps/api
npm run start:dev

# Terminal 2 - Frontend (in new terminal)
cd apps/web
npm run dev
```

## Project Structure

```
apps/
├── api/                # NestJS Backend
│   ├── prisma/
│   │   └── schema.prisma
│   ├── src/
│   │   ├── demo/        # Demo module
│   │   │   ├── dto/
│   │   │   ├── entities/
│   │   │   ├── demo.controller.ts
│   │   │   ├── demo.service.ts
│   │   │   └── demo.module.ts
│   ├── prisma/          # Prisma service
│   └── main.ts
└── web/                # Next.js Frontend
    ├── src/
    │   ├── app/
    │   │   ├── layout.tsx
    │   │   └── page.tsx
    ├── components/
    │   ├── ui/           # shadcn/ui components
    │   ├── DemoForm.tsx
    │   └── SuccessMessage.tsx
    └── lib/
        ├── api.ts
        ├── countries.ts
        ├── utils.ts
        └── validation.ts
```

## API Endpoints

- `POST /api/demo` - Submit a demo request

## Features

- ✅ Form validation (Zod + class-validator)
- ✅ Rate limiting
- ✅ CORS enabled
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Loading states
- ✅ Success/error notifications
- ✅ Clean code architecture (SOLID principles)

## License

MIT