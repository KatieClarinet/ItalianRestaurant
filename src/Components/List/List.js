import Navbar from "../Navbar/Navbar";
// import pudding from "../../Data/Pudding.js"
// import vegan from "../../Data/Vegan.js"
import indian from "../../Data/Indian.js";

export default function List() {



    const renderRecipes = (indian) =>
    indian.map((item) => {
        const { id, title, image } = item;
        return (
          <div key={id}>
            <h2>{title}</h2>
            <img alt={title} src={image} />
          </div>
        );
      });
  

return (
      <><Navbar /><div>
        {renderRecipes(indian)}
    </div></>
    );
  }