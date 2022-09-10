import { useState } from "react";
import Navbar from "../Navbar/Navbar";
// import pudding from "../../Data/Pudding.js"
// import vegan from "../../Data/Vegan.js"
import indian from "../../Data/Indian.js";
import indianRecipe from "../../Data/IndianRecipe.js";
import "./List.css"

export default function List() {
    const [isHovering, setIsHovering] = useState(false);
    const [recipe, setRecipe] = useState("");
    // const [check, setCheck] = useState({})

    const handleMouseOver = (event) => {
        setIsHovering(true);
        setRecipe(event.target.innerText)
      };
console.log(recipe)
    const handleMouseOut = () => {
        setIsHovering(false);
        setRecipe(0)
    };

    const renderTitles = (indian) =>
    console.log("indian", indian)
        indian.map((item) => {
            const { id, title, image } = item;
            // console.log(item)
            return (
                <>
                    <div key={id}>
                        <div
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                        >
                            <h2>{title}</h2>
                         </div>
                         {/* {isHovering &&
                        displayRecipeDetails(indianRecipe)} */}

                        </div>

                        <img alt={title} src={image} />
                        <br />
                        <br />
                    
                </>
            );
        });

    // const renderRecipes = (indianRecipe, recipe) => {
    //   const result = Object.keys(indianRecipe).map(key => {
    //     return {[key]: indianRecipe[key]};
    //   });
    //   console.log("result", result)
    // }

    // const displayRecipeDetails = (indianRecipe) => {
    //   const check = (Object.values(indianRecipe)) 
    //   console.log('hovering')
    //    console.log("recipe", recipe)
    //   console.log("check", check)
    //   console.log("check0title", check[0].title)
    //   // check.map((item) => {
    //   //   return (
    //   //     <div>{item.title}</div>
    //   //   )

    //   // })
    //   console.log("state", check)
    // }


    return (
        <>
            <Navbar />
            <div className="container">
                <div className="left">{renderTitles(indian)}</div>
                <div className="right">
                         {/* {isHovering &&
                        displayRecipeDetails(indianRecipe)} */}

                        </div>
                 
            </div>
        </>
    );
}
