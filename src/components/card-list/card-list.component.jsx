import React from "react";
import { Card } from "./card/card.component";
import './card-list.styles.css'

// props.children : anything between the object tags
export const CardList = (props) => {
    console.log(props);
    return <div className="card-list">
                {props.monsters.map(monster =>(
                    <Card key={monster.id} monster={monster}></Card>
                ))}
            </div>;
}