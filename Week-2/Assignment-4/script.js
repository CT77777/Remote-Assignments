// change the context of banner when clicking it.
const bannerTitle = document.querySelector(".banner-title");
bannerTitle.addEventListener("click", () => {
  bannerTitle.textContent = "Enjoy your exploring";
});

// click button to show more content boxes
const contentBoxes2 = document.querySelector(".main-section-2");
const readMoreButtonParent = document.querySelector("main");

contentBoxes2.insertAdjacentHTML(
  "beforebegin",
  `<button class="main-button">Read More</button>`
);
contentBoxes2.style.display = "none"; //Set this CSS here, not style sheet, all the contents will still show up without JavaScript, "Unobtrusive"

// Event propagation
readMoreButtonParent.addEventListener("click", (event) => {
  if (event.target.nodeName === "BUTTON") {
    if (contentBoxes2.style.display === "none") {
      contentBoxes2.removeAttribute("style");
      event.target.textContent = "Collapse";
    } else {
      contentBoxes2.style.display = "none";
      event.target.textContent = "Read More";
    }
  }
});
