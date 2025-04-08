import React, { useEffect, useState } from 'react';
import Tour from './TourCard';

const Gallery = ({ tours, setTours, onRemove }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const url = 'https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project';  //Comment: This section with const url and the link was helped with copilot. 

    useEffect(() => {
        const fetchTours = async () => {
            try {
                setLoading(true);
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch tours');
                }
                const data = await response.json();
                setTours(data);
                setError(false);
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchTours();
    }, [setTours]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Something went wrong. Please try again later.</p>;
    }

    return (
        <div>
            {tours.map((tour) => (
                <Tour key={tour.id} {...tour} onRemove={onRemove} />
            ))}
        </div>
    );
};

export default Gallery;