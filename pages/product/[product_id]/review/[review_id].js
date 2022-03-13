import { useRouter } from "next/router"

export default function ReviewDetail() {
    const router = useRouter();
    const {product_id, review_id} = router.query;
    return (
      <h2>Review Detail of id: {review_id} of Product id: {product_id}</h2>
    )
  }