import Link from "next/link"
import Head from "next/head"
export default function index() {
  return (
    <>
        <Head>
            <title>Product</title>
        </Head>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/product/1">
          <a>
            <h2>Product 1</h2>
          </a>
        </Link>
        <Link href="/product/2" replace>
          <a>
          <h2>Product 2</h2>
          </a>
        </Link>
        <Link href="/product/3">
          <a><h2>Product 3</h2></a>
        </Link>
    </>
  )
}
