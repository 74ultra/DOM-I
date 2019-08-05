const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Nav items

let navTags = document.querySelectorAll('header nav a');

let navText = Object.values(siteContent.nav);

const navUpdater = () => {
  let i = 0;
  navTags.forEach(function(item){
    item.textContent = navText[i];
    item.style.color = 'green';
    i++;
  })
}

navUpdater();


// Call to action

let ctaHeader = document.querySelector('.cta-text h1');

let ctaButton = document.querySelector('.cta-text button');

let ctaImg = document.querySelector('#cta-img');

ctaHeader.textContent = siteContent.cta.h1;

ctaButton.textContent = siteContent.cta.button;

ctaImg.setAttribute('src', siteContent.cta['img-src']);


// Top Content

let topHeaders = document.querySelectorAll('.top-content .text-content h4');

topHeaders[0].textContent = siteContent["main-content"]["features-h4"];

topHeaders[1].textContent = siteContent["main-content"]["about-h4"];


let topParas = document.querySelectorAll('.top-content .text-content p');

topParas[0].textContent = siteContent["main-content"]["features-content"];

topParas[1].textContent = siteContent["main-content"]["about-content"];


// Middle image

let midImg = document.querySelector('.middle-img');

midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


// Bottom content

let bottomHeaders = document.querySelectorAll('.bottom-content .text-content h4')

bottomHeaders[0].textContent = siteContent["main-content"]["services-h4"];

bottomHeaders[1].textContent = siteContent["main-content"]["product-h4"];

bottomHeaders[2].textContent = siteContent["main-content"]["vision-h4"];


let bottomParas = document.querySelectorAll('.bottom-content .text-content p')

bottomParas[0].textContent = siteContent["main-content"]["services-content"];

bottomParas[1].textContent = siteContent["main-content"]["product-content"];

bottomParas[2].textContent = siteContent["main-content"]["vision-content"];


// Contact

let contactHeader = document.querySelector('.contact h4');

contactHeader.textContent = siteContent.contact["contact-h4"];


let contactParas = document.querySelectorAll('.contact p')

let contactParasText = Object.values(siteContent.contact);

const contactParasUpdater = () => {
  let i = 1;
  contactParas.forEach((item) => {
    item.textContent = contactParasText[i];
    i++;
  })
}

contactParasUpdater();

contactParas[0].innerHTML = '123 Way 456 Street<br>Somewhere, USA';


// Footer

let footerPara = document.querySelector('footer p');

footerPara.textContent = siteContent.footer.copyright;


// Append new nav item

let appendedNavItem = document.createElement('a');

let navBar = document.querySelector('header nav');

appendedNavItem.textContent = "Consequences";

appendedNavItem.style.color = 'green';

navBar.appendChild(appendedNavItem);


// Prepend new nav item

let prependedNavItem = document.createElement('a');

prependedNavItem.textContent = "Truth";

prependedNavItem.style.color = "green";

navBar.prepend(prependedNavItem);


// Event listener on cta button to toggle - 'ctaButton' is already the variable name for the button on screen

ctaButton.addEventListener('click', () => {
  alert('You clicked the "Call To Action" button!')
});






