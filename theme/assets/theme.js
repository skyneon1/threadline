// Mobile menu
document.querySelector('[data-menu-toggle]')?.addEventListener('click', (e) => {
  const open = document.querySelector('[data-menu]').classList.toggle('open');
  e.currentTarget.setAttribute('aria-expanded', open);
});

// Collection sort
document.querySelector('[data-sort]')?.addEventListener('change', (e) => {
  const url = new URL(location.href);
  url.searchParams.set('sort_by', e.target.value);
  location.href = url;
});

// Variant picker
const form = document.querySelector('[data-product-form]');
const variantsEl = document.querySelector('[data-variants]');
if (form && variantsEl) {
  const variants = JSON.parse(variantsEl.textContent);
  const fmt = (cents) => (cents / 100).toLocaleString(undefined, { style: 'currency', currency: window.Shopify?.currency?.active || 'USD' });
  form.addEventListener('change', (e) => {
    if (!e.target.matches('[data-option]')) return;
    const selected = [...form.querySelectorAll('[data-option]:checked')].map((i) => i.value);
    const v = variants.find((v) => v.options.every((o, i) => o === selected[i]));
    const btn = form.querySelector('[data-add]');
    if (!v) { btn.disabled = true; btn.textContent = 'Unavailable'; return; }
    form.querySelector('[data-variant-id]').value = v.id;
    btn.disabled = !v.available;
    btn.textContent = v.available ? 'Add to bag' : 'Sold out';
    document.querySelector('[data-price]').textContent = fmt(v.price);
    history.replaceState(null, '', `?variant=${v.id}`);
  });

  // AJAX add to cart
  form.addEventListener('submit', async (e) => {
    if (e.submitter && !e.submitter.matches('[data-add]')) return;
    e.preventDefault();
    const btn = form.querySelector('[data-add]');
    btn.disabled = true;
    const res = await fetch(window.Shopify.routes.root + 'cart/add.js', { method: 'POST', body: new FormData(form) });
    btn.disabled = false;
    if (!res.ok) { btn.textContent = (await res.json()).description || 'Error'; return; }
    const cart = await (await fetch(window.Shopify.routes.root + 'cart.js')).json();
    document.querySelectorAll('[data-cart-count]').forEach((el) => (el.textContent = cart.item_count));
    btn.textContent = 'Added ✓';
    setTimeout(() => (btn.textContent = 'Add to bag'), 1500);
  });
}
