import React from 'react';

const Header = ({ pseudo }) => {
    const formatPseudo = /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`;

    return (
        <header>
            <h1>Boîte à recettes {formatPseudo}</h1>
        </header>
    )
}

export default Header;