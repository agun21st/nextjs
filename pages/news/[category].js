

function ArticleListByCategory( { articles, category } ) {
  return (
    <>
        <h1>News Category is <i>{category}</i></h1>
        <div>
            {
                articles.map(article => {
                    return (
                        <div key={article.id}>
                            <h2>
                                {article.id} {article.title}
                            </h2>
                            <p>{article.description}</p>
                            <hr  />
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default ArticleListByCategory

export async function getServerSideProps(context)
{
    const { params, req, res, query } = context
    console.log(query)
    console.log(req.headers.cookie)
    res.setHeader('Set-Cookie', ['_token=flkjslfjsfjsk'])
    const { category } = params
    const response = await fetch(`http://localhost:4000/news?category=${category}`)
    const data =  await response.json();

    console.log(`Pre-rendering News Articles for Category ${category}`)

    return {
        props: {
            articles: data,
            category,
        },
    }
}