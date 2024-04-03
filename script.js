// Set the nav bar link background to white if it is active
document.addEventListener('DOMContentLoaded', function () {
  let currentPage = window.location.pathname; // Get current page path
  let links = document.querySelectorAll('.nav-bar ul li a'); // Select all navigation links

  links.forEach(function (link) {
    if (currentPage.includes(link.getAttribute('href'))) {
      // Check if link matches current page
      link.parentElement.classList.add('active'); // Add 'active' class to the parent li element
    }
  });
});

// Dynamically set the border widths
window.onload = function () {
  adjustBorderWidths();
  window.addEventListener('resize', adjustBorderWidths); // Adjust on window resize
};

function adjustBorderWidths() {
  let windowWidth = window.innerWidth;
  let borderWidth = calculateBorderWidth(windowWidth);

  // Apply the calculated border width to the main-content
  let content = document.querySelector('.main-content');
  if (content) {
    content.style.borderLeftWidth = borderWidth + 'px';
    content.style.borderRightWidth = borderWidth + 'px';
  }

  // Apply the same border width to the nav-bar
  let navLinks = document.querySelector('.nav-links');
  if (navLinks) {
    navLinks.style.borderLeftWidth = borderWidth + 'px';
    navLinks.style.borderRightWidth = borderWidth + 'px';
  }
}

function calculateBorderWidth(windowWidth) {
  // Calculate border width as a fraction of window width, for example, 1% of window width
  let borderWidth = windowWidth * 0.01; // Adjust the multiplier as needed

  // Ensure there's a minimum and maximum width for the borders
  let minBorderWidth = 20; // Minimum border width in pixels
  let maxBorderWidth = 50; // Maximum border width in pixels

  // Clamp the value between the min and max
  borderWidth = Math.max(minBorderWidth, Math.min(borderWidth, maxBorderWidth));
  return borderWidth;
}

// Dynamically set the main content to take up all available space
window.addEventListener('DOMContentLoaded', () => {
  const heroHeight = document.querySelector('.hero').offsetHeight;
  const navHeight = document.querySelector('.nav-bar').offsetHeight;
  const footerHeight = document.querySelector('footer').offsetHeight;

  const mainContent = document.querySelector('.main-content');
  const windowHeight = window.innerHeight;

  // Calculate the height of the main content section
  const mainContentHeight = windowHeight - (heroHeight + navHeight);

  // Adjust main content height if footer height exceeds the remaining space
  if (footerHeight > mainContentHeight) {
    mainContentHeight = footerHeight + 20; // Add some extra space for better presentation
  }

  // Set the height of the main content section
  mainContent.style.minHeight = `${mainContentHeight}px`;
});

// // Dynamically change element sizes based on screen size
// window.addEventListener('resize', () => {
//   const mainContent = document.querySelector('.main-content');
//   const contentWrapper = document.querySelector('.container');

//   // Check if the main content overflows its container
//   if (mainContent.scrollHeight > contentWrapper.clientHeight) {
//     // Reduce font size or adjust other styles to fit the content
//     mainContent.style.fontSize = '90%';
//   } else {
//     // Restore original styles if content fits without overflow
//     mainContent.style.fontSize = '100%';
//   }
// });
