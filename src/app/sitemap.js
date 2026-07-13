import { products } from "@/lib/products";

export default function sitemap() {
  const base = "https://rushabhexports.com";
  const staticRoutes = ["", "/products", "/about", "/quality", "/export-logistics", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const productRoutes = products.map((p) => ({
    url: `${base}/products/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...productRoutes];
}
