import React from "react";
import ImageMapper from "react-image-mapper";
import risque1 from "../pictures/risque1.png";


function Gameone() {
  const [mapAreas, setMapAreas] = useState({
    name: "my-map",
    areas: [
      {
        id: 1,
        shape: "circle",
        coords: [210, 157, 10],
        preFillColor: "blue",
        href: "https://tenor.com/view/beaker-electrocuted-ahhh-gif-9589484"
      },
      {
        id: 2,
        shape: "circle",
        coords: [191, 297, 10],
        preFillColor: "red",
        href: "https://youtube.com"
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
        href: "https://youtube.com"

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
        href: "https://tenor.com/view/drunk-night-party-drink-struggling-gif-16095490"

      }
    ]
  });

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <ImageMapper
        src={risque1}
        //onClick={area => getTipPosition(area)}
        /*onImageClick={handleUpdateMapArea}*/
        map={mapAreas}
      />
      <pre>On each click, circle should be position of the clicked</pre>
    </div>
  );
}
export default Gameone;




























/*function Gameone({ user, mediaId }) {
  const [tagPosition, setTagPosition] = useState(initialPosition);
  const imageWrapRef = createRef();
  const initialPosition = {
  x: "",
  y: "",
};
  
  const handleTagClick = (e) => {
    const { left, top } = imageWrapRef.current.getBoundingClientRect();
    const x = e.pageX - left;
    const y = e.pageY - top;
    setTagPosition((prev) => ({ ...prev, x, y }));
  };
  return (
        <div classname='main_pic'>
            <img src={risque1} alt='main-pic'/> 
    <div
      onClick={(e) => handleTagClick(e)}
      ref={imageWrapRef}>
      <div
        style={{
          left: `${tagPosition.x}px`,
          top: `${tagPosition.y}px`,
          zIndex: 2,
          padding: 10,
          position: "absolute",
       }}
       className="rounded-full flex text-lg">
           
       </div>
      <Gameone
        onLoad={handleLoadingComplete}
        className="bg-gray-300 w-full"
        alt=""
        src="URL"
        layout="responsive"
        width={700}
        height={800}
      />
      </div>
    </div>
  );
}

export default Gameone;*/
