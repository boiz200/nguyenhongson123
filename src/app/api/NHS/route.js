import clientPromise from "@/app/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('Nguyenhongson'); // Database name
    const collection = db.collection('Nguyenson'); // Collection name

    const data = await collection.find({}).toArray();

    console.log('Fetched data:', data); // Log ra console để kiểm tra

    return new Response(JSON.stringify({ data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error('Error fetching data:', error); // Log lỗi ra console

    return new Response(JSON.stringify({ error: error.message || "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
