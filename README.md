# Converter Bahasa Alay

Website sederhana untuk mengonversi teks bahasa Indonesia normal ke **bahasa alay** — gaya penulisan populer di era SMS, Kaskus, dan Facebook 2009-2012.

## Demo

🔗 [Live Demo (GitHub Pages)](https://kevinmf1.github.io/alay-language)

## Contoh Konversi

| Input | Output |
|-------|--------|
| kamu | k4MU |
| saya | 54y4 |
| selamat pagi | 53l4m4T p491 |
| aku suka kamu | 4kU 5Uk4 k4mU |

> Hasil bervariasi setiap kali convert karena menggunakan pemilihan acak.

## Fitur

- **Konversi karakter per karakter** — setiap huruf (vokal & konsonan) dimapping ke variasi alay
- **Hasil acak** — setiap kali convert menghasilkan variasi berbeda
- **Copy to clipboard** — tombol copy untuk menyalin hasil dengan mudah
- **Responsive** — tampilan menyesuaikan layar HP maupun desktop
- **Keyboard shortcut** — tekan `Enter` untuk convert, `Shift+Enter` untuk baris baru

## Mapping Karakter

| Huruf | Variasi Alay |
|-------|-------------|
| a | 4 |
| e | 3 |
| i | 1 |
| o | o |
| u | u, U |
| b | 8 |
| g | 9, 6 |
| s | 5 |
| w | VV |
| ... | dan lainnya |

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
