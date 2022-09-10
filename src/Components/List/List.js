import {useState} from 'react';
import Navbar from "../Navbar/Navbar";
// import pudding from "../../Data/Pudding.js"
// import vegan from "../../Data/Vegan.js"
import indianRecipe from '../../Data/IndianRecipe.js';
import indian from "../../Data/Indian.js";
import "./List.css"
export default function List() {
    const [isHovering, setIsHovering] = useState(false);
    const [hoveredRecipe, setHoveredRecipe] = useState("")

    const handleMouseOver = (event) => {
        setIsHovering(true);
        setHoveredRecipe(event.target.innerText)
        console.log('hovering')
      };
      console.log(hoveredRecipe)
    
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
           {/* {isHovering && ( */}
           {/* <div className="right"> 
          <p>Working</p>
            <h2>{id}</h2> 
          </div> */}
        
        {/* } */}
            <img alt={title} src={image} />
            <br />
            <br />
          </div>
        );
      });

      const recipeInfo = (indianRecipe, hoveredRecipe) =>
      indianRecipe.map((item) => {
          console.log(item)
          console.log(item.title)
          console.log(hoveredRecipe)
          if (hoveredRecipe === item.title) {
            console.log(hoveredRecipe)
              return (
                  <>
                  <div key={item.id}>
                  {item.title}
                  <br />
                  Gluten Free: {item.glutenFree.toString()}
                  <br />
                  Vegan: {item.vegan.toString()}
                  </div>
                  </>
              )
          } else {
              return null
          }
      })
  
return (
      <><Navbar />
      <div className="container">
      <div className="left">
        {renderRecipes(indian)}
    </div>
    <div className="right">
    {recipeInfo(indianRecipe, hoveredRecipe)}
    </div>
      </div>
    </>
    );
  }