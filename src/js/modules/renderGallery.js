export async function fetchGallery() {
  const url = "files/data/gallery.json";
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json(); // возвращаем массив галерей
  } catch (error) {
    console.error("❌ Не удалось загрузить галерею:", error);
    return [];
  }
}

export function renderGallery(galleryData) {
  const galleryList = document.getElementById("gallery__list");
  if (!galleryList) return;

  // Очистить контейнер, чтобы не копить карточки
  galleryList.innerHTML = "";

  const fragment = document.createDocumentFragment();

  galleryData.forEach((item) => {
    const li = document.createElement("li");
    li.className = "gallery__item";

    li.innerHTML = `

        <a class="gallery__link" href="javascript:void(0)" aria-label="${item.link.ariaLabel}" id="gallery__link-${item.id}">
          <picture>
            <source srcset="${item.image.src}@1x.avif 1x, ${item.image.src}@2x.avif 2x, ${item.image.src}@3x.avif 3x" type="image/avif">
            <source srcset="${item.image.src}@1x.webp 1x, ${item.image.src}@2x.webp 2x, ${item.image.src}@3x.webp 3x" type="image/webp">
            <source srcset="${item.image.src}@1x.jpg 1x, ${item.image.src}@2x.jpg 2x, ${item.image.src}@3x.jpg 3x" type="image/jpeg">
            <img class="gallery__img" src="${item.image.src}@1x.jpg" alt="${item.image.alt}" loading="lazy" decoding="async">
          </picture>
        </a>

    `;
    fragment.appendChild(li);
  });

  // добавляем все лишки одним действием
  galleryList.appendChild(fragment);
}
