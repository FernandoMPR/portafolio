const modoOscuro = () => {
  document.querySelector("body").setAttribute("data-bs-theme", "dark");
  document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");
};

const modoClaro = () => {
  document.querySelector("body").setAttribute("data-bs-theme", "light");
  document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
};

export const cambiarTema = () => {
  document.querySelector("body").getAttribute("data-bs-theme") === "light" ?
  modoOscuro() : modoClaro();
}