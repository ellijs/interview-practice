import React, { useState, useEffect } from "react";

function RenderDogDetail({ detailedBreed }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/${detailedBreed}/images/random/3`)
      .then((resp) => resp.json())
      .then((data) => setImages(data.message));
  }, [detailedBreed]);

  const renderDogImages = images.map((image) => (
    <li key={image}>
      <img style={{ width: "200px" }} src={image} />
    </li>
  ));

  console.log(images);

  return <ul style={{ listStyle: "none" }}>{renderDogImages}</ul>;
}

export default RenderDogDetail;
