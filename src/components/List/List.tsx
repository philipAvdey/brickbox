import { Set } from "../../Set";
import "../List/List.scss";
import WishlistItem from "../Wishlist Item/WishlistItem";
import { motion } from "framer-motion";

interface Props {
  sets: Set[];
  handleClearWishlist: () => void;
  handleDeleteItem: (set: Set) => void;
}

const List = (props: Props) => {
  return (
    <div className="list">
      {props.sets.length != 0 && (
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={props.handleClearWishlist}
          className="list_clear-wishlist"
        >
          Clear Wishlist
        </motion.button>
      )}
      <div className="list_container">
        {props.sets.map((set) => {
          return (
            <WishlistItem
              key={`${set.name}-${set.set_num}`}
              handleDeleteItem={props.handleDeleteItem}
              inSearchbar={false}
              set={set}
              handleToWishList={() => {}}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
