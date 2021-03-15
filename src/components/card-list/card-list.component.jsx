import React from 'react'

import './card-list.styles.css'
import {Card} from "../card/card.component";

export const CardList = (props) => {
    console.log({props});
    return (
        // Children are what you pass in between the brackets of our component that get called
        <div className="card-list">
            {
                props.monsters.map(monster => (
                    <Card key={monster.id} monster={monster}/>
                ))
            }
        </div>
    )
}
