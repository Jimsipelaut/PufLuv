(function() {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      nextB = $('next'),
      prevB = $('prev'),
      
      // === ANDA KEKURANGAN VARIABEL INI ===
      prevFinalB = $('prev-final'),
      // ====================================
      
      timer = null;
      
  console.log('wat', card);
  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimeout(timer); // Perbaikan typo: clearTimerout -> clearTimeout
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });

  nextB.addEventListener('click', function () {
    // Set state ke halaman 2. CSS akan menangani transisi 1 detik.
    card.setAttribute('class', 'open-page-2');
    if (timer) clearTimeout(timer); // Hapus timer yang mungkin sedang berjalan
    timer = null;
  });

  prevB.addEventListener('click', function () {
    // Set ke state transisi 'close-page-2'
    card.setAttribute('class', 'close-page-2');
    if (timer) clearTimeout(timer); // Hapus timer yang mungkin sedang berjalan
    // Setelah 1 detik (durasi transisi), kembali ke state 'open-fully' (Page 1)
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  // === ANDA KEKURANGAN BLOK KODE INI ===
  prevFinalB.addEventListener('click', function () {
    // Kode ini sama dengan prevB, untuk kembali ke halaman 1
    card.setAttribute('class', 'close-page-2');
    if (timer) clearTimeout(timer); 
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });
  // ===================================

}());