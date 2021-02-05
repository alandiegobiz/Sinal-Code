import React from 'react';

import './styles.css';

const CardStudy = (props) => {
    return (
        <article>
            <img src={props.image} alt={props.description}/>
            <h4>{props.children}</h4>
        </article>
    );
}

export default CardStudy;