export function renderBlogCard({ title, image, description, category, date }) {
  const card = document.createElement("article");
  card.className = "blog-card";
  card.innerHTML = `
    <img src="${image}" alt="${title}" class="blog-card__image" />
    <div class="blog-card__meta">
      <span>${new Date(date).toLocaleDateString()}</span> |
      <span>${category}</span>
    </div>
    <h3 class="blog-card__title">${title}</h3>
    <p class="blog-card__excerpt">${description}</p>
  `;
  return card;
}
