import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'

const Search = () => {

    const [dropdown, setDropdown] = useState('people');

    const handleDropdownChange = (e) => {
      setDropdown(e.target.value);
    };

    const [queryId, setQueryId] = useState('');

    const doSearch = () => {
        navigator(`/one/${dropdown}/${queryId}/`)
    }

    const navigator = useNavigate()

  return (
    <div>  

    <p>Search for:</p>
    <label>Person or Planet?: </label>
    <select name="dropdown" id="dropdown" value={dropdown} onChange={handleDropdownChange}>
        <option value="people">People</option>
        <option value="planets">Planets</option>
        <option value="starships">Starships</option>
    </select>

    <label>ID:</label>
    <input type="number" onChange={(e=>setQueryId(e.target.value))} value={queryId}></input>


    <button onClick={doSearch}>🔎</button>

    </div>
  )
}

export default Search
