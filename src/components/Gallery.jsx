import React, { useEffect, useState } from 'react';
import Tour from './TourCard';

const Gallery = ({ tours, setTours, onRemove }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    //Fetching data from the link 
    const url = 'https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project';  //Comment: This section with const url and the link was helped with copilot. 

    
    //Comment: Followed bonus tip for adding error handling. Lead to error in constant loading / Used Copilot for certain sections of the .then and .catch
    useEffect(() => { //useEffect to call the API
        setLoading(true); // Ensure loading starts when the fetch begins
        fetch("https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setTours(data); 
                setLoading(false); 
            })
            .catch((error) => {
                console.error("Fetch error:", error);
                setError(true); 
                setLoading(false); 
            });
    }, [setTours]);

    if (loading) { //Loading returns "Loading..." 
        return <p>Loading...</p>;
    }

    if (error) { //Error returns "Something went wrong. Please try again later."
        return <p>Something went wrong. Please try again later.</p>;
    }

    return ( //Render each tour with map() and a unique key 
        <div>
            {tours.map((tour) => (
                <Tour key={tour.id} {...tour} onRemove={onRemove} />
            ))}
        </div>
    );
};

export default Gallery;