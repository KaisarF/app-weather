# Konfigurasi PostgreSQL

Panduan ini menjelaskan langkah-langkah untuk membuat user, database, dan tabel di PostgreSQL.

---

## **1. Membuat User**
Jalankan perintah berikut di PostgreSQL untuk membuat user `kaisar` dengan password `root`:

```sql
CREATE USER kaisar WITH PASSWORD 'root';
```

Tambahkan hak akses `CREATEDB` ke user `kaisar` agar dapat membuat database:

```sql
ALTER USER kaisar WITH CREATEDB;
```

---

## **2. Membuat Database**
Gunakan perintah berikut untuk membuat database bernama `weather_dashboard` dengan owner `kaisar`:

```sql
CREATE DATABASE weather_dashboard OWNER kaisar;
```

---

## **3. Menghubungkan ke Database**
Setelah database berhasil dibuat, gunakan perintah berikut untuk terhubung ke database `weather_dashboard` sebagai user `kaisar`:

```bash
psql -U kaisar -d weather_dashboard
```

---

## **4. Membuat Tabel**
Setelah terhubung ke database `weather_dashboard`, buat tabel `cities` dengan perintah berikut:

```sql
CREATE TABLE cities (
    id SERIAL PRIMARY KEY,
    city_name CHARACTER VARYING(50) NOT NULL
);
```

---

## **5. Validasi**
Gunakan perintah berikut untuk memastikan tabel telah berhasil dibuat:
- Tampilkan daftar tabel:
  ```sql
  \dt
  ```
- Tampilkan struktur tabel `cities`:
  ```sql
  \d cities
  ```

---

## **6. Sumber Daya**
- **Melihat Daftar User**:
  ```sql
  \du
  ```
- **Melihat Daftar Database**:
  ```sql
  \l
  ```

Panduan selesai! Anda sekarang memiliki user `kaisar`, database `weather_dashboard`, dan tabel `cities`. 
