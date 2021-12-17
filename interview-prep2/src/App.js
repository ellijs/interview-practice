import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const api = 'https://dog.ceo/api/breeds/list/all'
  const [ breeds, setBreeds ] = useState([])
  const [ search, setSearch ] = useState('')

  useEffect(() => {
      fetch(api)
      .then(resp => resp.json())
      .then(data=>setBreeds(Object.keys(data.message)))
  }, [])

  console.log(search)

  const renderAllDogs = breeds.map(breed => <li key={breed}>{breed}</li>)

  return (
    <>
    <form>
      <label>Enter Dog Breed</label>
      <input onChange={(e)=>setSearch(e.target.value)} placeholder='Dog breed here...'></input>
      <button>Search</button>
    </form>

     <ul className='dog-list'>
       {renderAllDogs}
     </ul>
     </>
  );
}

export default App;
