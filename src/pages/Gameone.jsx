import React, { useState, useEffect} from "react";
import ImageMapper from "react-image-mapper";
import risque1 from '../assets/risque1.png';
import Circle from "./Circle";
import './Gameone.css'

function Gameone() {
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
    coords: [205, 183, 10],
    href: "https://media.giphy.com/media/3oEjHZFzgi0u3Lwozm/giphy.gif"
  },
  {
    id: 2,
    shape: "circle",
    coords: [187, 287, 10],
    href: "https://media.giphy.com/media/l2Je4zlfxF6z0IWZi/giphy.gif"
  },
  {
    id: 3,
    shape: "circle",
    coords: [180, 240, 10],
    href: "https://media.giphy.com/media/YPBvdXHxANHHi/giphy.gif"

  },
  {
    id: 4,
    shape: "circle",
    coords: [202, 149, 10],
    href: "https://media.giphy.com/media/RLVfdugclMsm0DAyO5/giphy.gif"

  },
  {
    id: 5,
    shape: "circle",
    coords: [225, 150, 10],
    href: "https://media.giphy.com/media/26tk0uclMbXSlyQik/giphy.gif"

  }
  ,
  {
    id: 6,
    shape: "circle",
    coords: [315, 350, 15],
    href: "https://media.giphy.com/media/RJaUOmpBQAoE4RuWnj/giphy.gif"

  }]

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className='container'>
      <ImageMapper src={risque1} />
      </div> 
      <div className='Mirroir'>
        {array.map((item) => (
        <Circle key={item.id}item={item}/>
      ))}</div>
      <pre>Click once, click twice, three times a click</pre>
    </div>
  );
}
export default Gameone;