const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let current = 0;

function showItem(index) {
    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

prevBtn.addEventListener('click', () => {
    current = (current - 1 + items.length) % items.length;
    showItem(current);
});

nextBtn.addEventListener('click', () => {
    current = (current + 1) % items.length;
    showItem(current);
});