function selectProduct(product) {
  document.querySelector('select[name="paket"]').value = product;
}

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  const nama = this.nama.value;
  const wa = this.wa.value;
  const kecamatan = this.kecamatan.value;
  const alamat = this.alamat.value;
  const paket = this.paket.value;

  const pesan = `Halo Admin, Saya ingin pesan Beewax:\n\nNama: ${nama}\nNo WA: ${wa}\nKecamatan: ${kecamatan}\nAlamat: ${alamat}\nPaket: ${paket}`;

  const noTujuan = '6287728672427'; // Ganti dengan nomor WA admin
  const url = `https://wa.me/${noTujuan}?text=${encodeURIComponent(pesan)}`;

  window.open(url, '_blank');
});