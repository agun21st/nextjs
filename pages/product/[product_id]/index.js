import { useRouter } from "next/router"

export default function ProductDetail() {
    const router = useRouter();
    const product_id = router.query.product_id;
    return (
      <h2>Product Detail of id: {product_id}</h2>
    )
  }