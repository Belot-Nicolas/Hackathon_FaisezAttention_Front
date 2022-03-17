import React, { useState, useEffect } from "react";
import ImageMapper from "react-image-mapper";
import risque1 from '../pictures/risque1.png'

export default function Gameone() {
  const [mapAreas, setMapAreas] = useState({
    name: "my-map",
    areas: [
      { 
        id: 1, 
        shape: "circle", 
        coords: [210, 157, 10], 
        preFillColor: "blue" ,
      },
      {
        id: 2,
        shape: "circle",
        coords: [191, 297, 10], 
        preFillColor: "red" ,
        src: "https://youtube.com"
      },
      {
        id: 3,
        shape: "circle",
        coords: [187, 248, 10],
        preFillColor: "green",
        href: "https://youtube.com"

      },
      {
        id: 4,
        shape: "circle",
        coords: [210, 193, 10],
        preFillColor: "yellow",
        href: "https://youtube.com",

      },
      {
        id: 5,
        shape: "circle",
        coords: [230, 158, 10],
        preFillColor: "pink",
        href: "https://youtube.com"

      }
      ,
      {
        id: 6,
        shape: "circle",
        coords: [320, 360, 15],
        preFillColor: "black",
        href: "https://c.tenor.com/qYsKp3jyaSUAAAAd/drunk-night.gif"

      }
    ]
  })
  return (
    <div className="Gameone">
      <h1>Trouver l'erreur...</h1>
      <h2>1 a plusieur erreurs, trouver les avant que le temps soit ecrouler</h2>
      <ImageMapper className="Game" src={risque1} map={mapAreas}
      />
      </div>
  );
}

