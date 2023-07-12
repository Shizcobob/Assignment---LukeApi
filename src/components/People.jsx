import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom';

const People = () => {

  const {id} = useParams();

  const [personData, setPersonData] = useState({});

  const [homeworld, setHomeworld] = useState({});

  const [homeworldData, setHomeworldData] = useState({});
  

  
  const getPersonData = () => {
    axios.get(`https://swapi.dev/api/people/${id}/`)
    .then(res=>{
      setPersonData(res.data)
      setHomeworld(res.data.homeworld);
    })
    .catch(err=>{console.log(err)
      setPersonData({});
    })
    }

  useEffect(getPersonData, [id])

  useEffect(() => {
    if (homeworld) {
      getHomeworldData();
    }
  }, [homeworld]);



  const getHomeworldData = () => {
    axios.get(`${homeworld}`)
    .then(res=>{setHomeworldData(res.data)})
    .catch(err=>{console.log(err)})
    }
    
  function makeUrl(homeworldUrl) {
      let id = homeworldUrl.match(/\d+/g);
      return id ? id.map(Number) : [];
    }
    

  return (
    <div>
    {personData.name ? (
      <>
    <h1>{personData.name}</h1>
    <p>Height: {personData.height}</p>
      <p>Mass: {personData.mass}</p>
      <p>Hair Color: {personData.hair_color}</p>
      <p>Skin Color: {personData.skin_color}</p>
      <p>Homeworld: {homeworldData.name}</p> 
      <Link to={`/one/planets/${makeUrl(homeworld)}`}> {homeworldData.name}</Link>
      {/*  */}
      </>
    )
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

export default People