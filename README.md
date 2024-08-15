## Pre-Started

1. Install semua dependensi dengan menjalankan perintah:

```bash
npm install
```

2. Buat database baru dengan (PostgreSQL).

3. Buat folder `.env` dan setel endpoint ke database. Contoh:

```
DATABASE_URL="postgresql://postgres@localhost:5432/dibimbing"
```

4. Jalankan perintah:

```bash
npx prisma migrate dev --create-only (#untuk mengecek apakah tabel sudah sesuai)
#or
npx prisma migrate dev (#langsung migrasi ke database)
```

## Getting Started

Jalankan perintah berikut untuk menjalankan program dengan Node.js:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

kemudian buka browser dan ketik di pencarian [http://localhost:3000/]
untuk membuka halaman utama dan melihat apakah program sudah berjalan dengan baik

## Learn More

Projek ini dibuat dengan tech stack berikut:

Frontend:

- JavaScript
- Next.js
- Chakra UI

Backend:

- PostgreSQL
- Prisma ORM
- Rest API
