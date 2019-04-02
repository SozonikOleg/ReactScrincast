import React from 'react'
import Article from '../Article/Article'
import NewsBlock from '../News/NewsBlock'
import FooterBlock from '../FooterBlock/FooterBlock'
import NavBlock from '../Nav Block/NavBlock'
import './style.css'

export default function ArticleList ({ articles }) {
    const articleElements = articles.map(article =>
        <li key = {article.id} className="article-list__li">
            <Article article = {article}/>
        </li>
        )
    return(
        <div>
            <NavBlock/>
            <ul>
                {articleElements}
            </ul>
            <NewsBlock/>
            <FooterBlock/>
        </div>
    )
}