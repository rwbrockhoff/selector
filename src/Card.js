import React from "react";

const Card = ({id, name, email}) => {
    return (
       <div>
            <img src={`https://robohash.org/${id}?size=100x100`} alt="user avatar"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
       </div>
    )
}

export default Card;