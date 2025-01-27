function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}

// Toggle the menu on click
function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}

// Scroll smoothly to the section when clicked
function navigateToSection(sectionId) {
  const section = document.getElementById(sectionId.toLowerCase()); // Lowercase for matching IDs
  if (section) {
      window.scrollTo({
          top: section.offsetTop - 40, // Adjust for header height if needed
          behavior: 'smooth'
      });
  }
}
const translations = {
  en: {
      // Navbar
      "nav-home": "Home",
      "nav-service": "Service",
      "nav-products": "Products",
      "nav-contact": "Contact",

      // Home Section
      "home-heading": "AGI PLAST company offers safety and quality in its products as a company with 19 years of experience.",
      "home-subheading": "Discover the latest items and videos",
      "catalog-button": "View Catalog",
      "video-button": "Watch Video",

      // Service Section
      "service1-title": "INSTALLATION",
      "service1-desc": "We offer different installations at any time and place according to your request.",
      "service2-title": "DELIVERY",
      "service2-desc": "Fast and reliable delivery to any location you need.",
      "service3-title": "MATERIALS",
      "service3-desc": "We work with the highest quality German materials.",
      "service4-title": "PAYMENT",
      "service4-desc": "We offer various payment options, including home loans and company financing.",

      // Products Section
      "product1-title": "Product 1",
      "product1-desc": "Discover our first amazing product with fantastic features.",
      "product2-title": "Product 2",
      "product2-desc": "Top-notch quality and performance.",
      "product3-title": "Product 3",
      "product3-desc": "Efficiency and durability in one product.",

      // Contact Section
      "contact-title": "Contact Us",
      "contact-text": "If you have any questions or need assistance, you can contact us via WhatsApp:",

      // Footer
      "about-title": "About Us",
      "about-desc": "We are a company dedicated to providing the best services and products to our customers."
  },
  sq: {
      "nav-home": "Ballina",
      "nav-service": "Shërbimet",
      "nav-products": "Produktet",
      "nav-contact": "Kontakti",

      "home-heading": "Kompania AGI PLAST ofron siguri dhe cilësi në produktet e saj si një kompani me 19 vite përvojë.",
      "home-subheading": "Zbuloni artikujt dhe videot e fundit",
      "catalog-button": "Shiko Katalogun",
      "video-button": "Shiko Videon",

      "service1-title": "INSTALIMI",
      "service1-desc": "Ne ofrojmë instalime të ndryshme në çdo kohë dhe vend sipas kërkesës tuaj.",
      "service2-title": "DËRGESA",
      "service2-desc": "Dërgesë e shpejtë dhe e sigurt në çdo vend.",
      "service3-title": "MATERIALET",
      "service3-desc": "Ne punojmë me materialet më cilësore gjermane.",
      "service4-title": "PAGESA",
      "service4-desc": "ofrojm pagesa te ndrryshme me kredi ne bank ose kredi ne firmen ton.",

      "product1-title": "Produkti 1",
      "product1-desc": "Zbuloni produktin tonë të parë mahnitës me veçori fantastike.",
      "product2-title": "Produkti 2",
      "product2-desc": "Cilësi dhe performancë e lartë.",
      "product3-title": "Produkti 3",
      "product3-desc": "Efiçiencë dhe qëndrueshmëri në një produkt.",

      "contact-title": "Na Kontaktoni",
      "contact-text": "Nëse keni pyetje ose ju duhet ndihmë, mund të na kontaktoni përmes WhatsApp:",

      "about-title": "Rreth Nesh",
      "about-desc": "Ne jemi një kompani e përkushtuar për të ofruar shërbimet dhe produktet më të mira për klientët tanë."
  },
  de: {
      "nav-home": "Startseite",
      "nav-service": "Dienstleistungen",
      "nav-products": "Produkte",
      "nav-contact": "Kontakt",

      "home-heading": "Die Firma AGI PLAST bietet Sicherheit und Qualität in ihren Produkten als Unternehmen mit 19 Jahren Erfahrung.",
      "home-subheading": "Entdecken Sie die neuesten Artikel und Videos",
      "catalog-button": "Katalog ansehen",
      "video-button": "Video ansehen",

      "service1-title": "INSTALLATION",
      "service1-desc": "Wir bieten Installationen zu jeder Zeit und an jedem Ort nach Ihren Wünschen.",
      "service2-title": "LIEFERUNG",
      "service2-desc": "Schnelle und zuverlässige Lieferung an jeden gewünschten Ort.",
      "service3-title": "MATERIALIEN",
      "service3-desc": "Wir arbeiten mit hochwertigen deutschen Materialien.",
      "service4-title": "ZAHLUNG",
      "service4-desc": "Wir bieten verschiedene Zahlungsmöglichkeiten, einschließlich Hauskredite und Unternehmensfinanzierung.",

      "product1-title": "Produkt 1",
      "product1-desc": "Entdecken Sie unser erstes erstaunliches Produkt mit fantastischen Eigenschaften.",
      "product2-title": "Produkt 2",
      "product2-desc": "Hervorragende Qualität und Leistung.",
      "product3-title": "Produkt 3",
      "product3-desc": "Effizienz und Haltbarkeit in einem Produkt.",

      "contact-title": "Kontaktieren Sie uns",
      "contact-text": "Wenn Sie Fragen haben oder Hilfe benötigen, können Sie uns über WhatsApp kontaktieren:",

      "about-title": "Über uns",
      "about-desc": "Wir sind ein Unternehmen, das sich der Bereitstellung der besten Dienstleistungen und Produkte für unsere Kunden widmet."
  }
};

function changeLanguage(language) {
  const elements = document.querySelectorAll('[id]');
  elements.forEach((element) => {
      const translationKey = element.id;
      if (translations[language] && translations[language][translationKey]) {
          element.innerText = translations[language][translationKey];
      }
  });
}

function navigateToSection(sectionId) {
  const section = document.getElementById(sectionId);
  window.scrollTo({
      top: section.offsetTop - 50,
      behavior: 'smooth'
  });
}

function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}

