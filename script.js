// Set the nav bar link background to white if it is active
document.addEventListener('DOMContentLoaded', function () {
  let currentPage = window.location.pathname;
  let links = document.querySelectorAll('.nav-bar ul li a');

  links.forEach(function (link) {
    if (currentPage.includes(link.getAttribute('href'))) {
      link.parentElement.classList.add('active');
    }
  });
});

// Dynamically set the border widths
window.onload = function () {
  adjustBorderWidths();
  window.addEventListener('resize', adjustBorderWidths);
};

function adjustBorderWidths() {
  let windowWidth = window.innerWidth;
  let borderWidth = calculateBorderWidth(windowWidth);

  let content = document.querySelector('.main-content');
  if (content) {
    content.style.borderLeftWidth = borderWidth + 'px';
    content.style.borderRightWidth = borderWidth + 'px';
  }

  let navLinks = document.querySelector('.nav-links');
  if (navLinks) {
    navLinks.style.borderLeftWidth = borderWidth + 'px';
    navLinks.style.borderRightWidth = borderWidth + 'px';
  }
}

function calculateBorderWidth(windowWidth) {
  let borderWidth = windowWidth * 0.01;

  let minBorderWidth = 20;
  let maxBorderWidth = 50;

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

  const mainContentHeight = windowHeight - (heroHeight + navHeight);

  if (footerHeight > mainContentHeight) {
    mainContentHeight = footerHeight + 20;
  }

  mainContent.style.minHeight = `${mainContentHeight}px`;
});
