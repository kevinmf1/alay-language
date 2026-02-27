# Converter Bahasa Alay

Website sederhana untuk mengonversi teks bahasa Indonesia **normal ↔ bahasa alay** — gaya penulisan populer di era SMS, Kaskus, dan Facebook 2009-2012. Konversi bisa dilakukan dua arah: normal ke alay, atau sebaliknya.

## Demo

🔗 [Live Demo (GitHub Pages)](https://kevinmf1.github.io/alay-language)

## Contoh Konversi

### Normal → Alay

| Input | Output |
|-------|--------|
| kamu | k4MU |
| saya | 54y4 |
| selamat pagi | 53l4m4T p491 |
| aku suka kamu | 4kU 5Uk4 k4mU |

### Alay → Normal

| Input | Output |
|-------|--------|
| k4mu | kamu |
| 54y4 | saya |
| 53l4m4T p491 | selamat pagi |
| 4kU 5Uk4 k4mU | aku suka kamu |

> **Catatan:** Hasil konversi Normal → Alay bervariasi setiap kali convert karena menggunakan pemilihan acak.

## Fitur

- **Bidirectional** — konversi Normal → Alay dan Alay → Normal
- **Mode toggle** — tombol untuk memilih arah konversi
- **Konversi karakter per karakter** — setiap huruf (vokal & konsonan) dimapping ke variasi alay
- **Hasil acak** (mode Normal → Alay) — setiap kali convert menghasilkan variasi berbeda
- **Copy to clipboard** — tombol copy untuk menyalin hasil dengan mudah
- **Responsive** — tampilan menyesuaikan layar HP maupun desktop
- **Keyboard shortcut** — tekan `Enter` untuk convert, `Shift+Enter` untuk baris baru

## Mapping Karakter

Setiap huruf latin dimapping ke satu atau beberapa variasi karakter alay:

| Huruf | Variasi Alay | Reverse (Alay → Normal) |
|-------|-------------|----------------------|
| a | 4 | 4 → a |
| e | 3 | 3 → e |
| i | 1 | 1 → i |
| o | o | o → o |
| u | u, U | u/U → u |
| b | 8 | 8 → b |
| g | 9, 6 | 9/6 → g |
| s | 5 | 5 → s |
| w | VV | VV → w |
| ... | ... | ... |

Mapping berlaku untuk kedua arah konversi. Multi-karakter (seperti `VV` untuk `w`) diproses dengan greedy matching untuk akurasi lebih baik.

## Tech Stack

- **HTML** — struktur halaman
- **CSS** — styling & responsive design
- **JavaScript** — logika konversi & interaksi

Tidak memerlukan framework, build tool, atau backend. 100% static site.

## Cara Menjalankan Lokal

1. Clone repository:
   ```bash
   git clone https://github.com/kevinmf1/alay-language.git
   ```
2. Buka `index.html` di browser.

Tidak ada dependensi atau instalasi yang diperlukan.

## Deploy ke GitHub Pages

1. Push semua file ke repository GitHub.
2. Buka **Settings** → **Pages** di repository.
3. Pilih **Source**: `Deploy from a branch`.
4. Pilih **Branch**: `main` dan folder `/ (root)`.
5. Klik **Save** — website akan live di `https://<username>.github.io/alay-language`.

## Struktur Project

```
alay-language/
├── index.html    # Halaman utama
├── style.css     # Stylesheet & responsive
├── script.js     # Logika konversi alay
└── README.md     # Dokumentasi
```

## Lisensi

MIT License — bebas digunakan dan dimodifikasi.
