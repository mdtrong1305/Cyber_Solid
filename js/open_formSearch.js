const openSearchBtn = document.getElementById('open-search');
const searchModal = document.getElementById('search-modal');

// Mở modal
openSearchBtn.addEventListener('click', () => {
    searchModal.classList.remove('hidden');
});

// Đóng modal khi click vào nền đen
searchModal.addEventListener('click', (e) => {
    // Chỉ đóng nếu click vào chính phần nền, không phải phần form
    if (e.target === searchModal) {
    searchModal.classList.add('hidden');
    }
});

// Tuỳ chọn: Đóng modal khi bấm phím Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
    searchModal.classList.add('hidden');
    }
});