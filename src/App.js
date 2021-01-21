import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { API_KEY } from './constants';

function App() {

  const [data, setData] = useState([])

  // useEffect(() => {
  //   axios
  //   .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
  //   .then(res => setData(res.data))
  //   .catch(err => console.log(err))
  // }, [])

  //uncomment this to make api call


  return (
    <div className="App">
      <img src={data.url}></img>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
