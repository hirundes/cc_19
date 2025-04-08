import { useState } from 'react'
import Gallery from './components/Gallery'


function App()  {
  const [tours, setTours] = useState([]) //Holds state for all tours.

  const removeTour = (id) => { //Filters the tour out 
    const updatedTours = tours.filter((tour) => tour.id !== id)
    setTours(updatedTours)
  }

  return ( //Renders the gallery component and passes state and handlers to children
    <main>
      <h1>Our Tours</h1>
      <Gallery tours={tours} setTours={setTours} onRemove={removeTour} />
    </main> 
  )
}

export default App  


