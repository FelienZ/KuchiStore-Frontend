# 🛍️ KuchiStore Frontend

Aplikasi frontend e-commerce gadget modern berbasis web yang dibangun dengan React, TypeScript, dan Vite. Menyediakan pengalaman berbelanja yang cepat dan responsif dengan UI yang Minimalis menggunakan Tailwind CSS dan Radix UI.

## 📋 Daftar Isi

- [Fitur Utama](#fitur-utama)
- [Teknologi](#teknologi)
- [Prasyarat](#prasyarat)
- [Instalasi](#instalasi)
- [Menjalankan Project](#menjalankan-project)
- [Build & Deployment](#build--deployment)
- [Struktur Project](#struktur-project)
- [Environment Variables](#environment-variables)
- [Development Guide](#development-guide)
- [Troubleshooting](#troubleshooting)

## ✨ Fitur Utama

- **Autentikasi**: Login dan registrasi pengguna
- **Katalog Produk**: Browsing dan pencarian produk dari berbagai brand
- **Detail Produk**: Informasi lengkap produk dengan gambar dan deskripsi
- **Wishlist**: Simpan produk favorit
- **Pesanan**: Riwayat dan manajemen pesanan
- **Profil Pengguna**: Kelola data akun dan preferensi
- **Dark Mode**: Tema gelap untuk kenyamanan mata
- **Responsive Design**: Optimal di semua ukuran layar
- **Real-time Updates**: Menggunakan React Query untuk data management

## 🛠️ Teknologi

**Frontend Framework & Build:**

- React 19.2.3
- TypeScript
- Vite 5.x
- React Router 7.x

**Styling & UI:**

- Tailwind CSS 4.x
- Radix UI Components
- Lucide React Icons
- Motion (Animations)

**State Management & API:**

- React Query (@tanstack/react-query)
- Axios (HTTP Client)
- Interceptors untuk request/response

**Tema & Aksesibilitas:**

- Next Themes (Dark Mode)
- Radix UI (Accessible Components)

**Developer Tools:**

- ESLint
- TypeScript Type Checking

## 📋 Prasyarat

Sebelum memulai, pastikan Anda sudah menginstal:

- **Node.js** (v16.0.0 atau lebih tinggi)

  - Download: https://nodejs.org/
  - Verifikasi: `node --version` dan `npm --version`

- **npm** atau **yarn** (included dengan Node.js)

- **Git** (untuk version control)
  - Download: https://git-scm.com/

## 📦 Instalasi

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/KuchiStore-FE.git
cd KuchiStore-FE
```

### 2. Install Dependencies

Menggunakan npm:

```bash
npm install
```

Atau menggunakan yarn:

```bash
yarn install
```

### 3. Setup Environment Variables

Buat file `.env.local` di root project dan tambahkan konfigurasi berikut:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:3000/api
VITE_API_TIMEOUT=10000

# Application
VITE_APP_NAME=KuchiStoreV2
VITE_APP_VERSION=2.0.0
```

### File Output

```
dist/
├── index.html          # HTML entry point
├── assets/
│   ├── index-*.js     # JavaScript bundle (minified)
│   └── index-*.css    # CSS bundle (minified)
└── Brands/            # Static assets
```

```

## 📁 Struktur Project

```

```
src/
├── main.tsx # Entry point aplikasi
├── app.css # Global styles
├── index.css # Base styles
├── components/
│ ├── Common/ # Reusable components
│ │ ├── Navbar.tsx
│ │ ├── Sidebar.tsx
│ │ ├── Accordion.tsx
│ │ ├── Calendar.tsx
│ │ ├── Carousel.tsx
│ │ ├── Combobox.tsx
│ │ ├── Pagination.tsx
│ │ ├── Select.tsx
│ │ ├── Table.tsx
│ │ └── Card/
│ ├── Layout/ # Layout components
│ │ └── Store.tsx
│ └── ui/ # Shadcn/ui components
├── frontend/ # Page components
│ ├── 404.tsx
│ ├── Loading.tsx
│ ├── LoginPage.tsx
│ ├── RegisterPage.tsx
│ ├── Home/
│ ├── Store/
│ ├── Orders/
│ ├── Profile/
│ ├── Wishlist/
│ └── Help/
├── context/ # React Context
│ ├── AuthContext.ts
│ └── ThemeContext.ts
├── hooks/ # Custom React Hooks
│ ├── useAuth.ts
│ ├── useTheme.ts
│ ├── useWindow.ts
│ └── use-mobile.ts
├── utils/
│ ├── services/ # API calls
│ │ ├── Auth/
│ │ ├── Account/
│ │ ├── Products/
│ │ ├── Orders/
│ │ └── Wishlists/
│ ├── types/ # TypeScript types & interfaces
│ │ ├── Form.ts
│ │ ├── Response.ts
│ │ ├── Auth/
│ │ ├── Account/
│ │ ├── Orders/
│ │ └── Wishlists/
│ ├── data/ # Static data & constants
│ └── util/ # Helper utilities
└── lib/
└── utils.ts # Utility functions
```

## 🔐 Environment Variables

Untuk development, buat file `.env.local`:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:3000/api
VITE_API_TIMEOUT=10000

# Feature Flags
VITE_ENABLE_DEMO_MODE=false
```

### Variable yang Tersedia

| Variable                | Default                     | Deskripsi                  |
| ----------------------- | --------------------------- | -------------------------- |
| `VITE_API_BASE_URL`     | `http://localhost:3000/api` | Base URL untuk API backend |
| `VITE_API_TIMEOUT`      | `10000`                     | Timeout API request (ms)   |
| `VITE_ENABLE_DEMO_MODE` | `false`                     | Mode demo untuk testing    |

## 💻 Development Guide

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview
```

### Coding Standards

- **TypeScript**: Strict mode enabled
- **Styling**: Tailwind CSS + CSS Modules (jika diperlukan)
- **Components**: Functional components dengan hooks
- **API Calls**: Gunakan React Query untuk data fetching
- **Error Handling**: Try-catch untuk async operations

### Best Practices

1. **Folder Structure**: Gunakan struktur yang ada, jangan buat folder baru tanpa discussion
2. **Component Naming**: PascalCase untuk component files (.tsx)
3. **Constants**: Simpan di `utils/data/`
4. **Types**: Simpan di `utils/types/`
5. **API Calls**: Buat service files di `utils/services/`
6. **Hooks**: Buat custom hooks di `hooks/`

### Component Template

```typescript
import { FC } from "react";

interface Props {
  // Define props here
}

const MyComponent: FC<Props> = ({}) => {
  return <div>{/* JSX here */}</div>;
};

export default MyComponent;
```

### API Service Template

```typescript
import api from "../interceptor";

export const myService = async () => {
  try {
    const response = await api.get("/endpoint");
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
```

## 🔧 Konfigurasi

### TypeScript Config

- **tsconfig.json**: Base configuration
- **tsconfig.app.json**: Application-specific config
- **tsconfig.node.json**: Node.js tools config

### Vite Config

Konfigurasi berada di `vite.config.ts`:

- Path alias: `@/` → `src/`
- React plugin untuk HMR
- Tailwind CSS Vite plugin

### ESLint

Konfigurasi di `eslint.config.js`:

```bash
npm run lint       # Check linting issues
npm run lint --fix # Auto-fix issues
```

## 📚 Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vite.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://radix-ui.com)
- [React Router](https://reactrouter.com)
- [React Query](https://tanstack.com/query/)

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m 'Add your feature'`
3. Push branch: `git push origin feature/your-feature`
4. Open Pull Request

## 👥 Author

FelienZ

---

**Last Updated:** December 2025
