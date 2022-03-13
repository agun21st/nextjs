
import Link from 'next/link'

function NewsArticlesList( {articles} ) {
  return (
    <div>
        <h1>List of News Articles</h1>
        <div>
            {
                articles.map(article => {
                    return (
                        <div key={article.id}>
                            <Link href={`/news/${article.category}`}>
                                <a><h2>{article.id} {article.title} | {article.category}</h2></a>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default NewsArticlesList

export async function getServerSideProps(){
    const res = await fetch('http://localhost:4000/news');
    const data = await res.json();
    console.log('Pre-rendering NewsArticleList')
    return {
        props: {
            articles: data,
        }
    }
}