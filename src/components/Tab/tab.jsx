import React from 'react';

export const Tab = ({ tabItem, activeTab, index, onTabClick }) => {

    return (
        <button className={activeTab === index ? 'tab active' : 'tab'}
            key={index}
            onClick={() => onTabClick(index)}>
            {tabItem}
        </button>
    )
};