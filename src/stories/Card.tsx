

import React from 'react';

import './Card.css';



interface CardProps {
title:string | undefined,
body:string | undefined,
card:string,
backgroundColor?: string;
cardbody:string,
cardtitle:string,
}

export const Card = ({title,body,cardbody,cardtitle,card,backgroundColor, ...props}:CardProps) => (


    <div className={[`${card}`, ].join(' ')} {...props}  style={{ backgroundColor }}>
    <div className={[`${cardbody}`, ].join(' ')} {...props}>
        <h2 className={[`${cardtitle}`, ].join(' ')} {...props}>{title}</h2>
        <p>state:{body}</p>
    </div>
</div>

);
