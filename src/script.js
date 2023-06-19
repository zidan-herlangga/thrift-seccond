const moreLinks = document.querySelectorAll(".more-link");

moreLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const caption = this.parentNode;
    caption.classList.toggle("expand");
  });
});
