import React from 'react';
import '../stylings/Card.css'

function Card(props) {
    return (
        <div className= "card_container">
            <img className="card_img" src={props.card_image} alt="Card_image"/>
            <div className="card_content">
            <h3 className="card_title">{props.card_title}</h3>
            <h6 className="card_name">{props.card_name}</h6>
            </div>
        </div>
    )
}

export default Card
