import "./Landing.scss";
import Searchbar from "../Searchbar/Searchbar";
import List from "../List/List";
import sets from "../../assets/sets.json";
import { Set } from "../../Set";
import { useState } from "react";

function Landing() {
  const [wishlist, setWishlist] = useState<Set[]>([]);

  const handleAddToWishlist = (set: Set) => {
    if (
      !(set === null || typeof set === "undefined") &&
      wishlist.indexOf(set) !== -1
    ) {
      alert("You have already put this set into your wishlist!");
    } else {
      setWishlist([...wishlist, set]);
    }
  };

  const handleClearWishlist = () => {
    setWishlist([]);
  };

  const handleDeleteItem = (set: Set) => {
    setWishlist(wishlist.filter((item) => item.set_num !== set.set_num));
  };

  return (
    <div className="landing">
      <div className="landing_header">
        <h1>Welcome to Brickbox</h1>
        <h2>Add LEGO sets to your wishlist!</h2>
      </div>

      <div className="landing_main-div">
        <div className="landing_div">
          <Searchbar
            placeholder="Search for a LEGO set by name or number!"
            data={sets}
            wishlist={wishlist}
            handleAddToWishlist={handleAddToWishlist}
          />
        </div>
        <div className="landing_div">
          <List
            sets={wishlist}
            handleClearWishlist={handleClearWishlist}
            handleDeleteItem={handleDeleteItem}
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
