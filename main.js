document.querySelectorAll(".features__item-button").forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const isOpen = content.classList.contains("open");

    document
      .querySelectorAll(".features__item-header")
      .forEach((item) => item.classList.remove("open"));
    document
      .querySelectorAll(".features__item-content")
      .forEach((item) => item.classList.remove("open"));
    document
      .querySelectorAll(".features__item-button")
      .forEach((btn) => btn.classList.remove("open"));

    if (!isOpen) {
      content.classList.add("open");
      button.classList.add("open");
      const header = button.querySelector(".features__item-header");
      header.classList.add("open");
    }
  });
});
