const API_URL = "https://furniture-api.fly.dev/v1/products";

export async function fetchFurnitureArticles({
  category = "lamp",
  limit = 50,
}) {
  const response = await fetch(
    `${API_URL}?category=${category}&limit=${limit}&sort=newest`
  );
  const data = await response.json();
  return data.data.map((item) => ({
    title: item.name,
    image: item.image_path,
    description: item.description,
    category: item.category,
    date: item.created_at,
  }));
}
