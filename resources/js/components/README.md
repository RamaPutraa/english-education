# Atomic Design Structure – English Education

Panduan struktur folder komponen UI menggunakan metodologi **Atomic Design**.

---

## 📁 Struktur Folder

```
resources/js/components/
├── atoms/           → Elemen UI terkecil, tidak bisa dibagi lagi
│   ├── button/
│   ├── input/
│   ├── label/
│   ├── icon/
│   ├── badge/
│   ├── avatar/
│   ├── typography/
│   └── spinner/
│
├── molecules/       → Gabungan beberapa atom menjadi satu unit fungsional
│   ├── form-field/   (label + input + error message)
│   ├── search-bar/   (input + icon button)
│   ├── pagination/   (button + icon + text)
│   ├── course-card/  (avatar + badge + typography + button)
│   ├── stat-card/    (icon + typography)
│   ├── menu-item/    (icon + label)
│   ├── modal/        (button trigger + dialog)
│   └── alert/        (icon + typography)
│
├── organisms/       → Gabungan molecules membentuk bagian UI yang kompleks
│   ├── navbar/
│   ├── sidebar/
│   ├── course-list/
│   ├── login-form/
│   ├── data-table/
│   └── dashboard-stats/
│
└── templates/       → Layout kerangka halaman (tanpa data asli)
    ├── main-layout/
    ├── auth-layout/
    └── dashboard-layout/
```

> **Catatan:** Folder `pages/` di `resources/js/pages/` tetap digunakan untuk halaman Inertia.js.  
> Templates hanya mengatur _wireframe_ layout, bukan halaman akhir.

---

## 🧱 Penjelasan Level

| Level         | Deskripsi                                                 | Contoh                           |
| ------------- | --------------------------------------------------------- | -------------------------------- |
| **Atoms**     | Unit terkecil UI, tidak punya dependensi ke komponen lain | Button, Input, Label, Badge      |
| **Molecules** | Kombinasi beberapa atom untuk satu fungsi spesifik        | FormField, SearchBar, CourseCard |
| **Organisms** | Bagian UI yang utuh dan mandiri dari molecules + atoms    | Navbar, Sidebar, DataTable       |
| **Templates** | Kerangka tata letak halaman tanpa data nyata              | MainLayout, AuthLayout           |
| **Pages**     | Halaman nyata yang diisi data (Inertia.js pages)          | dashboard.tsx, auth/login.tsx    |

---

## 📌 Konvensi Penamaan

- Gunakan **kebab-case** untuk nama folder: `form-field/`, `course-card/`
- Setiap komponen memiliki file `index.tsx` sebagai entry point
- Tambahkan file terpisah jika dibutuhkan, contoh: `button.types.ts`, `button.stories.tsx`

---

## ✅ Aturan Import

```tsx
// ✅ Benar – import dari index
import Button from '@/components/atoms/button';
import FormField from '@/components/molecules/form-field';

// ❌ Hindari – import langsung ke file internal
import Button from '@/components/atoms/button/index';
```
