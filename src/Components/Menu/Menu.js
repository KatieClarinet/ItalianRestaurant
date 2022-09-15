import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Modal from "../Modal/Modal";
import indianRecipe from "../../Data/IndianRecipe.js";
import indian from "../../Data/Indian.js";



export default function Menu() {
    //state for when 'more info' is clicked
    const [clickedItem, setClickedItem] = useState("");
    //equivalent to the to do list before items are added
    const [basketItems, setBasketItems] = useState([
        {
            title: "test",
        },
        {
            title: "test",
        },
    ]);

    //the items that we want to add
    const [addToBasket, setAddToBasket] = useState("");

    //more Info modal
    const handleClick = (event) => {
        event.preventDefault();
        setClickedItem(event.target.value);
        
    };

    //add to basket button
    const handleSubmit = async (event) => {
        event.preventDefault();
        setAddToBasket(event.target.value);
        //  addItemToBasket(addToBasket)
    };
    console.log(addToBasket);
    console.log("basketItems", basketItems);

    useEffect(() => {
        const addItemToBasket = (addToBasket) => {
            let copy = [...basketItems];
            copy = [...copy, { title: addToBasket }];
            setBasketItems(copy);
            // console.log(setBasketItems)

        };
        addItemToBasket(addToBasket);
    }, [addToBasket]);
    console.log(basketItems);


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

                        <button
                            type="submit"
                            class="inline-block bg-emerald-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                            value={title}
                            onClick={(event) => handleSubmit(event)}
                        >
                            Add to basket
                        </button>
                    </div>
                </div>
            );
        });

    const dietaryInfo
     = (indianRecipe) =>
        indianRecipe.map((item) => {
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
            
            <div>{dietaryInfo
            (indianRecipe, clickedItem)}</div>
            <div class="flex flex-row flex-wrap px-8 space-x-4 space-y-4">
                <div></div>
                {renderRecipes(indian)}
            </div>
           
        </>
    );
}
