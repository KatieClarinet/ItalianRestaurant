import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Modal from "../Modal/Modal";
import indianRecipe from "../../Data/IndianRecipe.js";
import indian from "../../Data/Indian.js";
import BasketModal from "../BasketModal/BasketModal.js";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function Menu() {
    const [clicked, setClicked] = useState(false);
    //state for when 'more info' is clicked
    const [clickedItem, setClickedItem] = useState("");
    //equivalent to the to do list before items are added
    const [basketItems, setBasketItems] = useState("");

    //the items that we want to add
    const [addToBasket, setAddToBasket] = useState("");

    //more Info modal
    const handleClick = (event) => {
        console.log("handleClick")
        event.preventDefault();
        setClickedItem(event.target.value);
    };

    //add to basket button
    const handleSubmit = async (event) => {
        event.preventDefault();
        setAddToBasket(event.target.value);
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
    console.log(basketItems)
    console.log(addToBasket)

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

    const dietaryInfo = (indianRecipe) =>
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

    const handleClick2 = (event) => {
        setClicked(current => !current);
        console.log("handleclick2");
        console.log(clicked);
    };

    const renderBasket = (basketItems) => {
        // if (basketItems.length > 0) {
            console.log("from renderBasket clicked is true")
            console.log(basketItems)
            // basketItems.map((item) => {
                // console.log(item)
                if (clicked) {

                    return (
                        <>
                        <BasketModal
                        items={basketItems}
                        />
                    </>
                );
            }
            // });
            } 
            // else {
            //     return null;
        // }
    // };
    

    return (
        <>
            <Navbar />
            <button
                            type="submit"
                            className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            value={basketItems}
                            onClick={(event) => handleClick2(event)}
                        >
                            <span className="sr-only">Shopping Cart</span>
                            <ShoppingCartIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                            />
                        </button>
            <div>{dietaryInfo(indianRecipe, clickedItem)}</div>
            <div class="flex flex-row flex-wrap px-8 space-x-4 space-y-4">
                <div></div>
                {renderRecipes(indian)}
            </div>
            <div>{renderBasket(basketItems)}</div>
        </>
    );
}
