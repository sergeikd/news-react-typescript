import React from 'react';

import { ITab } from '../../interfaces/ITab'

export const Tab: React.SFC<ITab>  = ({ tabItem, activeTab, index, onTabClick }): JSX.Element => {
    return (
        <button className={activeTab === index ? 'tab active' : 'tab'}
            key={index}
            onClick={() => onTabClick(index)}>
            {tabItem}
        </button>
    )
};