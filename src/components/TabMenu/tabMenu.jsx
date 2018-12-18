import React from 'react';

import { Tab } from '../Tab/tab'

export const TabMenu = ({ themes, activeTab, onTabClick }) => {

    return (
        <div className='tab-menu'>
            {themes.map((tabItem, index) => {
                return (
                    <Tab tabItem={tabItem} activeTab={activeTab} index={index} onTabClick={onTabClick} key={index} />
                )
            })}
        </div>
    )
};