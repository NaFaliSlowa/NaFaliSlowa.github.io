var closeBtn = document.getElementById("closePopup");
  var popup = document.getElementById("popup");

  function openAndChangeImage(newSrc) {
    changeImage(newSrc); // Zmiana obrazu
    showPopup(); // Otwarcie popupu
  }

  // Funkcja zmieniająca obraz
  function changeImage(newSrc) {
    var img = document.getElementById('zdjecie');
    img.src = newSrc;
  }

  // Funkcja pokazująca popup
  function showPopup() {
    popup.style.display = 'block'; // Wyświetl popup
    popup.classList.remove('fadeOut'); // Usuń klasę fadeOut (jeśli istnieje)
    popup.classList.add('fadeIn'); // Dodaj klasę fadeIn
  }

  // Funkcja ukrywająca popup
  function hidePopup() {
    popup.classList.remove('fadeIn'); // Usuń klasę fadeIn
    popup.classList.add('fadeOut'); // Dodaj klasę fadeOut
    setTimeout(function() {
      popup.style.display = 'none'; // Ukryj popup po zakończeniu animacji
    }, 100); // Czas trwania animacji w milisekundach
  }

  // Dodaj obsługę zdarzenia kliknięcia na przycisk zamykania
  closeBtn.addEventListener('click', hidePopup);

  // Dodaj obsługę zdarzenia kliknięcia na popupie, aby go ukryć
  popup.addEventListener('click', function(event) {
    if (event.target === popup) {
      hidePopup(); // Ukryj popup tylko jeśli kliknięto poza zdjęciem
    }
  });





