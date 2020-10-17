import React from 'react';

function Nav(props) {
    const tabs = ['About', 'Portfolio', 'Resume', 'Contact']
return (
<header>
    <ul>
    {tabs.map(tab => (
        <li key={tab}>
            <a
            href={'#' + tab}
            onClick={() => props.setCurrentTab(tab)}
            >
            {tab}
            </a>
        </li>
    ))}

    </ul>

</header>
  );
}

export default Nav;

