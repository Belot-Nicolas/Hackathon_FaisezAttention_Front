import React, { useState, useEffect} from "react";
import ImageMapper from "react-image-mapper";
import imggame from '../assets/img-game.jpeg';
import Circletwo from "./Circletwo";
import './Gametwo.css'

function Gametwo() {
  const [hoveredArea, setHoveredArea] = useState(null);
  const [mapAreas, setMapAreas] = useState({
    name: "my-map",
    areas: [
      {
        id: 1,
    shape: "circle",
    coords: [125, 257, 10],
    preFillColor: "blue",
    href: "https://media.giphy.com/media/r00LEeXVOt0xG/giphy.gif"
  },
  {
    id: 2,
    shape: "circle",
    coords: [199, 538, 10],
    preFillColor: "green",
    href: "https://media.giphy.com/media/3oKIPwoeGErMmaI43S/giphy.gif"
  },
  {
    id: 3,
    shape: "circle",
    coords: [598, 43, 10],
    preFillColor: "yellow",
    href: "https://media.giphy.com/media/40dKW6YzxEAvAQWO19/giphy.gif"

  },
  {
    id: 4,
    shape: "circle",
    coords: [739, 532, 10],
    preFillColor: "pink",
    href: "https://media.giphy.com/media/xUOxfoOCQuKkcnSTEQ/giphy-downsized-large.gif"

  },
  {
    id: 5,
    shape: "circle",
    coords: [610, 394, 10],
    preFillColor: "red",
    href: "https://media.giphy.com/media/DOCfegc5Ybok0/giphy.gif"

  }
  ,
  {
    id: 6,
    shape: "circle",
    coords: [565, 370, 15],
    preFillColor: "black",
    href: "https://media.giphy.com/media/YI4eR3bHBCByM/giphy.gif"


      }
    ]
});
  const arraytwo = [{
    id: 1,
    shape: "circle",
    coords: [125, 257, 10],
    preFillColor: "blue",
    href: "https://media.giphy.com/media/r00LEeXVOt0xG/giphy.gif"
  },
  {
    id: 2,
    shape: "circle",
    coords: [199, 538, 10],
    preFillColor: "green",
    href: "https://media.giphy.com/media/3oKIPwoeGErMmaI43S/giphy.gif"
  },
  {
    id: 3,
    shape: "circle",
    coords: [598, 43, 10],
    preFillColor: "yellow",
    href: "https://media.giphy.com/media/40dKW6YzxEAvAQWO19/giphy.gif"

  },
  {
    id: 4,
    shape: "circle",
    coords: [739, 532, 10],
    preFillColor: "pink",
    href: "https://media.giphy.com/media/xUOxfoOCQuKkcnSTEQ/giphy-downsized-large.gif"

  },
  {
    id: 5,
    shape: "circle",
    coords: [610, 394, 10],
    preFillColor: "red",
    href: "https://media.giphy.com/media/DOCfegc5Ybok0/giphy.gif"

  }
  ,
  {
    id: 6,
    shape: "circle",
    coords: [565, 370, 15],
    preFillColor: "black",
    href: "https://media.giphy.com/media/YI4eR3bHBCByM/giphy.gif"

  }]

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className='container'>
      <ImageMapper src={imggame} />
      </div> 
      <div className='Mirroirtwo'>
        {arraytwo.map((item) => (
        <Circletwo key={item.id}item={item}/>
      ))}</div>
      <pre>Click once, click twice, three times a click</pre>
    </div>
  );
}
export default Gametwo;
