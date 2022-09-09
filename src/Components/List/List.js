import {useState} from 'react';
import Navbar from "../Navbar/Navbar";
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
          <div key={id}>
          <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h2>{title}</h2>
          </div>
          {isHovering && (
          <div>
            <h2>Only visible when hovering div</h2>
          </div>
        )}
            <img alt={title} src={image} />
          </div>
        );
      });
  

return (
      <><Navbar /><div>
        {renderRecipes(indian)}
        {isHovering && (
          <div>
            <h2>Only visible when hovering div</h2>
          </div>
        )}
    </div></>
    );
  }