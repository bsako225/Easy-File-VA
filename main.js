// search bar
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById('search-btn');
  const searchableElements = document.querySelectorAll('article, table, p');

  searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    searchableElements.forEach(element => {
      const elementContent = element.textContent.toLowerCase();
      if (elementContent.includes(searchTerm)) {
        element.style.display = 'block'; // Show element if search term is found
      } else {
        element.style.display = 'none'; // Hide element if search term is not found
      }
    });
  });
});

// navbar 

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 80) {
      document.querySelector(".navbar").classList.add("fixed-top");
      // add padding top to show content behind navbar
      navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.querySelector(".navbar").classList.remove("fixed-top");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
});