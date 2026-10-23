// ================= Data =================
const img = (id, w = 900) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;
const IMG = {
  tee: '1521572163474-6864f9cf17ab', dress: '1595777457583-95e059d581b8', jeans: '1541099649105-f69ad21f3246',
  coat: '1539533018447-63fcce2678e3', denimShirt: '1596755094514-f87e34085b2c', chinos: '1473966968600-fa801b869a1a',
  leather: '1551028719-00167b16eac5', beanies: '1576871337632-b9aef4c17ab9', basket: '1590874103328-eac38a683ce7',
  sneakers: '1525966222134-fcfa99b8ae77', blackTees: '1576871337622-98d48d1cf531', rackColor: '1601924994987-69e26d50dc26',
  store: '1441986300917-64674bd600d8', rackWhite: '1490481651871-ab68de25d43d', womanShop: '1483985988355-763728e1935b',
  manSuit: '1617137968427-85924c800a22', bucketBag: '1523779105320-d1cd346ff52b', redTee: '1529139574466-a303027c1d8b',
  yellowSet: '1515886657613-9f3515b0c78f', neutralRack: '1558769132-cb1aea458c5e', graphicTee: '1503342217505-b0a15ec3261c',
  flatlay: '1556905055-8f358a7a47b2', knit: '1434389677669-e08b4cac3105', rackWarm: '1512436991641-6745cdb1723f',
  plaidCoat: '1485968579580-b6d095142e6e', coffee: '1520903920243-00d872a2d1c9', bomber: '1591047139829-d91aecb6caea',
  logoTee: '1618354691373-d851c5c3a990', navySuit: '1507679799987-c73779587ccf', blazer: '1617127365659-c47fa864d8bc',
  manTee: '1622519407650-3df9883f76a5', redBag: '1584917865442-de89df76afd3', sunnies: '1469334031218-e382a71b716b',
};

const C = { black: '#1a1a1a', white: '#f5f2ec', camel: '#b8895c', navy: '#23324a', denim: '#4a6a8f', olive: '#5d6248', rust: '#b5523b', red: '#b8312f', cream: '#ece3d3', grey: '#9aa0a6', tan: '#c99e72', yellow: '#e2b33c', green: '#3e5a48', pink: '#e8b7b0' };
const S = ['XS', 'S', 'M', 'L', 'XL'];

const PRODUCTS = [
  { id: 1, name: 'Essential Organic Tee', cat: 'men', type: 'Tops', price: 32, imgs: [IMG.tee, IMG.blackTees], colors: ['white', 'black', 'grey'], sizes: S, tags: ['new', 'bestseller'], rating: 4.8, reviews: 214, desc: 'Our signature tee in 220gsm organic cotton. A relaxed, boxy fit with a reinforced collar that keeps its shape wash after wash.' },
  { id: 2, name: 'Scarlet Maxi Dress', cat: 'women', type: 'Dresses', price: 129, compare: 165, imgs: [IMG.dress, IMG.womanShop], colors: ['red', 'black'], sizes: S, tags: ['sale'], rating: 4.9, reviews: 88, desc: 'A floor-sweeping maxi in fluid crepe with a fitted bodice and a dramatic open back. Made for long summer evenings.' },
  { id: 3, name: 'Vintage Distressed Jeans', cat: 'women', type: 'Denim', price: 98, imgs: [IMG.jeans, IMG.flatlay], colors: ['denim'], sizes: ['24', '26', '28', '30', '32'], tags: ['new'], rating: 4.6, reviews: 143, desc: 'High-rise, straight-leg jeans with hand-finished distressing and a lived-in vintage wash.' },
  { id: 4, name: 'Camel Belted Wrap Coat', cat: 'women', type: 'Outerwear', price: 245, imgs: [IMG.coat, IMG.rackWarm], colors: ['camel', 'black'], sizes: ['XS', 'S', 'M', 'L'], tags: ['bestseller'], rating: 4.9, reviews: 176, desc: 'Tailored from an Italian wool-cashmere blend. A belted wrap silhouette with dropped shoulders and deep pockets.' },
  { id: 5, name: 'Chambray Dot Shirt', cat: 'men', type: 'Shirts', price: 74, imgs: [IMG.denimShirt, IMG.rackColor], colors: ['denim'], sizes: S, tags: ['new'], rating: 4.5, reviews: 52, desc: 'Lightweight chambray with a subtle micro-dot print. Three-quarter sleeves and a relaxed cut.' },
  { id: 6, name: 'Tapered Stretch Chinos', cat: 'men', type: 'Trousers', price: 79, compare: 95, imgs: [IMG.chinos, IMG.neutralRack], colors: ['tan', 'olive', 'navy'], sizes: ['30', '32', '34', '36'], tags: ['sale'], rating: 4.7, reviews: 301, desc: 'Brushed cotton twill with just enough stretch. Tapered through the leg with a clean, modern finish.' },
  { id: 7, name: 'Moto Leather Jacket', cat: 'men', type: 'Outerwear', price: 320, imgs: [IMG.leather, IMG.blazer], colors: ['black'], sizes: S, tags: ['bestseller'], rating: 4.9, reviews: 97, desc: 'Full-grain lambskin leather with asymmetric zip, quilted shoulders and a satin lining. Ages beautifully.' },
  { id: 8, name: 'Ribbed Wool Beanie', cat: 'accessories', type: 'Hats', price: 35, imgs: [IMG.beanies, IMG.flatlay], colors: ['black', 'pink', 'olive'], sizes: ['One size'], tags: [], rating: 4.6, reviews: 64, desc: 'Chunky rib knit in soft lambswool. Fold the cuff once or twice — your call.' },
  { id: 9, name: 'Woven Leather Satchel', cat: 'accessories', type: 'Bags', price: 165, imgs: [IMG.basket, IMG.redBag], colors: ['tan'], sizes: ['One size'], tags: ['new'], rating: 4.8, reviews: 39, desc: 'Hand-woven rattan body with vegetable-tanned leather flap and top handle. A statement for every season.' },
  { id: 10, name: 'Burgundy Canvas Sneakers', cat: 'accessories', type: 'Shoes', price: 72, compare: 88, imgs: [IMG.sneakers, IMG.flatlay], colors: ['red', 'black'], sizes: ['37', '38', '39', '40', '41', '42', '43', '44'], tags: ['sale'], rating: 4.5, reviews: 188, desc: 'Classic low-top silhouette in heavy canvas with a vulcanised rubber sole and padded collar.' },
  { id: 11, name: 'Peace Graphic Tee', cat: 'women', type: 'Tops', price: 38, imgs: [IMG.graphicTee, IMG.redTee], colors: ['black', 'white'], sizes: S, tags: ['new'], rating: 4.4, reviews: 71, desc: 'A soft, slightly cropped tee with a hand-drawn front graphic. Pairs perfectly with high-rise denim.' },
  { id: 12, name: 'Crochet Knit Poncho', cat: 'women', type: 'Knitwear', price: 89, imgs: [IMG.knit, IMG.neutralRack], colors: ['cream'], sizes: ['S/M', 'L/XL'], tags: ['new'], rating: 4.7, reviews: 45, desc: 'Open-weave cotton crochet with fringed hem. Effortless layering over a slip dress or swimsuit.' },
  { id: 13, name: 'Check Wool Overcoat', cat: 'women', type: 'Outerwear', price: 260, compare: 310, imgs: [IMG.plaidCoat, IMG.coffee], colors: ['green', 'navy'], sizes: ['XS', 'S', 'M', 'L'], tags: ['sale'], rating: 4.8, reviews: 58, desc: 'A longline overcoat in heritage tartan check. Notched lapels, single-breasted, fully lined.' },
  { id: 14, name: 'Terracotta Bomber', cat: 'men', type: 'Outerwear', price: 148, imgs: [IMG.bomber, IMG.rackColor], colors: ['rust', 'olive'], sizes: S, tags: ['new'], rating: 4.6, reviews: 83, desc: 'Lightweight bomber in a silky recycled nylon with ribbed cuffs and hem. Water-repellent finish.' },
  { id: 15, name: 'Crest Logo Tee', cat: 'men', type: 'Tops', price: 36, imgs: [IMG.logoTee, IMG.manTee], colors: ['black', 'white'], sizes: S, tags: [], rating: 4.5, reviews: 129, desc: 'Midweight cotton jersey with a small embroidered crest on the chest.' },
  { id: 16, name: 'Navy Tailored Suit', cat: 'men', type: 'Suits', price: 450, imgs: [IMG.navySuit, IMG.manSuit], colors: ['navy'], sizes: ['46', '48', '50', '52', '54'], tags: ['bestseller'], rating: 4.9, reviews: 112, desc: 'Two-piece suit in Super 120s Italian wool. Half-canvas construction, slim-fit trousers.' },
  { id: 17, name: 'Midnight Blazer', cat: 'men', type: 'Suits', price: 230, imgs: [IMG.blazer, IMG.navySuit], colors: ['black'], sizes: ['46', '48', '50', '52'], tags: [], rating: 4.7, reviews: 49, desc: 'An unstructured blazer in textured wool blend. Dress it up or wear it over a tee.' },
  { id: 18, name: 'Contrast Trim Tee', cat: 'men', type: 'Tops', price: 42, imgs: [IMG.manTee, IMG.blackTees], colors: ['black'], sizes: S, tags: ['new'], rating: 4.3, reviews: 27, desc: 'Heavyweight tee with contrast-stitched collar and sleeve trims.' },
  { id: 19, name: 'Scarlet Top-Handle Bag', cat: 'accessories', type: 'Bags', price: 210, imgs: [IMG.redBag, IMG.basket], colors: ['red', 'black'], sizes: ['One size'], tags: ['bestseller'], rating: 4.9, reviews: 66, desc: 'Structured calf-leather bag with polished silver hardware and a detachable crossbody strap.' },
  { id: 20, name: 'Mini Bucket Bag', cat: 'accessories', type: 'Bags', price: 125, compare: 150, imgs: [IMG.bucketBag, IMG.redBag], colors: ['tan', 'cream'], sizes: ['One size'], tags: ['sale'], rating: 4.6, reviews: 41, desc: 'Soft pebbled leather with a drawstring top and pom-pom charm.' },
  { id: 21, name: 'Sunshine Lounge Set', cat: 'women', type: 'Loungewear', price: 115, imgs: [IMG.yellowSet, IMG.sunnies], colors: ['yellow', 'pink'], sizes: S, tags: ['new'], rating: 4.7, reviews: 36, desc: 'A matching cropped hoodie and jogger set in brushed-back cotton fleece.' },
];

