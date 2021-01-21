import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { API_KEY } from '../constants';
import Info from './Info';
import Image from './Image';

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }, [])

  let image = 'https://cdn.discordapp.com/attachments/778726798502133811/801927064172888094/20210119_021305.jpg'
  return (
    <div className="App">
      <Image img={image}/*{data.url}*/></Image>
      <Info info={data}></Info>
    </div>
  );
}

export default App;
