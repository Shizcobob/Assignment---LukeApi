import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';


const Starships = () => {

    const{id} = useParams();

    const [starshipsData, setStarshipData] = useState({});

    const getStarshipsData = () => {
        axios.get(`https://swapi.dev/api/starships/${id}/`)
        .then(res=>setStarshipData(res.data))
        .catch(err=>{console.log(err)
        setStarshipData({});
        })
    }

    useEffect(getStarshipsData, [id])

    return (
        <div>
        {starshipsData.name ? (
          <>
        <h1>{starshipsData.name}</h1>
        <p>Manufacurer: {starshipsData.manufacturer}</p>
          <p>Price Tag: {starshipsData.cost_in_credits} credits</p>
          <p>crew: {starshipsData.crew}</p>
          <p>Passengers: {starshipsData.passengers}</p>
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
    
export default Starships