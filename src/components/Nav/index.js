import React from 'react';

function Nav(props) {
    const tabs = ['Contact', 'Resume', 'Portfolio', 'About Me']
return (
<header className="header-wrapper">
    <ul>
        {tabs.map(tab => (
        <li key={tab}>
            <a
            href={'#' + tab}
            onClick={() => props.setCurrentTab(tab)}
            className="tab"
            >
            {tab}
            </a>
        </li>
    ))}
    <li className="title">
        <h1>Carolina</h1>
        </li> 
    </ul>
</header>
);
}

export default Nav;

