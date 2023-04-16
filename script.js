// JS til header
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.window.scrollY > 0);
});

// JS til å skjule/vise header
let lastScrollPosition = 0;
window.addEventListener('scroll', () => {
  const currentScrollPosition = window.pageYOffset;
  if (currentScrollPosition > lastScrollPosition) {
    // Når brukeren scroller ned, skjul header
    document.querySelector('header').style.top = '-100px';
  } else {
    // Når brukeren scroller opp, vis header
    document.querySelector('header').style.top = '0';
  }
  lastScrollPosition = currentScrollPosition;
});

let menu = document.querySelector("#menu-icon");
let navmenu = document.querySelector(".navmenu");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navmenu.classList.toggle("open");
}

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

