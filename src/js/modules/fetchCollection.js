// === Основная логика ===

/**
 * Загружает список проектов из JSON-файла.
 */

export async function fetchCollection() {
  try {
    const response = await fetch("/files/data/collection.json");
    if (!response.ok) {
      throw new Error(`Ошибка загрузки JSON: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Ошибка при загрузке коллекции:", error.message);
    return null;
  }
}
