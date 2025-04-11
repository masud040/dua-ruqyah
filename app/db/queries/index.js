import db from "../connectDB";

// get main categories
export function getMainCategories() {
  try {
    const rows = db.prepare("SELECT * From category").all();
    return { success: true, data: rows };
  } catch (error) {
    return {
      success: false,
      message: "Failed to fetch main categories",
      status: 500,
    };
  }
}

// get sub categories by category id
export function getSubCategoriesByCatId(catId) {
  const query = db.prepare("SELECT * FROM sub_category WHERE cat_id = ?");
  const rows = query.all(catId);
  return rows;
}
