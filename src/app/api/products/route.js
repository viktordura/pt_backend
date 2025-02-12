
export async function GET() {
	const products = [
		{ id: 1, name: "Teclado", price: 60 },
		{ id: 2, name: "Mouse", price: 100 },
		{ id: 3, name: "Monitor", price: 120 },
		{ id: 4, name: "HDMI", price: 70 }
	];

	return new Response(
		JSON.stringify({
			success: true,
			message: "Product id is required" ,
			data:products
		}
	), { status: 200 });
}