import {useState} from 'react';
import Navbar from "../Navbar/Navbar";
import "./List.css"
// import pudding from "../../Data/Pudding.js"
// import vegan from "../../Data/Vegan.js"
import indian from "../../Data/Indian.js";

export default function List() {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
        console.log('hovering')
      };
    
      const handleMouseOut = () => {
        setIsHovering(false);
      };

    const renderRecipes = (indian) =>
    indian.map((item) => {
        const { id, title, image } = item;
        return (
          <div key={id} >
          <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
            <h2>{title}</h2>
          </div>

          {isHovering && (
          <div className="right">
          <p>Working</p>
            <h2>{id}</h2>
          </div>
        )}
            <img alt={title} src={image} />
            <br />
            <br />
          </div>
        );
      });
  

return (
      <><Navbar />
      <div className="container">

      <div className="left">
        {renderRecipes(indian)}

    </div>
      </div>
    </>
    );
  }