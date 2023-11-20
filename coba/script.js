document.addEventListener("DOMContentLoaded", function () {
    // Fungsi untuk mengganti konten saat menu diklik
    function changeContent(content) {
        document.getElementById("content").innerHTML = `<p>${content}</p>`;
    }

    // Menangani klik pada menu Buku
    document.querySelector("a[href='#books']").addEventListener("click", function () {
        changeContent("Halaman buku yang berisi tentang berbagai macam buku.");
    });

    // Menangani klik pada menu Kategori
    document.querySelector("a[href='#categories']").addEventListener("click", function () {
        changeContent("Halaman kategori yang berisi beberapa macam kategori buku seperti fiksi, komik, novel, biografi, dll.");
    });

    // Menangani klik pada menu Logout
    document.getElementById("logout").addEventListener("click", function () {
        alert("Anda telah logout");
        // Tambahkan logika logout sesuai kebutuhan aplikasi Anda
    });
});
