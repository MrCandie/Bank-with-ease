const openNavBtn = document.querySelector(".open-nav");
const navBar = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const btnSignUp = document.querySelector(".btn-sign-up");
const registerForm = document.querySelector(".register-form");
const btnCloseForm = document.querySelector(".close-form");
const btnCloseLogin = document.querySelector(".close-login");
const imgBtn1 = document.querySelector(".user-img1");
const imgBtn2 = document.querySelector(".user-img2");
const imgBtn3 = document.querySelector(".user-img3");
const imgBtn4 = document.querySelector(".user-img4");
const test1 = document.querySelector(".test1");
const test2 = document.querySelector(".test2");
const test3 = document.querySelector(".test3");
const test4 = document.querySelector(".test4");
const btnLogin = document.querySelector(".btn-sign-in");
const loginForm = document.querySelector(".login-form");
const footerBtn = document.querySelector(".footer-sign-up");
const section1 = document.querySelector("header");
const section2 = document.querySelector(".section-2");
const section4 = document.querySelector(".section-4");
const btnFeatures = document.querySelector(".features-link");
const btnTestimonial = document.querySelector(".testimonial-link");
const btnContact = document.querySelector(".contact-link");
const contact = document.querySelector("footer");
const btnScroll = document.querySelector(".scroll");
const sect1 = document.querySelector(".section-1");
console.log(sect1);
// console.log(test1);

// NAVIGATION BAR
openNavBtn.addEventListener("click", function (e) {
  e.preventDefault();
  navBar.classList.toggle("nav-bar");
  overlay.classList.toggle("hidden");
});

//SIGN UP FORM
btnSignUp.addEventListener("click", function (e) {
  e.preventDefault();
  registerForm.classList.toggle("register--form");
  overlay.classList.remove("hidden");
  navBar.classList.add("nav-bar");
});
footerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  registerForm.classList.toggle("register--form");
  overlay.classList.remove("hidden");
  navBar.classList.add("nav-bar");
  sect1.scrollIntoView({ behavior: "smooth" });
});

btnCloseForm.addEventListener("click", () => {
  registerForm.classList.remove("register--form");
  overlay.classList.add("hidden");
});

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  loginForm.classList.toggle("login--form");
  overlay.classList.remove("hidden");
  navBar.classList.add("nav-bar");
});
btnCloseLogin.addEventListener("click", () => {
  loginForm.classList.remove("login--form");
  overlay.classList.add("hidden");
});

btnFeatures.addEventListener("click", (e) => {
  e.preventDefault();
  section2.scrollIntoView({ behavior: "smooth" });
});

btnTestimonial.addEventListener("click", (e) => {
  e.preventDefault();
  section4.scrollIntoView({ behavior: "smooth" });
});

btnContact.addEventListener("click", (e) => {
  e.preventDefault();
  contact.scrollIntoView({ behavior: "smooth" });
});
btnScroll.addEventListener("click", (e) => {
  e.preventDefault();
  sect1.scrollIntoView({ behavior: "smooth" });
});

//OVERLAY FUNCTION
overlay.addEventListener("click", function (e) {
  navBar.classList.add("nav-bar");
  overlay.classList.add("hidden");
  registerForm.classList.remove("register--form");
  loginForm.classList.remove("login--form");
});

// TESTIMONIALS

imgBtn1.addEventListener("click", (e) => {
  e.preventDefault();
  imgBtn1.classList.add("user-img-active");
  imgBtn2.classList.remove("user-img-active");
  imgBtn3.classList.remove("user-img-active");
  imgBtn4.classList.remove("user-img-active");
  test1.classList.add("testimonial-content-active");
  test2.classList.remove("testimonial-content-active");
  test3.classList.remove("testimonial-content-active");
  test4.classList.remove("testimonial-content-active");
});

imgBtn2.addEventListener("click", (e) => {
  e.preventDefault();
  imgBtn1.classList.remove("user-img-active");
  imgBtn2.classList.add("user-img-active");
  imgBtn3.classList.remove("user-img-active");
  imgBtn4.classList.remove("user-img-active");
  test1.classList.remove("testimonial-content-active");
  test2.classList.add("testimonial-content-active");
  test3.classList.remove("testimonial-content-active");
  test4.classList.remove("testimonial-content-active");
});
imgBtn3.addEventListener("click", (e) => {
  e.preventDefault();
  imgBtn1.classList.remove("user-img-active");
  imgBtn2.classList.remove("user-img-active");
  imgBtn3.classList.add("user-img-active");
  imgBtn4.classList.remove("user-img-active");
  test1.classList.remove("testimonial-content-active");
  test2.classList.remove("testimonial-content-active");
  test3.classList.add("testimonial-content-active");
  test4.classList.remove("testimonial-content-active");
});
imgBtn4.addEventListener("click", (e) => {
  e.preventDefault();
  imgBtn1.classList.remove("user-img-active");
  imgBtn2.classList.remove("user-img-active");
  imgBtn3.classList.remove("user-img-active");
  imgBtn4.classList.add("user-img-active");
  test1.classList.remove("testimonial-content-active");
  test2.classList.remove("testimonial-content-active");
  test3.classList.remove("testimonial-content-active");
  test4.classList.add("testimonial-content-active");
});
const navHeight = section1.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) section1.classList.add("sticky");
  else section1.classList.remove("sticky");
};

const sect1Observer = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  // rootMargin: `${navHeight}px`,
});
sect1Observer.observe(sect1);

//REVEALING SECTIONS
const allSections = document.querySelectorAll("section");
// console.log(allSections);

const revealSect = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObs = new IntersectionObserver(revealSect, {
  root: null,
  threshold: 0.17,
});

allSections.forEach((section) => {
  section.classList.add("section--hidden");
  sectionObs.observe(section);
});
