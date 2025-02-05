document.addEventListener("DOMContentLoaded", () => {
  // Temple data array (with additional temple objects)
  const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Additional temple objects:
    {
      templeName: "Accra Ghana",
      location: "Accra, Ghana",
      dedicated: "2019, October, 20",
      area: 8500,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
    },
    {
      templeName: "São Paulo Brazil",
      location: "São Paulo, Brazil",
      dedicated: "2008, March, 15",
      area: 92000,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/017-S%C3%A3o-Paulo-Brazil-Temple.jpg"
    },
    {
      templeName: "Sydney Australia",
      location: "Sydney, Australia",
      dedicated: "1999, December, 5",
      area: 105000,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/sydney-australia-temple/sydney-australia-temple-43342-main.jpg"
    },
    {
      templeName: "London England",
      location: "London, England, United Kingdom",
      dedicated: "2014, September, 8",
      area: 250000,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/london-england-temple/london-england-temple-4243-main.jpg"
    },
    {
      templeName: "Rome Italy",
      location: "Rome, Italy",
      dedicated: "2019, November, 3",
      area: 80000,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
    },
    {
      templeName: "Stockholm Sweden",
      location: "Stockholm, Sweden",
      dedicated: "2016, October, 13",
      area: 90000,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/stockholm-sweden-temple/stockholm-sweden-temple-30267-main.jpg"
    }
  ];
  
  // DOM Elements
  const templeCardsContainer = document.getElementById("temple-cards");
  const currentFilterHeading = document.getElementById("current-filter");
  const menuLinks = document.querySelectorAll("nav ul li a");

  // Function: Display Temples
  function displayTemples(templesToDisplay) {
    // Clear current temple cards
    templeCardsContainer.innerHTML = "";

    templesToDisplay.forEach(temple => {
      // Create temple card element
      const card = document.createElement("div");
      card.classList.add("temple-card");

      // Create image element with lazy loading
      const img = document.createElement("img");
      img.src = temple.imageUrl;
      img.alt = temple.templeName;
      img.loading = "lazy";

      // Create temple name
      const name = document.createElement("h3");
      name.textContent = temple.templeName;

      // Create location
      const location = document.createElement("p");
      location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

      // Create dedicated date
      const dedicated = document.createElement("p");
      dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

      // Create area
      const area = document.createElement("p");
      area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

      // Append elements to card
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedicated);
      card.appendChild(area);

      // Append card to container
      templeCardsContainer.appendChild(card);
    });
  }

  // Initial display: show all temples
  displayTemples(temples);

  // Function: Filter Temples
  function filterTemples(criteria) {
    let filteredTemples = [];

    if (criteria === "old") {
      // Old: Temples with a dedicated year before 1900
      filteredTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year < 1900;
      });
      currentFilterHeading.textContent = "Old Temples (Built before 1900)";
    } else if (criteria === "new") {
      // New: Temples with a dedicated year after 2000
      filteredTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year > 2000;
      });
      currentFilterHeading.textContent = "New Temples (Built after 2000)";
    } else if (criteria === "large") {
      // Large: Temples with an area greater than 90,000 sq ft
      filteredTemples = temples.filter(temple => temple.area > 90000);
      currentFilterHeading.textContent = "Large Temples (Area > 90,000 sq ft)";
    } else if (criteria === "small") {
      // Small: Temples with an area less than 10,000 sq ft
      filteredTemples = temples.filter(temple => temple.area < 10000);
      currentFilterHeading.textContent = "Small Temples (Area < 10,000 sq ft)";
    } else {
      // Home (all temples)
      filteredTemples = temples;
      currentFilterHeading.textContent = "All Temples";
    }

    displayTemples(filteredTemples);
  }

  // Attach event listeners for navigation links
  menuLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const filterCriteria = link.getAttribute("data-filter");
      filterTemples(filterCriteria);

      // Optionally, update active state for links (if desired)
      menuLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Dynamic footer: update year and last modified date
  const yearSpan = document.getElementById("year");
  const lastModifiedSpan = document.getElementById("last-modified");
  yearSpan.textContent = new Date().getFullYear();
  lastModifiedSpan.textContent = document.lastModified;

  // Hamburger menu toggle (for mobile)
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  hamburger.addEventListener("click", () => {
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
  });
});
