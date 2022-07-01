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
            <div className='resto-menu-container'>
                {articles.map((article) => (
                    console.log(article)

                ))}
            </div>
        </div>
    );
}
