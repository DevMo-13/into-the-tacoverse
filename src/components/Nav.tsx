// Component for the navbar

import React from 'react';

function Nav() {
    return (
        <>
            <nav>
                <a
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="homepage"
                >
                    <h1 className="title">Into the Tacoverse</h1>
                </a>
            </nav>
        </>
    );
}

export default Nav;
