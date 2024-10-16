// Mengambil elemen
var audio = document.getElementById("myAudio");
var popup = document.getElementById("popup");
var overlay = document.getElementById("overlay");
var closeButton = document.querySelector(".close-btn");

// Fungsi untuk menampilkan pop-up
function showPopup() {
    popup.style.display = "block"; // Menampilkan pop-up
    overlay.style.display = "block"; // Menampilkan latar belakang gelap
}

// Fungsi untuk memutar audio
function playAudio() {
    audio.currentTime = 0; // Mulai dari awal
    audio.play().catch(function(error) {
        console.log("Error saat memutar audio: ", error);
        alert("Audio tidak dapat diputar. Silakan periksa pengaturan browser Anda.");
    });
}

// Menampilkan pop-up saat halaman dibuka
window.onload = function() {
    showPopup();
};

// Menambahkan event listener untuk tombol tutup
closeButton.addEventListener("click", function() {
    popup.style.display = "none"; // Menyembunyikan pop-up
    overlay.style.display = "none"; // Menyembunyikan latar belakang gelap
    playAudio(); // Memutar audio
});
