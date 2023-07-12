import './App.css';
import {Route, Routes, Link} from 'react-router-dom'
import {useState} from 'react'
import Search from './components/Search';
import Planets from './components/Planet';
import People from './components/People';
import Starships from './components/Starships';

const App = () => {

  return (
    <div className="App">
      <h1>Star Wars</h1>

    <Search />

      <Routes>
        <Route path='/' element={<p>Home</p>} />
        <Route path="/one/people/:id/" element={<People />} />
        <Route path="/one/planets/:id/" element={<Planets />} />
        <Route path="/one/starships/:id/" element={<Starships />} />
      </Routes>
    </div>
  );
};

export default App;




