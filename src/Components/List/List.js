import {useState} from 'react';
import Navbar from "../Navbar/Navbar";
// import pudding from "../../Data/Pudding.js"
// import vegan from "../../Data/Vegan.js"
import indianRecipe from '../../Data/IndianRecipe.js';
import indian from "../../Data/Indian.js";
export default function List() {
    const [isHovering, setIsHovering] = useState(false);
    const [hoveredRecipe, setHoveredRecipe] = useState("")

    const handleMouseOver = (event) => {
        setIsHovering(true);
        setHoveredRecipe(event.target.innerText)
        console.log('hovering')
      };
      // console.log(hoveredRecipe)
    
      const handleMouseOut = () => {
        setIsHovering(false);
      };
    const renderRecipes = (indian) =>
    indian.map((item) => {
        const { id, title, image } = item;
        return (
          // <div class="flex flex-wrap">
          <div key={id} class="max-w-sm rounded overflow-hidden shadow-lg">
            <img alt={title} src={image} class="w-full" />
          <div class="px-6 py-4"
          onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
            <div class="font-bold text-xl mb-2">{title}</div>
            <div class="text-gray-700 text-base">More info</div>
          </div>
            <div class="px-6 pt-4 pb-2">
            <button type="submit" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Add to basket</button>
            </div>
          </div>
          // </div>
        
        );
      });

      const recipeInfo = (indianRecipe, hoveredRecipe) =>
      indianRecipe.map((item) => {
          // console.log(item)
          // console.log(item.title)
          // console.log(hoveredRecipe)
          if (hoveredRecipe === item.title) {
            // console.log(hoveredRecipe)
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
      
      <div>
    {recipeInfo(indianRecipe, hoveredRecipe)}
    </div>
      <div class="flex flex-wrap px-8 space-x-4 space-y-4">
        {renderRecipes(indian)}
    </div>
    
      
    </>
    );
  }