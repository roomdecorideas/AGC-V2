// File: search-handler.js
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-bar-form');
    const searchInput = document.getElementById('search-bar-input');

    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah form mengirim data ke server
            
            // Ambil keyword, hapus spasi ekstra, ubah spasi jadi hubung, dan ke huruf kecil
            const keyword = searchInput.value.trim();
            if (keyword) {
                const keywordForUrl = keyword.replace(/\s/g, '-').toLowerCase();
                // Arahkan pengguna ke halaman detail dengan format URL yang benar
                window.location.href = `detail.html?q=${encodeURIComponent(keywordForUrl)}`;
            }
        });
    }
});
