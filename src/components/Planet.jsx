import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

const Planets = () => {

  const {id} = useParams();

  const [planetsData, setPlanetsData] = useState({});

  const getPlanetsData = () => {
    axios.get(`https://swapi.dev/api/planets/${id}/`)
    .then(res=>setPlanetsData(res.data))
    .catch(err=>{console.log(err)
      setPlanetsData({});
      })
}


useEffect(getPlanetsData, [id])

  return (
    <div>
  
    {planetsData.name ? (
      <>
    <h1>{planetsData.name}</h1>
    <p>Climate: {planetsData.climate}</p>
      <p>Terrain: {planetsData.terrain}</p>
      <p>Surface Water: {planetsData.surface_water}</p>
      <p>Population: {planetsData.population}</p>
      </>)
  :
    <div id="driodsImg">
      <h1>Loading....</h1>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTicfSo2T-W6ltZ4e9PUz-cE0eUcBvfF50R1A&usqp=CAU" alt="error"></img>
      <h2>Or, these are not the driods you are looking for</h2>
    </div>
    }
    </div>
  )
}

export default Planets