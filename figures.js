/* Original manuscript figures: native links remain useful without JavaScript. */
(() => {
  const figures = [...document.querySelectorAll("[data-research-figure]")];
  const dialog = document.querySelector(".figure-dialog");
  const viewport = dialog.querySelector(".figure-viewport");
  const image = viewport.querySelector("img");
  let current = 0, zoomed = false, returnFocus = null;
  const text = key => translations[labLanguage()][key];
  function render() {
    const figure = figures[current];
    const source = figure.querySelector("img");
    image.src = source.src; image.alt = source.alt;
    image.width = Number(source.getAttribute("width")); image.height = Number(source.getAttribute("height"));
    dialog.querySelector("h2").textContent = figure.querySelector("h5").textContent;
    dialog.querySelector(".figure-dialog-caption").textContent = figure.querySelector("figcaption p").textContent;
    dialog.querySelector(".figure-counter").textContent = `${current + 1} / ${figures.length}`;
    dialog.querySelector(".figure-dialog-source").href = figure.querySelector(".figure-pdf-source").href;
    dialog.querySelector(".figure-zoom").textContent = text(zoomed ? "figureFit" : "figureZoom");
    dialog.querySelector(".figure-zoom").setAttribute("aria-pressed", String(zoomed));
    viewport.classList.toggle("is-zoomed", zoomed);
  }
  function move(delta) {
    current = (current + delta + figures.length) % figures.length;
    zoomed = false; render(); viewport.scrollTo(0, 0);
  }
  figures.forEach((figure, index) => {
    const trigger = figure.querySelector(".paper-figure-open");
    trigger.addEventListener("click", event => {
      if (!dialog.showModal || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault(); current = index; zoomed = false; returnFocus = trigger;
      render(); dialog.showModal(); dialog.querySelector(".figure-close").focus();
    });
  });
  dialog.querySelector(".figure-close").addEventListener("click", () => dialog.close());
  dialog.querySelector(".figure-prev").addEventListener("click", () => move(-1));
  dialog.querySelector(".figure-next").addEventListener("click", () => move(1));
  dialog.querySelector(".figure-zoom").addEventListener("click", () => { zoomed = !zoomed; render(); viewport.scrollTo(0, 0); });
  dialog.addEventListener("keydown", event => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key) || zoomed) return;
    event.preventDefault(); move(event.key === "ArrowLeft" ? -1 : 1);
  });
  dialog.addEventListener("close", () => { if (returnFocus?.isConnected) returnFocus.focus({preventScroll:true}); });
  document.addEventListener("resume:language", () => { if (dialog.open) render(); });
})();
