(function () {
  const btn = document.getElementById('heart-btn');
  const toast = document.getElementById('heart-toast');
  const articleId = btn.dataset.article;

  btn.addEventListener('click', function () {
    btn.textContent = '❤️';
    btn.classList.remove('liked');
    void btn.offsetWidth;
    btn.classList.add('liked');

    gtag('event', 'article_like', { article: articleId, action: 'like' });

    toast.classList.add('show');
    setTimeout(function () {
      toast.classList.remove('show');
      btn.style.transition = 'opacity .4s ease, transform .4s ease';
      btn.style.opacity = '0';
      btn.style.transform = 'scale(.6)';
      setTimeout(function () { btn.style.display = 'none'; }, 400);
    }, 2500);
  });
})();
