This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Descripción de implementación de backend
Decidi desarrollar el backend en Next.js utilizando las rutas dentro de la carpeta /api para exponer endpoints RESTful. Implementamos tres endpoints clave:

- /api/products → Devuelve una lista estática de productos.
- /api/cart (POST) → Recibe el ID de un producto y lo agrega al carrito.
- /api/cart (GET) → Devuelve los productos agregados al carrito

# Puntos que tuven en cuenta para la implementación de backend

- Estructura del backend: Cree el API dentro del siguiente directorio src/app/api/, teniendo en cuenta el modelo de rutas de Next.js para gestionar las peticiones.

- Uso de una varible temporal: Implemente la variable en memoria para almacenar los productos que se agregan al carrito

- Manejo de CORS: Implemente un archivo par manejo de CORS y permitir el acceso desde el frontend configurando los encabezados adecuados en las respuestas.



