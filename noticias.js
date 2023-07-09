document.addEventListener("DOMContentLoaded", function() {
  var container = document.getElementById("container");
  var newsItems = document.getElementsByClassName("news-item");
  var totalItems = newsItems.length;
  var currentIdx = 0;
  var interval;

  function showNextNewsItem() {
    newsItems[currentIdx].classList.remove("active");
    currentIdx = (currentIdx + 1) % totalItems;
    newsItems[currentIdx].classList.add("active");
  }

  function startCarousel() {
    interval = setInterval(showNextNewsItem, 3000);
  }

  function stopCarousel() {
    clearInterval(interval);
  }
  function showPrevNewsItem() {
    newsItems[currentIdx].classList.remove("active");
    currentIdx = (currentIdx - 1 + totalItems) % totalItems;
    newsItems[currentIdx].classList.add("active");
  }

  var prevButton = document.getElementById("prev-button");
  prevButton.addEventListener("click", function() {
    stopCarousel();
    showPrevNewsItem();
  });

  var nextButton = document.getElementById("next-button");
  nextButton.addEventListener("click", function() {
    stopCarousel();
    showNextNewsItem();
  });

  container.addEventListener("mouseenter", stopCarousel);
  container.addEventListener("mouseleave", startCarousel);

  startCarousel();})
