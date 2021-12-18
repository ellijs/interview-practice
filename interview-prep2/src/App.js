import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import RenderDogDetail from "./RenderDogDetail";

function App() {
  const api = "https://dog.ceo/api/breeds/list/all";
  const [breeds, setBreeds] = useState([]);
  const [search, setSearch] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [detailedBreed, setDetailedBreed] = useState("");

  useEffect(() => {
    fetch(api)
      .then((resp) => resp.json())
      .then((data) => setBreeds(Object.keys(data.message)));
  }, []);

  const renderSearchItem = breeds.filter((breed) => breed.includes(search));

  const handleDogDetail = (breed) => {
    setDetailedBreed(breed);
    setIsSelected(!isSelected);
    setSearch("");
  };

  const renderAllDogs = renderSearchItem.map((breed) => (
    <li
      key={breed}
      onClick={() => handleDogDetail(breed)}
      style={{ cursor: "pointer" }}
    >
      {breed}
    </li>
  ));

  return (
    <>
      <form>
        <label>Enter Dog Breed</label>
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Dog breed here...'
        ></input>
        {isSelected ? (
          <button onClick={() => setIsSelected(!isSelected)}>
            Search NewBreed
          </button>
        ) : (
          <button onClick={handleDogDetail}>Search</button>
        )}
      </form>
      {isSelected ? (
        <RenderDogDetail detailedBreed={detailedBreed} />
      ) : (
        <ul className='dog-list'>{renderAllDogs}</ul>
      )}
    </>
  );
}

export default App;
