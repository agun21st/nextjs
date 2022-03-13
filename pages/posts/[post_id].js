
import { useRouter } from "next/router"

export default function PostDetails( {post} ) {

  const router = useRouter()

  if(router.isFallback) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
        <h2>{post.id}) {post.title}</h2>
        <p>{post.body}</p>

    </div>
  )
}

export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()

  // const paths = data.map(post => {
  //   return {
  //     params: {
  //       post_id: `${post.id}`
  //     }
  //   }
  // })
  return {
      paths: [
          {
              params: { post_id: '1'},
          },
          {
              params: { post_id: '2'},
          },
          {
              params: { post_id: '3'},
          },
      ],
      // paths,
      fallback: true,
  }
}

export async function getStaticProps(context) {
    const { params } = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.post_id}`)

    const data = await response.json()

    if(!data.id){
      return {
        notFound: true,
      }
    }

    console.log(`Gerating page for /posts/${params.post_id}`);

    return {
        props: {
            post: data
        }
    }
}