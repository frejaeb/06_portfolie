// variablen "btn", der henviser til ".toggle-btn"
const btn = document.querySelector(".toggle-btn");
//variablen "menu", der henviser til ".main-menu"
const menu = document.querySelector(".main-menu");

// funktionen "toggleMenu()" med følgende funktionalitet
function toggleMenu() {
  // a) toggle klassen "shown" på menu vha. classList.toggle
  menu.classList.toggle("shown");

  // b) variablen "menuShown", som siger, at menu-variablen indeholder klassen "shown" via classList.contains("")
  const menuShown = menu.classList.contains("shown");

  // c) spørg om "menuShown" i if-sætningen nedenfor (=> if (menuShown)), og udskift teksten
  if (menuShown) {
    console.log(menuShown); // se i konsollen
    // sæt btn.textContent til "Luk", hvis menuShown er "true"
    btn.textContent = "Luk";
  } else {
    console.log(menuShown);
    // menu viser
    btn.textContent = "Menu";
  }
}

// Tilføj et klik-event til "btn", der sætter toggleMenu-funktionen i gang, lytter
btn.addEventListener("click", toggleMenu);
