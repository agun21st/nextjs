import Link from "next/link"
import {useRouter} from "next/router";
import Head from "next/head";

function Home() {
    const router = useRouter();
    const clickHandler = () => {
        console.log("Order placed successfully done");
        router.push('/product')
    }
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>
            <h1>Home Page</h1>
            <Link href="/blog">
                <a>Blog</a>
            </Link>
            <br />
            <br />
            <Link href="/users">
                <a>User List</a>
            </Link>
            <br />
            <br />
            <Link href="/posts">
                <a>Posts</a>
            </Link>
            <br />
            <br />
            <Link href="/news">
                <a>news</a>
            </Link>
            <br />
            <br />
            <Link href="/product">
                <a>Products</a>
            </Link>
            <br />
            <br />
            <Link href="/dashboard">
                <a>Dashboards</a>
            </Link>
            <br />
            <br />
            <button onClick={clickHandler}>
                Place Order
            </button>
        </div>
    )
}

export default Home