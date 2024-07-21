document.addEventListener("DOMContentLoaded", () => {
  // Navigation Menu
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  const menuBtnIcon = menuBtn.querySelector("i");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
  });

  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  });

  // ScrollReveal Configuration
  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  ScrollReveal().reveal(".header__image img", { ...scrollRevealOption, origin: "right" });
  ScrollReveal().reveal(".header__content h2", { ...scrollRevealOption, delay: 500 });
  ScrollReveal().reveal(".header__content h1", { ...scrollRevealOption, delay: 1000 });
  ScrollReveal().reveal(".order__card", { ...scrollRevealOption, interval: 500 });
  ScrollReveal().reveal(".event__content", { duration: 1000 });

  // Form Handling
  const form = document.querySelector("form");
  const confirmationDetails = document.getElementById("confirmationDetails");

  // Function to get form input values
  const getFormValues = () => ({
    name: form.querySelector('input[name="name"]').value,
    email: form.querySelector('input[name="email"]').value,
    date: form.querySelector('input[name="date"]').value,
    time: form.querySelector('input[name="time"]').value,
    people: form.querySelector('input[name="people"]').value,
  });

  // Function to display confirmation details
  const displayConfirmationDetails = () => {
    const params = new URLSearchParams(window.location.search);
    const html = `
      <p><strong>Name:</strong> ${params.get("name")}</p>
      <p><strong>Email:</strong> ${params.get("email")}</p>
      <p><strong>Date:</strong> ${params.get("date")}</p>
      <p><strong>Time:</strong> ${params.get("time")}</p>
      <p><strong>Number of People:</strong> ${params.get("people")}</p>
    `;
    confirmationDetails.innerHTML = html;
  };

  // Display confirmation details if URL params exist
  if (window.location.search) {
    displayConfirmationDetails();
  }

  // Handle form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = getFormValues();
    const params = new URLSearchParams(formData);
    window.location.href = `confirmation.html?${params.toString()}`;
    form.reset(); // Optionally reset the form after submission
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Function to parse URL parameters
  function getUrlParameter(name) {
      name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
      var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
      var results = regex.exec(location.search);
      return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }

  // Get the reservation details from URL parameters
  var name = getUrlParameter('name');
  var email = getUrlParameter('email');
  var date = getUrlParameter('date');
  var time = getUrlParameter('time');
  var people = getUrlParameter('people');

  // Update the confirmationDetails div with the reservation details
  var confirmationDetails = document.getElementById('confirmationDetails');
  if (confirmationDetails) {
      confirmationDetails.innerHTML = `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Time:</strong> ${time}</p>
          <p><strong>Number of People:</strong> ${people}</p>
      `;
  }
});