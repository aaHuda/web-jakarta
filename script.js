// navbar javascript

class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";
    
    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();

// read more feature

function readMore() {
  const hiddenText = document.querySelector('.hidden-text')
  const readMoreButton = document.querySelector('.read-more')
  
  if (hiddenText.style.display === 'none') {
      hiddenText.style.display = 'block';
      readMoreButton.innerHTML = 'Read less'
  } else {
      hiddenText.style.display = 'none';
      readMoreButton.innerHTML = 'Read more'
  }
}

// slider feature

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

// pop up kontak kami 

const namaPengirim = document.getElementById('namaPengirim')
const emailPengirim = document.getElementById('emailPengirim')
const pesanPengirim = document.getElementById('pesanPengirim')

function popup() {
  alert(`terima kasih sudah mengirim pesan kepada kami ${namaPengirim.value} 🥰`)
  namaPengirim.value = ''
  emailPengirim.value = ''
  pesanPengirim.value = ''
}

