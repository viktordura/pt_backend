let cart = [];

export async function GET() {
	if(cart.length > 0) {
		return new Response(
			JSON.stringify({
				success: true,
				message: "List of products" ,
				data:cart
			}
		), { status: 200 });
	}else{
		return new Response(
			JSON.stringify({
				success: false,
				message: "No products added" ,
				data:[]
			}
		), { status: 400 });
	}
	
}

export async function POST(req){
	try{
		const { id } = await req.json();

		if(!id){
			return new Response(
				JSON.stringify({
					success: false,
					message: "Product id is required" ,
					data:[]
				}
			), { status: 400 });
		}

		// Lista de productos disponibles
		const products = [
			{ id: 1, name: "Teclado", price: 60 },
			{ id: 2, name: "Mouse", price: 100 },
			{ id: 3, name: "Monitor", price: 120 },
			{ id: 4, name: "HDMI", price: 70 }
		];

		const product = products.find((p) => p.id === id);

		if (!product){
			return new Response(
				JSON.stringify({
					success: false,
					message: "product id is required",
					data:[]
				}
			), { status: 400 });
		}

		cart.push(product);

		return new Response(
			JSON.stringify({
				success: true,
				message: "Product added", 
				data:cart
			}
		), { status: 200 });
	} catch (error) {
		return new Response(
			JSON.stringify({
				success: false,
				message: "An error occurred processing the request" 
			}
		), { status: 500 });
	}
}