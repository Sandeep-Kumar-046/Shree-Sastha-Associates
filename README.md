# SHREE SASTHA ASSOCIATES — Engineering & Construction Consultancy Website

A modern, editorial architectural web platform built for **SHREE SASTHA ASSOCIATES** in Ondipudur, Coimbatore, Tamil Nadu.

## Verified Company Information
- **Company**: SHREE SASTHA ASSOCIATES
- **Engineer**: Er. A. Naveen Kumar, B.E. (Civil), AMIE
- **Designation**: Registered Engineer Grade II
- **Phone**: +91 81100 71178
- **Email**: shreesasthaassociatescbe@gmail.com
- **Office**: 34/36, Ramachandra Naidu Street, Ondipudur, Coimbatore – 641016, Tamil Nadu, India.
- **Verified Services**:
  1. Engineering Services
  2. Valuation Services
  3. Plan Approval Works
  4. DTCP & DTP Approval
  5. Building Project Consulting

## Technology Stack
- **Next.js 15 (App Router)**
- **React 19 & TypeScript**
- **Tailwind CSS**
- **Lucide React Icons**

## Live Local Server
The server is currently running at:
**http://localhost:3000**

## To Run Later
```bash
# Install dependencies
npm install

# Build for production
npm run build

# Start production server
npm run start -- -p 3000

# Or start development server
npm run dev
```

## Logo Replacement
Place your official logo image at `public/images/logo.png`, open `src/components/layout/Logo.tsx`, and toggle:
```typescript
export const USE_CUSTOM_IMAGE_LOGO = true;
```
All company details can be modified in a single file: `src/data/company.ts`.
