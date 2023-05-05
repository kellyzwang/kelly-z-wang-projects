import React from 'react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return(
        <div className='footer'>
        <footer>
                <p>Developed by KELLY Z WANG {currentYear} &#x1F497;</p>
        </footer>
        </div>
    );
}