const REVIEW_TEXT = [
  ['Absolutely love it', 'The quality is way beyond what I expected for the price. Fits true to size and the fabric feels premium.', 'Priya K.'],
  ['My new favourite', 'Wore it three times in the first week. Washes beautifully and still looks brand new.', 'Daniel R.'],
  ['Great fit', 'Ordered my usual size and it is perfect. Shipping was super fast too.', 'Sofia M.'],
  ['Worth every penny', 'You can tell this is made to last. The details are lovely. Already eyeing another colour.', 'Arjun S.'],
];

const LOOKS = [
  { img: IMG.womanShop, label: 'City Weekend', q: 'coat' },
  { img: IMG.manSuit, label: 'Sharp Tailoring', q: 'suit' },
  { img: IMG.redTee, label: 'Off Duty', q: 'tee' },
  { img: IMG.coffee, label: 'Autumn Layers', q: 'outerwear' },
  { img: IMG.sunnies, label: 'Summer Edit', q: 'lounge' },
];

// ================= State =================
const store = {
  get: (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
  set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
};
let cart = store.get('tl-cart', []);
let wish = store.get('tl-wish', []);
let recent = store.get('tl-recent', []);
let promo = store.get('tl-promo', null);
const filters = { types: [], sizes: [], colors: [], max: 500, sort: 'featured' };

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const money = (n) => '$' + n.toFixed(2).replace(/\.00$/, '');
const byId = (id) => PRODUCTS.find((p) => p.id === +id);
const stars = (r) => '★★★★★'.slice(0, Math.round(r)) + '☆☆☆☆☆'.slice(0, 5 - Math.round(r));
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const heart = '<svg viewBox="0 0 24 24"><path d="M12 21s-8-5.3-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.7-8 11-8 11z"/></svg>';
const app = $('#app');

// ================= Cart =================
const FREE_SHIP = 75;
const subtotal = () => cart.reduce((s, l) => s + byId(l.id).price * l.qty, 0);
const discount = () => (promo === 'WELCOME10' ? subtotal() * 0.1 : 0);

function saveCart() { store.set('tl-cart', cart); renderCart(); updateCounts(); }

function addToCart(id, size, color, qty = 1) {
  const line = cart.find((l) => l.id === id && l.size === size && l.color === color);
  line ? (line.qty += qty) : cart.push({ id, size, color, qty });
  saveCart();
  openDrawer();
}

function updateCounts() {
  const n = cart.reduce((s, l) => s + l.qty, 0);
  $('#cartCount').textContent = n || '';
  $('#wishCount').textContent = wish.length || '';
}

function renderCart() {
  const body = $('#drawerBody');
  if (!cart.length) {
    body.innerHTML = `<div class="drawer-empty"><h3>Your bag is empty</h3><p class="muted">Looks like you haven't added anything yet.</p><a class="btn" href="#/shop/all" onclick="closeAll()">Start shopping</a></div>`;
    return;
  }
  const sub = subtotal(), left = FREE_SHIP - sub;
  body.innerHTML = `
    <div class="ship-bar">${left > 0 ? `You're <b>${money(left)}</b> away from free shipping` : '🎉 You\'ve unlocked <b>free shipping</b>'}<i style="--w:${Math.min(100, (sub / FREE_SHIP) * 100)}%"></i></div>
    <div class="lines">${cart.map((l, i) => {
      const p = byId(l.id);
      return `<div class="line"><a class="thumb" href="#/product/${p.id}" onclick="closeAll()"><img src="${img(p.imgs[0], 200)}" alt="${p.name}"></a>
        <div><h5>${p.name}</h5><small>${l.color} / ${l.size}</small>
          <span class="qty"><button aria-label="Decrease" onclick="setQty(${i},-1)">−</button><span>${l.qty}</span><button aria-label="Increase" onclick="setQty(${i},1)">+</button></span>
          <button class="remove" onclick="setQty(${i},-999)">Remove</button></div>
        <b>${money(p.price * l.qty)}</b></div>`;
    }).join('')}</div>
    <div class="drawer-foot"><div class="row"><span>Subtotal</span><b>${money(sub)}</b></div>
      <p class="muted" style="font-size:.8rem;margin:0 0 14px">Taxes and shipping calculated at checkout</p>
      <a class="btn btn-full" href="#/checkout" onclick="closeAll()">Checkout · ${money(sub)}</a>
      <a class="btn btn-outline btn-full" style="margin-top:8px" href="#/shop/all" onclick="closeAll()">Continue shopping</a></div>`;
}
window.setQty = (i, d) => { cart[i].qty += d; if (cart[i].qty <= 0) cart.splice(i, 1); saveCart(); };

// ================= Wishlist =================
window.toggleWish = (id, e) => {
  e?.preventDefault(); e?.stopPropagation();
  const i = wish.indexOf(id);
  i > -1 ? wish.splice(i, 1) : wish.push(id);
  store.set('tl-wish', wish);
  updateCounts();
  $$(`[data-wish="${id}"]`).forEach((b) => b.classList.toggle('on', wish.includes(id)));
  toast(i > -1 ? 'Removed from wishlist' : '♥ Saved to wishlist');
  if (location.hash === '#/wishlist') route();
};

// ================= UI helpers =================
const overlay = $('#overlay');
function openDrawer() { $('#drawer').classList.add('open'); overlay.classList.add('show'); }
window.closeAll = () => {
  $('#drawer').classList.remove('open'); $('#modal').classList.remove('open');
  $('#nav').classList.remove('open'); $('#searchOverlay').classList.remove('open');
  overlay.classList.remove('show'); document.body.style.overflow = '';
};
function openModal(html) { $('#modalBody').innerHTML = html; $('#modal').classList.add('open'); overlay.classList.add('show'); }
let toastT;
function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 2200); }

// ================= Components =================
function card(p) {
  return `<div class="card reveal">
    <div class="card-media">
      <a href="#/product/${p.id}" class="card-link" aria-label="${p.name}">
        <img src="${img(p.imgs[0], 600)}" alt="${p.name}" loading="lazy">
        <img class="alt" src="${img(p.imgs[1], 600)}" alt="" loading="lazy">
      </a>
      <div class="badges">${p.tags.includes('new') ? '<span class="badge">New</span>' : ''}${p.compare ? `<span class="badge sale">-${Math.round((1 - p.price / p.compare) * 100)}%</span>` : ''}${p.tags.includes('bestseller') && !p.tags.includes('new') && !p.compare ? '<span class="badge">Bestseller</span>' : ''}</div>
      <button class="icon-btn wish ${wish.includes(p.id) ? 'on' : ''}" data-wish="${p.id}" aria-label="Add to wishlist" onclick="toggleWish(${p.id}, event)">${heart}</button>
      <div class="quick"><small>Quick add</small><div class="quick-sizes">${p.sizes.map((s) => `<button onclick="addToCart(${p.id},'${s}','${p.colors[0]}')">${s}</button>`).join('')}</div></div>
    </div>
    <a href="#/product/${p.id}" class="card-info">
      <div class="card-text"><p class="card-title">${p.name}</p><p class="card-sub">${p.type}</p>
        <div class="card-swatches">${p.colors.map((c) => `<i style="background:${C[c]}" title="${c}"></i>`).join('')}</div></div>
      <p class="price">${p.compare ? `<span class="now">${money(p.price)}</span><s>${money(p.compare)}</s>` : money(p.price)}</p>
    </a></div>`;
}

// ================= Pages =================
const SLIDES = [
  { img: IMG.rackWhite, eyebrow: 'Autumn / Winter 2026', h: 'The art of <i>effortless</i> style', p: 'Considered essentials in natural fabrics, designed to be worn for years.', cta: ['Shop the collection', '#/shop/new'] },
  { img: IMG.womanShop, eyebrow: 'Women', h: 'Layers for the <i>cold</i> season', p: 'Wool coats, soft knits and statement pieces to carry you through.', cta: ['Shop women', '#/shop/women'] },
  { img: IMG.manSuit, eyebrow: 'Men', h: 'Tailored, <i>never</i> stiff', p: 'Italian wools and modern cuts — for the office and everything after.', cta: ['Shop men', '#/shop/men'] },
];

function home() {
  const newIn = PRODUCTS.filter((p) => p.tags.includes('new')).slice(0, 8);
  const best = PRODUCTS.filter((p) => p.tags.includes('bestseller')).slice(0, 4);
  return `
  <section class="hero">
    ${SLIDES.map((s, i) => `<div class="slide ${i ? '' : 'on'}"><img src="${img(s.img, 2000)}" alt="" ${i ? 'loading="lazy"' : ''}>
      <div class="slide-content"><p class="eyebrow">${s.eyebrow}</p><h1>${s.h}</h1><p>${s.p}</p><a class="btn btn-light" href="${s.cta[1]}">${s.cta[0]}</a></div></div>`).join('')}
    <div class="hero-dots">${SLIDES.map((_, i) => `<button class="${i ? '' : 'on'}" aria-label="Slide ${i + 1}" data-slide="${i}"></button>`).join('')}</div>
  </section>
  <div class="features container">
    <div class="feature"><b>Free shipping</b>On all orders over $75</div>
    <div class="feature"><b>30-day returns</b>Free & hassle-free</div>
    <div class="feature"><b>Responsibly made</b>Organic & recycled fabrics</div>
    <div class="feature"><b>Secure checkout</b>All major cards & wallets</div>
  </div>
  <section class="section container">
    <div class="section-head reveal"><div><p class="eyebrow">Explore</p><h2>Shop by category</h2></div></div>
    <div class="cats">
      ${[['women', IMG.womanShop, 'Women'], ['men', IMG.manSuit, 'Men'], ['accessories', IMG.bucketBag, 'Accessories']].map(([k, im, t]) => `
      <a class="cat reveal" href="#/shop/${k}"><img src="${img(im, 900)}" alt="${t}" loading="lazy"><div class="cat-label"><h3>${t}</h3><span>Shop now</span></div></a>`).join('')}
    </div>
  </section>
  <section class="section container" style="padding-top:0">
    <div class="section-head reveal"><div><p class="eyebrow">Just landed</p><h2>New arrivals</h2></div><a class="link" href="#/shop/new">View all</a></div>
    <div class="grid">${newIn.map(card).join('')}</div>
  </section>
  <section class="promo">
    <div class="promo-img"><img src="${img(IMG.rackColor, 1400)}" alt="" loading="lazy"></div>
    <div class="promo-text reveal"><p class="eyebrow">Limited time</p><h2>The Mid-Season Sale</h2><p style="opacity:.8;max-width:420px">Up to 30% off selected outerwear, denim and accessories. Ends soon — once they're gone, they're gone.</p>
      <div class="countdown" id="countdown"></div><a class="btn btn-light" href="#/shop/sale" style="align-self:flex-start">Shop the sale</a></div>
  </section>
  <section class="section container">
    <div class="section-head reveal"><div><p class="eyebrow">Most loved</p><h2>Bestsellers</h2></div><a class="link" href="#/shop/all">Shop all</a></div>
    <div class="grid">${best.map(card).join('')}</div>
  </section>
  <section class="section container" style="padding-top:0">
    <div class="section-head reveal"><div><p class="eyebrow">Lookbook</p><h2>Styled by Threadline</h2></div></div>
    <div class="lookbook">${LOOKS.map((l) => `<a class="reveal" href="#/search?q=${l.q}"><img src="${img(l.img, 900)}" alt="${l.label}" loading="lazy"><span>${l.label}</span></a>`).join('')}</div>
  </section>
  <section class="section reviews-band">
    <div class="container">
      <div class="section-head reveal" style="justify-content:center;text-align:center"><div><p class="eyebrow">4.8 / 5 from 12,000+ reviews</p><h2>Loved by our customers</h2></div></div>
      <div class="quotes">${REVIEW_TEXT.slice(0, 3).map(([t, b, n]) => `<div class="quote reveal"><span class="stars">★★★★★</span><p>“${b}”</p><b>${n}</b> <span class="muted">· Verified buyer</span></div>`).join('')}</div>
    </div>
  </section>
  <section class="section" style="padding-bottom:0">
    <div class="container section-head reveal" style="justify-content:center;text-align:center"><div><p class="eyebrow">@threadline</p><h2>Follow our journey</h2></div></div>
    <div class="insta">${[IMG.flatlay, IMG.sunnies, IMG.neutralRack, IMG.redTee, IMG.store, IMG.coffee].map((i) => `<a href="#/shop/all"><img src="${img(i, 500)}" alt="" loading="lazy"></a>`).join('')}</div>
  </section>`;
}

const CAT_META = {
  all: ['Shop All', IMG.store, 'Everything we make, all in one place.'],
  new: ['New In', IMG.rackWhite, 'The latest arrivals, fresh off the rail.'],
  women: ['Women', IMG.womanShop, 'Dresses, outerwear, knits and denim.'],
  men: ['Men', IMG.manSuit, 'Tailoring, tees, outerwear and more.'],
  accessories: ['Accessories', IMG.bucketBag, 'Bags, shoes and the finishing touches.'],
  sale: ['Sale', IMG.rackColor, 'Up to 30% off — while stocks last.'],
};

function listFor(cat, q) {
  let list = PRODUCTS;
  if (cat === 'sale') list = list.filter((p) => p.compare);
  else if (cat === 'new') list = list.filter((p) => p.tags.includes('new'));
  else if (cat && cat !== 'all') list = list.filter((p) => p.cat === cat);
  if (q) { const t = q.toLowerCase(); list = list.filter((p) => [p.name, p.desc, p.cat, p.type, ...p.colors].join(' ').toLowerCase().includes(t)); }
  return list;
}

function shop(cat, q) {
  const meta = q ? [`“${esc(q)}”`, IMG.store, 'Search results'] : CAT_META[cat] || CAT_META.all;
  const base = listFor(cat, q);
  const types = [...new Set(base.map((p) => p.type))];
  const sizes = [...new Set(base.flatMap((p) => p.sizes))];
  const colors = [...new Set(base.flatMap((p) => p.colors))];
  return `
  <section class="page-hero"><img src="${img(meta[1], 1800)}" alt=""><div><p class="eyebrow" style="color:#f3d6cb">${meta[2]}</p><h1>${meta[0]}</h1></div></section>
  <div class="container">
    <div class="crumbs"><a href="#/">Home</a> / ${q ? 'Search' : meta[0]}</div>
    <div class="shop-layout">
      <aside class="filters" id="filters">
        ${types.length > 1 ? `<div class="filter-group"><h4>Category</h4>${types.map((t) => `<label><input type="checkbox" data-f="types" value="${t}" ${filters.types.includes(t) ? 'checked' : ''}> ${t}</label>`).join('')}</div>` : ''}
        <div class="filter-group"><h4>Size</h4><div class="size-filter">${sizes.map((s) => `<button class="chip ${filters.sizes.includes(s) ? 'on' : ''}" data-f="sizes" value="${s}">${s}</button>`).join('')}</div></div>
        <div class="filter-group"><h4>Colour</h4><div class="color-filter">${colors.map((c) => `<button class="swatch ${filters.colors.includes(c) ? 'on' : ''}" data-f="colors" value="${c}" title="${c}" aria-label="${c}" style="background:${C[c]}"></button>`).join('')}</div></div>
        <div class="filter-group"><h4>Max price: <span id="maxLbl">${money(filters.max)}</span></h4><input type="range" id="maxPrice" min="30" max="500" step="10" value="${filters.max}"></div>
        <button class="link" style="background:none;border:0;padding:16px 0" id="clearFilters">Clear all filters</button>
      </aside>
      <div>
        <div class="toolbar"><button class="btn btn-outline filter-toggle" id="filterToggle">Filters</button><span class="muted" id="resultCount"></span>
          <select id="sort" aria-label="Sort">${[['featured', 'Featured'], ['new', 'Newest'], ['low', 'Price: low to high'], ['high', 'Price: high to low'], ['rating', 'Top rated']].map(([v, l]) => `<option value="${v}" ${filters.sort === v ? 'selected' : ''}>${l}</option>`).join('')}</select></div>
        <div class="grid shop-grid" id="shopGrid"></div>
      </div>
    </div>
  </div>`;
}

function renderShopGrid(cat, q) {
  let list = listFor(cat, q).filter((p) =>
    (!filters.types.length || filters.types.includes(p.type)) &&
    (!filters.sizes.length || p.sizes.some((s) => filters.sizes.includes(s))) &&
    (!filters.colors.length || p.colors.some((c) => filters.colors.includes(c))) &&
    p.price <= filters.max);
  const sorts = { low: (a, b) => a.price - b.price, high: (a, b) => b.price - a.price, rating: (a, b) => b.rating - a.rating, new: (a, b) => b.tags.includes('new') - a.tags.includes('new'), featured: (a, b) => a.id - b.id };
  list = [...list].sort(sorts[filters.sort]);
  $('#resultCount').textContent = `${list.length} product${list.length === 1 ? '' : 's'}`;
  $('#shopGrid').innerHTML = list.map(card).join('') || `<div class="empty"><h3>No products match</h3><p class="muted">Try removing a filter.</p></div>`;
  reveal();
}

function product(id) {
  const p = byId(id);
  if (!p) return notFound();
  recent = [p.id, ...recent.filter((r) => r !== p.id)].slice(0, 8);
  store.set('tl-recent', recent);
  const gallery = [...p.imgs, ...PRODUCTS.filter((x) => x.cat === p.cat && x.id !== p.id).slice(0, 1).map((x) => x.imgs[0])];
  const related = PRODUCTS.filter((x) => x.cat === p.cat && x.id !== p.id).slice(0, 4);
  const recents = recent.filter((r) => r !== p.id).map(byId).filter(Boolean).slice(0, 4);
  const dist = [72, 18, 6, 3, 1];
  return `
  <div class="container"><div class="crumbs"><a href="#/">Home</a> / <a href="#/shop/${p.cat}">${CAT_META[p.cat][0]}</a> / ${p.name}</div>
  <section class="product">
    <div class="gallery">
      <div class="thumbs">${gallery.map((g, i) => `<button class="${i ? '' : 'on'}" data-img="${g}" aria-label="Image ${i + 1}"><img src="${img(g, 200)}" alt=""></button>`).join('')}</div>
      <div class="main-img" id="mainImg"><img src="${img(gallery[0], 1400)}" alt="${p.name}"></div>
    </div>
    <div class="product-info">
      <p class="eyebrow">${p.type}</p>
      <h1>${p.name}</h1>
      <div class="rating"><span class="stars">${stars(p.rating)}</span><a href="#reviews" class="link" onclick="document.getElementById('reviews').scrollIntoView({behavior:'smooth'});return false">${p.rating} · ${p.reviews} reviews</a></div>
      <p class="price">${p.compare ? `<span class="now">${money(p.price)}</span><s>${money(p.compare)}</s>` : money(p.price)}</p>
      <p>${p.desc}</p>
      <div class="opt"><div class="opt-head"><span>Colour: <b id="colorLbl">${p.colors[0]}</b></span></div>
        <div class="color-filter">${p.colors.map((c, i) => `<button class="swatch ${i ? '' : 'on'}" data-color="${c}" aria-label="${c}" style="background:${C[c]}"></button>`).join('')}</div></div>
      <div class="opt"><div class="opt-head"><span>Size: <b id="sizeLbl">${p.sizes.length === 1 ? p.sizes[0] : 'Select'}</b></span><button class="link" style="background:none;border:0;padding:0" id="sizeGuide">Size guide</button></div>
        <div class="size-filter">${p.sizes.map((s) => `<button class="chip ${p.sizes.length === 1 ? 'on' : ''}" data-size="${s}">${s}</button>`).join('')}</div></div>
      <div class="buy-row">
        <span class="qty"><button aria-label="Decrease" id="qMinus">−</button><span id="qVal">1</span><button aria-label="Increase" id="qPlus">+</button></span>
        <button class="btn" id="add" ${p.sizes.length === 1 ? '' : 'disabled'}>${p.sizes.length === 1 ? `Add to bag · ${money(p.price)}` : 'Select a size'}</button>
        <button class="icon-btn wish-lg ${wish.includes(p.id) ? 'wish on' : 'wish'}" data-wish="${p.id}" aria-label="Wishlist" onclick="toggleWish(${p.id}, event)" style="position:static;opacity:1;width:52px;height:52px;border-radius:0">${heart}</button>
      </div>
      <div class="perks"><span>🚚 Free delivery on orders over $75 · arrives in 2–4 days</span><span>↩︎ Free 30-day returns & exchanges</span><span>🌱 Made with ${p.cat === 'accessories' ? 'responsibly sourced materials' : 'organic & recycled fibres'}</span></div>
      <details open><summary>Details & fit</summary><ul><li>Model is 5'10" / 178cm and wears a size M</li><li>${p.type === 'Outerwear' ? 'Relaxed fit — size down for a closer fit' : 'True to size'}</li><li>Imported, ethically made</li></ul></details>
      <details><summary>Fabric & care</summary><p>Machine wash cold on gentle cycle. Hang to dry. Do not tumble dry. Cool iron if needed.</p></details>
      <details><summary>Shipping & returns</summary><p>Standard delivery 2–4 business days, express next day. Not quite right? Return it within 30 days for free.</p></details>
    </div>
  </section>
  <section class="section" id="reviews" style="border-top:1px solid var(--line)">
    <div class="section-head"><h2>Customer reviews</h2><button class="btn btn-outline" id="writeReview">Write a review</button></div>
    <div class="review-summary"><div><div class="big-rating">${p.rating}</div><span class="stars">${stars(p.rating)}</span><p class="muted" style="margin:4px 0 0">${p.reviews} reviews</p></div>
      <div class="bars">${dist.map((d, i) => `<div class="bar"><span>${5 - i} ★</span><i style="--w:${d}%"></i><span>${d}%</span></div>`).join('')}</div></div>
    <div class="review-list" id="reviewList">${REVIEW_TEXT.map(([t, b, n], i) => `<div class="review"><div class="review-top"><span class="stars">${stars(5 - (i === 2))}</span><span>${n} · Verified buyer · ${['2 days', '1 week', '3 weeks', '1 month'][i]} ago</span></div><h4>${t}</h4><p style="margin:0">${b}</p></div>`).join('')}</div>
  </section>
  <section class="section" style="padding-top:0"><div class="section-head"><h2>You may also like</h2></div><div class="grid">${related.map(card).join('')}</div></section>
  ${recents.length ? `<section class="section" style="padding-top:0"><div class="section-head"><h2>Recently viewed</h2></div><div class="grid">${recents.map(card).join('')}</div></section>` : ''}
  </div>`;
}

function wishlist() {
  const items = wish.map(byId).filter(Boolean);
  return `<div class="container section"><div class="section-head"><div><p class="eyebrow">Saved for later</p><h2>Your wishlist</h2></div></div>
    ${items.length ? `<div class="grid">${items.map(card).join('')}</div>` : `<div class="empty"><h3>Nothing saved yet</h3><p class="muted">Tap the ♡ on any product to save it here.</p><a class="btn" href="#/shop/all">Discover products</a></div>`}</div>`;
}

function checkout() {
  if (!cart.length) return `<div class="container section"><div class="empty"><h2>Your bag is empty</h2><a class="btn" href="#/shop/all">Shop now</a></div></div>`;
  return `<div class="container"><div class="crumbs"><a href="#/">Home</a> / Bag / <b>Checkout</b></div>
  <section class="checkout">
    <form class="form" id="checkoutForm">
      <h2 style="margin:0">Checkout</h2>
      <h3>Contact</h3><input required type="email" placeholder="Email address" autocomplete="email"><label style="font-size:.85rem"><input type="checkbox" style="width:auto" checked> Email me with news and offers</label>
      <h3>Delivery</h3>
      <div class="row"><input required placeholder="First name" autocomplete="given-name"><input required placeholder="Last name" autocomplete="family-name"></div>
      <input required placeholder="Address" autocomplete="street-address"><input placeholder="Apartment, suite, etc. (optional)">
      <div class="row"><input required placeholder="City" autocomplete="address-level2"><input required placeholder="Postcode" autocomplete="postal-code"></div>
      <input placeholder="Phone (for delivery updates)" type="tel" autocomplete="tel">
      <h3>Shipping method</h3>
      <label class="ship-opt"><span><input type="radio" name="ship" value="std" checked style="width:auto"> Standard · 2–4 days</span><b id="stdPrice"></b></label>
      <label class="ship-opt"><span><input type="radio" name="ship" value="exp" style="width:auto"> Express · next day</span><b>$15</b></label>
      <h3>Payment</h3>
      <input required placeholder="Card number" inputmode="numeric" maxlength="19" id="cardNum" autocomplete="cc-number">
      <div class="row"><input required placeholder="MM / YY" maxlength="7" autocomplete="cc-exp"><input required placeholder="CVC" maxlength="4" inputmode="numeric" autocomplete="cc-csc"></div>
      <input required placeholder="Name on card" autocomplete="cc-name">
      <p class="muted" style="font-size:.8rem;margin:0">🔒 Demo store — no real payment is processed.</p>
      <button class="btn btn-full" id="payBtn">Place order</button>
    </form>
    <aside class="summary" id="summary"></aside>
  </section></div>`;
}

function renderSummary() {
  const el = $('#summary'); if (!el) return;
  const sub = subtotal(), disc = discount();
  const exp = $('input[name=ship]:checked')?.value === 'exp';
  const ship = exp ? 15 : sub - disc >= FREE_SHIP ? 0 : 8;
  const total = sub - disc + ship;
  $('#stdPrice').textContent = sub - disc >= FREE_SHIP ? 'Free' : '$8';
  el.innerHTML = `<h3>Order summary</h3>
    ${cart.map((l) => { const p = byId(l.id); return `<div class="sum-line"><div class="thumb"><img src="${img(p.imgs[0], 160)}" alt=""><b>${l.qty}</b></div><div>${p.name}<br><small class="muted">${l.color} / ${l.size}</small></div><span>${money(p.price * l.qty)}</span></div>`; }).join('')}
    <div class="promo-row"><input id="promoInput" placeholder="Discount code" value="${promo || ''}"><button class="btn" id="applyPromo" type="button">Apply</button></div>
    <div class="sum-row"><span>Subtotal</span><span>${money(sub)}</span></div>
    ${disc ? `<div class="sum-row" style="color:var(--accent)"><span>Discount (${promo})</span><span>−${money(disc)}</span></div>` : ''}
    <div class="sum-row"><span>Shipping</span><span>${ship ? money(ship) : 'Free'}</span></div>
    <div class="sum-row total"><span>Total</span><span>${money(total)}</span></div>`;
  $('#payBtn').textContent = `Pay ${money(total)}`;
  $('#applyPromo').onclick = () => {
    const code = $('#promoInput').value.trim().toUpperCase();
    if (code === 'WELCOME10') { promo = code; store.set('tl-promo', promo); toast('Code applied — 10% off!'); }
    else { promo = null; store.set('tl-promo', null); toast(code ? 'Invalid code. Try WELCOME10' : 'Code removed'); }
    renderSummary();
  };
}

function thanks(order) {
  return `<div class="container section" style="text-align:center;max-width:640px">
    <div style="font-size:3.5rem">✓</div><p class="eyebrow">Order #${esc(order)}</p><h1>Thank you for your order!</h1>
    <p class="muted">We've sent a confirmation to your email. Your items will be on their way shortly — we'll send tracking details as soon as they ship.</p>
    <a class="btn" href="#/shop/all" style="margin-top:20px">Continue shopping</a></div>`;
}

function about() {
  return `<section class="page-hero" style="height:420px"><img src="${img(IMG.store, 1800)}" alt=""><div><p class="eyebrow" style="color:#f3d6cb">Our story</p><h1>Made to last</h1></div></section>
  <section class="section container"><div class="split">
    <div class="reveal"><p class="eyebrow">Since 2016</p><h2 style="font-size:2.6rem">Fewer, better things.</h2>
      <p>Threadline started in a tiny studio with one simple idea: clothing should be made well enough to wear for years, not weeks. We design timeless pieces in small batches, working directly with family-run mills and workshops in Portugal, Italy and India.</p>
      <p>Every fabric is chosen for how it feels, how it ages and how it impacts the planet — which is why 85% of our collection now uses organic, recycled or regenerative fibres.</p>
      <a class="btn" href="#/shop/all" style="margin-top:12px">Shop the collection</a></div>
    <div class="img reveal"><img src="${img(IMG.neutralRack, 1000)}" alt="" loading="lazy"></div>
  </div></section>
  <section class="section reviews-band"><div class="container stats">
    <div class="reveal"><b>85%</b>Sustainable materials</div><div class="reveal"><b>12</b>Partner workshops</div><div class="reveal"><b>250k+</b>Happy customers</div>
  </div></section>
  <section class="section container"><div class="split">
    <div class="img reveal"><img src="${img(IMG.flatlay, 1000)}" alt="" loading="lazy"></div>
    <div class="reveal"><p class="eyebrow">Our promise</p><h2 style="font-size:2.6rem">Transparent from fibre to finish.</h2>
      <p>We publish the factory, the fabric source and the true cost breakdown of every piece we make. Fair wages, safe workplaces and long-term partnerships are non-negotiable.</p>
      <p>And if something ever wears out before it should, our repair programme will fix it — free.</p></div>
  </div></section>`;
}

const FAQS = [
  ['How long does shipping take?', 'Standard shipping takes 2–4 business days and is free on orders over $75. Express next-day delivery is available for $15.'],
  ['What is your return policy?', 'We offer free returns and exchanges within 30 days of delivery. Items must be unworn with tags attached.'],
  ['How do I find my size?', 'Each product page has a size guide. Most of our pieces fit true to size; outerwear is cut slightly relaxed.'],
  ['Do you ship internationally?', 'Yes — we ship to over 40 countries. Duties and taxes are calculated at checkout so there are no surprises.'],
  ['How should I care for my garments?', 'Wash cold, line dry and avoid the tumble dryer. Your clothes (and the planet) will thank you.'],
  ['Can I change or cancel my order?', 'Orders can be changed or cancelled within 1 hour of being placed. Contact our team as soon as possible.'],
];
function faq() {
  return `<div class="container section prose"><p class="eyebrow">Help centre</p><h1 style="font-size:3rem">Frequently asked questions</h1>
    ${FAQS.map(([q, a], i) => `<details ${i ? '' : 'open'}><summary>${q}</summary><p>${a}</p></details>`).join('')}
    <p style="margin-top:40px">Still have questions? <a class="link" href="#/contact">Contact our team</a>.</p></div>`;
}

function contact() {
  return `<div class="container section"><div class="contact-grid">
    <div><p class="eyebrow">Get in touch</p><h1 style="font-size:3rem">We'd love to hear from you</h1>
      <p class="muted">Our customer care team is available Monday to Saturday, 9am–7pm.</p>
      <div class="store"><h4>Email</h4>hello@threadline.example</div>
      <div class="store"><h4>Flagship — London</h4>24 Redchurch Street, Shoreditch<br>Mon–Sat 10–7 · Sun 12–6</div>
      <div class="store"><h4>New York</h4>118 Mercer Street, SoHo<br>Mon–Sat 10–8 · Sun 11–6</div></div>
    <form class="form" id="contactForm"><div class="row"><input required placeholder="Name"><input required type="email" placeholder="Email"></div>
      <select><option>General enquiry</option><option>Order help</option><option>Returns</option><option>Wholesale</option></select>
      <input placeholder="Order number (optional)"><textarea required rows="7" placeholder="Your message"></textarea>
      <button class="btn">Send message</button></form>
  </div></div>`;
}

const notFound = () => `<div class="container section"><div class="empty"><p class="eyebrow">404</p><h1>Page not found</h1><a class="btn" href="#/">Go home</a></div></div>`;

const SIZE_GUIDE = `<h2>Size guide</h2><p class="muted">Measurements are body measurements in cm.</p>
  <table><tr><th>Size</th><th>Chest</th><th>Waist</th><th>Hips</th></tr>
  ${[['XS', '82–86', '64–68', '88–92'], ['S', '87–91', '69–73', '93–97'], ['M', '92–97', '74–79', '98–103'], ['L', '98–104', '80–86', '104–110'], ['XL', '105–112', '87–94', '111–118']].map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</table>`;

// ================= Router =================
let slideTimer, countdownTimer;
function route() {
  clearInterval(slideTimer); clearInterval(countdownTimer);
  closeAll();
  const hash = location.hash.slice(1) || '/';
  const [path, qs] = hash.split('?');
  const [, page, arg] = path.split('/');
  const q = new URLSearchParams(qs || '').get('q');
  if (page === 'shop' || page === 'search') Object.assign(filters, { types: [], sizes: [], colors: [], max: 500 });

  app.innerHTML =
    !page ? home() :
    page === 'shop' ? shop(arg || 'all') :
    page === 'search' ? shop('all', q || '') :
    page === 'product' ? product(arg) :
    page === 'wishlist' ? wishlist() :
    page === 'checkout' ? checkout() :
    page === 'thanks' ? thanks(arg) :
    page === 'about' ? about() :
    page === 'faq' ? faq() :
    page === 'contact' ? contact() : notFound();

  $$('.main-nav a').forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + path));
  window.scrollTo(0, 0);
  bind(page, arg, q);
  reveal();
}

function bind(page, arg, q) {
  if (!page) {
    // hero slider
    let cur = 0; const slides = $$('.slide'), dots = $$('.hero-dots button');
    const go = (n) => { slides[cur].classList.remove('on'); dots[cur].classList.remove('on'); cur = n; slides[cur].classList.add('on'); dots[cur].classList.add('on'); };
    dots.forEach((d) => (d.onclick = () => { go(+d.dataset.slide); clearInterval(slideTimer); slideTimer = setInterval(() => go((cur + 1) % slides.length), 6000); }));
    slideTimer = setInterval(() => go((cur + 1) % slides.length), 6000);
    // countdown to the end of the current week
    const end = new Date(); end.setDate(end.getDate() + (7 - end.getDay())); end.setHours(23, 59, 59);
    const tick = () => { const d = Math.max(0, end - Date.now()); const u = [d / 864e5, (d / 36e5) % 24, (d / 6e4) % 60, (d / 1e3) % 60].map((x) => String(Math.floor(x)).padStart(2, '0'));
      $('#countdown').innerHTML = ['Days', 'Hours', 'Mins', 'Secs'].map((l, i) => `<div><b>${u[i]}</b><span>${l}</span></div>`).join(''); };
    tick(); countdownTimer = setInterval(tick, 1000);
  }

  if (page === 'shop' || page === 'search') {
    const cat = page === 'shop' ? arg || 'all' : 'all', query = page === 'search' ? q : '';
    const rerender = () => renderShopGrid(cat, query);
    $$('#filters [data-f]').forEach((el) => {
      const evt = el.type === 'checkbox' ? 'change' : 'click';
      el.addEventListener(evt, () => {
        const arr = filters[el.dataset.f], i = arr.indexOf(el.value);
        i > -1 ? arr.splice(i, 1) : arr.push(el.value);
        if (el.tagName === 'BUTTON') el.classList.toggle('on');
        rerender();
      });
    });
    $('#maxPrice').oninput = (e) => { filters.max = +e.target.value; $('#maxLbl').textContent = money(filters.max); rerender(); };
    $('#sort').onchange = (e) => { filters.sort = e.target.value; rerender(); };
    $('#clearFilters').onclick = () => { Object.assign(filters, { types: [], sizes: [], colors: [], max: 500 }); route(); };
    $('#filterToggle').onclick = () => $('#filters').classList.toggle('open');
    rerender();
  }

  if (page === 'product' && byId(arg)) {
    const p = byId(arg);
    let size = p.sizes.length === 1 ? p.sizes[0] : null, color = p.colors[0], qty = 1;
    const add = $('#add');
    const refresh = () => { add.disabled = !size; add.textContent = size ? `Add to bag · ${money(p.price * qty)}` : 'Select a size'; };
    $$('[data-img]').forEach((b) => (b.onclick = () => { $$('[data-img]').forEach((x) => x.classList.remove('on')); b.classList.add('on'); $('#mainImg img').src = img(b.dataset.img, 1400); }));
    $$('[data-color]').forEach((b) => (b.onclick = () => { $$('[data-color]').forEach((x) => x.classList.remove('on')); b.classList.add('on'); color = b.dataset.color; $('#colorLbl').textContent = color; }));
    $$('[data-size]').forEach((b) => (b.onclick = () => { $$('[data-size]').forEach((x) => x.classList.remove('on')); b.classList.add('on'); size = b.dataset.size; $('#sizeLbl').textContent = size; refresh(); }));
    $('#qMinus').onclick = () => { qty = Math.max(1, qty - 1); $('#qVal').textContent = qty; refresh(); };
    $('#qPlus').onclick = () => { qty = Math.min(10, qty + 1); $('#qVal').textContent = qty; refresh(); };
    add.onclick = () => addToCart(p.id, size, color, qty);
    $('#sizeGuide').onclick = () => openModal(SIZE_GUIDE);
    $('#writeReview').onclick = () => openModal(`<h2>Write a review</h2><form class="form" id="reviewForm"><input required placeholder="Your name"><select id="rStars"><option value="5">★★★★★</option><option value="4">★★★★☆</option><option value="3">★★★☆☆</option><option value="2">★★☆☆☆</option><option value="1">★☆☆☆☆</option></select><input required placeholder="Title"><textarea required rows="4" placeholder="Tell us what you think"></textarea><button class="btn">Submit review</button></form>`);
    // zoom on hover
    const main = $('#mainImg');
    main.onmousemove = (e) => { const r = main.getBoundingClientRect(); main.firstElementChild.style.transformOrigin = `${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`; main.firstElementChild.style.transform = 'scale(1.8)'; };
    main.onmouseleave = () => (main.firstElementChild.style.transform = '');
  }

  if (page === 'checkout' && cart.length) {
    renderSummary();
    $$('input[name=ship]').forEach((r) => (r.onchange = renderSummary));
    $('#cardNum').oninput = (e) => (e.target.value = e.target.value.replace(/\D/g, '').slice(0, 16).replace(/(.{4})(?=.)/g, '$1 '));
    $('#checkoutForm').onsubmit = (e) => {
      e.preventDefault();
      const btn = $('#payBtn'); btn.disabled = true; btn.textContent = 'Processing…';
      setTimeout(() => { cart = []; promo = null; store.set('tl-promo', null); saveCart(); location.hash = '#/thanks/TL' + Math.floor(100000 + Math.random() * 900000); }, 1200);
    };
  }

  $('#contactForm')?.addEventListener('submit', (e) => { e.preventDefault(); e.target.reset(); toast("Message sent — we'll reply within 24 hours"); });
}

// review form lives in the modal
document.addEventListener('submit', (e) => {
  if (e.target.id !== 'reviewForm') return;
  e.preventDefault();
  const [name, , title, body] = [...e.target.elements].map((x) => x.value);
  const n = +$('#rStars').value;
  $('#reviewList')?.insertAdjacentHTML('afterbegin', `<div class="review"><div class="review-top"><span class="stars">${stars(n)}</span><span>${esc(name)} · just now</span></div><h4>${esc(title)}</h4><p style="margin:0">${esc(body)}</p></div>`);
  closeAll(); toast('Thanks for your review!');
});

// ================= Scroll reveal =================
const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.12 });
function reveal() { $$('.reveal:not(.in)').forEach((el) => io.observe(el)); }

// ================= Search overlay =================
$('#searchBtn').onclick = () => { $('#searchOverlay').classList.add('open'); document.body.style.overflow = 'hidden'; setTimeout(() => $('#searchInput').focus(), 300); };
$('#closeSearch').onclick = closeAll;
$('#searchInput').oninput = (e) => {
  const v = e.target.value.trim();
  $('#searchResults').innerHTML = v ? listFor('all', v).slice(0, 10).map(card).join('') || '<p class="muted">No results found.</p>' : '';
  $$('#searchResults .reveal').forEach((el) => el.classList.add('in'));
};
$('#searchInput').onkeydown = (e) => { if (e.key === 'Enter' && e.target.value.trim()) location.hash = '#/search?q=' + encodeURIComponent(e.target.value.trim()); };
$('#searchResults').addEventListener('click', (e) => { if (e.target.closest('a')) closeAll(); });

// ================= Globals =================
window.addToCart = addToCart;
$('#cartBtn').onclick = openDrawer;
$('#closeDrawer').onclick = closeAll;
$('#closeModal').onclick = closeAll;
$('#modal').onclick = (e) => { if (e.target.id === 'modal') closeAll(); };
overlay.onclick = closeAll;
$('#menuToggle').onclick = () => { $('#nav').classList.add('open'); overlay.classList.add('show'); };
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAll(); });
$('#newsletter').onsubmit = (e) => { e.preventDefault(); e.target.reset(); toast('Welcome! Your 10% code: WELCOME10'); };
window.addEventListener('scroll', () => $('#header').classList.toggle('scrolled', scrollY > 10), { passive: true });
window.addEventListener('hashchange', route);

renderCart();
updateCounts();
route();
