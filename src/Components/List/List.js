import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Modal from "../Modal/Modal";
import indianRecipe from "../../Data/IndianRecipe.js";
import indian from "../../Data/Indian.js";
export default function List() {
    let num = 0;
    const [clickedItem, setClickedItem] = useState("");
    // const [addToBasket, setAddToBasket] = useState([]);

    const handleClick = (event) => {
        setClickedItem(event.target.value);
    };
    console.log(clickedItem);

    // const addItemToBasket = (event) => {
    //     console.log('item added to basket')
    //     console.log(event.target.value)
    //     console.log(num++)
    //     setAddToBasket(num++)
        
    // };
    // console.log(addToBasket)

    const renderRecipes = (indian) =>
        indian.map((item) => {
            const { id, title, image } = item;
            return (
                <div
                    key={id}
                    class="max-w-xs rounded overflow-hidden shadow-lg"
                >
                    <img alt={title} src={image} class="w-full" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">{title}</div>
                        
                        <button
                            type="submit"
                            class="inline-block bg-emerald-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                            value={title}
                            onClick={(event) => handleClick(event)}
                        >
                            More info
                        </button>
                    {/* <div class="px-6 pt-4 pb-2"> */}
                        <button
                            type="submit"
                            class="inline-block bg-emerald-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                            value={title}
                            // onClick={(event) => addItemToBasket(event)}
                        >
                            Add to basket
                        </button>
                    </div>
                      
                    {/* </div> */}
                </div>
                // </div>
            );
        });

    const recipeInfo = (indianRecipe) =>
        indianRecipe.map((item) => {
            console.log(clickedItem);
            if (clickedItem === item.title) {
                return (
                    <>
                        <Modal
                            glutenFree={item.glutenFree.toString()}
                            vegan={item.vegan.toString()}
                        />
                    </>
                );
            } else {
                return null;
            }
        });

    return (
        <>
            <Navbar />
            <div>{recipeInfo(indianRecipe, clickedItem)}</div>
            <div class="flex flex-row flex-wrap px-8 space-x-4 space-y-4">
            <div></div>
                {renderRecipes(indian)}
            </div>
        </>
    );
}
