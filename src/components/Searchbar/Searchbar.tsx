import "./Searchbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import ListItem from "../List Item/ListItem";
import { Set } from "../../Set";

interface Props {
  placeholder: string;
  data: Set[];
  handleAddToWishlist: (set: Set) => void;
  wishlist: Set[];
}

const Searchbar = (props: Props) => {
  const [filteredData, setFilteredData] = useState<Array<Set>>([]);
  const [inputText, setInputText] = useState("");
  const [entriesShown, setEntriesShown] = useState(10);

  const clearSearch = () => {
    setFilteredData([]);
    setInputText("");
  };

  const handleFilter = (event: { target: { value: string } }) => {
    setEntriesShown(10);
    const searchWord = event.target.value;
    setInputText(searchWord);
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      const newFilter = props.data.filter((value) => {
        return (
          value.name.toLowerCase().includes(searchWord.toLowerCase()) ||
          value.set_num.slice(0, value.set_num.length - 2) === searchWord
        );
      });
      setFilteredData(newFilter);
    }
  };

  const handleShowMore = () => {
    if (entriesShown < filteredData.length) {
      setEntriesShown(entriesShown + 10);
    }
  };

  return (
    <div className="searchbar">
      <div className="searchbar_inputs">
        <input
          className={
            `input-` + (filteredData.length === 0 ? "rounded" : "not-rounded")
          }
          value={inputText}
          type="text"
          placeholder={props.placeholder}
          onChange={handleFilter}
        ></input>
        <div
          className={`searchbar_inputs_search-icon search-icon-${
            filteredData.length === 0 ? "rounded" : "not-rounded"
          }`}
        >
          {inputText === "" ? (
            <SearchIcon onClick={clearSearch} />
          ) : (
            <CloseIcon id="close-icon" onClick={clearSearch} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="searchbar_result">
          {filteredData.slice(0, entriesShown).map((item, index) => {
            return (
              <ListItem
                inSearchbar={true}
                key={`${item.name}-${index}`}
                set={item}
                handleToWishList={props.handleAddToWishlist}
              />
            );
          })}
          {entriesShown < filteredData.length && (
            <div className="searchbar_result_show-more">
              <p onClick={handleShowMore}>Show More</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
