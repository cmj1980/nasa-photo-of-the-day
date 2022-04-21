import React, { useState, useEffect} from "react";
import axios from 'axios';

import "./App.css";

import NasaPhoto from "./Componets/NasaPhoto";

function App() {
  const [data, setData] = useState();

  useEffect(() =>{
  axios.get('https://api.nasa.gov/planetary/apod?api_key=mArKb0BuCQrtX2vtRkTwr2EU3TdX6cZ4tvPnEzfr') 
    .then(res =>{
      //console.log(res)
      setData(res.data);
    })
    .catch(err => console.error(err));
  }, []);
  return (
    <div className="App">
     { data && <NasaPhoto photo={data} /> }
    </div>
  );
}
 

export default App;








