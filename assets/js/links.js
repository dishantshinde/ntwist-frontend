// Select all navigation links with the class "nav-link"
const navLinks = document.querySelectorAll(".nav-link");

// Loop through each navigation link
navLinks.forEach((link) => {
  // If the link's href matches the current page URL, add the "active" class
  if (link.href === window.location.href) {
    link.classList.add("active");
  }

  // Add a click event listener to each link
  link.addEventListener("click", () => {
    // Remove "active" class from all links
    navLinks.forEach((l) => l.classList.remove("active"));
    // Add "active" class to the clicked link
    link.classList.add("active");
  });
});
