import React, { useState } from "react";

const TourCard = ({ id, name, info, image, price, onRemove }) => {
    const [readMore, setReadMore] = useState(false);

    return ( //Receives props for id, name, info, price, and image. Displays it with Read More and Show Less toggle
        <article className="tour-card">
            <img src={image} alt={name} className="tour-image" />
            <div className="tour-info">
                <h2>{name}</h2>
                <h3>${price}</h3>
                <p>
                    {readMore ? info : `${info.substring(0, 200)}...`}
                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? "Show Less" : "Read More"}
                    </button>
                </p>
                <button className="remove-btn" onClick={() => onRemove(id)}>
                    Not Interested
                </button>
            </div>
        </article>
    ); //Button "Not Interested" which removes the tour an calls the onRemove(id).
};

export default TourCard;
