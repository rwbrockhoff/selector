import React from "react";
import "./Card.css";

const Card = ({id, name, email}) => {
    return (
       <div className="card-container">
            <img className="user-avatar" src={`https://robohash.org/${id}?size=100x100`} alt="user avatar"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
       </div>
    )
}

export default Card;