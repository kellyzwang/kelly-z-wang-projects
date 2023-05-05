import React from 'react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return(
        <div className='footer'>
        <footer>
                <p>&copy; KELLY Z WANG {currentYear}</p>
        </footer>
        </div>
    );
}