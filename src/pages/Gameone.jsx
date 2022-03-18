import React, { useState, useEffect } from "react";
import ImageMapper from "react-image-mapper";
import risque1 from '../assets/risque1.png';
import Timer from "../components/Timer";
import Circle from "./Circle";
import './Gameone.css'

function Gameone() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(!isVisible)
      console.log("coucou")
    }
    ,60000
    )
  }
  ,[]
  ) 

  const [hoveredArea, setHoveredArea] = useState(null);
  const [mapAreas, setMapAreas] = useState({
    name: "my-map",
    areas: [
      {
        id: 1,
        shape: "circle",
        coords: [210, 157, 10],
        href: "https://tenor.com/view/beaker-electrocuted-ahhh-gif-9589484"
      },
      {
        id: 2,
        shape: "circle",
        coords: [191, 297, 10],
        href: "https://youtube.com"
      },
      {
        id: 3,
        shape: "circle",
        coords: [187, 248, 10],
        href: "https://youtube.com"

      },
      {
        id: 4,
        shape: "circle",
        coords: [210, 193, 10],
        href: "https://youtube.com"

      },
      {
        id: 5,
        shape: "circle",
        coords: [230, 158, 10],
        href: "https://youtube.com"

      }
      ,
      {
        id: 6,
        shape: "circle",
        coords: [320, 360, 15],
        href: "https://tenor.com/view/drunk-night-party-drink-struggling-gif-16095490"

      }
    ]
});
/*useEffect(() => { 
  axios
  .get*/ 

  const array = [{
    id: 1,
    shape: "circle",
    coords: [295, 225, 10],
    href: "https://media.giphy.com/media/3oEjHZFzgi0u3Lwozm/giphy.gif"
  },
  {
    id: 2,
    shape: "circle",
    coords: [265, 370, 10],
    href: "https://media.giphy.com/media/l2Je4zlfxF6z0IWZi/giphy.gif"
  },
  {
    id: 3,
    shape: "circle",
    coords: [260, 300, 10],
    href: "https://media.giphy.com/media/YPBvdXHxANHHi/giphy.gif"

  },
  {
    id: 4,
    shape: "circle",
    coords: [290, 190, 10],
    href: "https://media.giphy.com/media/RLVfdugclMsm0DAyO5/giphy.gif"

  },
  {
    id: 5,
    shape: "circle",
    coords: [320, 190, 10],
    href: "https://media.giphy.com/media/26tk0uclMbXSlyQik/giphy.gif"

  }
  ,
  {
    id: 6,
    shape: "circle",
    coords: [430, 450, 15],
    href: "https://media.giphy.com/media/RJaUOmpBQAoE4RuWnj/giphy.gif"

  }]

  return (
    <div className="App">
      <h1 className="error_game">Jeu des 7 erreurs</h1>
      <div className='container'>
        <Timer />
      <div className="game-container">
        <ImageMapper className='pic' src={risque1} />
      </div>
      </div> 
      
      <div className='Mirroir'>
        {array.map((item) => (
        <Circle key={item.id}item={item}/>
      ))}
      
      </div>
      <div className="the_end">
      {isVisible && <div>Temps écoulé ! </div>}
      </div>
    </div>
  )}
export default Gameone;
