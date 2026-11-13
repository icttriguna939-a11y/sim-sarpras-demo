/* =========================================================
   SIM-SARPRAS — demo.js (KHUSUS VERSI DEMO)
   Pita "DEMO" di semua halaman + kartu akun demo di halaman login (klik untuk mengisi otomatis).
   ========================================================= */
(function () {
  'use strict';
  var C = window.SARPRAS_CONFIG || {};
  if (!C.DEMO) return;
  var css = document.createElement('style');
  css.textContent = '.demo-ribbon{display:flex;justify-content:center;align-items:center;gap:10px;flex-wrap:wrap;padding:7px 12px;background:#111;color:#FBC02D;' +
    'font:700 12px/1.3 "Space Mono",monospace;letter-spacing:.06em;text-align:center}.demo-ribbon span{color:#fff;font-weight:400;letter-spacing:0}' +
    '.demo-akun{margin-top:16px;padding:14px;border:2.5px dashed #111;border-radius:16px;background:#FFF0B8}' +
    '.demo-akun b{font-family:"Space Mono",monospace;font-size:12px;letter-spacing:.06em;text-transform:uppercase}' +
    '.demo-akun button{display:flex;width:100%;justify-content:space-between;align-items:center;gap:10px;margin-top:8px;padding:10px 12px;border:2px solid #111;border-radius:12px;background:#fff;cursor:pointer;font:600 14px "Space Grotesk",sans-serif;text-align:left;box-shadow:2px 2px 0 #111}' +
    '.demo-akun button:hover{background:#BDE7C9}.demo-akun code{font-family:"Space Mono",monospace;font-size:12px}' +
    '@media print{.demo-ribbon{display:none}}';
  document.head.appendChild(css);
  /** Pita info di atas halaman kios & verifikasi (panel admin sudah berlabel DEMO di sidebar & login). */
  function pita() {
    if (document.body.classList.contains('admin') && !/verifikasi/.test(location.pathname)) return;
    if (document.querySelector('.demo-ribbon')) return;
    var r = document.createElement('div'); r.className = 'demo-ribbon'; r.setAttribute('role', 'note');
    r.innerHTML = 'MODE DEMO <span>· data fiktif, direset tiap malam</span>';
    document.body.insertBefore(r, document.body.firstChild);
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function kartuAkun() {
    var f = document.getElementById('fLogin');
    if (!f || f.parentNode.querySelector('.demo-akun')) return;
    var box = document.createElement('div');
    box.className = 'demo-akun';
    box.innerHTML = '<b>Akun demo — klik untuk mengisi</b>' + (C.DEMO_AKUN || []).map(function (a, i) {
      return '<button type="button" data-i="' + i + '"><span>' + esc(a.peran) + '<br><code>' + esc(a.username) + ' / ' + esc(a.password) + '</code></span>' +
        (a.pin ? '<code>PIN TTD ' + esc(a.pin) + '</code>' : '') + '</button>';
    }).join('') + '<p style="margin:10px 0 0;font-size:12px">Sekolah, orang, dan data di sini <b>fiktif</b>. Data direset otomatis setiap malam.</p>';
    f.parentNode.insertBefore(box, f.nextSibling);
    box.querySelectorAll('button').forEach(function (b) {
      b.onclick = function () { var a = C.DEMO_AKUN[Number(b.dataset.i)]; document.getElementById('u').value = a.username; document.getElementById('p').value = a.password; f.querySelector('button[type=submit]').focus(); };
    });
  }
  function mulai() { pita(); kartuAkun(); new MutationObserver(kartuAkun).observe(document.body, { childList: true, subtree: true }); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mulai); else mulai();
})();
