// change the context of banner when clicking it.
const $bannerTitle = $(".banner-title");

$bannerTitle.on("click", () => {
  $bannerTitle.text("Enjoy your Exploring");
});

// click button to show more content boxes
const $contentBoxes2 = $(".main-section-2");
const $readMoreButtonParent = $(".main");

$contentBoxes2.hide();
$contentBoxes2.before(`<button class="main-button">Read More</button>`);

$readMoreButtonParent.on("click", (event) => {
  if (event.target.nodeName === "BUTTON") {
    if ($contentBoxes2.css("display") === "none") {
      $contentBoxes2.show();
      $(event.target).text("Collapse");
    } else {
      $contentBoxes2.hide();
      $(event.target).text("Read More");
    }
  }
});
