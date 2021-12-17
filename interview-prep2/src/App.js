import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const api = 'https://dog.ceo/api/breeds/list/all'
  const [ breeds, setBreeds ] = useState([])

  useEffect(() => {
      fetch(api)
      .then(resp => resp.json())
      .then(data=>setBreeds(Object.keys(data.message)))
  }, [])

  console.log(breeds)

  const renderAllDogs = breeds.map(breed => <li key={breed}>{breed}</li>)

  return (
    
     <ul>
       {renderAllDogs}
     </ul>
  );
}

export default App;
