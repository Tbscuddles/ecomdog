// JS til header
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.window.scrollY > 0);
});

// JS til nedover pil 
const viewportHeight = window.innerHeight;

  // Lagt til en "click event listener" til nedover pilen
  const downArrow = document.querySelector('.down-arrow');
  downArrow.addEventListener('click', function(event) {
    // Blokker den ordinære anker funksjonen
    event.preventDefault();

    // Hent den gjeldende scroll funksjonen
    const scrollPosition = window.scrollY;

    // Scroll ned til den neste siden
    window.scrollTo({
      top: scrollPosition + viewportHeight,
      behavior: 'smooth'
    });
  });

