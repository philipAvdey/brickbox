import { Set } from "../../Set";
import ListItem from "../List Item/ListItem";
import "../Wishlist Item/WishlistItem.scss";
import CloseIcon from "@mui/icons-material/Close";
import LegoIcon from "../../assets/lego_logo.svg";
import BricklinkIcon from "../../assets/bl_logo.svg";
import { Tooltip } from "react-tooltip";
import { motion } from "framer-motion";

interface Props {
  set: Set;
  handleToWishList: (set: Set) => void;
  handleDeleteItem: (set: Set) => void;
  inSearchbar: boolean;
}

const WishlistItem = (props: Props) => {
  return (
    <div className="wishlist-item">
      <ListItem
        set={props.set}
        handleToWishList={props.handleToWishList}
        inSearchbar={props.inSearchbar}
      />
      <div className="wishlist-item_shopping-and-close">
        <div className="wishlist-item_shopping">
          <a
            rel="external"
            target="_blank"
            href={`https://www.bricklink.com/v2/catalog/catalogitem.page?S=${props.set.set_num}`}
            data-tooltip-id={`bl-tooltip-${props.set.set_num}`}
            data-tooltip-content="Bricklink"
          >
            <img src={BricklinkIcon} alt="lego icon" />
            <Tooltip
              id={`bl-tooltip-${props.set.set_num}`}
              className="tooltip"
            />
          </a>
          <a
            rel="external"
            target="_blank"
            href={`https://www.lego.com/en-au/product/${props.set.set_num.slice(
              0,
              props.set.set_num.length - 2
            )}`}
            data-tooltip-id={`lego-tooltip-${props.set.set_num}`}
            data-tooltip-content="Lego Shop"
          >
            <img src={LegoIcon} alt="bricklink icon" />
            <Tooltip
              id={`lego-tooltip-${props.set.set_num}`}
              className="tooltip"
            />
          </a>
        </div>
        <div className="wishlist-item_delete">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => props.handleDeleteItem(props.set)}
            data-tooltip-id={`remove-item-tooltip-${props.set.set_num}`}
            data-tooltip-content="Remove Item"
          >
            <CloseIcon />
          </motion.button>
          <Tooltip
            id={`remove-item-tooltip-${props.set.set_num}`}
            className="tooltip"
          />
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
