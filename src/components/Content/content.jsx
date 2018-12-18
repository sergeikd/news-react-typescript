import React from 'react';

export const Content = ({ content }) => {

    return (
        <ul className="news-list">
            {content.map((newsItem, index) => {
                return (
                    <li key={index} className="news-item">
                        <img src={newsItem.urlToImage} alt={newsItem.title}></img>
                        <label>{newsItem.title}</label>
                        <span>{newsItem.description}</span>
                    </li>
                )
            })}
        </ul>
    )
};