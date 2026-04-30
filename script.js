function runGeoAI() {
  const input = document.getElementById("geoInput").value;
  const result = document.getElementById("result");

  if (!input) {
    result.style.display = "block";
    result.innerHTML = "Silakan pilih jenis data geospasial terlebih dahulu.";
    return;
  }

  let output = "";

  if (input === "bangunan") {
    output = `
      <strong>Hasil Analisis AI:</strong><br>
      Objek utama terdeteksi: <b>Bangunan dan jaringan jalan</b><br>
      Metode yang sesuai: CNN / U-Net / YOLO<br>
      Output spasial: Building footprint dalam format GeoJSON.
    `;
  }

  if (input === "vegetasi") {
    output = `
      <strong>Hasil Analisis AI:</strong><br>
      Objek utama terdeteksi: <b>Vegetasi, lahan terbuka, dan badan air</b><br>
      Metode yang sesuai: Random Forest / SVM / Deep Learning<br>
      Output spasial: Peta klasifikasi tutupan lahan.
    `;
  }

  if (input === "pointcloud") {
    output = `
      <strong>Hasil Analisis AI:</strong><br>
      Objek utama terdeteksi: <b>Tanah, bangunan, pohon, dan objek vertikal</b><br>
      Metode yang sesuai: PointNet / PointNet++ / Machine Learning<br>
      Output spasial: Point cloud terklasifikasi.
    `;
  }

  if (input === "volume") {
    output = `
      <strong>Hasil Analisis AI:</strong><br>
      Objek utama dianalisis: <b>Permukaan tanah dan perubahan elevasi</b><br>
      Metode yang sesuai: Surface Comparison / DEM Differencing<br>
      Output spasial: Estimasi volume cut and fill.
    `;
  }

  result.style.display = "block";
  result.innerHTML = output;
}
