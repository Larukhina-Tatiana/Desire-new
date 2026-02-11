import "./common.js";
import { fetchGallery, renderGallery } from "./modules/renderGallery.js";
import { renderTabs, initTabsLogic } from "./modules/crateTabs.js";
import animateGalleyCard from "./modules/animateGalleyCard.js";

document.addEventListener("DOMContentLoaded", async () => {
  const galleryData = await fetchGallery();
  renderTabs(galleryData);
  renderGallery(galleryData);
  initTabsLogic();
  animateGalleyCard();
});
