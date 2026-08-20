const btn = document.getElementById('backToTop');

// 何pxスクロールしたら表示するか
const SHOW_OFFSET = 200;

window.addEventListener('scroll', () => {
  if (window.scrollY > SHOW_OFFSET) {
    btn.classList.add('is-visible');
  } else {
    btn.classList.remove('is-visible');
  }
});

btn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // なめらかに戻る
  });
});

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  hamburger.classList.toggle("active");
});

