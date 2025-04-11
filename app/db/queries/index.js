export async function getAllCategories() {
  const res = await fetch("http://localhost:3000/data/dua_categories.json");
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  const data = await res.json();
  return data;
}
