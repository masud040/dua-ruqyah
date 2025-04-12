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

// get duas from subcat_id

export function getDuasFromSubCategoryId(subcat_id) {
  try {
    const query = db.prepare("SELECT * FROM dua WHERE subcat_id = ?");
    const duas = query.all(Number(subcat_id));

    return { success: true, data: duas };
  } catch (error) {
    console.error("Error fetching duas:", error);
    return {
      success: false,
      message: "Failed to fetch duas",
      status: 500,
    };
  }
}

// get subcategories name from id
export function getSubCategoryNameById(subcat_id) {
  try {
    const query = db.prepare(
      "SELECT subcat_name_en, subcat_name_bn FROM sub_category WHERE subcat_id = ? LIMIT 1"
    );
    const subcat_name = query.get(Number(subcat_id));
    return { success: true, data: subcat_name };
  } catch (error) {
    console.error("Error fetching subcategory:", error);
    return {
      success: false,
      message: "Failed to fetch subcategory",
      status: 500,
    };
  }
}
