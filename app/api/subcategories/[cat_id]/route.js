import db from "@/app/db/connectDB";
import { NextResponse } from "next/server";

export async function GET(request, response) {
  const { cat_id } = await response.params;

  try {
    const query = db.prepare("SELECT * FROM sub_category WHERE cat_id = ?");
    const subcategories = query.all(Number(cat_id));
    return NextResponse.json(subcategories);
  } catch (error) {
    console.error("Error fetching subcategories:", error);
    return NextResponse.json(
      { error: "Failed to fetch subcategories" },
      { status: 500 }
    );
  }
}
