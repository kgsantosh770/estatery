import "./SearchBar.css";
import DownArrow from "../../assets/images/arrow-down.png";

export default function SearchBar() {
    return (
        <div className="search-bar">
            <h1>Search properties to rent</h1>
            <div className="search-input">
                <input type="search" name="search" id="searchBar" placeholder="Search with Search Bar" />
                <div className="search-dropdown">
                    <img src={DownArrow} alt="search-dropdown" aria-label="search-dropdown" />
                </div>
            </div>
        </div>
    )
}
