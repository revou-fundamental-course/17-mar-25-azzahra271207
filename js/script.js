// Fungsi untuk menghitung luas persegi
function hitungLuas() {
  // Mengambil nilai sisi dari input dengan id "sisiLuas"
  let sisi = document.getElementById("sisiLuas").value;

  // Memeriksa apakah input kosong atau kurang dari atau sama dengan 0
  if (sisi === "" || sisi <= 0) {
      alert("Masukkan angka yang valid untuk sisi!"); // Menampilkan alert jika input tidak valid
      return; // Menghentikan eksekusi fungsi jika input tidak valid
  }

  // Menghitung luas persegi
  let luas = sisi * sisi;

  // Menampilkan hasil perhitungan luas di elemen dengan id "hasilLuas"
  document.getElementById("hasilLuas").innerText = `L = S x S\nL = ${sisi} x ${sisi}\nL = ${luas}`;
}

// Fungsi untuk menghitung keliling persegi
function hitungKeliling() {
  // Mengambil nilai sisi dari input dengan id "sisiKeliling"
  let sisi = document.getElementById("sisiKeliling").value;

  // Memeriksa apakah input kosong atau kurang dari atau sama dengan 0
  if (sisi === "" || sisi <= 0) {
      alert("Masukkan angka yang valid untuk sisi!"); // Menampilkan alert jika input tidak valid
      return; // Menghentikan eksekusi fungsi jika input tidak valid
  }

  // Menghitung keliling persegi
  let keliling = 4 * sisi;

  // Menampilkan hasil perhitungan keliling di elemen dengan id "hasilKeliling"
  document.getElementById("hasilKeliling").innerText = `K = 4 x S\nK = 4 x ${sisi}\nK = ${keliling}`;
}

// Fungsi untuk mereset input dan hasil luas
function resetLuas() {
  document.getElementById("sisiLuas").value = ""; // Mengosongkan input sisi luas
  document.getElementById("hasilLuas").innerText = ""; // Mengosongkan hasil luas
}

// Fungsi untuk mereset input dan hasil keliling
function resetKeliling() {
  document.getElementById("sisiKeliling").value = ""; // Mengosongkan input sisi keliling
  document.getElementById("hasilKeliling").innerText = ""; // Mengosongkan hasil keliling
}