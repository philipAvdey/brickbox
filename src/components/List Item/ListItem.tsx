import "../List Item/ListItem.scss";
import themes from "../../assets/themes.json";
import { Set } from "../../Set";
import { Tooltip } from "react-tooltip";

interface Props {
  set: Set;
  handleToWishList: (set: Set) => void;
  inSearchbar: boolean;
}

const ListItem = (props: Props) => {
  const { name, year, img_url, set_num } = props.set;
  const setThemeName =
    themes[themes.findIndex((e) => e.id === props.set.theme_id)].name;
  return (
    <div className="searchbar__list-item">
      <div className="searchbar__list-item_img">
        <img src={`${img_url}`} alt="Set picture"></img>
      </div>
      <div className="searchbar__list-item_info">
        {props.inSearchbar ? (
          <div>
            <p
              className="searchbar__list-item_info_add-to-list"
              onClick={() => props.handleToWishList(props.set)}
              data-tooltip-id={`add-to-list-tooltip-${props.set.set_num}`}
              data-tooltip-content="Add to Wishlist"
            >
              {`${name}`}
            </p>
          </div>
        ) : (
          <p>{`${name}`}</p>
        )}
        <Tooltip
          id={`add-to-list-tooltip-${props.set.set_num}`}
          className="tooltip"
        />
        <p className="searchbar__list-item_info_misc">
          {`No. ${set_num.slice(
            0,
            set_num.length - 2
          )}, ${year}, Theme: ${setThemeName}`}
        </p>
      </div>
    </div>
  );
};

export default ListItem;
