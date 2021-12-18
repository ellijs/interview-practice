import React, { useState, useEffect } from 'react';

function RenderDogDetail({detailedBreed}) {
    const [ images, setImages ] = useState([])


    useEffect(()=> {
        fetch(`https://dog.ceo/api/breed/${detailedBreed}/images/random/3`)
        .then(resp => resp.json())
        .then(data => setImages(data.message))
    }, [detailedBreed])



   console.log(images)

    return (
        <ul>

            
        </ul>
    );
}

export default RenderDogDetail;