import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function MenuRestaurant() {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/articles`)
            .then((response) => {
                setArticles(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                console.error(error);
            })
    }, []);

    return (
        <div>
            <h1>Notre carte</h1>
            <hr />
            <div className='resto-menu-container'>
                {articles.map((article) => (
                    <div className='article-container'>
                        <h2>{article.title}</h2>
                        <p>
                            {article.description}
                        </p>
                        <h3>
                            {article.price} €
                        </h3>
                        <hr className='hr-white' />
                    </div>
                ))}
                <br />
                <br />
                <br />
                <br />
            </div>
        </div>
    );
}
