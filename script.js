// script.js
const products = [
  { id: 1, category: "YACHT", title: "Azimut 77 Yacht", price: 3_500_000, image: "images/yacht/azimut77.jpg", description: "Luxury yacht with modern design and premium amenities." },
  { id: 2, category: "YACHT", title: "Benetti 164 Superyacht", price: 45_000_000, image: "images/yacht/benetti164.jpg", description: "Superyacht with swimming pool and helicopter pad." },
  { id: 3, category: "YACHT", title: "Lürssen A+ Yacht", price: 80_000_000, image: "images/yacht/lurssen.jpg", description: "One of the world's largest private yachts with cinema and spa." },
  { id: 4, category: "PLANE", title: "Gulfstream G650ER", price: 75_000_000, image: "images/plane/gulfstream.jpg", description: "Private jet with long range and luxurious interior." },
  { id: 5, category: "PLANE", title: "Boeing Business Jet", price: 90_000_000, image: "images/plane/boeing.jpg", description: "Custom-configured Boeing business jet for ultimate comfort." },
  { id: 6, category: "PLANE", title: "Dassault Falcon 8X", price: 60_000_000, image: "images/plane/falcon8x.jpg", description: "Ultra-long-range business jet with quiet cabin." },
  { id: 7, category: "MANSION", title: "Beverly Hills Mansion", price: 125_000_000, image: "images/mansion/beverly.jpg", description: "Luxurious mansion in Beverly Hills with panoramic views." },
  { id: 8, category: "MANSION", title: "Miami Beach Penthouse", price: 85_000_000, image: "images/mansion/miami.jpg", description: "Penthouse with ocean views and private beach access." },
  { id: 9, category: "MANSION", title: "Dubai Sky Palace", price: 200_000_000, image: "images/mansion/dubai.jpg", description: "Super palace in Dubai.I am fan of MESSI." },
  { id: 10, category: "ISLAND", title: "Private Caribbean Island", price: 250_000_000, image: "images/island/caribbean.jpg", description: "Private island in the Caribbean with white sand beaches." },
  { id: 11, category: "ISLAND", title: "Maldives Private Atoll", price: 320_000_000, image: "images/island/maldives.jpg", description: "Entire private atoll in the Maldives with luxury resort." },
  { id: 12, category: "ISLAND", title: "Fiji Eco-Reserve Island", price: 180_000_000, image: "images/island/fiji.jpg", description: "Sustainable luxury island with coral reef protection zone." }
];

let currentPage = 'main';
let currentProductModalId = null;

// Инициализация темы
function initTheme() {
  const saved = localStorage.getItem('theme') || 'light';
  document.body.setAttribute('data-theme', saved);
  updateThemeIcon(saved);
}

function toggleTheme() {
  const cur = document.body.getAttribute('data-theme');
  const next = cur === 'dark' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const icons = [
    document.getElementById('theme-icon'),
    document.getElementById('theme-icon-bottom')
  ];
  icons.forEach(icon => {
    if (icon) {
      icon.src = theme === 'dark'
        ? 'images/icons/sun.svg'
        : 'images/icons/moon.svg';
    }
  });
}

function renderProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  let searchLower = document.getElementById('search-input')?.value.trim().toLowerCase() || '';
  const searchTranslit = transliterate(searchLower);

  const yachtChecked = document.getElementById('yacht-filter')?.checked || false;
  const planeChecked = document.getElementById('plane-filter')?.checked || false;
  const mansionChecked = document.getElementById('mansion-filter')?.checked || false;
  const islandChecked = document.getElementById('island-filter')?.checked || false;
  const noFilterSelected = !yachtChecked && !planeChecked && !mansionChecked && !islandChecked;

  grid.innerHTML = '';

  products.forEach(p => {
    let showProduct = false;
    if (noFilterSelected) {
      showProduct = true;
    } else {
      if (p.category === 'YACHT' && yachtChecked) showProduct = true;
      if (p.category === 'PLANE' && planeChecked) showProduct = true;
      if (p.category === 'MANSION' && mansionChecked) showProduct = true;
      if (p.category === 'ISLAND' && islandChecked) showProduct = true;
    }

    if (searchLower) {
      const titleLower = p.title.toLowerCase();
      const matchesOriginal = titleLower.includes(searchLower);
      const matchesTranslit = titleLower.includes(searchTranslit);
      if (!matchesOriginal && !matchesTranslit) {
        showProduct = false;
      }
    }

    if (showProduct) {
      const card = document.createElement('div');
      card.className = 'product-card';

      const wrapper = document.createElement('div');
      wrapper.className = 'product-image-wrapper';
      const img = document.createElement('img');
      img.src = p.image;
      img.alt = p.title;
      img.className = 'product-image';
      img.onerror = function() {
        this.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iMTgwIiB2aWV3Qm94PSIwIDAgODAwIDE4MCIgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iNDAwIiBjeT0iOTAiIHI9IjcwIiBmaWxsPSJsaWdodGdyZWVuIi8+PC9zdmc+';
      };
      wrapper.appendChild(img);

      const info = document.createElement('div');
      info.className = 'product-info';
      info.innerHTML = `
        <div class="product-category">${p.category}</div>
        <div class="product-title">${p.title}</div>
        <div class="product-price">$${p.price.toLocaleString()}</div>
      `;

      card.appendChild(wrapper);
      card.appendChild(info);

      card.addEventListener('click', () => openProductModal(p.id));

      grid.appendChild(card);
    }
  });
}

function openProductModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  alert(`Вы выбрали: ${p.title} — $${p.price.toLocaleString()}`);
  // Здесь можно открыть модальное окно, если нужно
}

function transliterate(str) {
  const ru = ["а","б","в","г","д","е","ё","ж","з","и","й","к","л","м","н","о","п","р","с","т","у","ф","х","ц","ч","ш","щ","ъ","ы","ь","э","ю","я"];
  const en = ["a","b","v","g","d","e","e","zh","z","i","y","k","l","m","n","o","p","r","s","t","u","f","kh","ts","ch","sh","shch","","y","","e","yu","ya"];
  let result = str.toLowerCase();
  for (let i = 0; i < ru.length; i++) {
    result = result.replace(new RegExp(ru[i], 'g'), en[i]);
  }
  return result;
}

function setupEventListeners() {
  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
  document.getElementById('theme-toggle-bottom')?.addEventListener('click', toggleTheme);

  document.getElementById('search-icon')?.addEventListener('click', () => {
    const input = document.getElementById('search-input');
    if (input) {
      input.focus();
      input.classList.add('search-highlight');
      setTimeout(() => input.classList.remove('search-highlight'), 2000);
    }
  });

  document.getElementById('search-icon-bottom')?.addEventListener('click', () => {
    const input = document.getElementById('search-input-bottom');
    if (input) {
      input.focus();
      input.classList.add('search-highlight');
      setTimeout(() => input.classList.remove('search-highlight'), 2000);
    }
  });

  document.getElementById('reset-filters')?.addEventListener('click', () => {
    document.querySelectorAll('.filter-checkbox').forEach(cb => cb.checked = false);
    renderProducts();
  });

  document.getElementById('search-input')?.addEventListener('input', renderProducts);
  document.getElementById('search-input-bottom')?.addEventListener('input', renderProducts);
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderProducts();
  setupEventListeners();
});
