// Navbar-------------------------
let toggle = false;
// target element
const moboiconAll = document.querySelectorAll(".menuToggle");
console.log(moboiconAll);

const mobomenu = document.getElementById("mobileMenu");

moboiconAll.forEach((moboicon) => {
  moboicon.addEventListener("click", (e) => {
    if (!toggle) {
      mobomenu.style.transform = "translateX(0)";
      toggle = true;
    } else {
      mobomenu.style.transform = "translateX(-800px)";
      toggle = false;
      const dropSymbole = document.getElementById("dropMenu");
      dropSymbole.classList.remove("rotate-180");
      const dropdown = document.getElementById("mobileDropdown");
      dropdown.classList.add("hidden");
    }
  });
});

// Close the menu if clicking outside of it
document.addEventListener("click", (e) => {
  if (
    toggle &&
    !mobomenu.contains(e.target) &&
    !e.target.closest(".menuToggle")
  ) {
    mobomenu.style.transform = "translateX(-600px)";
    toggle = false;
    const dropSymbole = document.getElementById("dropMenu");
    dropSymbole.classList.remove("rotate-180");
    const dropdown = document.getElementById("mobileDropdown");
    dropdown.classList.add("hidden");
  }
});

function toggleDropdown() {
  const dropdown = document.getElementById("mobileDropdown");
  const dropSymbole = document.getElementById("dropMenu");
  dropSymbole.classList.toggle("rotate-180");
  dropdown.classList.toggle("hidden");
}
function toggleDropdown2() {
  const dropdown = document.getElementById("mobileDropdown2");
  const dropSymbole = document.getElementById("dropMenu2");
  dropSymbole.classList.toggle("rotate-180");
  dropdown.classList.toggle("hidden");
}

// footer------------------------------------------------------------
// Add current year in footer
const yearSpan = document.getElementById("year");

// Set the text content of the span
yearSpan.textContent = new Date().getFullYear(); // Replace "2024" with any text you want to add

// swiper
// swiper js
new Swiper('.slider-wrapper', {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  spaceBetween: 30,

  // Pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    640: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});


// Function to toggle the accordion
function toggleAccordion(id) {
  // Close all other accordions
  for (let i = 1; i <= 5; i++) {
    if (i !== id) {
      document.getElementById('content-' + i).classList.add('hidden');
      document.getElementById('icon-' + i).classList.remove('rotate-180');
    }
  }

  // Toggle the selected accordion
  const content = document.getElementById('content-' + id);
  const icon = document.getElementById('icon-' + id);
  content.classList.toggle('hidden');
  icon.classList.toggle('rotate-180');
}

