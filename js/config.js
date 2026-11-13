/* =========================================================
   KONFIGURASI SIM-SARPRAS — VERSI DEMO
   Tempel URL Web App Apps Script DEMO (berakhiran /exec) di bawah.
   ========================================================= */
window.SARPRAS_CONFIG = {
  GAS_URL: 'https://script.google.com/macros/s/AKfycby2G5Nt6-y8raVJRS22DlBrhWf0eaHWpVb6vlINlOhhgH75RG6SH8dGUWX1t_bwKGe2/exec',
  NAMA_SEKOLAH: 'SMA Nusa Cendekia',           // sekolah fiktif untuk demo
  ID_KIOS: 'DEMO-K01',
  DEMO: true,                                  // tampilkan pita DEMO + akun demo di halaman login
  DEMO_AKUN: [
    { peran: 'Super Admin', username: 'admin.demo', password: 'NusaDemo2026' },
    { peran: 'Admin Sarpras', username: 'sarpras.demo', password: 'NusaDemo2026' },
    { peran: 'Kepala Sekolah', username: 'kepsek.demo', password: 'NusaDemo2026', pin: '123456' }
  ]
};
